import os
import pika
import sys
from pydantic import BaseModel
import json

from outboundSender import send_message_outbound

from helpers import send_alert


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


def sender():
    connection = pika.BlockingConnection(pika.ConnectionParameters(host='localhost'))
    channel = connection.channel()

    channel.queue_declare(queue='alerts')

    def callback(ch, method, properties, body):
        print(" [x] Received " + str(body))
        incoming_message = json.loads(body)
        simulation = incoming_message["simulation"]

        failure_rate = simulation["message_failure_rate"]
        mean_message_time = simulation["mean_message_time"]
        result = send_alert(failure_rate, mean_message_time)
        print(result[0])
        result_dict = result[0]
        print(result_dict['message_success'])
        new_outbound_message = DeliveredMessage(
            message_success=result_dict["message_success"],
            message_time=result_dict["sms_time"],
            sent_message=incoming_message,
        )
        send_message_outbound(new_outbound_message)
    channel.basic_consume(queue='alerts', on_message_callback=callback, auto_ack=True)

    print(' [*] Waiting for messages. To exit press CTRL+C')
    channel.start_consuming()


if __name__ == '__main__':
    try:
        sender()
    except KeyboardInterrupt:
        print('Interrupted')
        try:
            sys.exit(0)
        except SystemExit:
            os._exit(0)



