import styled from "styled-components"

export const ButtonText = styled.div`
    font-size: 20px;
    color: #fefefe;
    text-align: center;



`;


export const ButtonBox = styled.div`
    /* margin-bottom: 10%; */
    border-radius: 75px;
    padding-left: 50px;
    padding-right: 50px;
    padding-bottom: 15px;
    padding-top: 15px;
    margin-top: 10px;
    background: linear-gradient(
      303.64deg,
      rgba(255, 255, 255, 0.4) 16.13%,
      rgba(0, 0, 0, 0.4) 132.9%
      ),
    linear-gradient(326.75deg, #6adcb3 -14.42%, #6accdc 99.59%);
    box-shadow: 8px 8px 16px rgba(106, 204, 220, 0.3), -4px -4px 16px #ffffff,
    4px 4px 12px rgba(202, 223, 219, 0.7);
    background-blend-mode: soft-light, normal;
    &:hover{
        cursor: pointer;
        background: linear-gradient(
        342.94deg,
        rgba(255, 255, 255, 0.4) -182.89%,
        rgba(0, 0, 0, 0.4) 132.93%
      ),
      linear-gradient(323.71deg, #6adcb3 -41.08%, #6accdc 96.31%);
        background-blend-mode: soft-light, normal;
        box-shadow: 8px 8px 16px rgba(106, 204, 220, 0.3), -4px -4px 16px #ffffff,
        4px 4px 12px rgba(202, 223, 219, 0.7);        
        backdrop-filter: blur(60px);
    } 
`;