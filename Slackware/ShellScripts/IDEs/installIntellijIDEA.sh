#!/bin/bash
if [ -e  /usr/lib64/java/bin/java ]
	then
	echo "Iniciando descarga ..."
	cd $HOME/Descargas
	wget -c https://sources.voidlinux.eu/intellij-idea-community-edition-2017.3.3/ideaIC-2017.3.3-no-jdk.tar.gz
	
	echo "Iniciando instalación ..."
	mkdir -p $HOME/.local/opt/
	cd $HOME/.local/opt/
	tar xf $HOME/Descargas/ideaIC-2017.3.3-no-jdk.tar.gz
	mv idea-IC-173.4301.25 idea

	
	echo "Terminal access"
	mkdir -p $HOME/.local/bin/
	printf "#!/bin/bash\n$HOME/.local/opt/idea/bin/./idea.sh" > $HOME/.local/bin/intellijIDEA
	chmod +x $HOME/.local/bin/intellijIDEA
	echo "Iniciando intellijIDEA"
	$HOME/.local/opt/idea/bin/./idea.sh
else 
	echo "Ups, JAVA no encontrado..."
	echo "No se que hacer, pregunta a StackOverflow..."
fi

