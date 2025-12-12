document.addEventListener("DOMContentLoaded", () => {
  const dockHTML = `
    <div class="lg:hidden dock dock-xl min-h-30 border-black">
        <button>
            <img src="../../assets/svg/homeButton.svg" class="size-16">
        </button>

        <button class="dock-active">
            <img src="../../assets/svg/archiveButton.svg" class="size-16">
        </button>

        <button>
            <img src="../../assets/svg/settingButton.svg" class="size-16">
        </button>
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", dockHTML);
});