/* eslint-disable @typescript-eslint/restrict-template-expressions */
function base64urlencode(str: ArrayBuffer): string {
  const bytes = new Uint8Array(str);
  const regularArray = Array.from(bytes);
  // Convert the input string to base64url format
  return btoa(String.fromCharCode.apply(null, regularArray))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

async function sha256(plain: string): Promise<ArrayBuffer> {
  const encoder = new TextEncoder();
  const data = encoder.encode(plain);
  const crypto = await window.crypto.subtle.digest("SHA-256", data);

  return crypto;
}

async function kceChallengeFromVerifier(v: string): Promise<string> {
  const hashed = await sha256(v);
  return base64urlencode(hashed);
}

function generateRandomString(): string {
  const array = new Uint32Array(28);
  window.crypto.getRandomValues(array);
  return Array.from(array, (dec) => `0${dec.toString(16)}`.substr(-2)).join("");
}

async function redirectToSSO(): Promise<void> {
  // Generate and store a random "state" value
  const state = generateRandomString();
  localStorage.setItem("pkce_state", state);

  // Generate and store a new PKCE code_verifier (plaintext random secret)
  const codeVerifier = generateRandomString();
  localStorage.setItem("pkce_code_verifier", codeVerifier);

  // Hash and base64-urlencode the secret to use as the challenge
  const codeChallenge = kceChallengeFromVerifier(codeVerifier);

  // Build the authorization URL
  const url =
    `${import.meta.env.VITE_AUTH_URL}?response_type=code` +
    `&client_id=` +
    `${encodeURIComponent(import.meta.env.VITE_CLIENT_ID)}` +
    `&state=${encodeURIComponent(state)}&redirect_uri=${encodeURIComponent(
      `${import.meta.env.VITE_REDIRECT_URL}/auth/callback`,
    )}&code_challenge=${encodeURIComponent(
      await codeChallenge,
    )}&code_challenge_method=S256`;

  // Redirect to the authorization server
  window.location.href = url;
}

export default redirectToSSO;
