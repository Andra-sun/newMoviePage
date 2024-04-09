const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

function generateUniqueId() {
    return Math.random().toString(36).substr(2, 9);
}

app.post("/add", (req, res) => {
    const data = req.body;

    const movieId = generateUniqueId();
    const newMovie = { id: movieId, ...data };

    let moviesData = [];
    try {
        const moviesFile = fs.readFileSync("movies.json");
        moviesData = JSON.parse(moviesFile);
    } catch (error) {
        console.error("Error reading movies file:", error);
    }

    moviesData.push(newMovie);

    fs.writeFile("movies.json", JSON.stringify(moviesData, null, 2), (err) => {
        if (err) {
            console.error("Error writing movies file:", err);
            res.status(500).json({ error: "Failed to add movie" });
        } else {
            res.json({ message: "Movie added successfully", data: newMovie });
        }
    });
});

app.get("/movies", (req, res) => {
    try {
        const moviesFile = fs.readFileSync("movies.json");
        const moviesData = JSON.parse(moviesFile);
        res.json(moviesData);
    } catch (error) {
        console.error("Error reading movies file:", error);
        res.status(500).json({ error: "Failed to fetch movies" });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor Node está em execução na porta ${PORT}. Acesse http://localhost:${PORT}/ para começar.`);
});


