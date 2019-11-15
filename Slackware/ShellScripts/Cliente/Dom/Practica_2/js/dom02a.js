var dom02a = (function() {
  var _localizacion = function() {
    /*
     * Algunas propiedades del objeto window.location:
     *   host
     *   hostname
     *   href
     *   pathname
     *   port
     *   assign()
     *   reload()
     * Documentación:
     *   https://developer.mozilla.org/en/docs/Web/API/Location
     */
    return window.location;
  };

  var _historial = function() {
    /*
     * Algunas propiedades del objeto window.history:
     *   back()
     *   forward()
     * Documentación:
     *   https://developer.mozilla.org/en/docs/Web/API/History
     */
    return window.history;
  };

  var _navegador = function() {
    /*
     * Algunas propiedades del objeto window.navigator:
     *   userAgent
     *   language
     *   languages
     *   onLine
     *   oscpu
     * Documentación:
     *   https://developer.mozilla.org/en/docs/Web/API/Navigator
     */
    return window.navigator;
  };

  var _alertar_al_usuario = function(mensaje) {
    /*
     * Documentación:
     *   https://developer.mozilla.org/en/docs/Web/API/Window/alert
     */
    if (typeof mensaje !== "string") {
      window.alert("");
    } else {
      window.alert(mensaje);
    }
  };

  var _solicitar_confirmacion_al_usuario = function(mensaje) {
    /*
     * Documentación:
     *   https://developer.mozilla.org/en/docs/Web/API/Window/confirm
     */
    if (typeof mensaje !== "string") {
      return window.confirm("");
    }
    return window.confirm(mensaje);
  };

  var _solicitar_valor_al_usuario = function(mensaje, por_default) {
    /*
     * Documentación:
     *   https://developer.mozilla.org/en/docs/Web/API/Window/prompt
     */
    var _mensaje = mensaje;
    var _por_default = por_default;
    if (typeof mensaje !== "string") {
      _mensaje = "";
    }
    if (typeof por_default !== "string") {
      _por_default = "";
    }
    return window.prompt(_mensaje, _por_default);
  };

  var _imprimir_documento = function() {
    /*
     * Documentación:
     *   https://developer.mozilla.org/en/docs/Web/API/Window/print
     */
    window.print();
  };

  var _consola = function() {
    /* Algunas propiedades del objeto window.console:
     *   dir()
     *   error()
     *   group() / groupEnd()
     *   info()
     *   log()
     *   table()
     *   time() / timeEnd()
     *   timeStamp()
     *   warn()
     * Documentación:
     *   https://developer.mozilla.org/en/docs/Web/API/Console
     */
    return window.console;
  };

  var _documento = function() {
    /*
     * Algunas propiedades del objeto window.document:
     *   characterSet
     *   doctype
     *   documentURI
     *   body
     *   domain
     *   location
     *   scripts
     *   title
     *   URL
     *   write()
     * Documentación:
     *   https://developer.mozilla.org/en/docs/Web/API/Window/document
     *   https://developer.mozilla.org/en/docs/Web/API/document
     */
    return window.document;
  };

  return {
    "localizacion": _localizacion,
    "historial": _historial,
    "navegador": _navegador,
    "alertar_al_usuario": _alertar_al_usuario,
    "solicitar_confirmacion_al_usuario": _solicitar_confirmacion_al_usuario,
    "solicitar_valor_al_usuario": _solicitar_valor_al_usuario,
    "imprimir_documento": _imprimir_documento,
    "consola": _consola,
    "documento": _documento
  };
})();