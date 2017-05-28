const PubNub = require('pubnub')
const pubnub = new PubNub({
    publishKey: 'pub-c-e590d950-b736-40bf-9ed1-a6a7029160a8',
    subscribeKey: 'sub-c-f87fc608-4341-11e7-86e2-02ee2ddab7fe',
    secretKey: 'sec-c-NDgzMjRiZjktYWJkYy00MGNkLWJmN2UtZjRhMzlkZTk4YmQw',
    ssl: true
})

pubnub.publish(
    {
        message: {
            id: 'id',
            data: 'data'
        },
        channel: 'station-data',
        storeInHistory: true //override default storage options
    },
    (status, response) => {
        if (status.error) {
            // handle error
            console.log(status)
        } else {
            console.log("message Published w/ timetoken", response.timetoken)
        }
    }
);