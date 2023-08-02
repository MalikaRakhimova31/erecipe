function pad(n: number): string | number {
  return n < 10 ? `0${n}` : n;
}

export default function formatCodeExpireDuration(secs: number): string {
  const m: number = Math.floor(secs / 60);
  const s: number = Math.floor(secs - m * 60);
  return `${pad(m)}:${pad(s)}`;
}
