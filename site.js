(function () {
  const toggle = document.getElementById("menuToggle");
  const panel = document.getElementById("mobileNav");
  if (toggle && panel) {
    toggle.addEventListener("click", function () {
      const open = panel.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  document.querySelectorAll("[data-form]").forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const note = form.parentElement.querySelector("[data-success]");
      form.hidden = true;
      if (note) note.hidden = false;
    });
  });
})();
