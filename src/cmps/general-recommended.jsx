import { Link } from "react-router-dom"
import styled from "styled-components"


export const GeneralRecommended = ({ title, movies }) => {

    if (!movies) return <div>Loading...</div>
    return (
        <Section>
            <h4>{title}</h4>
            <Content>
                {movies.map((movie, idx) => {
                    return (
                        <Wrap key={idx}>
                            <Link to={`/details/${movie.id}`}>
                                <img
                                    src={movie.cardImg}
                                    alt=""></img>
                            </Link>
                        </Wrap>

                    )
                })}
            </Content>
        </Section>
    )
}

const Section = styled.div`
padding: 26px 26px;

`

const Content = styled.div`
margin-top: 15px;
display: grid;
gap: 25px;
grid-template-columns: repeat(4, minmax(0,1fr));
@media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0,1fr));
}
`

const Wrap = styled.div`
padding-top: 56%;
border: 3px solid rgba(249,249,249, 0.1);
border-radius: 10px;
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
rgb(0 0 0 / 73%) 0px 16px 10px -10px;
cursor: pointer;
overflow: hidden;
position: relative;
transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45,0.94);

img {
    inset: 0px;
    height: 100%;
    top: 0;
    width: 100%;
    position: absolute;
    object-fit: cover;
    opacity: 1;
    transition: opacity 0.5s ease-in-out 0s;
    z-index: 1;
}

&:hover {
    box-shadow: rgb(0 0 0 / 80%) 0 40px 58px -16px,
    rgb(0 0 0 / 72%) 0 30px 22px -10px;

    transform: scale(1.05);
    border-color: rgba(249,249,249, 0.8);
}

`