const button = document.querySelector("button");
const html = document.querySelector("html");
const buy = document.getElementById("buy");
const tema = document.getElementById("tema");

// saat tombol diklik
button.addEventListener("click", function( ) {
    if(html.dataset.colorMode == " ") {
        html.dataset.colorMode = "dark";
        this.textContent = "Light Mode";
    } else {
        html.dataset.colorMode = " ";
        this.textContent = "Dark Mode";
    }
})

buy.addEventListener("click", function() {
    alert("Mohon maaf website belum bisa digunakan!")
})

tema.style.color = 'rgb(184, 31, 61)';