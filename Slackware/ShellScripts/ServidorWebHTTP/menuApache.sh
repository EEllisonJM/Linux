#!/bin/bash
if [ -e  /usr/sbin/httpd ]
then
       clear
       echo '= = = = = = = = = = ='
        echo '1. Versión del Servidor HTTP Apache'
        echo '2. Opciones con las que fue compilado:'
        echo '3. Determinar si Apache está en ejecución'
        echo '= = = = = = = = = = ='
        echo '4. Asignar permisos de ejecución al Servidor HTTP Apache'
        echo '= = = = = = = = = = ='
        echo '5. Iniciar Servidor HTTP Apache'
        echo '6. Detener Servidor HTTP Apache'
        echo '7. Reiniciar Servidor HTTP Apache'
        echo '= = = = = = = = = = ='        
        echo ' 8. Archivo de configuracion'
        echo ' 9. Directorio Raiz (Document root)'
        echo '10. Modulos disponibles'
        echo '11. Configurar VirtualHost'
        echo '12. Puertos TCP utilizados'
        
        read opcion

        if [ "$opcion" = "1" ]
        then
            httpd -v
        fi
        if [ "$opcion" = "2" ]
        then
            httpd -V
        fi
        if [ "$opcion" = "3" ]
        then
            netstat -plutn
        fi
        if [ "$opcion" = "4" ]
        then
            chmod +x /etc/rc.d/rc.httpd
        fi
        if [ "$opcion" = "5" ]
        then
            /etc/rc.d/rc.httpd start
        fi
        if [ "$opcion" = "6" ]
        then
            /etc/rc.d/rc.httpd stop
        fi
        if [ "$opcion" = "7" ]
        then
            /etc/rc.d/rc.httpd restart
        fi
        if [ "$opcion" = "8" ]
        then            
            httpd -V | grep SERVER_CONFIG_FILE
        fi
        if [ "$opcion" = "9" ]
        then
            echo 'Nota: /srv/httpd es un vínculo a /var/www'
            echo 'Por lo que el directorio /srv/httpd/htdocs es en realidad el directorio /var/www/htdocs.'
            egrep '^DocumentRoot' /etc/httpd/httpd.conf
        fi
        if [ "$opcion" = "10" ]
        then
            httpd -M
        fi
        if [ "$opcion" = "11" ]
        then
            nano /etc/httpd/extra/httpd-vhosts.conf
        fi
        if [ "$opcion" = "12" ]
        then
            grep -E '^Listen' /etc/httpd/httpd.conf
            grep '<VirtualHost' /etc/httpd/extra/httpd-vhosts.conf
            cat /etc/httpd/extra/httpd-vhosts.conf
        fi

else
        echo 'Apache no encontrado en el sistema'       
fi
