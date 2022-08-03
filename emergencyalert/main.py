"""
This program is to provide an endpoint for clients to
submit simulations of an emergency alert service
as well as to gather data on those services
 by Mark Simon
"""


from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import json
import multiprocessing
import threading

from producer.producer import producer
from outboundReader import reader

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

    return simulation


@app.get("/simulations/data/")
async def read_simulation_data():
    response = reader()
    return response



