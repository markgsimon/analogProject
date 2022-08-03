"""
This program is to provide an endpoint for clients to
submit simulations of an emergency alert service
as well as to gather data on those services

TODOS

complete database tables

for POST/simulatations/
add create_simulation_func to create simulation in db with auto-increment UUID to

for POST /simulations/:simid
add read simulation function that iterates over message table by simulation id

convert messages to object structure in producer
key messages with simulation_id

convert messages to object structure in sender
use  simulation id to read simulation table for settings
write to message table with message time, and success/failure

handle exceptions from database reads and writes

update test cases for sender and producer for
database integration
and new message structure

reconfigure rabbitmq to use task queue for consumers
investigate acknowledgement to avoid problems with shutdown senders

find out how to let main.py spin up multiple senders

investigate docker and kubernetes to containerize
main ,  sender and the rabbitmq server into a scalable environment
and allow for the scaling of sender.py

investigate postgresql as a choice instead of sqlite
"""


import pika
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

from producer.producer import producer
import multiprocessing

connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))

channel = connection.channel()

app = FastAPI()

origins = [
        "http://localhost",
        "http://localhost:3000"
]

app.add_middleware(CORSMiddleware,
                   allow_origins=origins,
                   allow_credentials=True,
                   allow_methods=["*"],
                   allow_headers=["*"],
)


@app.get("/")
async def read_main():
    return {"message": "Hello, welcome to emergency alert service"}


class Simulation(BaseModel):
    name: str
    category: str
    number_of_messages: int
    message_failure_rate: float
    mean_message_time: int
    monitoring_interval: int
    number_of_sender_processes: int


@app.post("/simulations/")
async def create_simulation(simulation: Simulation):
    # pass the simulation to producer
    producer(simulation)

    # for i in range(simulation.number_of_sender_processes):
    #     p = multiprocessing.Process(target=sender)
    #     process_jobs.append(p)
    #     p.start()
    #
    return simulation


@app.get("/simulations/")
async def read_simulation_data():
    num_message_sent = 10
    num_failed_message = 1
    average_message_time = 4
    
    return {}


