import styled from "styled-components"


export const SimulationBox = styled.div`

    width: 100%;
    height: 100%;

`;

export const SettingsCard = styled.div`

    width: 50%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 10px 12px 29px 0px rgba(202,193,193,0.75) inset;
    -webkit-box-shadow: 10px 12px 29px 0px rgba(202,193,193,0.75) inset;
    -moz-box-shadow: 10px 12px 29px 0px rgba(202,193,193,0.75) inset;
    border: 1px solid black;
    border-radius: 15px;
    padding: 5%;

`;

export const SettingsContent = styled.div`
    
    /* width: 30%; */
    display: flex;
    flex-direction: column;
`;

export const RedText =  styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #E73144;

`