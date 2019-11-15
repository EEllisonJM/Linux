 var Codigo = (function() {
   var _sumatoria_hasta_el = function(final) {
        // Falta la implementación de esta función
   	if(Number.isInteger(final)){
   		if(final <= 0){
   			return 0;
        }
        return _sumatoria_hasta_el(final-1) + final ;
   	}else{
   		return 0;
   	}
   };

   return {
     "sumatoria_hasta_el": _sumatoria_hasta_el  
   };
 })();
