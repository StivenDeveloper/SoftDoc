// Agrega eventos de clic a los botones
document.getElementById("mostrarPresentacion").addEventListener("click", function () {
    let url = "https://www.canva.com/design/DAFqz-sqMNM/3gydzqrA8Sa216e64B7u8A/edit?utm_content=DAFqz-sqMNM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton";
    ventana(url);
});

document.getElementById("prototipoFuncional").addEventListener("click", function () {
    let url = "https://soysena-my.sharepoint.com/:b:/g/personal/esrivera72_soy_sena_edu_co/ERZGKuVYuR5FqfD7O9wclH8BbYSKKyV3XBccSsXS2nxBvA?e=5hSGTu";
    ventana(url);

});

document.getElementById("verRevista").addEventListener("click", function () {
    let url = "https://heyzine.com/flip-book/43c81fdfc2.html";
    ventana(url);
});

//Funcion de animación de carga
function ventana(url){
    console.log(url)
    // Mostrar la ventana emergente al cargar la página
        var popup = document.getElementById("popup-container");
        popup.style.display = "flex";

        // Temporizador para ocultar la ventana emergente
        setTimeout(function () {
            popup.style.display = "none";
            //redirige a la página
            window.location.href = url;
        }, 1500);
}
