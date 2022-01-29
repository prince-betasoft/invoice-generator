export default function ({ store, redirect, route }) {
  let conditions = {
    singedInAlready:
      store.getters["auth/isLoggedIn"] &&
      (route.name === "login" || route.name === "register"),
    notSignedIn: !store.getters["auth/isLoggedIn"],
  };

  if (conditions.singedInAlready) {
    return redirect("/profile/dashboard");
  }

  if (conditions.notSignedIn) {
    return redirect("/login");
  }
}
