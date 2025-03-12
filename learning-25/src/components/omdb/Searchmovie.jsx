import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Searchmovie = () => {
    const [moviesData, setmoviesData] = useState([]);
    const [query, setquery] = useState("");

    const searchmovie = async () => {
        try {
            const res = await axios.get(`http://www.omdbapi.com/?apikey=87abafe6&s=${query}`);
            console.log(res.data);
            
            if (res.data.Search) {
                setmoviesData(res.data.Search);
            }
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    };

    return (
        <div>
            <h1>Search Movie</h1>
            <div style={{textAlign:"center", fontSize:"20px"}}>
            <input type="text" value={query} onChange={(event) => setquery(event.target.value)}placeholder="Enter movie name"/>
            </div>
            <button onClick={searchmovie}>Search Movie</button>
            

            <div className="container mt-4">
                <div className="row">
                    {moviesData?.map((movie) => (
                        <div className="col-md-3 mb-4" key={movie.imdbID}>
                            <div className="card">
                                <Link to={`/moviedetail/${movie.imdbID}`}>
                                    <img 
                                        src={movie.Poster !== "N/A" ? movie.Poster : "https://placeholder.com/300x450"} 
                                        className="card-img-top" 
                                        alt={movie.Title}
                                        style={{ height: "300px"}}
                                    />
                                </Link>
                                <div className="card-body">
                                    <h5 className="card-title">{movie.Title}</h5>
                                    <p className="card-text">Year: {movie.Year}</p>
                                    <p className="card-text">ID: {movie.imdbID}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};