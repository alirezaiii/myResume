import styled from 'styled-components';

export const Main = styled.div`
    min-height:100vh;
    position:relative;
    display:flex;
    align-items:center;
    justify-content: center;
    background: linear-gradient(to left,#15DBD6,#1AEFDE);
    @media (max-width: 768px) {
        background:#F8F8F8;
    }

`;

export const Card = styled.div`
    width: 80%;
    min-height: 200px;
    background:linear-gradient(to right,#1AEFDE,#0DB5C8);
    display: grid;
    grid-template-columns: auto auto;
    z-index: 1;
    box-shadow: 0px 0px 5px 1px #1AEFDE;
    margin-bottom: 16px;
    opacity: 1;
    scale: .8;
    @media (max-width: 768px) {
        grid-template-columns: auto ;
        background:linear-gradient(to top,#1AEFDE,#0DB5C8);
        width: 50%;
        box-shadow: 0px 0px 5px 1px  #ffffff;
    }   
    @media (max-width: 480px) {
        width: 80%;
    }  
`;


export const Info = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content:center;
    font-family: cursive;
    color: #F8F8F8;
    @media (max-width: 768px) {
        grid-row-start: 1;
  grid-row-end: 2;
 
    } 
`;

export const Animation = styled.div`
    padding: 32px 64px 32px 64px;
    
    @media (max-width: 768px) {
    padding: 32px 0px 32px 0px;
    }
`;

export const P = styled.p`
    font-family: "Baloo Da 2";
    font-size:18px;
    padding-left: 16px;
    padding-right: 16px;
    margin-top: 0px;
    margin-bottom: 32px;
    &::selection {
        color: purple
    }
`;

export const H1 = styled.h1`
    font-family: Iceland;
    font-size:42px;
`;

export const LeftDiv = styled.div`
    position:absolute;
    width: 50%;
    height:100%;
    top:0;
    left: 0;
    background:  #F8F8F8;
    box-shadow: 0px 0px 2px #F8F8F8;
    @media (max-width: 768px) {
        display: none;
    }
`;
