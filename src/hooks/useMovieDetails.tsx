import { useEffect, useState } from "react"

import movieDB from "../api/movieDB";
import { Cast, CreditsResponse } from "../interfaces/creditsInterface";
import { MovieFull } from "../interfaces/movieInterface";


interface MovieDetails {
    isLoading: boolean;
    movieFull?: MovieFull;
    cast: Cast[];    
}

const useMovieDetails = ( movieId: number ) => {
    
    const [state, setState] = useState<MovieDetails>({
        isLoading: true,
        movieFull: undefined,
        cast: []
    });
    
    const getMovieDetails = async () => {
        const movieDetaisPromise =  movieDB.get<MovieFull>(`/${ movieId }`);
        const castPromise        =  movieDB.get<CreditsResponse>(`/${ movieId }/credits`);

        const [ movieDetailsResponse, castResponse ] = await Promise.all([ movieDetaisPromise, castPromise ]);
        setState({
            isLoading: false,
            movieFull: movieDetailsResponse.data,
            cast: castResponse.data.cast
        })
    }

    useEffect(() => {
        getMovieDetails();

    }, [])

    return {
        ...state,
    }
}

export default useMovieDetails
