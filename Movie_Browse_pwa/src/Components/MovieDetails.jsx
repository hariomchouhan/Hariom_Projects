import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { searchContext } from '../ContextApi/SearchContext';

export const MovieDetails = () => {

    const navigate = useNavigate()
    const [moviedetails, setMoviedetails] = useState();
    const [loading, setLoading] = useState(true);
    const { imdbID, search } = useContext(searchContext)
    const fetchMoviesDetails = async () => {
        const response = await axios.get(`https://www.omdbapi.com/?i=${imdbID}&apikey=7e58465f`)
        const data = response.data;
        setMoviedetails(data)
        setLoading(false)
        // console.log(data);
    }
    useEffect(() => {
        fetchMoviesDetails()
    }, [])

    const backHandler = ()=> {
        navigate(`/movies?search=${search}`, -1);
    }
    return (
        <div className="container my-5">
            {
                loading ==true ? <img src='./1475.gif' />
                :
                <div className="row">
                <div className="col-md-4">
                    <img src={moviedetails?.Poster} alt={moviedetails?.Title} className="img-fluid rounded" />
                </div>
                <div className="col-md-8 d-flex flex-column align-items-start jujustify-content-center">
                    <h2>{moviedetails?.Title}</h2>
                    <p><strong>Director:</strong> {moviedetails?.Director}</p>
                    <p><strong>Plot:</strong> {moviedetails?.Plot}</p>
                    <p><strong>Year:</strong> {moviedetails?.Year}</p>
                    <p><strong>Language:</strong> {moviedetails?.Language}</p>
                    <p><strong>Writer:</strong> {moviedetails?.Writer}</p>
                    <p><strong>Awards:</strong> {moviedetails?.Awards}</p>
                    <p><strong>Genre:</strong> {moviedetails?.Genre}</p>
                    <p><strong>Actors:</strong> {moviedetails?.Actors}</p>
                    <p><strong>Released:</strong> {moviedetails?.Released}</p>
                    <button onClick={backHandler} className='btn btn-outline-info fw-bold'>Back</button>
                </div>
            </div>
            }
        </div>
    )
}
