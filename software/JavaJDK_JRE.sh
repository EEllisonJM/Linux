#/bin/bash
echo "- - - - - Default JRE - - - - -"
sudo apt install -y default-jre            
echo "- - - - - Open JRE - JRE - 11 - - - - -"
sudo apt install -y openjdk-11-jre-headless
echo "- - - - - Open JRE - JRE - 8 - - - - -"
sudo apt install -y openjdk-8-jre-headless 
echo "- - - - - Java Version - - - - -"
java -version
