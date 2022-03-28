import styled from 'styled-components'

const Title = styled.h1`
    font-s-ze: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
`
const Link = styled.a`
    margin: 5px 0px;
    text-decoration: underline;
    cursor: pointer;
    font-size: 12px;
    font-weight: 600;
`

const Login = () => {
    return (
        <>
            <Title>Sign In</Title>
            <Form>
                <Input placeholder='Username' />
                <Input placeholder='Password' />
                <Button>LOG IN</Button>
                <Link>Forgot Passsword?</Link>
                <Link>Create an Account</Link>
            </Form>
        </>
    )
}

export default Login