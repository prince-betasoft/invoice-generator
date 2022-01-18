export default function ({ store, redirect, route }) {
  let conditions = {
    singedInAlready:
      store.getters["auth/isLoggedIn"] &&
      (route.name === "login" ||
        route.name === "register" ||
        route.name === "reset"),
    notSignedIn: !store.getters["auth/isLoggedIn"] && isAdminRoute(route),
    landingPage: route.name === "index",
  };

  if (conditions.singedInAlready) {
    return redirect("/profile/dashboard");
  }

  if (conditions.notSignedIn) {
    return redirect("/login");
  }

  function isAdminRoute(route) {
    if (
      route.matched.some(
        (record) =>
          record.path !== "/login" &&
          record.path !== "/:clientId/:clientSlug" &&
          record.path !== ""
      )
    ) {
      return true;
    }
  }
}
