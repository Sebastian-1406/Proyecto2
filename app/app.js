let boton = document.querySelector(".modo")


boton.addEventListener("click", () => {

	boton.classList.toggle("active");

	document.querySelector("body").classList.toggle("temaClaro");

})