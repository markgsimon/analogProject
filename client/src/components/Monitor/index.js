import React, {useEffect, useState} from 'react'


import {
    MonitorPage,
    MonitorContent,
    Title,
    SubTitle
} from "./styles";

import { getSimData } from '../../utils/monitorFetch';
import CancelButton from '../CancelButton';


const Monitor = (props) => {

  const [monitoringInterval, setMonitoringInterval] = useState(props.monitoringInterval);

  const [messagesSent, setMessagesSent] = useState(0);
  const [failedMessages, setFailedMessages] = useState(0);
  const [averageTime, setAverageTime] = useState(0);


  const getData = async () => {
        const res = await getSimData();
        console.log(res.data)
        setMessagesSent(res.data.num_message_sent)
        setAverageTime(res.data.average_message_time)
        setFailedMessages(res.data.num_failed_message)
  }

  useEffect(() => {
    let time = monitoringInterval * 1000
    console.log(monitoringInterval)
    // const interval = setInterval(() => {getData()}, time)
    // return () => {
    //   clearInterval(interval);
    //   setMonitoringInterval(0)
    // }
  }, [])


  return (
        <MonitorPage>
            <MonitorContent>
                  <Title>Simulation Monitor</Title>
                  <SubTitle>Total Messages Sent: {messagesSent}</SubTitle>
                  <SubTitle>Messages Failed: {failedMessages}</SubTitle>
                  <SubTitle>Average Time Per Message: {averageTime}</SubTitle>
            </MonitorContent>
                  <CancelButton buttonText = "Cancel simulation" onClick = {props.cancelSim}></CancelButton>
        </MonitorPage>
  )
}

export default Monitor