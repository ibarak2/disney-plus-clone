import styled from "styled-components"

export const Viewers = () => {

    const content = [
        { img: "/imgs/viewers-disney.png", vid: "/vids/disney.mp4" },
        { img: "/imgs/viewers-pixar.png", vid: "/vids/pixar.mp4" },
        { img: "/imgs/viewers-marvel.png", vid: "/vids/marvel.mp4" },
        { img: "/imgs/viewers-starwars.png", vid: "/vids/disney.mp4" },
        { img: "/imgs/viewers-national.png", vid: "/vids/national.mp4" },
    ]


    return (
        <Section>
            {content.map((item, idx) => {
                return (
                    <Wrap key={idx}>
                        <img src={item.img}></img>
                        <video autoPlay={true} loop={true} playsInline={true}>
                            <source src={item.vid} type='video/mp4' />
                        </video>
                    </Wrap>
                )
            })}
        </Section>
    )
}

const Section = styled.div`
margin-top: 30px;
padding: 30px 26px;
display: grid;
gap: 25px;
grid-template-columns: repeat(5, minmax(0,1fr));
@media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0,1fr));

}
`

const Wrap = styled.div`
padding-top: 56%;
border-radius: 10px;
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
rgb(0 0 0 / 73%) 0px 16px 10px -10px;
cursor: pointer;
overflow: hidden;
position: relative;
transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45,0.94);
border: 3px solid rgba(249,249,249, 0.1);

img {
    inset: 0px;
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;
    position: absolute;
    top:0;
    z-index: 10;
    opacity: 1;
    transition: opacity 0.5s ease-in-out 0s;
}

video {
    width:100%;
    height: 100%;
    position: absolute;
    top: 0;
    opacity: 0;
    z-index: 0;
}

&:hover {
    box-shadow: rgb(0 0 0 / 80%) 0 40px 58px -16px,
    rgb(0 0 0 / 72%) 0 30px 22px -10px;

    transform: scale(1.05);
    border-color: rgba(249,249,249, 0.8);
    video {
        opacity: 1;
    }
}

`