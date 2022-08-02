from fastapi.testclient import TestClient
from fastapi.encoders import jsonable_encoder
from .main import app

client = TestClient(app)


def test_read_main():
    response = client.get('/')
    assert response.status_code == 200
    assert response.json() == {"message": "Hello, welcome to emergency alert service"}

    test_sim_json = {
        "name": "wildfire",
        "category": "wildfire",
        "number_of_messages": "1000",
        "message_failure_rate": "0.1",
        "monitoring_interval": "23",
        "number_of_sender_processes": "3"
    }
    test_sim= {
        "name": "wildfire",
        "category": "wildfire",
        "number_of_messages": 1000,
        "message_failure_rate": 0.1,
        "monitoring_interval": 23,
        "number_of_sender_processes": 3
    }
    response = client.post('/simulations/', json=test_sim_json)
    assert response.status_code == 200
    assert response.json() == test_sim

    response = client.post('/simulations/{}')