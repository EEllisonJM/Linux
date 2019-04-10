#/bin/bash

echo "https://sourceforge.net/projects/xampp/files/XAMPP%20Linux/7.3.2/xampp-linux-x64-7.3.2-0-installer.run/download"
cd /tmp/
wget -c https://sourceforge.net/projects/xampp/files/XAMPP%20Linux/7.3.2/xampp-linux-x64-7.3.2-0-installer.run/download
mv download xampp-linux-x64-7.3.2-0-installer.run
chmod +x xampp-linux-x64-7.3.2-0-installer.run
sudo ./xampp-linux-x64-7.3.2-0-installer.run

#sudo apt-get install gksu
sudo apt-get install -y python-glade2
