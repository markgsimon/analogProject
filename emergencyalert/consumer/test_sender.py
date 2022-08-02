from .sender import get_sms_time, send_alert, sender
from collections.abc import Iterable


def test_sender():
    # TODO add test for entire sender function
    assert 1 == 1


def test_get_sms_tme():
    assert get_sms_time(34) > 1


def test_send_alert():
    assert isinstance(send_alert(.5, 25), Iterable)
    assert send_alert(.5, 25)