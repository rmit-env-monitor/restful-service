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

Get all devices
-   **GET /api/web/devices** - **success**: return [{_id name}] , **error**: return {message}

Get distinct list of available cities
-   **GET /api/web/devices/cities** - **success**: return [city] , **error**: return {message}

Get distinct list of available districts of city
-   **GET /api/web/devices/districts** - **query**: city , **success**: return [district] , **error**: return {message}

Get latest record of a device
-   **GET /api/web/records/:device** - **success**: return [{deviceID, utcDateTime, no, so2, pm2, pm10, o3, co, sound}] , **error**: return {message}

### For Mobile

Get all location records
-   **GET /api/mobile/locations** - **success**: return [{utcDateTime, latitute, longitude, no, so2, pm, o3, sound}] , **error**: return {message}

### For Arduino

Insert new location record
-   **POST /arduino/records** - **params**: {deviceID, utcDateTime, no, so2, pm2, pm10, o3, co, sound} , 
**success/error**: return {message} ; socket deviceID-{deviceID, utcDateTime, no, so2, pm2, pm10, o3, co, sound}

### Shared

Register account
-   **POST /users** - **params**: {username, password} , **success**: return {username, token} , **error**: return {message}

Login
-   **POST /auth** - **params**: {username, password} , **success**: return {username, token} , **error**: return {message}