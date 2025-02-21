import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const Browse = () => {

    useNowPlayingMovies();
    
    return (
        <div className="bg-gray-900 min-h-screen">
            <Header />
        </div>
    );
};

export default Browse;
