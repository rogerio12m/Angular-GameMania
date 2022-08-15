function abreFechaMenu() {
    let navbar = document.querySelector(".mobile-menu");
    navbar.classList.toggle("mostraEscondeMenu");
}

$(document).ready(function () {
    
    $(".btn-primary").click(function () {
        alert("Este produto não está disponível");
    });

})

