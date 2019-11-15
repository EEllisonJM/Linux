#!/bin/bash
if [ -e  /usr/lib64/java/bin/java ]
	then
	echo "Iniciando descarga ..."
	mkdir -p $HOME/Descargas
	cd $HOME/Descargas
	wget -c http://download.netbeans.org/netbeans/8.2/final/zip/netbeans-8.2-201609300101.zip
	
	echo "Iniciando instalación ..."
	mkdir -p $HOME/.local/opt/
	cd $HOME/.local/opt/
	unzip -o $HOME/Descargas/netbeans-8.2-201609300101.zip
	cd /home/alumno/.local/opt/netbeans/bin

	echo "Terminal access"
	mkdir -p $HOME/.local/bin/
	printf "#!/bin/bash\n$HOME/.local/opt/netbeans/bin/./netbeans" > $HOME/.local/bin/netbeans
	chmod +x $HOME/.local/opt/netbeans/bin/./netbeans
	echo "Iniciando netbeans"
	$HOME/.local/opt/netbeans/bin/./netbeans
else 
	echo "Ups, JAVA no encontrado..."
	echo "No se que hacer, pregunta a StackOverflow..."
fi

