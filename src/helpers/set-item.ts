export default function setItem(key: string, value: string): void {
  const encodedKey = btoa(key);
  const encodedVal = btoa(value);
  localStorage.setItem(encodedKey, encodedVal);
}
