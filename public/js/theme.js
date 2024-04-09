const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
    if (body.getAttribute("data-theme") === "claro") {
        body.setAttribute("data-theme", "escuro");
    } else {
        body.setAttribute("data-theme", "claro");
    }
});
