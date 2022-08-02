from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, Float
from sqlalchemy.orm import relationship

from .database import Base


class Simulation(Base):
    __tablename__ = "simulations"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    category = Column(String, index=True)
    number_of_messages = Column(Integer, index=True)
    mean_message_time = Column(Integer, index=True)
    message_failure_rate = Column(Float, index=True)
    monitoring_interval = Column(Integer, index=True)
    number_of_sender_processes = Column(Integer, index=True)

    messages = relationship("Message", back_populates="owner")


class Message(Base):
    __tablename__ = "messages"

    id = Column(Integer, primary_key=True, index=True)
    phone_number = Column(String, index=True)
    message_content = Column(String, index=True)
    time_sent = Column(String, index=True)
    time_received = Column(String, index=True)
    message_success = Column(Boolean, index=True)
    owner_id = Column(Integer, ForeignKey("simulations.id"))

    owner = relationship("Simulation", back_populates="messages")