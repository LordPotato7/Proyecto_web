document.addEventListener("DOMContentLoaded", function() {
    
    document.getElementById("formularioA").addEventListener('submit', validarFormularioP); 
  });


  //validacion de formulario de productos
  function validarFormularioP(evento)
  {
    evento.preventDefault();

    

    var nombre = document.getElementById('Nombre').value;
    if(nombre.length == 0) {
      
      document.getElementById("alertaN").textContent = "No has escrito nada en el nombre";
      return;
    }
    if(nombre.length <= 3) {
        
        document.getElementById("alertaN").textContent = "El nombre no es suficientemente largo";
        return;
      }
    
    var cod = parseInt(document.getElementById("codigo").value);

    if (cod <= 8)
    {
      document.getElementById("alertaC").textContent = "El Codigo ya ha sido utilizado";
      return;
    }

    var precio = parseInt(document.getElementById("precio").value);

    if (precio <= 0)
    {
      document.getElementById("alertaP").textContent = "El precio debe ser mayor a 0";
      return;

    }

    var select = document.getElementById("dropdown").value;
    if(select == "0")
    {
      document.getElementById("alertaS").textContent = "no ha seleccionado una categoria";
     
      return;
    }

    var fileInput = document.getElementById("imagen");
    var file = fileInput.files[0];

    if(!file)
    {
        document.getElementById("alertaI").textContent = "no ha seleccionado una imagen";
        return;
    }
    this.submit();
  }