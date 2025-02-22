import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    // fetch all the movies and add it to redux store
    const getNowPlayingMovies = async () =>  {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
        const json = await data.json();
        console.log("Movies Data : ", json.results);
        
        // add the movies to the stor
        dispatch(addNowPlayingMovies(json.results));
    } 

    useEffect(() => {
        getNowPlayingMovies();
    } ,[]);
};

export default useNowPlayingMovies;