#!/bin/bash
#http://yaws.hyber.org/
if [ -e  $HOME/.local/sbin/Yaws ]
then
    clear
    echo 'Servidor HTTP thttpd'
    echo 'Se caracteriza por ser simple, pequeño, portátil, rápido, y seguro, ya que utiliza requerimientos mínimos.'
    echo '= = = = = = = = = = ='
    echo '1. Versión del Servidor HTTP Throttling '
    echo '= = = = = = = = = = ='
    echo '2. Ejecutar Servidor HTTP Throttling'        
    echo "3. Detener Servidor HTTP Throttling"
    echo '= = = = = = = = = = ='
    echo '4. Determinar si ya está en ejecución thttpd'
    echo '5. Mostrar direcciones IPs asociadas a host:'
    echo '= = = = = = = = = = ='        
    read opcion

    if [ "$opcion" = "1" ]
    then
        thttpd -V 
    fi
    if [ "$opcion" = "2" ]
    then
    	rutaServidor=$HOME/www/thttpd01
        mkdir -p $rutaServidor
        cd $rutaServidor
        echo "Hola, soy el servidor HTTP Thttpd" > index.html
        echo "Ubicacion para los archivos del Servidor : $rutaServidor"
        echo " = = = Puerto = = = "
        read puerto
        thttpd -D -p $puerto -d $rutaServidor -nor -T UTF-8 -l -

    fi
    if [ "$opcion" = "3" ]
    then
        pids=$(pidof thttpd)
        kill -9 $pids
            echo "Servidor HTTP Throttling detenido"

    fi
    if [ "$opcion" = "4" ]
    then
        netstat -plutn
    fi
    if [ "$opcion" = "5" ]
    then
        cat nano /etc/hosts
    fi
else
    echo 'Servidor HTTP Throttling no encontrado en el sistema'       
    echo 'Preparando instalación ... '
    mkdir -p $HOME/.local/src
    cd $HOME/.local/src
    git clone https://github.com/blueness/sthttpd
    cd sthttpd
    ./configure --prefix=$HOME/.local
    make
    make install WEBDIR=$HOME/.local/var/www WEBGROUP=users
    if [ -e  $HOME/.local/sbin/thttpd ]
        then
        echo 'Servidor Thttpd Instalado'
    else
        'Ups, Algo salió mal. Yo no fui.'
    fi

fi