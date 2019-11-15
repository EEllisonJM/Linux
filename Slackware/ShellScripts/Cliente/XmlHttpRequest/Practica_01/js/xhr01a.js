/*Button[Descargar]*/
var descargar = function(evento) {
  /*[Select-option]*/
   var archivo_a_descargar = document.getElementById("archivo_a_descargar");
   /*Parrafo a mostrar [Exito o error]*/
   var mensaje = document.getElementById("mensaje");
   /*Area de texto*/   
   var archivo_descargado = document.getElementById("archivo_descargado");

   archivo_descargado.value = "";
   mensaje.textContent = "";
   /*Expresion regular, seleccionado?*/
   if (! /^\w+\.xml$/.test(archivo_a_descargar.value)) {
      mensaje.textContent = "Seleccione una entidad.";
      return false;
   }
   
   var servidor = "http://xhr01.com:8081";
   var url = servidor + "/xml/" + archivo_a_descargar.value + "?r=" + Math.random();
   var xhr = new XMLHttpRequest();
   xhr.onreadystatechange = function() {
     if (this.readyState === 4) {
       var archivo_descargado = document.getElementById("archivo_descargado");
       var mensaje = document.getElementById("mensaje");
       archivo_descargado.value = "";
       mensaje.textContent = "";
       /*Estado*/
       if (this.status === 200) {
           archivo_descargado.value = this.responseText;
       } else {
           mensaje.textContent = "Error " + this.status + " " + this.statusText + " - " + this.responseURL;
       }
     }
   };
   xhr.open('GET', url, true);
   xhr.send();
 };
 var iniciar = function() {
   var boton_descargar = document.getElementById("descargar");
   boton_descargar.addEventListener('click', descargar, false);
 };
 /*https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions*/