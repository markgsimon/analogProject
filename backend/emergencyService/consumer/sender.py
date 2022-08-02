import pika, sys, os

from random import normalvariate, choices
import time


def sender():
    # add code to read db
    # TODO
    connection = pika.BlockingConnection(pika.ConnectionParameters(host='localhost'))
    channel = connection.channel()

    channel.queue_declare(queue='alerts')

    def callback(ch, method, properties, body):
        # pull  simulation id from body
        # TODO
        # read db at simulations table to get faliute
        print(" [x] Received " + str(body))

    channel.basic_consume(queue='alerts', on_message_callback=callback, auto_ack=True)
    send_alert(.5, 20)
    print(' [*] Waiting for messages. To exit press CTRL+C')
    channel.start_consuming()


def get_sms_time(mu):
    return normalvariate(mu, 10)


def send_alert(failure_rate, mean_time):

    success_weight = (1 - failure_rate) * 10
    failure_weight = failure_rate * 10

    sms_time = float(get_sms_time(mean_time)) * .001
    time.sleep(sms_time)

    success_dict = {
        "name": "Success",
        "message_success": True,
        "sms_time": sms_time,
    }

    failure_dict = {
        "name": "Failure",
        "message_success": False,
        "sms_time": sms_time,
    }

    return choices([success_dict,  failure_dict], weights=[success_weight, failure_weight], k=1)


if __name__ == '__sender__':
    try:
        sender()
    except KeyboardInterrupt:
        print('Interrupted')
        try:
            sys.exit(0)
        except SystemExit:
            os._exit(0)

