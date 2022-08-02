# Pika package for connecting to rabbitMQ
import pika
import string
import random
import sys
import uuid


def producer(num_msg: int = 1000):
    try:
        new_sim_id = uuid.uuid4()

        connection = pika.BlockingConnection(
            pika.ConnectionParameters(host='localhost'))

        channel = connection.channel()

        # declaring a queue, idempotent function
        channel.queue_declare(queue='alerts')

        number_of_messages = num_msg

        for i in range(int(number_of_messages)):
            message_content = generate_message()
            #Assemble message object
            ##TODO

            #add write to db with message object
            #TODO

            channel.basic_publish(exchange='',
                                  routing_key='alerts',
                                  body = message_content)
            print(" [x] Sent '" + message_content + "'")

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


