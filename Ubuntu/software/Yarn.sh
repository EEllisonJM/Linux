#/bin/bash
echo "= = = = = Install Curl = = = = = "
sudo apt install -y curl
echo "= = = = = Configure repository = = = = = "
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

echo "= = = = = Install yarn = = = = = "
sudo apt-get update && sudo apt-get install -y yarn

echo "= = = = = yarn version = = = = = "
yarn --version

