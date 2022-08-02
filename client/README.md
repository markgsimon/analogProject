# Emergency Alert simulator

### TODOS

1. fix background on all components
2. complete fonts on title, subtitle, label
3. same simulation_id to state
4. add labels to monitor for:
        a) messages sent
        b) messages failed so far
        c) average time per message
5. add slider to change monitoring interval
6. add timeout function that:
                I) times out for the length of the monitoring interval
                II) gets the newest simulation stats at /simulations/sim_id

7. add support for subsribing to the rabbitmq message queue