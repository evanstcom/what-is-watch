import React from "react";

function Movie(props) {
    const {
        filmId: id,
        nameRu: title,
        posterUrlPreview: poster,
        year,
        rating,
        nameEn,
        filmLength,
    } = props;

    return (
        <div
            id={id}
            className="g-1 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6"
        >
            <div className="movie">
                <div className="movie-item">
                    <img src={poster} className="movie-img" alt="poster" />
                    <div className="movie-description">
                        <h4 className="movie-title">{title}</h4>
                        <div className="movie-list">
                            <p className="movie-text">
                                {nameEn ? `${nameEn}` : ""}
                            </p>
                            <p className="movie-text">{year}</p>
                            <p className="movie-text">
                                {filmLength
                                    ? +filmLength.split(":")[0] * 60 +
                                      +filmLength.split(":")[1] +
                                      " мин."
                                    : ""}
                            </p>
                        </div>
                    </div>
                </div>
                <p className="movie-rating">
                    {rating === "null" ? (
                        <p>Нет оценок</p>
                    ) : rating < 4 ? (
                        <span className="rating red">{rating}</span>
                    ) : rating < 7 ? (
                        <span className="rating grey">{rating}</span>
                    ) : rating < 8 ? (
                        <span className="rating green">{rating}</span>
                    ) : (
                        <span className="rating gold">{rating}</span>
                    )}
                </p>
            </div>
        </div>
    );
}

export { Movie };
