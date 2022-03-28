import { Outlet } from 'react-router-dom';
import styled from 'styled-components'
import { mobile } from '../../responsive'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: teal;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Wrapper = styled.div`
    width: 30%;
    background-color: white;
    padding: 20px;
    ${mobile({
    width: '80%'
})}
`

const AuthLayout = () => {
    return (
        <div>
            <Container>
                <Wrapper>
                    <Outlet />
                </Wrapper>
            </Container>
        </div>
    )
}

export default AuthLayout