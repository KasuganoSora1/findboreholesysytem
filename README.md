# 1.environment
## 1.1 mysql
1. [download mysql](https://mysql.com/download)
2. install mysql (default settting)
## 1.2 nodejs
1. [download nodejs]()
2. install nodejs (default setting)
## 1.3 git
1. [download git]()
2. install git (default setting)

# 2.install
## 2.1 clone findsystem code
in cmd,use this command
```
git clone https://
```
## 2.2 copy database
in origin server,use this command
```
mysql -uroot -p
```
input password then press enter,open the mysql database
```
mysqldump -uroot -p findboreholesystem > db.sql
```
you can find a file named db.sql in folder where cmd run,
copy it to new server;

## 2.3 paste database
in new server,run this command
```
mysql -uroot -p
```
enter password then press enter,in mysql
```
source xxxxx/db.sql
```
xxxx is foler where you put db.sql in
## 2.3 install dependencies
use command in findboreholesystem folder
```
npm install
```
# 3.run findboreholesystem
if above is ok,use this command in project folder,find boreholesystem can start.
it can be started in the future using this command
```
npm start
```



