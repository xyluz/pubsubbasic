var redis = require('redis');
var client = redis.createClient();



exports.listen = ()=>{

  client.PUBSUB('newchannel',(channels,something)=>{
    console.log(`Channels => ${channels}`);
    console.log(`Something => ${something}`);
  })

}