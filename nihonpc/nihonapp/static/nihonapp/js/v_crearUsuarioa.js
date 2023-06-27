document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
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
      
	  var emailField = document.getElementById('email');
	  var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    
    if (!validEmail.test(emailField.value)){
      document.getElementById("alertaE").textContent = "La email no es válida";
      return;

    }

    var clave = document.getElementById('password').value;
    if (clave.length <= 6) {
      document.getElementById("alertaP").textContent = "La clave no es válida";
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

 