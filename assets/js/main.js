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
