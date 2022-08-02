import time
from random import normalvariate, choices, random, randrange


def get_positive_or_negative():
    if random() < 0.5:
        my_number = 1
    else:
        my_number = -1
    return my_number


def get_random_offset():
    return randrange(0, 10)


def get_sms_time(mu):
    return mu + (get_random_offset() * get_positive_or_negative())


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

