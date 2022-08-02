# Emergency alert service

#### Project to simulate an emergency alert system via message queue



### Setup and Config

#### Frontend: 
The front end is a react app using create-react-app
I chose this for to streamline the react application build process.
It also comes with jest and react testing library out of the box.
npx create-react-app --template typescript
[create-react-app docs](https://create-react-app.dev/docs/getting-started)

Dependencies:
    yarn add 'dependency'
    styled-components - this was chosen to easily organize components and styles.

Commands to run: 
Development build: yarn start or npm start 
Production Build: npm run build or yarn build

#### Message Broker: RabbitMQ localhost 

RabbitMQ was chosen for its documentation with its pika client. 

Setup and config:
[RabbitMQ installation](https://www.rabbitmq.com/download.html)

I use a linux box at home and chose to set up without the community docker image. 

OS Tested: Ubuntu 22.04 LTS Jammy Jellyfish
Installation: used PackageCloud quick start script, changed the distro to be jammy instead of bionic

Dependencies:
All dependencies are listed and included in the quick install script
(Ubuntu/Debian quick install script)[https://www.rabbitmq.com/install-debian.html]

To Scale: 
I would use the docker community image and incorporate RabbitMQ inside a larger eco system such as with kubernetes to allow for added multiple senders


#### Backend: fastapi with main.py

main.py: the endpoints as well as the 

sender: simulates sending the messages by pulling messages from the alerts queue and waiting a certain amount of time with a failure rate

producer: generates strings and publishes to queue




### TODOS
- [ ] update readme to reflect environment setup of rabbitmq, frontend and backend
- [ ] update front end to fix styles, background-color, font, layout
- [ ] add display labels to monitor for stats
- [ ] finish crud.py on backend
- [ ] convert sender.py and producer.py to use message object keyed with simulation id instead of strings
- [ ] finish test cases on api endpoints for database integration and error handling
- [ ] populate monitor with stats from api
- [ ] refactor system to use only queue for sending and receiving of data
