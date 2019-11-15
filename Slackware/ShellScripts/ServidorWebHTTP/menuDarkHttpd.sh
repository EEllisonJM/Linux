#!/bin/bash
#https://unix4lyfe.org/darkhttpd/
#https://wiki.alpinelinux.org/wiki/Darkhttpd
if [ -e  $HOME/.local/sbin/darkhttpd ]
then
    clear
    #Menu
    echo 'Darkhttpd is a simple, fast HTTP 1.1 web server for static content.'
    echo '= = = = = = = = = = = = = = = = = = ='
    echo '1. Versión del Servidor HTTP Darkhttpd'
    echo '= = = = = = = = = = = = = = = = = = ='
    echo '2. Ejecutar Servidor HTTP Darkhttpd'
    echo "3. Detener Servidor HTTP Darkhttpd"
    echo '= = = = = = = = = = = = = = = = = = ='
    echo '4. Determinar si ya está en ejecución thttpd'
    echo '5. Mostrar direcciones IPs asociadas a host:'
    echo '= = = = = = = = = = = = = = ='
    read opcion
    #Opciones
    if [ "$opcion" = "1" ]
    then
        darkhttpd --help | head -1
    fi
    if [ "$opcion" = "2" ]
    then
    #Location of files to server
        rutaServidor=$HOME/www/darkhttpd01
        mkdir -p $rutaServidor        
        cd $rutaServidor
        echo "Hola, soy el servidor" > index.html
        echo "Ubicacion para los archivos del Servidor : $rutaServidor"
        echo " = = = Puerto = = = "
        read puerto
        #Establecer ubicacion Servidor y puerto
        darkhttpd $rutaServidor --port $puerto
    fi
    if [ "$opcion" = "3" ]
    then
        pids=$(pidof darkhttpd)
        kill -9 $pids
        echo "Servidor HTTP Darkhttpd detenido"
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
    echo 'Servidor HTTP Darkhttpd no encontrado en el sistema'
    echo 'Preparando instalación ...'
    mkdir -p $HOME/.local/src
    cd $HOME/.local/src
    git clone http://unix4lyfe.org/git/darkhttpd
    cd darkhttpd
    make
    cp darkhttpd $HOME/.local/sbin/    
    if [ -e  $HOME/.local/sbin/darkhttpd ]        
        then
        echo 'Servidor DarkHttpd Instalado'
    else
        'Ups, Algo salió mal. Yo no fui.'
    fi
fi