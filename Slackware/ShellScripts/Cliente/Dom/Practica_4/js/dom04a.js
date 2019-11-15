var dom04a = (function() {
  var _ocultar_elemento_con_id = function(id_del_elemento) {
    var _elemento = document.getElementById(id_del_elemento);
    _elemento.setAttribute("hidden", "hidden");
  };

  var _mostrar_elemento_con_id = function(id_del_elemento) {
    var _elemento = document.getElementById(id_del_elemento);
    _elemento.removeAttribute("hidden");  
  };

  var _ocultar_elementos_con_clase = function(clase_de_los_elementos) {
    var _elementos = document.getElementsByClassName(clase_de_los_elementos);
    for (var i = 0; i < _elementos.length; i++) {
        _elementos[i].setAttribute("hidden", "hidden");
    }
  };

  var _mostrar_elementos_con_clase = function(clase_de_los_elementos) {
    var _elementos = document.getElementsByClassName(clase_de_los_elementos);
    for (var i = 0; i < _elementos.length; i++) {
        _elementos[i].removeAttribute("hidden");
    }
  };

  var _agrandar_el_texto_del_elemento_con_id = function(id_del_elemento) {
    var _elemento = document.getElementById(id_del_elemento);
    var _valor_de_font_size = window.getComputedStyle(_elemento).getPropertyValue("font-size");
    var _nuevo_tamanio = Number(_valor_de_font_size.split("px")[0]) + 5;
    _elemento.style.fontSize = _nuevo_tamanio + "px";
  };

  var _cambiar_el_color_de_los_elementos_con_clase = function(clase_de_los_elementos) {
    var _elementos = document.getElementsByClassName(clase_de_los_elementos);
    for (var i = 0; i < _elementos.length; i++) {
        var _valor_de_color = window.getComputedStyle(_elementos[i]).getPropertyValue("color");
        if (_valor_de_color === "rgb(0, 0, 0)") {
          _elementos[i].style.color = "rgb(255, 0, 0)";
        } else {
          _elementos[i].style.color = "rgb(0, 0, 0)";
        }
    }
  }

  var _estilizar_enlaces_como_botones_primarios = function() {
    var _elementos = document.getElementsByTagName("a");
    for (var i = 0; i < _elementos.length; i++) {
      _elementos[i].classList.add("pure-button");
      _elementos[i].classList.add("pure-button-primary");
    }
  };

  var _estilizar_con_default_una_tabla = function() {
    var _elementos = document.getElementsByTagName("table");
    for (var i = 0; i < _elementos.length; i++) {
      _elementos[i].classList.add("pure-table");
    }
  };

  var _estilizar_con_bordeado_una_tabla = function() {
    var _elementos = document.getElementsByTagName("table");
    for (var i = 0; i < _elementos.length; i++) {
      _elementos[i].classList.add("pure-table-bordered");
    }
  };

  var _estilizar_con_zebra_una_tabla = function() {
    var _elementos = document.getElementsByTagName("table");
    for (var i = 0; i < _elementos.length; i++) {
      _elementos[i].classList.add("pure-table-striped");
    }
  };

  var _desactivar_botones = function() {
    var _elementos = document.getElementsByTagName("button");
    for (var i = 0; i < _elementos.length; i++) {
      _elementos[i].classList.remove("pure-button-active");
      _elementos[i].classList.add("pure-button-disabled");
    }  
  };

  var _activar_botones = function() {
    var _elementos = document.getElementsByTagName("button");
    for (var i = 0; i < _elementos.length; i++) {
      _elementos[i].classList.remove("pure-button-disabled");
      _elementos[i].classList.add("pure-button-active");
    }  
  };

  return {
    "ocultar_elemento_con_id": _ocultar_elemento_con_id,
    "mostrar_elemento_con_id": _mostrar_elemento_con_id,
    "ocultar_elementos_con_clase": _ocultar_elementos_con_clase,
    "mostrar_elementos_con_clase": _mostrar_elementos_con_clase,
    "agrandar_el_texto_del_elemento_con_id": _agrandar_el_texto_del_elemento_con_id,
    "cambiar_el_color_de_los_elementos_con_clase": _cambiar_el_color_de_los_elementos_con_clase,
    "estilizar_enlaces_como_botones_primarios": _estilizar_enlaces_como_botones_primarios,
    "estilizar_con_default_una_tabla": _estilizar_con_default_una_tabla,
    "estilizar_con_bordeado_una_tabla": _estilizar_con_bordeado_una_tabla,
    "estilizar_con_zebra_una_tabla": _estilizar_con_zebra_una_tabla,
    "desactivar_botones": _desactivar_botones,
    "activar_botones": _activar_botones
  };
})();
