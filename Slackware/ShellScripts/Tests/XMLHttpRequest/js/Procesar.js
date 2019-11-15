var Procesar = (function() {

    var empresas = [];
    var sucursales = [];
    /**/
    _cargar_select=function(obj_de_empresas){
        var select = document.getElementById('entrada');
        for(var i = 1; i < obj_de_empresas.length; i++){//Omitir encabezado
            var nuevo_option = document.createElement('option');
            nuevo_option.textContent = obj_de_empresas[i].id + ' -> ' + obj_de_empresas[i].nombre;
            nuevo_option.setAttribute('value', obj_de_empresas[i].id);
            select.appendChild(nuevo_option);
        };
    };

    _asignar_imagen=function(idEmpresa){
        var imagen=document.getElementById("imgEmpresa");
        imagen.setAttribute("src", "img/logotipos/"+idEmpresa+".png");

        
    };
    _asignar_objeto_empresa = function(texto){
        //var empresas = [];
        var raw = texto.split('\n');//new Array []
        var obj_empresa = {};
        for(var i = 0; i < raw.length; i++){
            var tmp = raw[i].split('|');//new Array[]
            obj_empresa.id = tmp[0];
            obj_empresa.nombre = tmp[1];
            empresas.push(obj_empresa);
            obj_empresa = {};
        };
        return empresas;    
    };
    _asignar_objeto_sucursal = function(texto){
        //var sucursales = [];
        var raw = texto.split('\n');//new Array []
        var obj_sucursal = {};
        for(var i = 0; i < raw.length; i++){
            var tmp = raw[i].split('|');//new Array[]
            obj_sucursal.id = tmp[0];
            obj_sucursal.nombre = tmp[1];
            sucursales.push(obj_sucursal);
            obj_sucursal = {};
        };
        return sucursales;    
    };

    //Tamaño CSV = 2
    var _cargar_tabla=function(idEmpresa){        
        //var datos_csv=parse_string_a_arreglo(documento_csv);
        var div_tablero = document.getElementById("tablero");

        if (tablero.firstChild){
            tablero.removeChild(tablero.firstChild);
        }

        var tabla = document.createElement("table");        
        var tabla_tbody = document.createElement("tbody");
        tabla.appendChild(tabla_tbody);

        for (var i = 0; i < sucursales.length; i++) {
                if(i===0){//Encabezado
                    var tabla_tr = document.createElement("tr");            

                    var td_casillaId = document.createElement("td");                
                    td_casillaId.textContent = sucursales[i].id;
                    tabla_tr.appendChild(td_casillaId);
                    //tabla_tbody.appendChild(tabla_tr);

                    var td_casillaNombre = document.createElement("td");                
                    td_casillaNombre.textContent = sucursales[i].nombre;
                    tabla_tr.appendChild(td_casillaNombre);

                    tabla_tbody.appendChild(tabla_tr);
                }else{
                    if(idEmpresa == sucursales[i].id){
                        console.log("Posicion: "+i)
                        var tabla_tr = document.createElement("tr");            
                        
                        var td_casillaId = document.createElement("td");
                        td_casillaId.textContent = sucursales[i].id;
                        console.log(sucursales[i].id);
                        tabla_tr.appendChild(td_casillaId);

                        var td_casillaNombre = document.createElement("td");
                        td_casillaNombre.textContent = sucursales[i].nombre;
                        console.log(sucursales[i].id);
                        tabla_tr.appendChild(td_casillaNombre);

                        tabla_tbody.appendChild(tabla_tr);
                    }
                    
                }

            };
            div_tablero.appendChild(tabla);
        }

        return {
        //'creaRellenaSelect': _crea_rellena_select,
        'cargarSelect': _cargar_select,
        'asignarEmpresas': _asignar_objeto_empresa,
        'asignarSucursal': _asignar_objeto_sucursal,
        'asignarImagen' : _asignar_imagen,
        'cargarTabla' : _cargar_tabla
    };
})();
