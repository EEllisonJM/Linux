#/bin/bash
cd /tmp/
mkdir emby
cd emby
wget -c https://github.com/MediaBrowser/Emby.Releases/releases/download/4.0.2.0/emby-server-deb_4.0.2.0_amd64.deb
chmod +x emby-server-deb_4.0.2.0_amd64.deb
sudo dpkg -i emby-server-deb_4.0.2.0_amd64.deb
echo '= = = = = Stop Emby Server (Reboot)= = = = = '
echo 'sudo systemctl disable emby-server.service'

echo '= = = = =  Start  Emby Server = = = = = '
echo 'sudo service emby-server start'

echo 'Star client on Firefox browser'
firefox http://localhost:8096

