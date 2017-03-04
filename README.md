# RESTful Service of the Environmental Monitoring system

## Setup environment

-   Install NodeJS and MongoDB
-   Go the the project's directory (use CMD or Terminal from this step)
-   Install packages
```
$ npm i
```
-   Generate database, collections and sample documents
```
$ mongoimport --db env-monitor --collection users --drop --file database-user.json
$ mongoimport --db env-monitor --collection locations --drop --file database-location.json
```
-   Run the service
```
$ npm start
```