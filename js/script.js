var contador = document.getElementById("productos");
var precio = parseFloat(document.getElementById("precio").textContent);
var total = document.getElementById("total");

var datosDelCarrito = JSON.parse(localStorage.getItem("carrito")) || { cont: 0, tot: 0 };

var cont = datosDelCarrito.cont;
var tot = datosDelCarrito.tot;

function actualizarCarrito() {
  contador.innerText = cont;
  total.textContent = tot.toFixed(3);
}

function añadir() {
  cont += 1;
  tot = precio + parseFloat(total.textContent);

  localStorage.setItem("carrito", JSON.stringify({ cont: cont, tot: tot }));

  actualizarCarrito();
}

actualizarCarrito();

function vaciarCarrito() {
  cont = 0;
  tot = 0;
  localStorage.removeItem("carrito");
  actualizarCarrito();
}
