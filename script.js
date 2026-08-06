const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");
const disclaimerModal = document.querySelector("[data-disclaimer-modal]");
const disclaimerAccept = document.querySelector("[data-disclaimer-accept]");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

if (disclaimerModal && disclaimerAccept) {
  const acceptedKey = "bharat-shree-disclaimer-accepted-v2";

  try {
    if (window.localStorage.getItem(acceptedKey) === "true") {
      disclaimerModal.hidden = true;
    } else {
      disclaimerModal.hidden = false;
    }
  } catch {
    disclaimerModal.hidden = false;
  }

  disclaimerAccept.addEventListener("click", () => {
    try {
      window.localStorage.setItem(acceptedKey, "true");
    } catch {}
    disclaimerModal.hidden = true;
  });
}
