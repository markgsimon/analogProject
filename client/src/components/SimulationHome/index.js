import React, {useEffect, useState, useReducer} from 'react'

import {
    Page,
    Content,
    Title,
    SubTitle
} from "../GeneralStyles/styles";

//Utils
import { postNewSim } from '../../utils/monitorFetch';
import { reducer } from './reducer';

//Components
import PrimaryButton from '../PrimaryButton';
import InputBoxWithLabel from '../InputBoxWithLabel';
import Monitor from '../Monitor';

//Default settings state
import { defaultSettings } from '../../data/defaultState';
import { SettingsCard } from './styles';
import CancelButton from '../CancelButton';

const SimulationHome = (props) => {


  const [simulationSet, setSimulation] = useState(false)



const [simSettingsFields, dispatch] = useReducer(reducer, defaultSettings);

  const onChangeValue = (field, value) =>{
    console.log(value)
    console.log(field.id)
    dispatch({type: "ONCHANGEVALUE", id: field.id, value: value})
  } 

  const toggleFieldValidated = (field) => {
    dispatch({type: "TOGGLEFIELDVALIDATED", id: field.id})
  }

  const validateFields = () => {
    dispatch({type: "VALIDATEFIELDS"})
  }

  const renderSimSettingsField = (field) => {
    console.log(field)
    return <InputBoxWithLabel   key = {field.id}
                                value = {field.value}
                                onChange = {(e) => onChangeValue(field, e.target.value)}
                                onClick = {() => toggleFieldValidated(field)}
                                validated = {field.validated}
                                inputLabel = {field.inputLabel}/>
  }

  useEffect(() => {
      console.log(simSettingsFields)
  }, [simSettingsFields])

  const startSimulation = async () => {

      //validate all fields for bad types
      dispatch({type: "VALIDATEFIELDS"})
      
      let isValid = simSettingsFields.map((field, index) => {
        if(!field.validated) return false
      })
      
      if(isValid)
      {
        //assemble settings object
        //TODO
        const simSettingsObject = {
            name: "sim",
            category: "simulation",
            number_of_messages: simSettingsFields[0].value,
            message_failure_rate : simSettingsFields[1].value,
            monitoring_interval: simSettingsFields[2].value,
            number_of_sender_processes: simSettingsFields[3].value
          
          }
        
        
        //post sim to api
        const res = await postNewSim(simSettingsObject);
        
        //setSimulation
        setSimulation(true)     
      }
  }

  return (

        <Page>
            <Content>
             {simulationSet 
                    ? <Monitor cancelSim = {() => setSimulation(false)}/>
                    :   <SettingsCard>
                            <Title>Welcome to the alert simulator</Title>
                            <SubTitle>Please fill out the settings and press start to simulate an alert service</SubTitle>
                            {simSettingsFields.map((field, index) => renderSimSettingsField(field))}
                            <PrimaryButton buttonText = "Start" onClick = {startSimulation}></PrimaryButton>
                        </SettingsCard>
              }


            </Content>

        </Page>
  )
}

export default SimulationHome