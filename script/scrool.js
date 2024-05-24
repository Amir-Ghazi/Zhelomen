document.body, addEventListener("load", function () {
    this.window.scrollTo(0,700);
})

const message = document.querySelector(".container")
const articleButton = document.getElementById("arBtn")
const button = document.getElementById('about');

button.addEventListener('click', function () {
    animation()
});
articleButton.addEventListener('click', function () {
    animation()
})
function animation() {
    document.documentElement.scrollTop = 0;
    message.style.display = "inline-block"
    let x = 0
    let timer = setInterval(() => {
        x++
        if (x > 3) {
            message.style.display = "none"
            clearInterval(timer)
        }
    }, 1000);
}
