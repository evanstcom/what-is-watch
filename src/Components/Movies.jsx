import React from "react";
import { Movie } from "./Movie";

function Movies(props) {
    const { movies = [] } = props;
    return (
        <div className="movies container">
            <div className="row">
                {movies.length ? (
                    movies.map((movie) => (
                        <Movie key={movie.filmId} {...movie} />
                    ))
                ) : (
                    <h4>Ничего не найдено</h4>
                )}
            </div>
        </div>
    );
}

export { Movies };
