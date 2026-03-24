
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");
  const span = document.getElementsByClassName("close")[0];

  document.querySelectorAll(".carta").forEach(carta => {
    carta.querySelector("img").addEventListener("click", () => {
      const title = carta.querySelector(".tooltip").textContent;
      const description = carta.querySelector(".txt-titulo").textContent;

      modalTitle.textContent = title;
      modalDescription.textContent = description;
      modal.style.display = "block";
    });
  });

  span.onclick = () => {
    modal.style.display = "none";
  };

  window.onclick = (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
