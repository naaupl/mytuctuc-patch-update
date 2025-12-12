// injecting daisyUI
const daisyCDN = document.createElement("link");
daisyCDN.rel = "stylesheet";
daisyCDN.href = "https://cdn.jsdelivr.net/npm/daisyui@5";
document.head.appendChild(daisyCDN);

// injecting tailwindCSS
const tailwindCDN = document.createElement("script");
tailwindCDN.src = "https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4";
document.head.appendChild(tailwindCDN);