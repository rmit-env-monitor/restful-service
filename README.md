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

## Available APIs

Any API beginning with /api requires a token inserted into the Header, the format will be Authorization: Bearer [token].

#### For Web

-   **GET /api/web/locations** - **success**: return [{_id utcDateTime, latitute, longtitude, dust, no, so2, pm, o3, sound}] , **error**: return {message}

#### For Mobile

-   **GET /api/mobile/locations** - **success**: return [{_id utcDateTime, latitute, longtitude, dust, no, so2, pm, o3, sound}] , **error**: return {message}

#### Arduino

-   **POST /arduino/locations** - **params**: {utcDateTime, latitute, longtitude, no, so2, pm, o3, sound} , **success/error**: return {message}