import React from "react";
import Product from './Product'

const Home = ({ props }) => {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home-image"
          src=" https://m.media-amazon.com/images/I/61QH1LQm4KL.jpg "
          alt=" "
        ></img>
        <div className="home__row">
          <Product
            id="12343"
            title="The Lean Startup"
            price={19.99}
            rating={4}
            image="  https://m.media-amazon.com/images/I/81-QB7nDh4L.jpg "
          />
          <Product
            id="12344"
            title="Apple iphone 13 "
            price={822.95}
            rating={4}
            image=" https://i1.wp.com/maplestore.in/wp-content/uploads/2021/09/r1433_Midnight_PDP_Image_Position-1A_Avail__en-IN.jpg?fit=2048%2C2048&ssl=1 "
          />
        </div>

        <div className="home__row">
          <Product
            id="12345"
            title={"Butterfly mixer grinder"}
            price={91.89}
            rating={4}
            image="https://m.media-amazon.com/images/I/71obY-eT9XL._SL1500_.jpg"
          />
          <Product
            id="12346"
            title="
          Orient Electric Aeroslim 1200mm "
            price={124.05}
            rating={5}
            image="https://m.media-amazon.com/images/I/61-uENP7abL._SL1500_.jpg "
          />
          <Product
            id="12347"
            title="
           AmazonBasics 564 L Refrigerator  "
            price={690.84}
            rating={4}
            image="https://m.media-amazon.com/images/I/41rQ96NJTlL._SL1500_.jpg"
          />
          
        </div>
        <div className="home__row">
          <Product id='12348' title=" boAt Airdopes 141 " price={ 16.35 } rating={ 4 } image="  https://m.media-amazon.com/images/I/51tFAbNRaPL._SL1500_.jpg"/>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
