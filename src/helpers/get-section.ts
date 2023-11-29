export default function getSection(): string {
  return window.location.pathname.split("/").at(1)?.split("?").at(0) ?? "";
}
