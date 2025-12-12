function loadView(view = "dashboard") {
  const app = document.getElementById("app");
  if (!app) return;

  app.innerHTML = "";

  if (view === "dashboard") app.innerHTML = window.dashboardView || "<p>Dashboard not loaded</p>";
  if (view === "history") app.innerHTML = window.historyView || "<p>History not loaded</p>";
  if (view === "route") app.innerHTML = window.routeView || "<p>Route not loaded</p>";

  // set button active state
  if (typeof setActiveDockButton === "function") setActiveDockButton(view);
}

function navigate(view) {
  loadView(view);
}

document.querySelectorAll("[data-view]").forEach(btn => {
  btn.addEventListener("click", () => {
    const view = btn.getAttribute("data-view");
    navigate(view);
  });
});

window.addEventListener("load", () => loadView());