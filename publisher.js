var redis = require('redis');
var publisher = redis.createClient();


exports.publish = (topic,content)=>{

  publisher.publish(topic, content,  function(){

    console.log(`${JSON.stringify(content)} published on ${topic}`);
    // process.exit(0);
        
  });

  return ({
    'topic': topic,
    'data': content
  });

}