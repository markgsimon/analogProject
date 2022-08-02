
from pydantic import BaseModel


class Simulation(BaseModel):

    name: str
    category: str
    number_of_messages: int
    mean_message_time: int
    message_failure_rate: float
    monitoring_interval: int
    number_of_sender_processes: int

    class Config:
        orm_mode = True


class Message(BaseModel):
    id: int
    phone_number: str
    message_content: str
    time_sent: str
    time_received: str
    message_success: bool
    simulation: Simulation

    class Config:
        orm_mode = True

