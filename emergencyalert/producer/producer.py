# Pika package for connecting to rabbitMQ
import pika
import string
import random
import sys
import uuid
from pydantic import BaseModel


class Simulation(BaseModel):
    name: str
    category: str
    number_of_messages: int
    mean_message_time: int
    message_failure_rate: float
    monitoring_interval: int
    number_of_sender_processes: int


class SentMessage(BaseModel):
    id: int
    message_content: str
    simulation: Simulation


def producer(simulation: Simulation):
    try:

        connection = pika.BlockingConnection(
            pika.ConnectionParameters(host='localhost'))

        channel = connection.channel()

        channel.queue_declare(queue='alerts')

        number_of_messages = simulation.number_of_messages

        for i in range(int(number_of_messages)):

            new_message = SentMessage(
                id=generate_phone_number(),
                message_content=generate_message(),
                simulation=simulation
            )

            channel.basic_publish(exchange='',
                                  routing_key='alerts',
                                  body = new_message.json())
            print(" [x] Sent '" + new_message.json() + "'")

        connection.close()
        return True
    except Exception as e:
        print(e)
        return False


def generate_message():
    length = random.randint(0, 100)
    letters = string.ascii_letters + string.digits + '!@#$%^&*()_'
    message = ''.join(random.choice(letters) for i in range(length))
    return message


def generate_phone_number():
    phone_number = ''.join(random.choice(string.digits) for i in range(10))
    return phone_number


