import React from "react";
import {Link} from "react-router-dom";

class Header extends React.Component {
    state = {
        search: "",
    };

    handleKey = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            this.props.searchMovies(this.state.search);
        }
    };

    clickBtn = (event) => {
        event.preventDefault();
        if (this.state.search === ""){
            alert('Введите название фильма');
            return
        }
        this.props.searchMovies(this.state.search);
    };

    render() {
        return (
            <header>
                <nav className="navbar fixed-top" data-bs-theme="dark">
                    <div className=" container container-fluid">
                        <Link className="navbar-brand" to="/">
                            ЧТО ПОСМОТРЕТЬ
                        </Link>
                        <Link className="navbar-brand" to="/about">
                            About
                        </Link>
                        <form className="d-flex" role="search">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Поиск..."
                                value={this.state.search}
                                onChange={(e) =>
                                    this.setState({ search: e.target.value })
                                }
                                onKeyDown={this.handleKey}
                            />
                            <button
                                className="btn btn-outline-warning"
                                type="submit"
                                onClick={this.clickBtn}
                            >
                                Поиск
                            </button>
                        </form>
                    </div>
                </nav>
            </header>
        );
    }
}
export { Header };
