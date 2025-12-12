function setActiveDockButton(view) {
  document.querySelectorAll("[data-page]").forEach(button => {
    const page = button.getAttribute("data-page");

    button.classList.remove("dock-active");

    if (page === view) {
      button.classList.add("dock-active");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {

  const dockHTML = `
    <div class="lg:hidden dock dock-xl min-h-30 border-black">
        <button data-page="dashboard" onclick="navigate('dashboard')">
            <img src="../../assets/svg/homeButton.svg" class="size-16">
        </button>

        <button data-page="history" onclick="navigate('history')">
            <img src="../../assets/svg/archiveButton.svg" class="size-16">
        </button>

        <button data-page="route" onclick="navigate('route')">
            <img src="../../assets/svg/settingButton.svg" class="size-16">
        </button>
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", dockHTML);
  setActiveDockButton("dashboard");
});