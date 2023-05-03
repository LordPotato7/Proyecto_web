document.addEventListener("DOMContentLoaded", function() {
    
    document.getElementById("PagarForm").addEventListener('submit', validarFormularioP); 
  });

  validarFormularioP(evento)
  {
    evento.preventDefault();

    var tarjeta = parseInt(document.getElementById("numeroTarjeta").value);

    if(tarjeta < 0 )
    {
        document.getElementById("alertaN").textContent = "el numero de tarjeta es invalido";
        return;
    }

    var mes = parseInt(document.getElementById("mes").value);

    if (mes < 1 || mes > 12)
    {
        document.getElementById("alertaM").textContent = "el mes es invalido";
        return;
    }

    var años = parseInt(document.getElementById("año").value)

    if( año < 23|| año > 99 )
    {
        document.getElementById("alertaA").textContent = "el año es invalido";
        return;
    }

    var ccv = parseInt(document.getElementById("ccv").value)

    if(ccv <99 || ccv >999){
        document.getElementById("alertaC").textContent = "el ccv es invalido";
        return;
    }
    var nombre = document.getElementById('Nombre').value;
    if(nombre.length == 0) {
      
      document.getElementById("alertaN").textContent = "No has escrito nada en el nombre";
      return;
    }
    if(nombre.length <= 3) {
        
        document.getElementById("alertaN").textContent = "El nombre no es suficientemente largo";
        return;
      }
    this.submit();
  }