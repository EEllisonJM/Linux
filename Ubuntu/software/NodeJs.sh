#/bin/bash
sudo apt update
echo "= = = = = Install NodeJS  = = = = ="
echo "Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine."
sudo apt install -y nodejs

echo "= = = = = Install npm  = = = = ="
sudo apt install -y npm
echo "= = = = = Version NodeJS  = = = = ="
nodejs -v


