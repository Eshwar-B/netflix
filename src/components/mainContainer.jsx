import { useSelector } from "react-redux";
import VideoTitle from "./videoTitle";
import VideoBackground from "./videoBackground";
import SecondaryContainer from "./secondaryContainer";

const MainContainer = () => {
    
    const movies = useSelector(store => store.movies?.nowPlayingMovies);

    if(movies === null) return; // for 1st render, movies is null, so return nothing
    const mainMovie = movies[0];
    console.log("Main movie: ",mainMovie);

    const{ original_title, overview, id } = mainMovie;

    return (
        <div className="">
            <VideoTitle title={original_title} overview={overview}/>
            <VideoBackground movieId={id}/>
            <SecondaryContainer />
        </div>
    )
};

export default MainContainer;