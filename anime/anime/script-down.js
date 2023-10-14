window.addEventListener("scroll", function () {
  var scrollButton = document.getElementById("scrollButton");
  var windowHeight = window.innerHeight;
  var documentHeight = document.body.scrollHeight;
  if (window.pageYOffset + windowHeight < documentHeight - 300) {
    // Muestra el botón si no estás cerca del final de la página
    scrollButton.classList.add("show");
  } else {
    scrollButton.classList.remove("show");
  }
});

document.getElementById("scrollButton").addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" }); // Desplázate suavemente hacia el final de la página
});
