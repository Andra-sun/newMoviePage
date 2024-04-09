document.addEventListener("DOMContentLoaded", () => {
    fetch("/movies")
        .then((response) => response.json())
        .then((movies) => {
            displayMovies(movies);
        });
});

function displayMovies(movies) {
    const moviesContainer = document.getElementById("movies-container");

    movies.forEach((movie) => {
        const card = createMovieCard(movie);
        moviesContainer.appendChild(card);
    });
}

function createMovieCard(movie) {
    const card = document.createElement("div");
    card.classList.add("card");

    const rate = document.createElement("h2");
    rate.textContent = movie.rate;
    card.appendChild(rate);

    const date = document.createElement("h6");
    date.textContent = movie.date;
    card.appendChild(date);

    const img = document.createElement("img");
    img.src = movie.poster;
    img.alt = movie.title;
    card.appendChild(img);

    const title = document.createElement("p");
    title.textContent =
        movie.title.length > 17
            ? movie.title.substring(0, 16) + "..."
            : movie.title;
    title.title = movie.title;
    card.appendChild(title);

    if (movie.rate > 8) {
        rate.classList.add("green-bg");
    } else if (movie.rate > 5) {
        rate.classList.add("yellow-bg");
    } else if (movie.rate > 0) {
        rate.classList.add("red-bg");
    }

    card.addEventListener("click", () => {
        window.location.href = `movieDescription.html?id=${movie.id}`;
    });

    return card;
}
