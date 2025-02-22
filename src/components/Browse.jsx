import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./mainContainer";
import SecondaryContainer from "./secondaryContainer";

const Browse = () => {

    useNowPlayingMovies();
    
    return (
        <div className="">
            <Header />

            <MainContainer />
            <SecondaryContainer />
        </div>
    );
};

export default Browse;
