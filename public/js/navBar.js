document.querySelector("#home").addEventListener("click", function () {
    window.location.href = "index.html";
});
const sugestao = document.querySelector("#sugestao");

// Função de filtro de avaliação
document.querySelectorAll("#avaliacaoFiltro li").forEach((item) => {
    item.addEventListener("click", function () {
        const sortByRate = this.id === "avaliacaoFiltro01";
        const filtro = document.querySelector("#avaliacaoFiltro");
        filtro.style.display = "none";
        sortMoviesByRate(sortByRate);
    });
});

function sortMoviesByRate(sortByRate) {
    const moviesContainer = document.getElementById("movies-container");
    const movieCards = Array.from(moviesContainer.getElementsByClassName("card"));

    movieCards.sort((a, b) => {
        const rateA = parseFloat(a.querySelector("h2").textContent);
        const rateB = parseFloat(b.querySelector("h2").textContent);
        return sortByRate ? rateA - rateB : rateB - rateA;
    });

    moviesContainer.innerHTML = "";
    movieCards.forEach((card) => {
        moviesContainer.appendChild(card);
    });
}

document.querySelector("#avaliacao").addEventListener("click", function () {
    const filtro = document.querySelector("#avaliacaoFiltro");
    if (filtro.style.display === "none") {
        filtro.style.display = "block";
    } else {
        filtro.style.display = "none";
    }
});

// Função de filtro de data
document.querySelectorAll("#dataFiltro li").forEach((item) => {
    item.addEventListener("click", function () {
        const sortByRecent = this.id === "dataFiltro01";
        const filtro = document.querySelector("#dataFiltro");
        filtro.style.display = "none";
        sortMoviesByDate(sortByRecent);
    });
});

function sortMoviesByDate(sortByRecent) {
    const moviesContainer = document.getElementById("movies-container");
    const movieCards = Array.from(moviesContainer.getElementsByClassName("card"));

    movieCards.sort((a, b) => {
        const dateA = convertDateToNumber(a.querySelector("h6").textContent);
        const dateB = convertDateToNumber(b.querySelector("h6").textContent);
        return sortByRecent ? dateA - dateB : dateB - dateA;
    });

    moviesContainer.innerHTML = "";
    movieCards.forEach((card) => {
        moviesContainer.appendChild(card);
    });
}

function convertDateToNumber(dateString) {
    const months = {
        janeiro: "01",
        fevereiro: "02",
        março: "03",
        abril: "04",
        maio: "05",
        junho: "06",
        julho: "07",
        agosto: "08",
        setembro: "09",
        outubro: "10",
        novembro: "11",
        dezembro: "12",
    };

    const [month, year] = dateString.split(" de ");
    const paddedMonth = months[month.toLowerCase()];
    return parseInt(year + paddedMonth);
}

document.querySelector("#data").addEventListener("click", function () {
    const lista = document.querySelector("#dataFiltro");
    if (lista.style.display == "none") {
        lista.style.display = "flex";
    } else {
        lista.style.display = "none";
    }
});

document.querySelector("#adicionar").addEventListener("click", function () {
    window.location.href = "addNew.html";
});
