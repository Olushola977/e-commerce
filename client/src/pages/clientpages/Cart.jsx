import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import { LadyStyle } from "../../images"
import { mobile } from "../../responsive"

const Container = styled.div`

`
const Wrapper = styled.div`
    padding: 20px;
    ${mobile({
        padding: '10px'
      })}
`
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`
const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    ${mobile({
        padding: '20px 0px'
      })}
`
const TopButton = styled.button`
    padding: 10px;
    cursor: pointer;
    font-weight: 600;
    border: ${props => props.type === 'filled' && 'none'};
    background-color: ${props => props.type === 'filled' ? 'black' : 'transparent'};
    color: ${props => props.type === 'filled' && 'white'};
`
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({
        flexDirection: 'column'
      })}
`
const Info = styled.div`
    flex: 3;
`
const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({
        flexDirection: 'column',
        boxShadow:' 1px 2px 5px #5756562e',
        margin: '10px 0px',
        borderRadius: '2px'
      })}
`

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ${mobile({
        backgroundColor: 'teal', color: 'white', padding: '10px 0px'
    })}
`
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    ${mobile({
        width: '100%',
        justifyContent: 'space-around',
        borderBottom: '1px solid #86848496'
    })}
`
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200
`

const Image = styled.img`
    width: 150px;
`

const ProductName = styled.span``

const ProductId = styled.span``

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid black;
    background-color: ${props => props.color}
`

const ProductSize = styled.span``

const TopTexts = styled.div`
    ${mobile({
        display: 'none'
    })}
`

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`
const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`
const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    padding: 20px;
    border-radius: 10px;
    height: 50vh;
`
const SummaryTitle = styled.h1`
    font-weigh: 200;
`
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === 'total' && '500'};
    font-size: ${props => props.type === 'total' && '24px'};
`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`

const Cart = () => {
  return (
    <Container>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag (2)</TopText>
                    <TopText>Your Wishlist (0)</TopText>
                </TopTexts>
                <TopButton type='filled'>CHECKOUT</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src={LadyStyle} />
                            <Details>
                                <ProductName><b>Product: </b> JESSIE THUNDER SHOES</ProductName>
                                <ProductId><b>ID: </b> 987654321</ProductId>
                                <ProductColor color='black' />
                                <ProductSize><b>Size: </b> 37.5</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add />
                                <ProductAmount>2</ProductAmount>
                                <Remove />
                            </ProductAmountContainer>
                            <ProductPrice>$ 30</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr />
                    <Product>
                        <ProductDetail>
                            <Image src={LadyStyle} />
                            <Details>
                                <ProductName><b>Product: </b> HAKURA T-SHIRT</ProductName>
                                <ProductId><b>ID: </b> 987255321</ProductId>
                                <ProductColor color='gray' />
                                <ProductSize><b>Size: </b> M</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add />
                                <ProductAmount>2</ProductAmount>
                                <Remove />
                            </ProductAmountContainer>
                            <ProductPrice>$ 30</ProductPrice>
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>Order Summary</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$ 60</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type='total'>
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>$ 60</SummaryItemPrice>
                    </SummaryItem>
                    <Button>CHECKOUT NOW</Button>
                </Summary>
            </Bottom>
        </Wrapper>
    </Container>
  )
}

export default Cart