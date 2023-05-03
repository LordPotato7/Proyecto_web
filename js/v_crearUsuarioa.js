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
    var clave = document.getElementById('password').value;
    if (clave.length <= 6) {
      
      document.getElementById("alertaP").textContent = "La clave no es válida";
      return;
    }
    this.submit();
  }