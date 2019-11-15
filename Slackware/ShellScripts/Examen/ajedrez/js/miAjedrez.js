var Ajedrez=(function(){
	var estructura_color_casilla=function(){
		return [
		[0,1,0,1,0,1,0,1],//0
		[1,0,1,0,1,0,1,0],
		[0,1,0,1,0,1,0,1],
		[1,0,1,0,1,0,1,0],//3
		[0,1,0,1,0,1,0,1],
		[1,0,1,0,1,0,1,0],
		[0,1,0,1,0,1,0,1],
		[1,0,1,0,1,0,1,0]//7
		];
	};
	var estructura_piezas_tablero=function(){
		return [
		["TND","CND","AND","rN","RN","ANI","CNI","TNI"],//0
		["PN","PN","PN","PN","PN","PN","PN","PN"],
		["na","na","na","na","na","na","na","na"],
		["na","na","na","na","na","na","na","na"],//3
		["na","na","na","na","na","na","na","na"],
		["na","na","na","na","na","na","na","na"],
		["PB","PB","PB","PB","PB","PB","PB","PB"],
		["TBI","CBI","ABI","rB","RB","ABD","CBD","TBD"],//7
		];
	};

	var _establecer_pieza=function(x,y,td_casilla){		

		if(estructura_piezas_tablero()[x][y-1]==="PN"){
			td_casilla.textContent = "\u265F";
		}
		if(estructura_piezas_tablero()[x][y-1]==="TND"){
			td_casilla.textContent = "\u265C";
		}
		if(estructura_piezas_tablero()[x][y-1]==="CND"){
			td_casilla.textContent = "\u265E";
		}
		if(estructura_piezas_tablero()[x][y-1]==="AND"){
			td_casilla.textContent ="\u265d";
		}
		if(estructura_piezas_tablero()[x][y-1]==="rN"){			
			td_casilla.textContent ="\u265b";
		}
		if(estructura_piezas_tablero()[x][y-1]==="RN"){
			td_casilla.textContent ="\u265a";
		}
		if(estructura_piezas_tablero()[x][y-1]==="ANI"){
			td_casilla.textContent ="\u265d";
		}
		if(estructura_piezas_tablero()[x][y-1]==="CNI"){
			td_casilla.textContent ="\u265E";
		}
		if(estructura_piezas_tablero()[x][y-1]==="TNI"){			
			td_casilla.textContent ="\u265C";
		}
		//-------------------		
		
		if(estructura_piezas_tablero()[x][y-1]==="PB"){
			td_casilla.textContent = "\u2659";
		}
		if(estructura_piezas_tablero()[x][y-1]==="TBI"){
			td_casilla.textContent = "\u2656";
		}
		if(estructura_piezas_tablero()[x][y-1]==="CBI"){
			td_casilla.textContent = "\u2658";//
		}
		if(estructura_piezas_tablero()[x][y-1]==="ABI"){
			td_casilla.textContent ="\u2657";
		}
		if(estructura_piezas_tablero()[x][y-1]==="rB"){			
			td_casilla.textContent ="\u265b";
		}
		if(estructura_piezas_tablero()[x][y-1]==="RB"){
			td_casilla.textContent ="\u2654";
		}
		if(estructura_piezas_tablero()[x][y-1]==="ABD"){
			td_casilla.textContent ="\u2657";
		}
		if(estructura_piezas_tablero()[x][y-1]==="CBD"){
			td_casilla.textContent = "\u2658";
		}
		if(estructura_piezas_tablero()[x][y-1]==="TBD"){			
			td_casilla.textContent = "\u2656";
		}

	};
	
	/*Cargar tablero*/
	var _cargar_tablero=function(){
		var div_tablero = document.getElementById("tablero");
		var tabla = document.createElement("table");
		var tabla_tbody = document.createElement("tbody");
		tabla.appendChild(tabla_tbody);
		
		for (var i = 0; i < estructura_color_casilla().length; i++) {
			var tabla_tr = document.createElement("tr");

			for (var j = 0; j < estructura_color_casilla().length+1; j++) {//ok
				if(j===0){
					var td_casilla = document.createElement("td");
					td_casilla.textContent = _obtener_nombre_fila(i);
					tabla_tr.appendChild(td_casilla);
				}else{
					var td_casilla = document.createElement("td");

					_establecer_color_casilla(i,j,td_casilla);
					_establecer_pieza(i,j,td_casilla);
					tabla_tr.appendChild(td_casilla);
				}				
			};			
			tabla_tbody.appendChild(tabla_tr);
			
		};
		var tabla_tr = document.createElement("tr");
		for (var i = 0; i < 9; i++) {
			var td_casilla = document.createElement("td");
			td_casilla.textContent = _obtener_nombre_columna(i);
			tabla_tr.appendChild(td_casilla);
		};
		tabla_tbody.appendChild(tabla_tr);		
		div_tablero.appendChild(tabla);
	};
	/*Mover pieza*/
	var _cargar_piezas_Blancas_en_tablero=function(posicionInicial,posicionFinal){

	};
	var _obtener_nombre_fila=function(index){
		var arreFilas=[1,2,3,4,5,6,7,8];
		return arreFilas[index];
	};
	var _obtener_nombre_columna=function(index){
		var arreColumna=["X","a","b","c","d","e","f","g","h"];
		return arreColumna[index];
	};

	var _establecer_color_casilla = function(x,y,td_casilla) {
		var color_casillas=estructura_color_casilla();
		if(color_casillas[x][y-1]==0){
			td_casilla.style.background = "rgb(255, 0, 0)";
		}else{
			td_casilla.style.background = "rgb(0, 0, 255)";
		}		
	}
	return {
		"cargar_tablero": _cargar_tablero,
		"cargar_piezas_Negras_en_tablero": _cargar_piezas_Negras_en_tablero,
		"cargar_piezas_Blancas_en_tablero": _cargar_piezas_Blancas_en_tablero,
		"establecer_color_casilla": _establecer_color_casilla,
		"establecer_pieza": _establecer_pieza
	};
})();


