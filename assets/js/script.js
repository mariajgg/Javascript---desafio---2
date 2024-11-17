//Sección #1
let imagen = document.querySelector(".miImagen");

imagen.addEventListener("click", function () {
  if (imagen.style.border === "2px solid red") {
    imagen.style.border = "";
  } else {
    imagen.style.border = "2px solid red";
  }
});

//Sección #2
const input1 = document.getElementById("sticker1");
const input2 = document.getElementById("sticker2");
const input3 = document.getElementById("sticker3");
const mensaje = document.getElementById("mensaje");
const boton = document.getElementById("botonSticker");

boton.addEventListener("click", actualizarSticker);

function actualizarSticker() {
  const totalStickers =
    (parseInt(input1.value) || 0) +
    (parseInt(input2.value) || 0) +
    (parseInt(input3.value) || 0);

  if (totalStickers > 10) {
    mensaje.innerHTML = "Llevas demasiados stickers";
    mensaje.style.color = "red";
    mensaje.style.backgroundColor = "black";
  } else {
    mensaje.innerHTML =
      "Llevas " + totalStickers + " sticker" + (totalStickers === 1 ? "" : "s");
    mensaje.style.color = "green";
    mensaje.style.backgroundColor = "black";
  }
}

//Sección #3
const btnIngresar = document.getElementById("btnIngresar");

btnIngresar.addEventListener("click", verificarPassword);

function verificarPassword() {
  const mensaje = document.getElementById("mensajePassword");
  const select1 = document.getElementById("select1");
  const select2 = document.getElementById("select2");
  const select3 = document.getElementById("select3");
  const passwordIngresado = select1.value + select2.value + select3.value;

  if (passwordIngresado === "911") {
    mensaje.innerHTML = "Password 1 correcta";
    mensaje.style.color = "green";
    mensaje.style.backgroundColor = "black";
  } else if (passwordIngresado === "714") {
    mensaje.innerHTML = "Password 2 correcta";
    mensaje.style.color = "green";
    mensaje.style.backgroundColor = "black";
  } else {
    mensaje.innerHTML = "Password incorrecta";
    mensaje.style.color = "red";
    mensaje.style.backgroundColor = "black";
  }
}