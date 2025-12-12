function loadView() {
  const app = document.getElementById("app");
  const hash = window.location.hash.replace("#", "") || "dashboard";

  app.innerHTML = "";

  if (hash === "dashboard") app.innerHTML = window.dashboardView || "<p>Dashboard not loaded</p>";
  if (hash === "history")   app.innerHTML = window.historyView   || "<p>History not loaded</p>";
  if (hash === "route")     app.innerHTML = window.routeView     || "<p>Route not loaded</p>";

  // set button active state
  if (typeof setActiveDockButton === "function") setActiveDockButton();
}

window.addEventListener("hashchange", loadView);
window.addEventListener("load", loadView);
