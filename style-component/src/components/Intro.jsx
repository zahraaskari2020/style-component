import React from 'react'
import { styled } from 'styled-components';
import Woman from '../img/woman.jfif'

const Container = styled.div`
    height: calc(100vh - 50px);
    display:flex;
    padding:20px;
`;

const Left = styled.div`
    width: 60%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center
`;
const Title = styled.h1`
    font-size:60px;
    width:60%;
`;

const Desc = styled.p`
    font-size:20px;
    width:60%;
    margin-top:20px;
`;
const Info = styled.div`
    width:60%;
    display:flex;
    margin-top:50px;
    justify-content:space-between;
    align-items:center;
`;
const Button = styled.button`
    padding:15px;
    background-color:darkblue;
    color:white;
    border-radius:10px;
    font-weight:bold;
    border:none;
    letter-spacing:2px;
    curson:pointer
`;
const Contact = styled.div`
    display:flex;
    flex-direction:column;
`;

const Phone = styled.span`
    color: #f0667d;
    font-weight:boldl
`;
const ContactText = styled.span`
    color: gray;
    margin-top:
`;

const Right = styled.div`
    width:40%;
`;
const Image = styled.img`
    width:100%;
`;


const Intro = () => {
  return (
    <Container>
        <Left>
            <Title>Adnenture in Creative Age</Title>
            <Desc>we belive that designing products and services in close partnership with clients is the 
                only way to have a real impact on their business
            </Desc>
            <Info>
                <Button>Start A Project</Button>
                <Contact>
                    <Phone>Cell US (012) 345 - 6789</Phone>
                    <ContactText>For any question or concern</ContactText>
                </Contact>
            </Info>
        </Left>
        <Right>
            <Image src={Woman}></Image>
        </Right> 
    </Container>
  )
}

export default Intro
