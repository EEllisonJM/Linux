#!/bin/bash
#Como usuario root:
echo 'Actualizando sistema operativo ...'
slackpkg update && slackpkg upgrade-all

echo 'Creando directorio $HOME/packages ...'
rm -rf $HOME/packages
mkdir -p $HOME/packages
cd $HOME/packages

echo 'Ingrese URL a descargar: '
read wgetURL
wget wgetURL -O URLS.txt

echo 'Descargando paquetes encontrados ...'
wget -c -i URLS.txt

echo 'Verificando la integridad de los paquetes descargados ...'
md5sum -c *.md5
echo 'IMPORTANTE: Observar que las lineas que contienen el nombre del paquete terminen en **OK** o La suma coincide'
echo 'De no ser asi intentar de nuevo.'

echo '¿Instalar-actualizar los paquetes?  y / n'
read opcion
if [ "$opcion" = "y" ]
	then
	upgradepkg --reinstall --install-new *.t?z
fi