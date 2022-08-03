import styled from "styled-components"

export const CancelButtonBox = styled.div`

    border-radius: 75px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 10px;
    padding-top: 10px;
    background: linear-gradient(218.09deg, #fa9b94 -20.54%, #e15160 113.32%);
    box-shadow: 0px 3px 10px rgba(106, 204, 220, 0.3), -5px -5px 10px #ffffff,
    3px 3px 12px rgba(239, 125, 125, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 50%;
    &:hover{
        cursor: pointer;
        /* background: rgba(0, 0, 0, 0.75); */
        backdrop-filter: blur(60px);
        background: linear-gradient(
            191.37deg,
            #fa9b94 -31.78%,
            #e25563 47.49%,
            #e15160 101.05%
            );
        box-shadow: 0px 3px 10px rgba(213, 80, 94, 0.33), -5px -5px 10px #ffffff,
        -3px -3px 12px #f5f5f5;
    } 
`;


export const CancelButtonText = styled.div` 
    color: #fefefe;
    font-size: 20px;
    text-align: center;

`;