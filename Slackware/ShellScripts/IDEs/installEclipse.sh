#!/bin/bash
if [ -e  /usr/lib64/java/bin/java ]
	then
	echo "Iniciando descarga ..."
	cd $HOME/Descargas
	wget -c http://www.mirrorservice.org/sites/download.eclipse.org/eclipseMirror/technology/epp/downloads/release/oxygen/2/eclipse-java-oxygen-2-linux-gtk-x86_64.tar.gz
	
	echo "Iniciando instalación ..."
	mkdir -p $HOME/.local/opt/
	cd $HOME/.local/opt/
	tar xvf $HOME/Descargas/eclipse-java-oxygen-2-linux-gtk-x86_64.tar.gz
	mv eclipse eclipse-java

	echo "Terminal access"
	mkdir -p $HOME/.local/bin/
	printf "#!/bin/bash\n$HOME/.local/opt/eclipse-java/./eclipse" > $HOME/.local/bin/eclipse
	chmod +x $HOME/.local/bin/eclipse
	echo "Iniciando eclipse"
	$HOME/.local/opt/eclipse-java/./eclipse
else 
	echo "Ups, JAVA no encontrado..."
	echo "No se que hacer, pregunta a StackOverflow..."
fi

