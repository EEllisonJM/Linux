#!/usr/bin/env python3
import http.server
puerto = 8083
servidor = http.server.HTTPServer(("", puerto), http.server.CGIHTTPRequestHandler)
try:
	print("Atendiendo solicitudes en ", puerto)
	servidor.serve_forever()
except KeyboardInterrupt:
		print("Deteniendo servidor...")
servidor.socket.close()

			
	
