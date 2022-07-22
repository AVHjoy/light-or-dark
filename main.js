document.querySelector("#btn").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.getElementsByClassName("spell")[0].innerHTML == "LUMUS!") {
        document.getElementsByClassName("spell")[0].innerHTML = "NOX!";
    } else {
        document.getElementsByClassName("spell")[0].innerHTML = "LUMUS!";
    }
})