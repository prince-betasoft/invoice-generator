export default function ({ store, redirect, route }) {
  if (route.path === "/") {
    return redirect("/profile/dashboard");
  }
}
