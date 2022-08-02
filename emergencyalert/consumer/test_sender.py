from .sender import get_sms_time, send_alert, sender
from collections.abc import Iterable


def test_sender():
    assert sender()


def test_get_sms_tme():
    assert get_sms_time(34) > 1


def test_send_alert():
    assert isinstance(send_alert(.5, 25), Iterable)
    assert send_alert(.5, 25)
