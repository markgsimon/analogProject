# Emergency alert service

#### Project to simulate an emergency alert system via message queue

Frontend: create-react-app --template typescript

Message Broker: RabbitMQ localhost ubuntu jammy jellyfish

Backend: fastapi based api with producer and sender

sender: simulates sending the messages by pulling messages from the alerts queue and waiting a certain amount of time with a failure rate

producer: generates strings and publishes to queue




### TODOS
- [ ] update readme to reflect environment setup of rabbitmq, frontend and backend
- [ ] update front end to fix styles, background-color, font, layout
- [ ] add display labels to monitor for stats
- [ ] populate monitor with stats from api
- [ ] finish crud.py on backend
- [ ] finish test cases on apo endpoints
- [ ] convert sender.py and producer.py to use message object keyed with simulation id instead of strings
- [ ] refactor system to use only queue for sending and receiving of data
