# emergency alert service

#### project to simulate an emergency alert system

Frontend: create-react-app --template typescript

Message Broker: RabbitMQ localhost ubuntu jammy jellyfish

Backend: fastapi based api with producer and sender

sender: simulates sending the messages by pulling messages from the alerts queue and waiting a certain amount of time with a failure rate

producer: generates strings and publihses to queue
