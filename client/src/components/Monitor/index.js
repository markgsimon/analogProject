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

  }

  useEffect(() => {

      const interval = setInterval(() => {

      }, monitoringInterval * 100)
  }, [monitoringInterval])
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