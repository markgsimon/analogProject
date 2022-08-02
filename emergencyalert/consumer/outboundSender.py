import pika

from pydantic import BaseModel


class Simulation(BaseModel):
    name: str
    category: str
    number_of_messages: int
    message_failure_rate: float
    monitoring_interval: int
    number_of_sender_processes: int


class SentMessage(BaseModel):
    id: int
    message_content: str
    simulation: Simulation


class DeliveredMessage(BaseModel):
    message_success: bool
    message_time: float
    sent_message: SentMessage


def send_message_outbound(message):
    connection = pika.BlockingConnection(pika.ConnectionParameters(host='localhost'))
    channel = connection.channel()
    channel.queue_declare(queue='outboundMessages')

    channel.basic_publish(exchange='',
                          routing_key='outboundMessages',
                          body=message.json())
    print(" [x] Sent Outbound'" + message.json() + "'")

    # connection.close()

