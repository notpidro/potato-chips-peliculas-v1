import "./Hero.css";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Hero = ({movies}) => {

    const navigate = useNavigate();

    function reviews(movieId) {
        navigate(`/Reviews/${movieId}`);
    }

    return (
        <div className="contenedor-carrusel-peliculas">
            <Carousel>
                {
                    movies?.map((movie) => {
                        return (
                            <Paper>
                                <div className="contenedor-tarjeta-pelicula">
                                    <div className="tarjeta-pelicula" style={{"--img": `url(${movie.backdrops[0]})`}}>
                                        <div className="detalle-pelicula">
                                            <div className="poster-pelicula">
                                                <img src={movie.poster} alt=""/>
                                            </div>
                                            <div className="titulo-pelicula">
                                                <h4>{movie.title}</h4>
                                            </div>
                                            <div className="contenedor-botones-trailer">
                                                <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`} >
                                                    <div className="contenedor-icono-boton-play">
                                                        <FontAwesomeIcon className="icono-boton-play"
                                                            icon={faCirclePlay}
                                                        />
                                                    </div>
                                                </Link>
                                                <div className="contenedor-boton-review">
                                                    <Button variant="info" onClick={() => reviews(movie.imdbId)}>Reviews</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Paper>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}

export default Hero