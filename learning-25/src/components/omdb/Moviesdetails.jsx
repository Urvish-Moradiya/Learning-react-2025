import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Moviesdetails = () => {
    const { id } = useParams();
    const [detail, setDetail] = useState(null);

    useEffect(() => { getDetail();}, []);

    const getDetail = async () => {
            const res = await axios.get(`http://www.omdbapi.com/?apikey=87abafe6&i=${id}`);
            setDetail(res.data);
            console.log(res.data);
    };  

    return (
        <div style={{ padding: '15px' }}>
            <h1>Movie Details</h1>
            {detail && (
                <div>
                    <img src={detail.Poster} alt={detail.Title} style={{ maxWidth: '250px' }}/>
                    <h2>{detail.Title}</h2>
                    <p><strong>Year:</strong> {detail.Year}</p>
                    <p><strong>Rated:</strong> {detail.Rated}</p>
                    <p><strong>Released:</strong> {detail.Released}</p>
                    <p><strong>Runtime:</strong> {detail.Runtime}</p>
                    <p><strong>Genre:</strong> {detail.Genre}</p>
                    <p><strong>Director:</strong> {detail.Director}</p>
                    <p><strong>Writer:</strong> {detail.Writer}</p>
                    <p><strong>Actors:</strong> {detail.Actors}</p>
                    <p><strong>Plot:</strong> {detail.Plot}</p>
                    <p><strong>Language:</strong> {detail.Language}</p>
                    <p><strong>Country:</strong> {detail.Country}</p>
                    <p><strong>Awards:</strong> {detail.Awards}</p>
                    <p><strong>IMDb Rating:</strong> {detail.imdbRating}</p>
                </div>
            )}
        </div>
    );
};