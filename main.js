
  document.addEventListener("DOMContentLoaded", () => {
    const filterLinks = document.querySelectorAll("nav ul li a");
    const cards = document.querySelectorAll(".card");

    filterLinks.forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        const filter = link.getAttribute("data-filter");

        cards.forEach(card => {
          if (filter === "all" || card.getAttribute("data-category") === filter) {
            card.style.display = "block"; // mostrar
          } else {
            card.style.display = "none"; // ocultar
          }
        });
      });
    });
  });
