import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { loginWithGoogle, logout } from "../store/user.actions"


export const Header = () => {

    const navigate = useNavigate()
    const loggedinUser = useSelector((state) => state.userModule.user)

    useEffect(() => {
        if (!loggedinUser) {
            navigate('/')
        } else {
            navigate('/home')
        }
        console.log(loggedinUser);
    }, [loggedinUser])


    const dispatch = useDispatch()

    const onLogin = () => {
        dispatch(loginWithGoogle())
    }

    const onLogout = () => {
        dispatch(logout())
        navigate('/')
    }

    return (
        <MainContainer>
            <Logo>
                <a href="/"><img src="imgs/logo.svg"></img></a>
            </Logo>
            {loggedinUser ?
                <Wrapper>
                    <NavCategories>
                        <a href="/home">
                            <img src="/imgs/home-icon.svg" alt="HOME" />
                            <span>Home</span>
                        </a>
                        <a href="/home">
                            <img src="/imgs/search-icon.svg" alt="HOME" />
                            <span>Search</span>
                        </a>
                        <a href="/home">
                            <img src="/imgs/watchlist-icon.svg" alt="HOME" />
                            <span>Watchlist</span>
                        </a>
                        <a href="/home">
                            <img src="/imgs/original-icon.svg" alt="HOME" />
                            <span>Originals</span>
                        </a>
                        <a href="/home">
                            <img src="/imgs/movie-icon.svg" alt="HOME" />
                            <span>Movies</span>
                        </a>
                        <a href="/home">
                            <img src="/imgs/series-icon.svg" alt="HOME" />
                            <span>Series</span>
                        </a>
                    </NavCategories>
                    <LogoutSec>
                        <img src={loggedinUser.imgUrl} referrerPolicy="no-referrer">
                        </img>
                        <LogoutBtn onClick={onLogout}>
                            Logout
                        </LogoutBtn>
                    </LogoutSec>
                </Wrapper>
                :
                <LoginBtn>
                    <button onClick={onLogin}>Login</button>
                </LoginBtn>
            }
        </MainContainer>
    )
}

const MainContainer = styled.div`
position: fixed;
top: 0;
background-color: #080913;
min-height: 100px;
display: flex;
align-items: center;
justify-content: space-between;
padding: 10px 20px;
z-index: 10;
width: 100vw;
`


const Logo = styled.div`
width: 100px;
`

const Wrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-grow: 1;
padding-left: 30px;
@media (max-width: 1130px) {
    justify-content: flex-end;
}
`

const NavCategories = styled.div`
display: flex;
align-items: center;
height: 100%;
position: relative;
@media (max-width: 1130px) {
    display: none;
}
a {
  display:flex ;
  align-items: center;
  padding: 0 12px;
  padding-top: 10px;
  img {
    height: 32px;
    min-width: 32px;
    width: 32px;
    margin-bottom: 5px;
  }
  span {
    color: rgb(249,249,249);
    font-size: 1.5em;
    letter-spacing: 1.42px;
    line-height: 1.08;
    padding: 2px 0;
    white-space: nowrap;
    position: relative;

    &::before {
    background-color: rgb(249,249,249);
    border-radius: 0 0 4px 4px;
    bottom: -6px;
    content: "";
    height: 2px;
    left: 0px;
    opacity: 0;
    position: absolute;
    right: 0;
    transform-origin: left center;
    transform: scaleX(0);
    transition: all 0.25s cubic-bezier(0.25,0.46,0.45,0.94) 0s;
    width: auto;
    }
  :hover {
    ::before {
       transform: scaleX(1);
       opacity: 1;
    }
  }
  }
}
`

const LoginBtn = styled.div`
button{
    background-color: transparent;
    color: #f9f9f9;
    border: 1px solid #f9f9f9 ;
    border-radius: 6px;
    font-size: 1.8em;
    padding: 10px 20px;
    transition: all 0.2s ease;
    :hover {
        background-color: #f9f9f9;
        color: #080913;
        
    }
}
`


const LogoutBtn = styled.div`
position: absolute;
top:84px;
right:20px;
background-color: rgb(19,19,19);
border: 1px solid rgba(151,151,151,0.34);
color:#f9f9f9;
border-radius: 6px;
box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
padding: 10px;
letter-spacing: 3px;
opacity: 0;
`

const LogoutSec = styled.div`
cursor: pointer;
img {
    max-width: 4em;
}
:hover {
    ${LogoutBtn} {
        opacity: 1;
        transition-duration: 1s;
    }
}

`