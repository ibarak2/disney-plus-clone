import { useEffect } from "react"
import { useDispatch } from 'react-redux'
import styled from "styled-components"
import { checkStore, loginWithGoogle } from "../store/user.actions"

export const Login = () => {

    const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(checkStore())
    // }, [])

    const onLogin = () => {
        dispatch(loginWithGoogle())
    }

    return (
        <Container>
            <MainSection>
                <TopLogos>
                    <img src="/imgs/cta-logo-one.svg"></img>
                </TopLogos>
                {/* <CTABtn /> */}
                <CTABtn onClick={onLogin}>
                    Get all there
                </CTABtn>
                <Description>
                    Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.
                </Description>
                <BottomLogos>
                    <img src="/imgs/cta-logo-two.png"></img>
                </BottomLogos>
            </MainSection>
            <BgImage />
        </Container>
    )
}

const Container = styled.div`
overflow: hidden;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100vh;
color: #fff;

`

const BgImage = styled.div`
background-image: url("/imgs/login-background.jpg");
height: 100%; // gives full-screen height
background-position: top; // positions the image from top and centered ;
background-size: cover; // stretchs the image
background-repeat: no-repeat;
position: absolute;
top: 0;
right: 0;
left: 0;
z-index: -10;
`

const MainSection = styled.section`
max-width: 850px;
width: 100%;
min-height: 100%;
padding: 0 20px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`

const TopLogos = styled.div`
max-width: 850px;
width: 100%;
margin-bottom: 1.5em;
`

const CTABtn = styled.button`
background-color: #075EE6;
color: #f9f9f9;
max-width: 810px;
width: 100%;
padding: 16.5px 0;
font-size: 1.5em;
font-weight: bold;
text-transform: uppercase;
letter-spacing: 2px;
border-radius: 6px;
margin-bottom: 1.5em;
border-color: transparent;
transition: all 0.2s ease ;
:hover {
    background-color: #0483ee;
    transform: scale(1.02);
}
`

const Description = styled.p`
max-width: 850px;
width: 100%;
font-size: 1em;
line-height: 1.5;
letter-spacing: 1.5px;
margin-bottom: 1.5em;

`

const BottomLogos = styled.div`
max-width: 850px;
width: 100%;
`