import styled from "styled-components"

export const InputBox = styled.div`
    margin: 5px;
    /* width: 100%; */
`;


export const InputLabel = styled.div`
    font-size: 14px;
    margin-bottom: 10px;;

`;


export const InputField = styled.input`
    min-height: 40px;
    border: 0.5px solid rgba(202, 208, 223, 0.25);
    box-sizing: border-box;
    box-shadow: inset -2.5px -2.5px 6px 1px #ffffff,
    inset 2.5px 2.5px 8px 1px rgba(202, 208, 223, 0.5);
    border-radius: 13px;
    outline: none !important;
    border: 1px solid ${(props) => (!props.validated ? "#E73144" : "none")};
    :focus {
        outline: none !important;
        border: 1px solid ${(props) => (!props.validated ? "#E73144" : "#618CF1")};
    
    }

`;



