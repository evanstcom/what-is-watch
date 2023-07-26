import React, {useEffect, useState} from "react";
import { Movies } from "../Components/Movies";
import { Preloader } from "../Layout/Preloader";

export default function App(){
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect ( () => {
        fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/top`, {
            method: "GET",
            headers: {
                "X-API-KEY": "9e52d931-b757-457b-a1ea-0d872ae51d51",
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {setMovies(data.films); setLoading(false)})
            .catch((err) => {
                console.error(err);
            });
    }, [])

    searchMovies = (s) => {
        this.setState({ loading: true });
        fetch(
            `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${s}`,
            {
                method: "GET",
                headers: {
                    "X-API-KEY": "9e52d931-b757-457b-a1ea-0d872ae51d51",
                    "Content-Type": "application/json",
                },
            }
        )
            .then((response) => response.json())
            .then((data) => {setMovies(data.films); setLoading(false)})
            .catch((err) => {
                console.error(err);
            });
    };

        return (
            <>
                <main className="main-section">
                    {loading ? 
                    <Preloader />
                    : 
                    <Movies movies={movies} /> }
                </main>
            </>
        );
}
