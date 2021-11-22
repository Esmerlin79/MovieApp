import axios from "axios";

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'eee03d0e6df4093f1073ff7c2b082349',
        language: 'es-ES'
    }
});

export default movieDB;