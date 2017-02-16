# Subdomain Example

## Set up
1. In order to access your app on localhost, you have to edit `/etc/hosts`.
```bash
$ sudo vim /etc/hosts
```
1. You will see some contents like below:
```
##
# Host Database
#
# localhost is used to configure the loopback interface
# when the system is booting.  Do not change this entry.
##
127.0.0.1       localhost
255.255.255.255 broadcasthost
::1             localhost
```
1. Insert `127.0.0.1 <YOUR_SUBDOMAIN>.localhost`.
```
127.0.0.1       localhost
127.0.0.1       api.localhost
255.255.255.255 broadcasthost
::1             localhost
```
1. Save.
