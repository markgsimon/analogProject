
import pika


def reader():

    connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))

    channel = connection.channel()

    num_message_sent = 0
    num_failed_message = 0
    average_message_time = 0

    channel.queue_declare(queue='outboundMessages')

    message_times = []

    def callback(ch, method, properties, body):
        new_message = json.loads(body)
        print('received outbound message' + str(new_message))
        print('reading outBound message')
        nonlocal num_message_sent
        num_message_sent += 1

        # nonlocal message_times
        # message_times.append(new_message["message_time"])
        #
        # if not new_message["message_success"]:
        #     nonlocal num_failed_message
        #     num_failed_message += 1
        # else:
        #     print('message was a success')

    channel.basic_consume(queue='alerts', on_message_callback=callback, auto_ack=True)
    channel.start_consuming()

    return {
        "num_message_sent": num_message_sent,
        "num_failed_message": num_failed_message,
        "average_message_time": get_average_times(message_times),
    }


def get_average_times(times):
    return sum(times) / len(times)

