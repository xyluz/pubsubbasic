var redis = require('redis');
var subscriber = redis.createClient();


exports.subscribe = (topic)=>{

    subscriber.subscribe(topic);
    console.log(`subscribed to ${topic}`);
    return `subscribed to ${topic}`;

}

exports.unsubscribe = (topic)=>{

    subscriber.unsubscribe(topic);
    console.log(`unsubscribed from ${topic}`);
    return `unsubscribed from ${topic}`;

}

exports.listen = (topic)=>{
    
    subscriber.on(topic, function (channel, message) {    

        console.log(`${message} from ${channel}`);
        return {
            "topic":topic,
            "message":message
        }

    });
}