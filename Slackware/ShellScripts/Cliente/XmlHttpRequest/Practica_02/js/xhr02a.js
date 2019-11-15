/*Tabla(resultados)*/
var actualizarTabla = function(documento_xml) {
  /* Para acceder al DOM de documento_xml en Firebug: */
  console.log("Documento: " + documento_xml.URL);
  console.log(documento_xml);
  /* Eliminación de thead y tbody de table */
  var tabla = document.getElementById("resultado");
  if (tabla.firstChild && tabla.lastChild) {
    tabla.removeChild(tabla.firstChild);
    tabla.removeChild(tabla.lastChild);
  }
  /* Cabecera (<thead>) de la tabla
   * El siguiente documento PDF indica los campos que conforman la información
   * por cada estado:
   * http://www.correosdemexico.gob.mx/lservicios/servicios/imagenes%5CDescrip.pdf
   */
  var campos = [];
  var xml_campos_primer_estado = documento_xml.firstChild.childNodes[1].childNodes;
  var tabla_thead = document.createElement("thead");
  tabla.appendChild(tabla_thead);
  /*Inicio Ecabezado*/
  var tabla_tr = document.createElement("tr");
  tabla_thead.appendChild(tabla_tr);
  var tabla_th = document.createElement("th");
  tabla_th.textContent = "#";  
  tabla_tr.appendChild(tabla_th); 
  for (var i = 0; i < xml_campos_primer_estado.length; i++ ) {
    var tabla_th = document.createElement("th");
    tabla_th.textContent = xml_campos_primer_estado[i].nodeName;
    tabla_tr.appendChild(tabla_th); 
    campos.push(xml_campos_primer_estado[i].nodeName);//add
  }
  /*Fin Encabezado*/
  /* Cuerpo (<tbody>) de la tabla */
  var xml_nodos = documento_xml.firstChild.childNodes;
  var tabla_tbody = document.createElement("tbody");
  tabla.appendChild(tabla_tbody);
  for (var i = 1; i < xml_nodos.length; i++) {
    /* Contador */
    var tabla_tr = document.createElement("tr");
    var tabla_contador = document.createElement("td");
    tabla_contador.textContent = i;
    tabla_tr.appendChild(tabla_contador);//Add
    /* Campos por estado [ 03 ]*/
    var nodo_elemento = xml_nodos[i].childNodes;
    for (var j=0; j < campos.length; j++) {
      var tabla_td = document.createElement("td");
      if (nodo_elemento[j] && campos[j] === nodo_elemento[j].nodeName) {
        tabla_td.textContent = nodo_elemento[j].textContent;
      } else {
        /* Si el estado no cuenta con este campo */
        tabla_td.textContent = "N/A";
      }
      tabla_tr.appendChild(tabla_td);
    }
    tabla_tbody.appendChild(tabla_tr);
  }
  /**/
  var cantidad_de_codigos_postales = document.getElementById("cantidad_de_codigos_postales");
  cantidad_de_codigos_postales.textContent = (i - 1) + " códigos postales";
}
/*Event*/
var descargar = function(evento) {
  var archivo_a_descargar = document.getElementById("archivo_a_descargar");
  var mensaje = document.getElementById("mensaje");
  var cantidad_de_codigos_postales = document.getElementById("cantidad_de_codigos_postales");
  var tabla = document.getElementById("resultado");
  mensaje.textContent = "";
  cantidad_de_codigos_postales.textContent = "";
  /* Eliminación de thead y tbody de table */
  if (tabla.firstChild && tabla.lastChild) {
    tabla.removeChild(tabla.firstChild);
    tabla.removeChild(tabla.lastChild);
  }
  if (! /^\w+\.xml$/.test(archivo_a_descargar.value)) {
    mensaje.textContent = "Seleccione una entidad.";
    return false;
  }
  var servidor = "http://xhr02.com:8082";
  var url = servidor + "/xml/" + archivo_a_descargar.value + "?r=" + Math.random();
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState === 4) {
      var mensaje = document.getElementById("mensaje");
      var cantidad_de_codigos_postales = document.getElementById("cantidad_de_codigos_postales");
      mensaje.textContent = "";
      cantidad_de_codigos_postales.textContent = "";
      if (this.status === 200) {
        actualizarTabla(xhr.responseXML);
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
