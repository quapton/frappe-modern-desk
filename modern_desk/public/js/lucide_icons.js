document.addEventListener("DOMContentLoaded", function () {
  const script = document.createElement("script");
  script.src = "https://unpkg.com/lucide@latest";
  script.onload = function () {
    lucide.createIcons();
  };
  document.head.appendChild(script);
});
