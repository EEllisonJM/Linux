/*Tablero de Ajedrez
 
Codificación Unicode / HTML de Piezas
Coordenadas
console.log("\u2654");
Archivo CSV (estático y ofrecido por el servidor): http://.../csv/tablero.csv
a|b|c|d|e|f|g|h
♜|♞|♝|♛|♚|♝|♞|♜
♟|♟|♟|♟|♟|♟|♟|♟
∅|∅|∅|∅|∅|∅|∅|∅
∅|∅|∅|∅|∅|∅|∅|∅
∅|∅|∅|∅|∅|∅|∅|∅
∅|∅|∅|∅|∅|∅|∅|∅
♙|♙|♙|♙|♙|♙|♙|♙
♖|♘|♗|♕|♔|♗|♘|♖
Fuente: https://en.wikipedia.org/wiki/Chess_symbols_in_Unicode
*/
var Ajedrez = (function (){
    /*mostrarTablero: será ejecutada únicamente al momento de acceder a index.html
    y mostrará el Tablero de Ajedrez haciendo uso de la Codificación Unicode / HTML
    de Piezas a partir de la descarga de un archivo CSV que indica el estado del tablero.*/
    var _mostrar_tablero=function (){
        establecer_evento_actualizar_tablero();
        url="http://examen_ajedrez.com:8081/csv/tablero.csv";
        _descargar(url);
    }

    var _descargar=function(servidor){    
        var xhr = new XMLHttpRequest();    
        xhr.onreadystatechange = function ()
        {
            if(xhr.readyState === 4)
            {
                var mensaje = document.getElementById("mensaje");
                mensaje.textContent = "";
                if(xhr.status === 200 || xhr.status == 0)
                {
                    _tablero(eliminar_en_string("\n",eliminar_en_string("|",xhr.responseText)));

                }else{
                  mensaje.textContent = "Error " + this.status + " " + this.statusText + " - " + this.responseURL;
              }
          }
      }
      xhr.open("GET", servidor, true);
      xhr.send();
  };
  /*moverPieza: Será ejecutada manualmente, en consola, recibiendo un
  objeto con parámetros-llaves, la llave “de” y “a”. La llaven “de” indica
  la ubicación de la pieza a mover en base a sus coordenadas (letra-número
  del tablero), mientras que la llave “en” indica la ubicación a mover la
  pieza, de igual forma en base a sus coordenadas. Ejemplos:
   
  Ajedrez.moverPieza({“de”: “a2”, “a”: “a3”}); // Movería el peón de a2 a a3.
  Ajedrez.moverPieza({“de”: “g8”, “a”: “h6”}); // Movería el caballo de g8 a h6.
  La operación moverPieza no considera la lógica necesaria para determinar si
  la pieza a mover cumple las reglas del juego pero si la lógica necesaria
  para determinar que la pieza a mover exista y el lugar a moverla se
  encuentra vacía, de no ser así notificarle al usuario de esto.*/

  var _mover_pieza = function (movimientos){
    console.log(movimientos);
    var puntoInicial = document.getElementById(movimientos.de);
    var puntoFinal = document.getElementById(movimientos.a);
    //Si esta vacio
    if(puntoFinal.textContent==="∅"){
        puntoFinal.textContent = puntoInicial.textContent;
        puntoInicial.textContent= "∅";
    }else{
        //Mostrar mensaje de error
        var mensaje = document.getElementById("mensaje");
        mensaje.textContent="Imposible de realizar";
    }        
};
    /*actualizarTablero: será ejecutada mediante un botón (<input>) ubicado en el 
    elemento <div id=”opcion”></div> que permitirá descargar el archivo CSV, una 
    vez más, actualizando el Tablero de Ajedrez (se pierde su estado actual).*/
    var _actualizar_tablero=function() {
        _mostrar_tablero();
    };
    var _tablero=function(documento_csv){
        var datos_csv=parse_string_a_arreglo(documento_csv);

        var div_tablero = document.getElementById("tablero");

        if (tablero.firstChild){
            tablero.removeChild(tablero.firstChild);
        }

        var tabla = document.createElement("table");
        var tabla_tbody = document.createElement("tbody");
        tabla.appendChild(tabla_tbody);

        var alfabeto = ["a","b","c","d","e","f","g","h"];
        var temp=0;
        var temp2=9;
        for (var i = 0; i < 9; i++) {
            var tabla_tr = document.createElement("tr");
            for (var j = 0; j < 8; j++) {//ok
                if(i===0){//Encabezado
                    var td_casilla = document.createElement("td");                
                    td_casilla.textContent = datos_csv[i][j];
                    tabla_tr.appendChild(td_casilla);
                    tabla_tbody.appendChild(tabla_tr);                
                }else{
                    var td_casilla = document.createElement("td");
                    td_casilla.id=alfabeto[temp]+temp2;
                    console.log(datos_csv[i][j]+" - "+alfabeto[temp]+temp2);
                    td_casilla.textContent = datos_csv[i][j];
                    tabla_tr.appendChild(td_casilla);
                }               
                tabla_tbody.appendChild(tabla_tr);
                temp++;
            }
            temp=0;;
            temp2--;
        };
        div_tablero.appendChild(tabla);
    }
    /*Convertir un archivo csv en un arreglo de caracteres*/
    var parse_string_a_arreglo=function(cadena){
        var arre_casillas=new Array(9);
        var count=0;
        for (var i = 0; i < 9; i++) {
            var casillas=new Array(8);
            for (var j = 0; j < 8; j++) {
                casillas[j]=cadena[count++];
            };
            arre_casillas[i]=casillas;
        };
        return arre_casillas;
    }
    var eliminar_en_string=function(eliminar,cadena){
        return cadena.split(eliminar).join("");
    };
    var establecer_evento_actualizar_tablero = function() {
      var boton_descargar = document.getElementById("actualizar");
      boton_descargar.addEventListener('click', _actualizar_tablero, false);
  };

  return {
    "mostrarTablero" : _mostrar_tablero,
    "actualizarTablero": _actualizar_tablero,
    "moverPieza" : _mover_pieza   
}
})();