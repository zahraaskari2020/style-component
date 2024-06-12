import React from 'react'
import { styled } from 'styled-components' 
import Woman from '../img/woman1.jfif'

const Container  = styled.div`
    display:flex;
`
const Left  = styled.div`
    width:50%;
`
const Image = styled.img`
    height:100%
`
const Right  = styled.div`
    width:50%;
`
const Wrapper =  styled.div`
    padding:50px;
    display:flex:
    flex-direction:column;
`
const Title = styled.h1`
   
`
const Desc = styled.p`
    font-size:20px;
    margin-top:20px;
    color : #555
`

const Service = () => {
  return (
    <Container>
        <Left>
            <Image src={Woman} />
        </Left>
        <Right>
            <Wrapper>
                <Title>Simple process to start</Title>
                <Desc>we help our clinets succeed by creating brand identities.we help our
                 clinets succeed by creating brand identities. we help our clinets succeed 
                 by creating brand identitie</Desc>
            </Wrapper>
        </Right>
    </Container>
  )
}

export default Service
