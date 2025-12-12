function setActiveDockButton() {
  const hash = window.location.hash.replace("#", "") || "dashboard";

  document.querySelectorAll("[data-page]").forEach(button => {
    const page = button.getAttribute("data-page");

    button.classList.remove("dock-active");

    if (page === hash) {
      button.classList.add("dock-active");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {

  const dockHTML = `
    <div class="lg:hidden dock dock-xl min-h-30 border-black">
        <button data-page="dashboard" onclick="window.location.hash='dashboard'">
            <img src="../../assets/svg/homeButton.svg" class="size-16">
        </button>

        <button data-page="history" onclick="window.location.hash='history'">
            <img src="../../assets/svg/archiveButton.svg" class="size-16">
        </button>

        <button data-page="route" onclick="window.location.hash='route'">
            <img src="../../assets/svg/settingButton.svg" class="size-16">
        </button>
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", dockHTML);
  window.addEventListener("hashchange", setActiveDockButton);
});