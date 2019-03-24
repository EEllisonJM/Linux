#/bin/bash
echo "add i386 architecture(32 bits)"
sudo dpkg --add-architecture i386
echo "= = = = = Wine Stable keys= = = = ="
wget -qO- https://dl.winehq.org/wine-builds/winehq.key | sudo apt-key add -
sudo apt-add-repository 'deb http://dl.winehq.org/wine-builds/ubuntu/ bionic main'

echo "Installing Wine Stable"
sudo apt-get install --install-recommends winehq-stable
echo "Wine version ... "
wine --version

echo "PlayOnLinux"
sudo apt install -y playonlinux
echo "Other dependencies"
sudo apt-get install -y winbind
sudo apt-get install -y unrar-free p7zip-full
