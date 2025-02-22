import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {

            const dispatch = useDispatch();
            // fetch the trailer video and updating the store with trailer video
            const getMovieTrailer = async () => { 
            const data = await fetch('https://api.themoviedb.org/3/movie/'+ movieId +'/videos', API_OPTIONS);
            const json = await data.json();
            console.log("Videos: ", json);
    
            // find out which video in json is the trailer
            const trailers = json?.results?.filter((video) => video.type === "Trailer" );
            console.log("Trailers : ", trailers);
            const trailer = trailers.length 
                            ? trailers?.[0] 
                            : json.results[0];
             console.log("Trailer : ", trailer);
    
            // add this trailer to the redux store
            dispatch(addTrailerVideo(trailer));
        };
    
        useEffect(() => {
            getMovieTrailer();
        }, []);
    
};

export default useMovieTrailer;