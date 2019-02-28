#/bin/bash
echo "Android studio (v 3.3)"

echo "Download Flutter SDK from here."
echo "https://flutter.dev/docs/get-started/install/linux"

mkdir $HOME/development
mv flutter_linux_v1.0.0-stable.tar.xz $HOME/development
cd $HOME/development

tar xf flutter_linux_v1.0.0-stable.tar.xz
export PATH="$PATH:`pwd`/flutter/bin"

echo "= = = = = Download executables = = = = = "
sudo apt-get install -y lib32stdc++6

echo "= = = = = Android toolchain (licences) = = = = = "
flutter doctor --android-licenses

echo "= = = = = You are now ready to run Flutter commands! = = = = = "
flutter doctor


