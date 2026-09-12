/* =========================================================
   Amin Jan — Portfolio
   Shared behaviour: active navigation + subtle reveal motion
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  // 01. Highlight the active nav item based on the current page.
  const currentPage = document.body.dataset.page;
  document.querySelectorAll("[data-nav]").forEach((link) => {
    if (link.dataset.nav === currentPage) link.classList.add("active");
  });

  // 02. Reveal sections when they enter the viewport.
  const revealItems = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealItems.forEach((item) => observer.observe(item));
  } else {
    // Fallback for older browsers without IntersectionObserver.
    revealItems.forEach((item) => item.classList.add("visible"));
  }
});
