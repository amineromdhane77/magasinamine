import React from 'react'
import { Link } from 'react-router-dom'
import bacrouns from './../photos/BAC2.jpg'
import './Home.css'

const Home = () => {
  return (
    <div className='homes'style={{backgroundImage: `url(${ bacrouns})` }}>
        <div className='header'> 
            <h1>Amine magasin</h1>
            <p>  Matériel de peche sous marine Haute game pour vous </p>
            <Link to="/menu">
            <button>Shopping</button>
            </Link>
            </div></div>
  )
}

export default Home