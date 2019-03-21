#/bin/bash
echo "= = = = = Windows 8+ key = = = = ="
sudo tail -c+57 /sys/firmware/acpi/tables/MSDM
#sudo strings /sys/firmware/acpi/tables/MSDM | grep .*-.*-.*-.*-.*