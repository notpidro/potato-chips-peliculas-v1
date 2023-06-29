import "./Hero.css";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

const Hero = ({movies}) => {
    return (
        <div className="container-carrusel-peliculas">
            <Carousel>
                {
                    movies.map((movie) => {
                        return (
                            <Paper>
                                <div className="contenedor-tarjeta-pelicula">
                                    <div className="tarjeta-pelicula">
                                        <div className="detalle-pelicula">
                                            <div className="poster-pelicula">
                                                <img src={movie.poster} alt=""/>
                                            </div>
                                            <div className="titulo-pelicula">
                                                <h4>{movie.title}</h4>
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