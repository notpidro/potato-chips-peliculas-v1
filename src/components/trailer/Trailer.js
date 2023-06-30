import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import "./Trailer.css";

const Trailer = () => {

    let params = userParams();
    const key = prams.ytTrailerId;

    return (
        <div className="contenedor-reproductor-react">
            {(key!=null)?<ReactPlayer controls="true" playing={true} url={`https://www.youtube.com/watch?v=${key}`}
            width="100%" height="100%" />:null}
        </div>
    )
}

export default Trailer