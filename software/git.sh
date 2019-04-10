#/bin/bash
echo "= = = = = = = Update packages = = = = = = ="
sudo apt update

echo "= = = = = = = Install git = = = = = = ="
sudo apt install -y git

echo "= = = = = = =  Confirm installation = = = = = = ="
git --version

echo "= = = = = = =  Set up git = = = = = = ="
echo "[User name] "
read userName
git config --global user.name "$userName"
echo "[E-mail] "
read userEmail
git config --global user.email "$userEmail"

echo "= = = = = = =  Confirm user = = = = = = ="
cat ~/.gitconfig


