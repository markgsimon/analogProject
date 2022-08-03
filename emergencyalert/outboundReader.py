
import pika
import json
import sys
import os


def reader():
    print('hey mom, its time to read this outbound queue')
    connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))

    channel = connection.channel()

    num_message_sent = 0
    num_failed_message = 0
    average_message_time = 0

    channel.queue_declare(queue='outboundMessages')

    message_times = [1, 2, 3, 4, 5]

    def callback(ch, method, properties, body):
        new_message = json.loads(body)
        print('received outbound message' + str(new_message))
        nonlocal num_message_sent
        num_message_sent += 1

        nonlocal message_times
        message_times.append(new_message["message_time"])

        if not new_message["message_success"]:
            nonlocal num_failed_message
            num_failed_message += 1
        else:
            print('message was a success')

    channel.basic_consume(queue='outboundMessages', on_message_callback=callback, auto_ack=True)
    print(' [*] Waiting for messages. To exit press CTRL+C')
    try:
        channel.start_consuming()
        channel.basic_cancel()
    except KeyboardInterrupt:
        channel.stop_consuming()
        connection.close()

    return {
        "num_message_sent": num_message_sent,
        "num_failed_message": num_failed_message,
        "average_message_time": get_average_times(message_times),
    }


if __name__ == '__main__':
    try:
        reader()
    except KeyboardInterrupt:
        print('Interrupted')
        try:
            sys.exit(0)
        except SystemExit:
            os._exit(0)


def get_average_times(times):
    return float(sum(times)) / float(len(times))

