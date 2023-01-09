import React from "react";
import { Movies } from "../Components/Movies";
import { Header } from "../Layout/Header";
import { Preloader } from "../Layout/Preloader";

class Main extends React.Component {
    state = {
        movies: [],
        loading: true,
    };

    componentDidMount() {
        fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/top`, {
            method: "GET",
            headers: {
                "X-API-KEY": "9e52d931-b757-457b-a1ea-0d872ae51d51",
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => this.setState({ movies: data.films, loading: false }))
            .catch((err) => {
                console.error(err);
            });
    }

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
            .then((data) => this.setState({ movies: data.films, loading: false }))
            .catch((err) => {
                console.error(err);
            });
    };

    render() {
        const { movies, loading } = this.state;

        return (
            <>
                <Header searchMovies={this.searchMovies} />
                <main className="main-section">
                    {loading ? 
                    <Preloader />
                    : 
                    <Movies movies={movies} /> }
                </main>
            </>
        );
    }
}

export { Main };
