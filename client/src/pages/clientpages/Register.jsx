import styled from 'styled-components'
import { mobile } from '../../responsive'

const Title = styled.h1`
    font-s-ze: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`
const Agreement = styled.span`
    font-size: 16px;
    margin: 20px 0px;
    ${mobile({
    fontSize: '14px'
})}
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`

const Register = () => {
    return (
        <>
            <Title>Create An Account</Title>
            <Form>
                <Input placeholder='First Name' />
                <Input placeholder='Last Name' />
                <Input placeholder='Username' />
                <Input placeholder='Email Address' />
                <Input placeholder='Password' />
                <Input placeholder='Confirm Password' />
                <Agreement>
                    By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button>CREATE</Button>
            </Form>
        </>
    )
}

export default Register