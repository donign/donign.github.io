document.addEventListener("DOMContentLoaded", function () {
    const body = document.getElementById('body');
    const probability = 0.15;

    console.log("Random value:", Math.random());

    if (Math.random() < probability) {
        body.style.backgroundImage = "url('images/test.gif')";
        body.style.color = "white";
        body.style.backgroundSize = "cover";
    }
});