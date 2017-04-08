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
$ mongoimport --db env-monitor --collection users --drop --file db-samples/database-user.json
$ mongoimport --db env-monitor --collection locations --drop --file db-samples/database-device.json
$ mongoimport --db env-monitor --collection locations --drop --file db-samples/database-record.json
$ mongoimport --db env-monitor --collection nearby --drop --file db-samples/database-nearby.json
```
-   Run the service
```
$ npm start
```

## Available APIs

Any API beginning with /api requires a token inserted into the Header, the format will be Authorization: Bearer [token].

### For Web

Get all devices by city and district
-   **GET /api/web/devices** - **query**: city district , - **success**: return [{_id name}] , **error**: return {message}

Get distinct list of available cities
-   **GET /api/web/devices/cities** - **success**: return [city] , **error**: return {message}

Get distinct list of available districts of city
-   **GET /api/web/devices/districts** - **query**: city , **success**: return [district] , **error**: return {message}

Get latest record of a device
-   **GET /api/web/records/:device** - **success**: return [{deviceID, utcDateTime, no, so2, pm2, pm10, o3, co, sound}] , **error**: return {message}

Get nearby districts of a current city and district
-   **GET /api/web/nearby** - **query**: city, district - **success**: return nearby: [] , **error**: return {message}

### For Mobile

### For Arduino

Insert new record
-   From the arduino side, must pass this string in the following format: "deviceID_utcDateTime_no_so2_pm2_pm10_o3_co_sound_uv"

### Shared

Register account
-   **POST /users** - **params**: {username, password} , **success**: return {username, token} , **error**: return {message}

Login
-   **POST /auth** - **params**: {username, password} , **success**: return {username, token} , **error**: return {message}