import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import { getMovie } from "../store/movie.actions"


export const DetailsPage = () => {

    const params = useParams()
    const dispatch = useDispatch()
    const movie = useSelector(state => state.movieModule.movie)
    console.log(movie);

    useEffect(() => {
        const id = params.id
        if (id) dispatch(getMovie(id))

    }, [])

    if (!movie) return <div>Loading...</div>
    return (
        <Container>
            <Background backgorund={movie.backgroundImg} />

            <Content>
                <TitleImg>
                    <img src={movie.titleImg} />
                </TitleImg>
                <Controls>
                    <PlayBtn><img src="/imgs/play-icon-black.png" /> <span>Play</span></PlayBtn>
                    <TrailerBtn><img src="/imgs/play-icon-white.png" /> <span>Trailer</span></TrailerBtn>
                    <AddToList><span /><span /></AddToList>
                    <GroupWatch>
                        <img src="/imgs/group-icon.png" />
                    </GroupWatch>
                </Controls>
                <SubTitle>
                    {movie.subTitle}
                </SubTitle>
                <Description>
                    {movie.description}
                </Description>
            </Content>
        </Container>
    )
}

const Container = styled.div`
overflow-x: hidden;
`

const Background = styled.div`
background: ${((props) => `url(${props.backgorund})`)};
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.8;
    z-index: -1;
`

const Content = styled.div`
/* max-width: 874px; */
margin-top:200px;
margin-left: 100px;
display: flex;
flex-direction: column;
@media (max-width:768px) {
    margin: 0 20px ;
    margin-top: 120px;
}
`

const TitleImg = styled.div`
margin-bottom: 50px;
 img {
     max-width: 900px;
     width: 50%;
     margin-left: -50px;
     @media (max-width:768px) {
         margin-left: 0;
         width: 100%;
     }
 }

`

const Controls = styled.div`
display: flex;
align-items: center;
gap: 10px;
margin-bottom: 35px;

`

const PlayBtn = styled.button`
margin: 0;
font-weight: 600;
font-size: 1.5em;
padding: 30px 30px;
height: 56px;
border-radius: 4px;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
letter-spacing: 1.8px;
text-align: center;
text-transform: uppercase;
background-color: rgb(249,249,249);
border: none;
color: rgb(0,0,0);

img {
    width: 32px;
}

:hover {
    background-color: rgb(198,198,198);
    
}

@media (max-width:768px) {
    font-size: 1em;
    padding: 20px 10px;
    height: 44px;

    img {
    width: 24px;
}
}
`

const TrailerBtn = styled(PlayBtn)`
background-color: rgb(0,0,0,0.3);
border: 1px solid rgb(249,249,249);
color: rgb(249,249,249);
`

const AddToList = styled.div`
height: 56px;
width: 56px;
display: flex;
justify-content: center;
align-items: center;
background-color: rgb(0,0,0,0.6);
border-radius: 50%;
border:2px solid white;
cursor: pointer;
:hover {
background-color: rgb(0,0,0,0.45);
}
span {
    background-color: rgb(249,249,249);
    display: inline-block;

    &:first-child {
        height: 2px;
        width: 16px;
        transform: translate(1px, 0) rotate(0);
    
    }
    &:nth-child(2) {
        height: 16px;
        width: 2px;
        transform: translate(-8px) rotate(0);

    }
}

@media (max-width:768px) {
height: 44px;
width: 44px;
}
`

const GroupWatch = styled.div`
height: 56px;
width: 56px;
display: flex;
justify-content: center;
align-items: center;
border: 2px solid white;
border-radius: 50%;
background-color: rgb(0,0,0,0.6);
cursor: pointer;
:hover {
background-color: rgb(0,0,0,0.45);
}
@media (max-width:768px) {
height: 44px;
width: 44px;
}
`

const SubTitle = styled.div`
color: rgb(249,249,249);
font-size: 15px;
min-height: 20px;
margin-bottom: 25px;
@media (max-width:768px) {
    font-size: 14px;
}
`

const Description = styled.div`
line-height: 1.4;
font-size: 20px;
color: rgb(249,249,249);
width: 90%;
@media (max-width:768px) {
    width: 100%;
    font-size: 16px;
}
`