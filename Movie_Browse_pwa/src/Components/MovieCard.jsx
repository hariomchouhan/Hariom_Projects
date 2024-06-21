import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { searchContext } from '../ContextApi/SearchContext';

export const MovieCard = ({movie}) => {
    const { setImdbID } = useContext(searchContext)
    const navigate = useNavigate();
    const postHandler = (imdbID) => {
        setImdbID(imdbID)
        navigate(`?search=${imdbID}`);
        navigate(`/details?search=${imdbID}`)
    }
    return (
        <div className='col-md-4 my-3' onClick={() => {const imdbID = movie.imdbID; postHandler(imdbID)}}>
            <div className="card" style={{'height': '100%'}}>
                <img src={movie.Poster} alt={movie.Title} height={400} className='rounded-top-2' />
                <div className="card-body">
                    <h3 className="card-title">{movie.Title}</h3>
                    <p className="card-text">{movie.Year}</p>
                </div>
            </div>
        </div>
    )
}
