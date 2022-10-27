import React from 'react'
import {Product} from './Product'

const Home = () => {
  return (
    <div className='home'>
      <div className='home_container'>
        <img className='home-image' src=" https://m.media-amazon.com/images/I/61QH1LQm4KL.jpg " alt=" "></img>
        <div className='home_row'>
            <Product />
            <Product />
        </div>

        <div className="home-row">
            {/* Product */}
            {/* Product */}
            {/* Product */}
        </div>
        <div className='home_row'>
          
        </div>

      </div>
    </div>
  )
}

export default Home