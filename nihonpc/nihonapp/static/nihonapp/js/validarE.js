document.addEventListener("DOMContentLoaded", function() {
    
    document.getElementById("formularioE").addEventListener('submit', validarFormularioE); 
  });

  function validarFormularioE (evento)
  {
    evento.preventDefault();
    var id = parseInt(document.getElementById("codigo").value)

    if( id < 1 || id>8)
    {
        document.getElementById("alertaa").textContent = "El codigo no existe";
        return;
    }
    this.submit();
  }
