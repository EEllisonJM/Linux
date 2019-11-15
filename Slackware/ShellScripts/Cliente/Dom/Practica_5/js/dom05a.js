var dom05a = (function() {
    var _stamp = function() {
        var obj_date = new Date();
        var _año = obj_date.getFullYear();
        var _mes = obj_date.getMonth();
        var _dia = obj_date.getDay();
        var _hora = obj_date.getHours();
        var _minuto = obj_date.getMinutes();
        var _segundo = obj_date.getSeconds();
        var _milisegundo = obj_date.getMilliseconds();
        return _año + "/"+_mes + "/" + _dia + " " + _hora + ":" + _minuto + ":" + _segundo + ":" + _milisegundo;
    };
    var _log = function(_sujeto, _arr_mensajes) {
        for (var i = 0; i < _arr_mensajes.length; i++) {
            console.info("[ " + _stamp() + " ] " + _sujeto + " : " + _arr_mensajes[i]);
        }
    };
    var _eventos01 = function() {
        _log("_eventos01()", ["Iniciando..."]);
        var incrementar = document.getElementById("incrementar");
        incrementar.addEventListener("click", function(obj_evento) {
            _log("click", ["elemento id='incrementar'"]);
            var numero = document.getElementById("numero");
            var cantidad = Number(numero.getAttribute("value"));
            numero.setAttribute("value", cantidad + 1);  
        }, false);
        var decrementar = document.getElementById("decrementar");
        decrementar.addEventListener("click", function(obj_evento) {
            _log("click", ["elemento id='decrementar'"]);
            var numero = document.getElementById("numero");
            var cantidad = Number(numero.getAttribute("value"));
            numero.setAttribute("value", cantidad - 1);  
        }, false);
        _log("_eventos01()", ["Terminando..."]);
    };
    var _eventos02 = function() {
        _log("_eventos02()", ["Iniciando..."]);
        var texto_original = document.getElementById("texto_original");
        texto_original.addEventListener("keypress", function(obj_evento) {
            _log("keypress", ["elemento id='texto_original'"]);
            var caracter = obj_evento.key;
            // var caracter = obj_evento.charCode;
            // var caracter = String.fromCharCode(obj_evento.charCode);
            var texto_copia = document.getElementById("texto_copia");
            texto_copia.textContent = texto_copia.textContent + caracter; 
        }, false);
        _log("_eventos02()", ["Terminando..."]);
    };
    var _eventos03 = function() {
        _log("_eventos03()", ["Iniciando..."]);
        var agregar = document.getElementById("agregar");
        agregar.addEventListener("click", function(obj_evento) {
            _log("click", ["elemento id='agregar'"]);
            var nuevo_elemento = document.getElementById("nuevo_elemento");
            var valor_numerico = Number(nuevo_elemento.value);
            var cola = document.getElementById("cola");
            var elementos = cola.children;
            var nuevo_td = document.createElement("td");
            nuevo_td.textContent = valor_numerico;
            cola.insertBefore(nuevo_td, elementos[(elementos.length - 2)]);
        }, false);
        _log("_eventos03()", ["Terminando..."]);
    };
    var _eventos04 = function() {
        _log("_eventos04()", ["Iniciando..."]);
        var mayusculas_o_minusculas = document.getElementById("mayusculas_o_minusculas");
        mayusculas_o_minusculas.addEventListener("change", function(obj_evento) {
            _log("change", ["elemento id='mayusculas_o_minusculas'"]);
            var opcion = obj_evento.originalTarget.value;
            var correos = document.getElementsByName("correo");
            if (opcion === "a_mayusculas") {
                for (var i = 0; i < correos.length; i++) {
                    correos[i].value = correos[i].value.toUpperCase(); 
                }
            }
            if (opcion === "a_minusculas") {
                for (var i = 0; i < correos.length; i++) {
                    correos[i].value = correos[i].value.toLowerCase(); 
                }
            }
        }, false);
        _log("_eventos04()", ["Terminando..."]);
    };
    var _main = function() {
        _log("_main()", ["Iniciando..."]);
        _eventos01();
        _eventos02();
        _eventos03();
        _eventos04();
        _log("_main()", ["Terminando..."]);
    };
    return {
        "main": _main
    };
})();
