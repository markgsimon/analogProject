import styled from "styled-components"

export const ButtonText = styled.div`
    font-size: 20px;
    color: black;



`;


export const ButtonBox = styled.div`
    border: 1px solid green;
    max-width: 50%;
    border-radius: 80px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 10px;
    padding-top: 10px;
    background: green;
    margin: 10px;
    &:hover{
        cursor: pointer;
        /* background: rgba(0, 0, 0, 0.75); */
        backdrop-filter: blur(60px);

    } 
`;