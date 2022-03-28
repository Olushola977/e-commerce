import React from 'react';
import styled from 'styled-components';
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import { Badge } from '@material-ui/core';
import {mobile} from '../../responsive';

const Container = styled.div`
  height: 60px;
  background-color: white;
  ${mobile({
    height: '50px'
  })}
`
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({
    padding: '10px 0px'
  })}
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 0.5px solid lightgray;
  margin-left: 25px;
  padding: 5px;
  ${mobile({
    marginLeft: '5px'
  })}
`
const Input = styled.input`
  border: none;
  ${mobile({
    width: '50px'
  })}
`
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: end;
  align-items: center;
  ${mobile({
    justifyContent: 'center', flex: 2, marginRight: '5px'
  })}
`
const Center = styled.div`
  flex: 1;
  text-align: center;
`
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({
    display: 'none'
  })}
`
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({
    fontSize: '18px'
  })}
`
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({
    fontSize: '12px',
    marginLeft: '7px'
  })}
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input placeholder='Search' />
                    <Search style={{color: 'gray', fontSize: 16}} />
                </SearchContainer>
            </Left>
            <Center>
                <Logo>
                    e-Store
                </Logo>
            </Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>LOGIN</MenuItem>
                <MenuItem>
                    <Badge badgeContent={4} color='primary'>
                        <ShoppingCartOutlined />
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar