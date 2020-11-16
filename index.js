const express = require('express')
const app = express()
const port = 3000

const bodyParser = require("body-parser");
const cors = require("cors");

const event = require('./event');

var corsOptions = {
  origin: "http://localhost:3000"
};


app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {

  res.json("Hello World!");
  
});

app.post('/publish/:topic', (req, res) => {
  
  const publisher = require('./publisher');
  let topic = req.params.topic;
  let content = req.body;
  
  let published = publisher.publish(topic,content);  
  res.json(published);

});
  
app.post('/subscribe/:topic', (req, res) => {

  const subscriber = require('./subscriber');
  let topic = req.params.topic;
  let subscribed = subscriber.subscribe(topic,req.body)
  res.json(subscribed);
  
});

app.post('/unsubscribe/:topic',(req,res)=>{

  const subscriber = require('./subscriber');
  let topic = req.params.topic;

  let unsubscribed = subscriber.unsubscribe(topic)
  res.json(unsubscribed);

});

app.get('subscriber/listen',(req,res)=>{
  
  const subscriber = require('./subscriber');
  let topic = req.params.topic;

  let data = subscriber.listen(topic)
  res.json(data);

})

app.get('/event', event.listen);
  
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})