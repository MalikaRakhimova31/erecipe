export default function getItem(key: string): string {
  const encodedKey = btoa(key);
  const encodedVal = localStorage.getItem(encodedKey);
  const decodedVal = atob(encodedVal ?? "");
  return decodedVal;
}
