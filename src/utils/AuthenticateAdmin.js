export function isAdminLoggedIn() {
  return !!localStorage.getItem("admin");
}
