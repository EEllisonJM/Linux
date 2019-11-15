var dom03a = (function() {
  var _elemento_con_id = function(id_del_elemento) {
    return document.getElementById(id_del_elemento);
  };

  var _imprimir_texto_de_elemento_con_id = function(id_del_elemento) {
    console.log(_elemento_con_id(id_del_elemento).textContent);
    console.log("-------------");
  };

  var _elementos_con_clase = function (clase_de_los_elementos) {
      return document.getElementsByClassName(clase_de_los_elementos);
  }

  var _imprimir_texto_de_elementos_con_clase = function(clase_de_los_elementos) {
    for (var i = 0; i < _elementos_con_clase(clase_de_los_elementos).length; i++) {
      console.log(_elementos_con_clase(clase_de_los_elementos)[i].textContent);
      console.log("-------------");
    }
  };

  var _elementos_con_nombre = function (nombre_de_los_elementos) {
      return document.getElementsByName(nombre_de_los_elementos);
  }

  var _imprimir_texto_de_elementos_con_nombre = function(nombre_de_los_elementos) {
    for (var i = 0; i < _elementos_con_nombre(nombre_de_los_elementos).length; i++) {
      console.log(_elementos_con_nombre(nombre_de_los_elementos)[i].textContent);
      console.log("-------------");
    }
  };

  var _elementos_p = function () {
    return document.getElementsByTagName("p");
  };

  var _imprimir_texto_de_elementos_p = function() {
    for (var i = 0; i < _elementos_p().length; i++) {
      console.log("> Parrafo " + i);
      console.log(_elementos_p()[i].textContent);
      console.log("-------------");
    }
  };

  var _elementos_li = function() {
    return document.getElementsByTagName("li");
  };

  var _imprimir_texto_de_elementos_li = function() {
    for (var i = 0; i < _elementos_li().length; i++) {
      console.log("> Ítem " + i);
      console.log(_elementos_li()[i].textContent);
      console.log("-------------");
    } 
  };

  var _elementos_a = function() {
    return document.getElementsByTagName("a");
  };

  var _imprimir_texto_de_elementos_a = function() {
    for (var i = 0; i < _elementos_a().length; i++) {
      console.log("> Enlace " + i);
      console.log(_elementos_a()[i].textContent);
      console.log("-------------");
    } 
  };

  var _imprimir_valor_de_atributo_href_de_elementos_a = function() {
    for (var i = 0; i < _elementos_a().length; i++) {
      console.log("> Enlace " + i);
      console.log(_elementos_a()[i].getAttribute("href"));
      console.log("-------------");
    } 
  };

  var _elementos_td = function() {
    return document.getElementsByTagName("td");  
  };

  var _imprimir_texto_de_elementos_td = function() {
    for (var i = 0; i < _elementos_td().length; i++) {
      console.log("> Celda " + i + " : " + _elementos_td()[i].textContent);
      console.log("-------------");
    } 
  };

  var _concatenacion_del_texto_de_elementos_td = function() {
    var _str_salida = "";
    for (var i = 0; i < _elementos_td().length; i++) {
        _str_salida = _str_salida + _elementos_td()[i].textContent;
    }
    return _str_salida;
  };

  var _elementos_th = function() {
    return document.getElementsByTagName("th");  
  };

  var _imprimir_texto_de_elementos_th = function() {
    for (var i = 0; i < _elementos_th().length; i++) {
      console.log("> Cabecera " + i + " : " + _elementos_th()[i].textContent);
      console.log("-------------");
    } 
  };

  var _elementos_img = function() {
    return document.getElementsByTagName("img");
  };

  var _imprimir_valor_de_atributo_src_de_elementos_img = function() {
    for (var i = 0; i < _elementos_img().length; i++) {
      console.log("> Imagen " + i);
      console.log(_elementos_img()[i].getAttribute("src"));
      console.log("-------------");
    } 
  };

  return {
    "elemento_con_id": _elemento_con_id,
    "imprimir_texto_de_elemento_con_id": _imprimir_texto_de_elemento_con_id,
    "elementos_con_clase": _elementos_con_clase,
    "imprimir_texto_de_elementos_con_clase": _imprimir_texto_de_elementos_con_clase,
    "elementos_con_nombre": _elementos_con_nombre,
    "imprimir_texto_de_elementos_con_nombre": _imprimir_texto_de_elementos_con_nombre,
    "elementos_p": _elementos_p,
    "imprimir_texto_de_elementos_p": _imprimir_texto_de_elementos_p,
    "elementos_li": _elementos_li,
    "imprimir_texto_de_elementos_li": _imprimir_texto_de_elementos_li,
    "elementos_a": _elementos_a,
    "imprimir_texto_de_elementos_a": _imprimir_texto_de_elementos_a,
    "imprimir_valor_de_atributo_href_de_elementos_a": _imprimir_valor_de_atributo_href_de_elementos_a,
    "elementos_td": _elementos_td,
    "imprimir_texto_de_elementos_td": _imprimir_texto_de_elementos_td,
    "concatenacion_del_texto_de_elementos_td": _concatenacion_del_texto_de_elementos_td,
    "elementos_th": _elementos_th,
    "imprimir_texto_de_elementos_th": _imprimir_texto_de_elementos_th,
    "elementos_img": _elementos_img,
    "imprimir_valor_de_atributo_src_de_elementos_img": _imprimir_valor_de_atributo_src_de_elementos_img
  };
})();
