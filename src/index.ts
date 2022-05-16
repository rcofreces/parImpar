let número: number = Number(
  prompt("Ingrese un número para saber si es par o impar")
);

if (número === 0) {
  console.log("El número ingresado es 0");
} else {
  if (número % 2 === 0) {
    console.log("El número ingresado es par");
  } else {
    if (número % 2 !== 0) {
      console.log("El número ingresado es impar");
    }
  }
}
