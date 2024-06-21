import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { searchContext } from '../ContextApi/SearchContext';

export const Header = () => {

    const { search, setSearch } = useContext(searchContext)
    const navigate = useNavigate();

    const changeHandler = (e) => {
        setSearch(e.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`/movies?search=${search}`)
    };
    return (
        <div className='alert alert-primary'>
            <div className="container">
                <div className="row d-flex justify-content-between">
                    <div className="col-md-4">
                        <h3>
                            <Link to='/' style={{'textDecoration': 'none'}}>Movie Browser</Link>
                        </h3>
                    </div>
                    <form onSubmit={handleSearch} className="col-md-8" style={{'width': '20rem'}}>
                        <input type="search" placeholder='Search Movie...' onChange={changeHandler} className='form-control'/>
                    </form>
                </div>
            </div>
        </div>
    )
}
