import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons"
import styled from "styled-components"
import { mobile } from "../../responsive"

const Container = styled.div`
    display: flex;
    background-color: teal;
    color: white;
    ${mobile({
        flexDirection: 'column'
      })}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1``
const Desc = styled.p`
    margin: 20px 0px;
    line-height: 1.5em;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    transition: all 0.5s ease;
    cursor: pointer;
    &:hover {
        transform: scale(1.1)
    }
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({
        display: 'none'
      })}
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`
const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({
        backgroundColor: 'black', color: 'white'
      })}
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>e-Store</Logo>
            <Desc>
                There are many passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believeable
            </Desc>
            <SocialContainer>
                <SocialIcon color='3B5999'>
                    <Facebook />
                </SocialIcon>
                <SocialIcon color='E4405F'>
                    <Instagram />
                </SocialIcon>
                <SocialIcon color='55ACEE'>
                    <Twitter />
                </SocialIcon>
                <SocialIcon color='E60023'>
                    <Pinterest />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem> <Room style={{marginRight: '10px'}} /> 33, Femi Alpha Str, Command, Ipaja, Lagos.</ContactItem>
            <ContactItem> <Phone style={{marginRight: '10px'}} /> +234 8081 6271</ContactItem>
            <ContactItem> <MailOutline style={{marginRight: '10px'}} /> contact@e-store.com</ContactItem>
        </Right>
    </Container>
  )
}

export default Footer