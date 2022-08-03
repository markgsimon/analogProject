import React, {useEffect, useState, useReducer} from 'react'

import {
    Page,
    Content,
    Title,
    SubTitle
} from "../GeneralStyles/styles";

import { 
  SettingsCard, 
  SettingsContent,
  RedText 
} from './styles';

//Utils
import { postNewSim } from '../../utils/monitorFetch';
import { reducer } from './reducer';

//Components
import PrimaryButton from '../PrimaryButton';
import InputBoxWithLabel from '../InputBoxWithLabel';
import Monitor from '../Monitor';

//Default settings state
import { defaultSettings } from '../../data/defaultState';


const SimulationHome = (props) => {


const [simulationSet, setSimulation] = useState(false)

const [simSettingsFields, dispatch] = useReducer(reducer, defaultSettings);
const [validationError, setValidationError] = useState(false);

  const onChangeValue = (field, value) =>{
    console.log(value)
    console.log(field.id)
    dispatch({type: "ONCHANGEVALUE", id: field.id, value: value})
  } 

  const toggleFieldValidated = (field) => {
    dispatch({type: "TOGGLEFIELDVALIDATED", id: field.id})
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
      
     let isValid = true;

     simSettingsFields.forEach(field => {
      if(!field.validated) isValid = false
     })
      setValidationError(isValid ? false : true)
    
      if(isValid){
        const simSettingsObject = {
            name: "sim",
            category: "simulation",
            number_of_messages: simSettingsFields[0].value ? simSettingsFields[0].value : 1000,
            message_failure_rate : simSettingsFields[1].value,
            mean_message_time: simSettingsFields[2].value,
            monitoring_interval: simSettingsFields[3].value,
            number_of_sender_processes: simSettingsFields[4].value
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
                    ? <Monitor cancelSim = {() => setSimulation(false)} monitoringInterval = {simSettingsFields[4].value}/>
                    :   <SettingsCard>
                            <Title>Welcome to the alert simulator!</Title>
                            <SubTitle>Please fill out the settings and press start to simulate an alert service</SubTitle>
                          {validationError &&  <RedText> Please fill out all neccessary fields that do no have default values</RedText>}
                          <SettingsContent>
                            {simSettingsFields.map((field, index) => renderSimSettingsField(field))}
                          </SettingsContent>
                          <PrimaryButton buttonText = "Start" onClick = {startSimulation}></PrimaryButton>
                        </SettingsCard>
              }
            </Content>
        </Page>
  )
}

export default SimulationHome