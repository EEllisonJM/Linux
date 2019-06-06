#/bin/bash
echo "https://www.digitalocean.com/community/tutorials/how-to-install-and-secure-phpmyadmin-on-ubuntu-18-04"

echo "Install MySQL"
sudo apt-get install -y mysql-server

echo "Install PHPMyAdmin"
echo "Select Apache2"
sudo apt install -y phpmyadmin php-mbstring php-gettext

echo "enable the mbstring PHP extension"
sudo phpenmod mbstring

echo "restart Apache for your changes to be recognized:"
sudo systemctl restart apache2

echo "sudo mysql"
echo "CREATE USER 'sammy'@'localhost' IDENTIFIED BY 'password';"
echo "Go to"
echo "http://your_domain_or_IP/phpmyadmin"
