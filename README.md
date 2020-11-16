# pubsubbasic
pub sub basic with nodejs, expressjs and redis 

This is not production ready, it is a sample code to demonstrate the concept of pub/sub architecture (for Pangaea) 

The following endpoints are available

1. POST subscribe/:topic

- TO subscribe a client to topic

2. POST publish/:topic -d {"msg":"some content"}

- To publish message to all subscribed users.

You need a running redis-server to test properly, you an also use redis-cli to test.


To test:

Run, npm install.

- Run: npm run dev
- Open a new terminal, run:

* curl -X POST -d '{"url":"http://localhost:3000/event"}' http://localhost:3000/subscribe/mine
(PS: mine is the topic you are subscribing to)
* curl -X POST -H "Content-Type: application/json" -d '{"msg":"hello"}' http://localhost:3000/publish/mine
(to publish to the topic - mine)

