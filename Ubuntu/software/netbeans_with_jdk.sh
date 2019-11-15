#/bin/bash

file=./jdk-8u111-nb-8_2-linux-x64.sh

if [ -e "$file" ]; then
    echo "= = = = = = = Add execution permission = = = = = = ="
    chmod +x jdk-8u111-nb-8_2-linux-x64.sh

    echo "= = = = = = = Install = = = = = = ="
    sh jdk-8u111-nb-8_2-linux-x64.sh
    
else 
    echo "File does not exist"
    echo "Download from : "
    echo "https://www.oracle.com/technetwork/es/java/javase/downloads/jdk-netbeans-jsp-3413139-esa.html"
fi
