// Interacciones comunes del portfolio.

// Correo: un clic lo copia al portapapeles y lo confirma en pantalla.
// Si el navegador no permite copiar, el enlace abre el correo (mailto) como siempre.
document.querySelectorAll("[data-copy]").forEach((link) => {
  link.addEventListener("click", async (event) => {
    if (!navigator.clipboard) return;
    event.preventDefault();
    const status = link.closest(".footer__side")?.querySelector(".copy-status");
    try {
      await navigator.clipboard.writeText(link.dataset.copy);
      if (status) status.textContent = "Correo copiado. Pégalo donde quieras.";
    } catch {
      window.location.href = link.href;
      return;
    }
    clearTimeout(link._timer);
    link._timer = setTimeout(() => { if (status) status.textContent = ""; }, 4000);
  });
});

// Capturas del case study: al tocarlas se abren a tamaño real (1x) en un diálogo.
// En móvil la imagen puede ser más ancha que la pantalla: se desplaza dentro del diálogo.
const lightbox = document.querySelector(".lightbox");
if (lightbox && typeof lightbox.showModal === "function") {
  const bigImg = lightbox.querySelector(".lightbox__img");
  let opener = null;

  const close = () => lightbox.close();

  document.querySelectorAll("[data-zoom]").forEach((button) => {
    const img = button.querySelector("img");
    button.setAttribute("aria-label", `Ampliar imagen: ${img.alt}`);
    button.addEventListener("click", () => {
      opener = button;
      bigImg.src = button.dataset.zoom;
      bigImg.alt = img.alt;
      bigImg.width = img.getAttribute("width");
      bigImg.height = img.getAttribute("height");
      document.documentElement.style.overflow = "hidden";
      lightbox.showModal();
      lightbox.scrollTo(0, 0);
    });
  });

  lightbox.querySelector(".lightbox__close").addEventListener("click", close);
  // Clic fuera de la imagen o sobre ella: cerrar
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox || event.target === bigImg) close();
  });
  lightbox.addEventListener("close", () => {
    document.documentElement.style.overflow = "";
    bigImg.removeAttribute("src");
    opener?.focus();
  });
} else if (lightbox) {
  // Sin <dialog>: las capturas no se amplían, pero se ven igual.
  document.querySelectorAll("[data-zoom]").forEach((b) => { b.style.cursor = "default"; });
}
