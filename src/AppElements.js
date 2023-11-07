import styled from "styled-components";

export const CardWrapper =styled.div`
    height: 350px;
    width:600px;
    margin-right: 20px;
    margin-left:20px;
    margin-top:40px;
    margin-bottom:40px;
    float: left;
    padding: 10px;
`
export const TextWrapper =styled.p`
    color: #01bf71;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`
export const Heading =styled.h1`
    color: #01bf71;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
`
export const DeleteButton =styled.button`
    border-width:1px;
    width:150px;
    height:50px;
    font-size: 30px;
    font-weight: 600;
    &:hover {
        background-color: red;
      }
`