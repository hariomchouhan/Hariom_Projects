import React, { useContext, useEffect, useState } from 'react'
import { MovieCard } from './MovieCard'
import axios from 'axios'
import { searchContext } from '../ContextApi/SearchContext'

export const MovieList = () => {

    const [movies, setMovies] = useState();
    const [loading, setLoading] = useState(true);
    const { search } = useContext(searchContext)
    const fetchMovies = async () => {
        const response = await axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=7e58465f&s=${search}`)
        const data = response.data.Search;
        setMovies(data)
        setLoading(false)
        // console.log(data);
    }
    useEffect(() => {
        fetchMovies()
    }, [search])

    return (
        <>
        {
            loading == true ? <img src='./1475.gif' />
            :
            <div className='row'>
                {

                    movies?.map((movie, index) => (
                        <MovieCard movie={movie} key={index} />
                    ))
                }
            </div>
            }
            </>
    
  )
}
