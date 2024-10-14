function mostrarPreRegistro() {
  var elemento = document.getElementById("formulario");

  if (elemento.style.display == "block") {
    elemento.style.display = "none";
  } else {
    elemento.style.display = "block";
  }
};

let formElement = document.querySelector(".form");
formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(formElement);
  const data = Object.fromEntries(formData);

  fetch("https://66fb1da68583ac93b40aed04.mockapi.io/usuarios", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .then(alert("Dados enviados com sucesso!"));
});
