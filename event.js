var redis = require('redis');
var client = redis.createClient();

// subscriber.on('event', function (channel, message) {
    


// });
// exports.index = ()=>{

  
//     client.pubsub('channels', (err, channels) => {
//         if (err) {
//           console.log("here",err)
//           return
//         } else {
//           console.log('Channels:', channels); // array
//           return channels;
//         }
//       });

// }


// exports.notify = (action,)=>{

//     publisher.publish('event', content,  function(){
//         console.log(`${action} ${action} `);
//         process.exit(0);
//       });

// }


exports.listen = (topic)=>{

  client.on(topic, function (channel, message) {    


  });

}