import useMovieTrailer from "../hooks/useMovieTrailer";
import {  useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {

    
    const trailerVideo = useSelector(state => state?.movies?.trailerVideo);
    console.log("Trailer Video :",trailerVideo);
    useMovieTrailer(movieId);
    
    return (
        <div className="w-screen">
        
        <iframe 
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&disablekb=1&fs=0&playsinline=1`}
        title="YouTube video player"
        allow="autoplay; encrypted-media"
        frameBorder="0">
        </iframe>

        </div>
    );
};

export default VideoBackground;

{/* <iframe 
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key} 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" >
        </iframe> */}