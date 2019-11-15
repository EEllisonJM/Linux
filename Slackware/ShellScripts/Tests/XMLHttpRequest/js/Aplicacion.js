var Aplicacion = (function (){

    var _selecciona_empresa = function(){
        var entrada = document.getElementById('entrada').value;        

        _asignar_imagen(entrada);
        Procesar.cargarTabla(entrada);
    };


    var _main = function(){
       XHR.get('csv/empresas.csv');
       XHR.asignarSucursales('csv/sucursales.csv');

       var botonAceptar = document.getElementById('aceptar');
        botonAceptar.addEventListener('click', _selecciona_empresa, false);
    };

    return {
        'main': _main
    }
})();
