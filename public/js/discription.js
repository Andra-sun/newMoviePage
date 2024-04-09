document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = urlParams.get("id");

    fetch("/movies")
        .then((response) => response.json())
        .then((movies) => {
            const movie = movies.find((m) => m.id === movieId);
            displayMovieDetails(movie);

            if (movie && movie.banner) {
                document.body.style.backgroundImage = `url("${movie.banner}")`;
            }
            document.title = movie.title;
        });
});

function displayMovieDetails(movie) {
    document.getElementById("titulo").textContent = movie.title;
    document.getElementById("mes").textContent = movie.date;
    document.getElementById("nota").textContent = movie.rate;
    document.getElementById("streming").textContent = movie.onde;
    document.getElementById("descricao").textContent = movie.description;
}
