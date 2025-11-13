// Set footer year
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  const toast = document.getElementById("toast");

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("visible");
    setTimeout(() => {
      toast.classList.remove("visible");
    }, 2600);
  }

  // Handle disabled app links
  const disabledLinks = document.querySelectorAll(".app-link.disabled");
  disabledLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const msg = link.getAttribute("data-disabled-msg") ||
        "This part is still wiring up behind the scenes.";
      showToast(msg);
    });
  });

  // Handle "I want early access" buttons
  const soonButtons = document.querySelectorAll("[data-soon]");
  soonButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      showToast("Early access will open soon. You’re already on the inside.");
    });
  });
});
