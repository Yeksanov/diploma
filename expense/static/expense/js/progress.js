document.addEventListener("DOMContentLoaded", function () {
  const bars = document.querySelectorAll('.progress-inner');

  bars.forEach(bar => {
    const raw = bar.dataset.percentage;
    const parsed = parseFloat(raw?.replace(',', '.') || "0");

    if (!isNaN(parsed)) {
      bar.style.width = parsed + "%";
      bar.textContent = parsed.toFixed(1) + "%";
    } else {
      console.warn("⚠️ Invalid data-percentage:", raw);
      bar.style.width = "0%";
      bar.textContent = "0%";
    }
  });
});
