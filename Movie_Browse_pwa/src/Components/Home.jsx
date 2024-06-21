import React from 'react'
import { useNavigate } from 'react-router-dom'
import MyImage from '../myImg.png'
export const Home = () => {
  const navigate = useNavigate()
  const showMovieHandler = () => {
    navigate('/movies')
  }
  return (
    <div className='row'>
      <div className="col-md-4 col-xs-12"></div>
      <div className="col-md-4 col-xs-12 text-center">
        <img src={MyImage} alt="Hariom Chouhan" className='img ' width={200} height={200} loading='lazy' />
        <h3>Movie Browser App</h3>
        <p>Powered By Hariom Chouhan</p>
        <button className='btn btn-outline-info fw-bold fs-5' onClick={showMovieHandler}>Show Movies</button>
      </div>
      <div className="col-md-4 col-xs-12"></div>
    </div>
  )
}
