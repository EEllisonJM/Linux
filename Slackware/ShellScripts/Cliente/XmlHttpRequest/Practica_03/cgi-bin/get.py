 #!/usr/bin/env python3
 import os, cgi
 solicitud = cgi.FieldStorage()
 agente_de_usuario = os.environ["HTTP_USER_AGENT"]
 referencia_http = os.environ["HTTP_REFERER"]
 archivo_cgi = os.environ["SCRIPT_NAME"]
 nombre = ""
 nacimiento = ""
 if "nombre" in solicitud:
   nombre = solicitud["nombre"].value
 if "nacimiento" in solicitud:
   nacimiento = solicitud["nacimiento"].value
 print("Content-Type: text/plain")
 print("")
 print("Servidor:", referencia_http)
 print("Script:", archivo_cgi)
 print("Agente de usuario:", agente_de_usuario)
 print("")
 print("nombre =", nombre)
 print("nacimiento =", nacimiento)
