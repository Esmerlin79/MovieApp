import { useEffect, useState } from "react";
import movieDB from "../api/movieDB";
import { Movie, MovieDBNowPlaying } from "../interfaces/movieInterface";


const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [currentMovies, setCurrentMovies] = useState<Movie[]>([]);

    const getMovies = async () => {
        const resp = await movieDB.get<MovieDBNowPlaying>('/now_playing');  
        setCurrentMovies( resp.data.results );  
        setIsLoading(false);
    }

    useEffect(() => {
        getMovies();
    }, [])

    return {
        currentMovies,
        isLoading,
    }
}

export default useMovies
