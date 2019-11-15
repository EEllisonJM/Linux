#/bin/bash
echo "Make a directory for global installations:"
mkdir ~/.npm-global

echo "Configure npm to use the new directory path:"
npm config set prefix '~/.npm-global'

echo "Open or create a ~/.profile file and add this line:"
export PATH=~/.npm-global/bin:$PATH

echo "Back on the command line, update your system variables:"
source ~/.profile

echo "Test: Download a package globally without using sudo."
npm install -g typescript