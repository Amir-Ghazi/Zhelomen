document.body, addEventListener("load", function () {
    this.window.scrollTo(0,700);
})

const articleButton = document.getElementById("arBtn")
const button = document.getElementById('about');

button.addEventListener('click', function () {
  newWindow.addEventListener('load', function () {
    this.window.scrollTo(0, 1300);
  });
});

articleButton.addEventListener('click', function () {
  newWindow.addEventListener('load', function () {
    this.window.scrollTo(0, 700);
    });
});
