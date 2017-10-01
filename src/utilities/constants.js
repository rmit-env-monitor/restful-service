module.exports = {
    ERROR_MESSAGE: 'Invalid username/password. Try again',
    MQTT_SENSORS_DATA: 'sensors-data',
    CITY_LIST: 'city_list',
    ONE_DAY_EXPIRE: 86400,
    ONE_WEEK_EXPIRE: 604800,
    MONGOOSE_QUERY: {
        NO_ID: '-_id -__v',
        ID_NAME_LAT_LNG: '_id name lat lng',
        NO_RAW_DATA: '-_id -deviceID -no2 -so2 -pm25 -pm10 -o3 -co',
        NO_ID_DEVICEID_DATE: '-_id -deviceID -utcDateTime',
        NEARBY: '-_id nearby'
    },
    BACKGROUND_JOB: {
        STATION_RANKING: 'STATION_RANKING'
    },
    ERROR_500_MESSAGE: "System's encountered error"
}