// addMovie.js
document.getElementById("addMovie").addEventListener("click", function () {
    var titulo = document.getElementById("titleInput").value;
    var nota = parseFloat(document.getElementById("rateInput").value);

    if (titulo === "" || isNaN(nota) || nota > 10 || nota < 0) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    var data = {
        title: titulo,
        poster: document.getElementById("posterInput").value,
        banner: document.getElementById( "bannerInput" ).value,
        date: document.getElementById("dateInput").value,
        onde: document.getElementById("ondeInput").value,
        description: document.getElementById("descreptionInput").value,
        rate: nota,
    };

    fetch("/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => {
            if (response.ok) {
                alert("filme adicionado com sucesso!");
                location.reload();
            } else {
                alert("Falha a enviar");
            }
        })
        .catch((error) => {
            console.error("Error:", error);
            alert("falha a enviar");
        });
});
