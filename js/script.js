var contador = document.getElementById("productos");
var precio = parseFloat(document.getElementById("precio").textContent);
var total = document.getElementById("total");

var cont = 0;
var tot = 0;

function añadir() {
  cont += 1;
  contador.innerText = cont;

  tot = precio + parseFloat(total.textContent);

  total.textContent = tot.toFixed(3);
}



  
