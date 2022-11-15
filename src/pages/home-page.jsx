import styled from "styled-components"
import { ImgCarousel } from "../cmps/img-carousel"
import { GeneralRecommended } from "../cmps/general-recommended"
import { Viewers } from "../cmps/viewer"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getMovies } from "../store/movie.actions"
import { firebaseService } from "../services/firebase-service"

export const HomePage = () => {
    const [moviesToShow, setMoviesToShow] = useState({})
    const dispatch = useDispatch()
    const movies = useSelector(state => state.movieModule.movies)

    useEffect(() => {
        dispatch(getMovies())
    }, [])

    useEffect(() => {
        if (movies) {
            const newMovies = firebaseService.sortMovies(movies)
            setMoviesToShow(newMovies)
        }
    }, [movies])

    return (
        <Container>
            <ImgCarousel />
            <Viewers />
            {moviesToShow && <Wrap>
                <GeneralRecommended title={"Recommended for You"} movies={moviesToShow.recommend} />
                <GeneralRecommended title={"New to Disney+"} movies={moviesToShow.new} />
                <GeneralRecommended title={"Originals"} movies={moviesToShow.original} />
                <GeneralRecommended title={"Trending"} movies={moviesToShow.trending} />
            </Wrap>}
        </Container>
    )
}

const Container = styled.div`
overflow-x: hidden;
@media (max-width: 768px) {
    overflow-x: unset;

}
background: url("/imgs/home-background.png");
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

const Wrap = styled.div``