document.body, addEventListener("load", function () {
    this.window.scrollTo(0,700);
})

const button = document.getElementById('about');
const articleButton = document.getElementById("arBtn")
const fileURL = 'https://Amir-Ghazi.github.io/Zhelomen-/index.html';

button.addEventListener('click', function () {
    const newWindow = window.open(fileURL);
    newWindow.addEventListener('load', function () {
        this.window.scrollTo(0,1300);
    });
});

articleButton.addEventListener('click', function () {
    const newWindow = window.open(fileURL);
    newWindow.addEventListener('load', function () {
        this.window.scrollTo(0,700);
    });
});
