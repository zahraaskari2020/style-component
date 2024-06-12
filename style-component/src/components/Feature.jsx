import React from 'react'
import { styled } from 'styled-components';
import App from '../img/app.jfif'
import AnimatedShapes from './AnimatedShapes';

const Container = styled.div`
    display:flex;
`;
const Left = styled.div`
    width:50%;
`;
const Image = styled.img`
    width:80%;
`;
const Right = styled.div`
    width:50%;
    display:flex;
    flex-direction:column;
    justify-content:center;

`
const Title = styled.span`
    font-size:70px;
`
const SubTitle = styled.span`
    font-size:24px;
    font-style:italic;
    color:#333;
    margin-top:30px;
`
const Desc = styled.p`
    font-size:20px;
    color:#777;
    margin-top:30px;
`
const Button = styled.button`
    width:150px;
    border:none;
    padding:15px 20px;
    background-color:darkblue;
    color:white;
    font-size:20px;
    border-radius:20px;
    margin-top:20px;
    cursor:pointer;
`


const Feature = () => {
  return (
    <Container>
        <Left><Image src={App}></Image></Left>
        <Right>
            <Title>
                <b>good</b> design<br />
                <b>good</b> business
            </Title>
            <SubTitle>we know that good design means good business</SubTitle>
            <Desc>we help our clinets succeed by creating brand identities.we help our
                 clinets succeed by creating brand identities. we help our clinets succeed 
                 by creating brand identities 
            </Desc>
            <Desc>we care you business and guarantee you to achieve marketing goals 
            </Desc>
            <Button>Learn more</Button>
        </Right>
        <AnimatedShapes />
    </Container>
  )
}

export default Feature
