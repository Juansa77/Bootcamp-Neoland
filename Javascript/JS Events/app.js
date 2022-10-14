
/*"1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
evento click que ejecute un console log con la información del evento del click*/


const buttonOne = document.querySelector(".btnToClick");

const toConsole = () => {
  console.log("onclick");
};

/*1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.*/

const focusEvent = document.querySelector(".focus");

focusEvent.addEventListener("focus", (event) =>
  console.log((event.target.style.background = "yellow"))
);

/*1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.*/

const input = document.querySelector("input");

input.addEventListener("input", updateValue);

function updateValue(texto) {
  console.log(texto.target.value);
}
