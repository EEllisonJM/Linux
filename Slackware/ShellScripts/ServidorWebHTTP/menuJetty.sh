#!/bin/bash
#http://www.eclipse.org/jetty/
#Existe Servidor HTTP Jetty
#Jetty debe estar descoprimido en $HOME/www/jetty01
if [ -d $HOME/www/jetty01/jetty-distribution-9.4.8.v20171121/base/ ]
    then
    clear
    echo 'Jetty es un servidor HTTP 100% basado en Java y un contenedor de Servlets escrito en Java.'
    echo '= = = = = = = = = = ='
    echo '1. Ejecutar Servidor HTTP Jetty'
    echo "2. Detener Servidor HTTP Jetty"
    echo '= = = = = = = = = = ='
    echo '3. Determinar si ya está en ejecución thttpd'
    echo '4. Mostrar direcciones IPs asociadas a host:'
    echo '= = = = = = = = = = ='        
    read opcion

    if [ "$opcion" = "1" ]
        then
        rutaJetty=$HOME/www/jetty01/jetty-distribution-9.4.8.v20171121/base/
        rutaServidor=$rutaJetty/webapps/ROOT/
        cd $rutaJetty
        echo "Hola, soy el Servidor HTTP Jetty" > $rutaServidor/index.html
        echo " = = = Puerto = = = "
        read puerto
        java -jar ../start.jar jetty.http.port=$puerto

    fi
    if [ "$opcion" = "2" ]
        then
        pids=$(pidof Jetty)
        echo "Servidor HTTP Jetty detenido"
    fi
    if [ "$opcion" = "3" ]
        then
        netstat -plutn
    fi
    if [ "$opcion" = "4" ]
        then
        cat nano /etc/hosts
    fi
else
    echo 'Servidor HTTP Jetty no encontrado en el sistema'           
    cd $HOME/Slackware/
    echo 'Descargando Servidor HTTP Jetty ...'
    wget central.maven.org/maven2/org/eclipse/jetty/jetty-distribution/9.4.8.v20171121/jetty-distribution-9.4.8.v20171121.zip
    echo 'Preparando instalación ...'
    mkdir -p $HOME/www/jetty01
    cd $HOME/www/jetty01
    unzip -o $HOME/Slackware/jetty-distribution-9.4.8.v20171121.zip
    cd jetty-distribution-9.4.8.v20171121
    mkdir base
    cd base
    java -jar ../start.jar  --create-startd --add-to-start=http,deploy
    mkdir webapps/ROOT    
    if [ -d $HOME/www/jetty01/jetty-distribution-9.4.8.v20171121/base/ ]
        then
        echo 'Servidor Jetty Instalado'
        #menuJetty
    else
        'Ups, Algo salió mal. Yo no fui.'
    fi
fi