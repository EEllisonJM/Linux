var XHR = (function (){
    var _get = function(url){
      var xhr = new XMLHttpRequest;
      xhr.onreadystatechange = function(){
        //when xhr.readyState === 4, it was received by the server
        if(xhr.readyState === 4){//if(xhr.readyState.DONE){
          Procesar.cargarSelect(_asignar_objeto_empresa(xhr.responseText));
        }
      };
      xhr.open('GET', url);
      xhr.send();
    };

    var _asignarObjetoSucursal = function(url){
      var xhr = new XMLHttpRequest;
      xhr.onreadystatechange = function(){
        //when xhr.readyState === 4, it was received by the server
        if(xhr.readyState === 4){//if(xhr.readyState.DONE){          
          //Procesar.cargarTabla(_asignar_objeto_sucursal(xhr.responseText));
          _asignar_objeto_sucursal(xhr.responseText);
          
        }
      };
      xhr.open('GET', url);
      xhr.send();
    };

    return {
      'get': _get,
      'asignarSucursales': _asignarObjetoSucursal
    };

})();
