#!/bin/bash
clear
echo '= = = Network Configuration - Ethernet interfaces = = ='
echo '1. Start dinamic configuration'        
echo '2. Stop dinamic configuration'
echo ' = = = = = = = = = = = = = = = = = = = = = = = = = = '
echo '3. Start static configuration'
echo '4. Start default static configuration - DSOS'
echo ' = = = = = = = = = = = = = = = = = = = = = = = = = = '
echo '5. Remove route configuration'
echo '6. Remove default route configuration'
echo ' = = = = = = = = = = = = = = = = = = = = = = = = = = '
read mainOption

if [ "$mainOption" = "1" ]
    then
    ip link set dev eth0 down
    ip addr flush dev eth0 up    
    dhclient -v -4 -pf /root/dhclient.pid eth0
fi
if [ "$mainOption" = "2" ]
    then            
    dhclient -r -pf /root/dhclient.pid
    ip link set dev eth0 down
fi 
if [ "$mainOption" = "3" ]
    then
    echo 'Static ip configuration'
            #turn down interface
            ip link set eth0 down
            #flush old ip
            ip addr flush dev eth0 up
            #add static ip
            echo 'Static IP: '
            read ip
            echo 'Mask: '
            read mask
            ip addr add $ip/$mask dev eth0 broadcast +
            #turn on interface
            ip link set eth0 up
            #add gateway
            echo 'Gateway: '
            read gateway
            ip route add default via $gateway
            echo 'DNS server IP addresses:'
            echo '1. Use Google DNS'
            echo '2. Choose my DNS server'
            read opDNS
            if [ "$opDNS" = "1" ]
                then                
                printf 'nameserver 8.8.8.8\nnameserver 8.8.4.4' > /etc/resolv.conf
            fi
            if [ "$opDNS" = "2" ]
                then
                echo 'DNS server: '
                read myDNS
                echo nameserver $myDNS > /etc/resolv.conf
            fi            
            #after this you can perform a ping to check connection
fi
if [ "$mainOption" = "4" ]
    then
    ip link set eth0 down
    ip addr flush dev eth0 up
    ip addr add 10.168.2.212/23 dev eth0 broadcast +
    ip link set eth0 up
    ip route add default via 10.168.3.254
    printf 'nameserver 8.8.8.8\nnameserver 8.8.4.4' > /etc/resolv.conf
fi
if [ "$mainOption" = "5" ]
    then
    echo 'IP route: '
    read ipR
    echo 'Mask: '
    read maskR
    ip route del $ipR/$maskR
fi
if [ "$mainOption" = "6" ]
    then
    ip route del 10.168.2.212/23
fi