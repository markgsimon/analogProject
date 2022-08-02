from .producer import producer, generate_message, generate_phone_number
from collections.abc import Iterable


def test_producer():
    assert producer(20)


def test_generate_message():
    assert isinstance(generate_message(), str)
    assert 1 <= len(generate_message()) <= 100


def test_generate_phone_number():
    assert isinstance(generate_phone_number(), str)
    assert len(generate_phone_number()) == 10