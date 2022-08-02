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

  return (
        <MonitorPage>
            <MonitorContent>
                  <Title>Simulation Monitor</Title>
                  <SubTitle>Simulation Id: {props.simulationId}</SubTitle>
                  <CancelButton buttonText = "Cancel simulation" onClick = {props.cancelSim}></CancelButton>
            </MonitorContent>
        </MonitorPage>
  )
}

export default Monitor