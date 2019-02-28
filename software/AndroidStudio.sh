#/bin/bash

echo "= = = = Install ADB and Fastboot = = = = "
sudo apt update
sudo apt install -y android-tools-adb android-tools-fastboot
echo "Check ADB version"
adb version

echo "Permision denied /deb/kvm"
echo "= = = = Emulator = = = ="
sudo apt install -y qemu-kvm

echo "User name"
read yourname
sudo adduser $yourname /deb/kvm
sudo chown $yourname /dev/kvm
