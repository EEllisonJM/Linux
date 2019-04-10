echo "Snaps"
echo "snapd is the service which runs on your machine and keeps track of your installed snaps, interacts with the store and provides the snap command for you to interact with it. Installing it on any of the Linux distributions mentioned below is straight-forward."
sudo apt install -y snapd

echo "Visual Studio Code"
snap install vscode 
snap install vscode --classic
