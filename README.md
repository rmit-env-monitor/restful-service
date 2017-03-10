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

### For Web

Get all location records
-   **GET /api/web/locations** - **success**: return [{utcDateTime, latitute, longitude, no, so2, pm, o3, sound}] , **error**: return {message}

### For Mobile

Get all location records
-   **GET /api/mobile/locations** - **success**: return [{utcDateTime, latitute, longitude, no, so2, pm, o3, sound}] , **error**: return {message}

### For Arduino

Insert new location record
-   **POST /arduino/locations** - **params**: {utcDateTime, latitute, longitude, no, so2, pm, o3, sound} , 
**success/error**: return {message} ; socket {utcDateTime, latitute, longitude, no, so2, pm, o3, sound}

### Shared

Register account
-   **POST /users** - **params**: {username, password} , **success**: return {username, token} , **error**: return {message}

Login
-   **POST /auth** - **params**: {username, password} , **success**: return {username, token} , **error**: return {message}