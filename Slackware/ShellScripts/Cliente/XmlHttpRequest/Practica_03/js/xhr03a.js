 var App = (
   function() {
     var _descargar = function(evento) {
       var url = "http://xhr03.com:8083/cgi-bin";
       var xhr = new XMLHttpRequest();
       xhr.onreadystatechange = _procesarCambioDeEstado(xhr);
       var parametros = "nombre=" +
         document.getElementById("nombre").value + "&" +
         "nacimiento=" +
         document.getElementById("nacimiento").value;
       if (document.getElementById("metodo_http").value === "GET") {
         xhr.open('GET', url + "/get.py" + "?" + parametros);
         xhr.send();
       } else {
         xhr.open('POST', url + "/post.py");
         xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
         xhr.setRequestHeader("Content-Length", parametros.length);
         xhr.setRequestHeader("Connection", "close");
         xhr.send(parametros);
       }
     }
     var _procesarCambioDeEstado = function(objeto_XMLHttpRequest) {
       return function() {
         var respuesta = document.getElementById("respuesta");
         var mensaje = document.getElementById("mensaje");
         respuesta.textContent = "";
         mensaje.textContent = "";
         if (objeto_XMLHttpRequest.readyState === 4) {
           if (objeto_XMLHttpRequest.status === 200) {
               respuesta.textContent = objeto_XMLHttpRequest.responseText;
           } else {
               mensaje.textContent = "Error " + this.status + " " + this.statusText + " - " + this.responseURL;
           }
         }
       };
     }
     var _main = function() {
       var boton_descargar = document.getElementById("descargar");
       boton_descargar.addEventListener('click', _descargar, false);
     }
     return { "main": _main };
   }
 )();
