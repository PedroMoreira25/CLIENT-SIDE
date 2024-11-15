const button = document.querySelector(".orcamento")
const modal = document.querySelector(".formulario")
const buttonClose = document.querySelector(".fechar")

button.onclick = function() {
    modal.showModal()
}
buttonClose.onclick = function() {
    modal.close()
}


document.getElementById("mandaform")
.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = {
      nome: document.getElementById("nome").value,
      email: document.getElementById("bairro").value,
      sexo: document.querySelector('input[name="sexo"]:checked').value,
    };

    console.log("Dados:", formData);

    fetch("http://localhost:3333/cadastro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("Cadastro realizado com sucesso!");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Ocorreu um erro ao realizar o cadastro.");
      });
  });
