document.body, addEventListener("load", function () {
    this.window.scrollTo(0,700);
})

const articleButton = document.getElementById("arBtn")
const button = document.getElementById('about');
const fileURL = 'https://Amir-Gh.github.io/Zhelomen/gh-pages/index.html';

button.addEventListener('click', function () {
  const newWindow = window.open(fileURL);
  newWindow.addEventListener('load', function () {
    this.window.scrollTo(0, 1300);
  });
});

articleButton.addEventListener('click', function () {
    const newWindow = window.open(fileURL);
  newWindow.addEventListener('load', function () {
    this.window.scrollTo(0, 700);
    });
});
