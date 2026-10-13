const themeBtn = document.getElementById("themeBtn");

let darkMode = false;

themeBtn.addEventListener("click", function() {
    darkMode = !darkMode;

    if (darkMode === true) {
        document.body.classList.add("dark-mode");
        themeBtn.textContent = "Light Mode";
    } else {
        document.body.classList.remove("dark-mode");
        themeBtn.textContent = "Dark Mode";
    }
});
