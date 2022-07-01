productos = prompt("Ingrese un producto");
precio = parseInt(prompt("Ingrese el precio"));
productos1 = prompt("Ingrese otro producto");
precio1 = parseInt(prompt("Ingrese el precio"));
resultado = precio + precio1;

alert(`el precio total es ${resultado}`);

alert(`en la consola podes ver cuanto te queda en cuotas`);
for (i = 1; i <= 12; i++) {
  console.log(`${resultado} / ${i} = ${resultado / i} `);
}

function cuotero(cuotas, resultado1) {
  cuotas = parseInt(prompt("En cuantas cuotas lo queres hacer?"));
  resultado1 = resultado / cuotas;

  if (cuotas < 13) {
    alert(`Te quedaria en cuotas ${cuotas} de ${resultado1}`);
  } else {
    alert("solo se puede hacer en 12 cuotas");
    cuotas1 = parseInt(prompt(`pone de vuelta las cuotas xd`));
    resultado2 = resultado / cuotas1;
    alert(`Te quedaria en cuotas ${cuotas1} de ${resultado2}`);
  }
}

cuotero();
