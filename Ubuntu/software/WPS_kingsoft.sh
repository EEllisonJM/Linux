#/bin/bash
echo "= = = = = = = = Solve = = = = = = = ="
echo "Some formula symbols might not be displayed correctly due to missing fonts Symbol, Wingdings, Wingdings 2, Wingdings 3, MT Extra."

echo "= = = = = = = = Go to temp folder = = = = = = = ="
cd /tmp

echo "= = = = = = = = Get fonts = = = = = = = ="
git clone https://github.com/udoyen/wps-fonts.git
sudo mkdir /usr/share/fonts/kingsoft
sudo mv wps-fonts/wps/* /usr/share/fonts/kingsoft
rm -r wps-fonts
sudo chown -R "$USER":"$USER" /usr/share/fonts/kingsoft
sudo chmod -R o+rw,g+rw /usr/share/fonts/kingsoft
run sudo fc-cache -vfs

echo "= = = = = = = = Get equation editor similar to the one in MS Office = = = = = = = ="
sudo apt-get install -y qalculate
