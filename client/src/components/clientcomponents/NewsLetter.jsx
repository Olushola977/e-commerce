import { Send } from '@material-ui/icons'
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../../responsive';

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
    ${mobile({
        fontSize: '40px'
      })}
`
const Desc = styled.div`
    font-size: 24px;
    margin-bottom: 20px;
    font-weight: 300;
    ${mobile({
        textAlign: 'center', fontSize: '18px'
      })}
`
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    ${mobile({
        width: '80%'
      })}
`
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`
const Button = styled.button`
    flex: 1;
    background-color: teal;
    color: white;
    border: none;
`

const NewsLetter = () => {
  return (
    <Container>
        <Title>NewsLetter</Title>
        <Desc>Get timely updates from your favorite products.</Desc>
        <InputContainer>
            <Input placeholder='Your Email' />
            <Button>
                <Send />
            </Button>
        </InputContainer>
    </Container>
  )
}

export default NewsLetter