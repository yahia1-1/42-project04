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

const profileImage = document.getElementById("profileImage");
const changePhotoBtn = document.getElementById("changePhotoBtn");

let isSecondPhoto = false;

changePhotoBtn.addEventListener("click", function() {

    if (isSecondPhoto === false) {
        profileImage.src = "assets/profile2.jpg";
        isSecondPhoto = true;
    } else {
        profileImage.src = "assets/profile.jpg";
        isSecondPhoto = false;
    }

});
