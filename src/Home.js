import React from "react";
import { Image } from 'react-bootstrap';
import Rating from './Rating';

function Home() {
  return (
      <div className="products">
        <div className="product-container">
          <div className="container">
            <Image className="photo" src="https://picsum.photos/200?random=1" fluid />
            <p>Lorem Ipsum</p>
            <p>$ 99.99</p>
            <p>
              <Rating rating="4" />
            </p>
            <a href="/">Buy</a>
          </div>
          <div className="container">
            <Image className="photo" src="https://picsum.photos/200?random=2" fluid />
            <p>Lorem Ipsum</p>
            <p>$ 699.99</p>
            <p>
              <Rating rating="4" />
            </p>
            <a href="/">Buy</a>
          </div>
          <div className="container">
            <Image className="photo" src="https://picsum.photos/200?random=3" fluid />
            <p>Lorem Ipsum</p>
            <p>$ 799.99</p>
            <p>
              <Rating rating="3" />
            </p>
            <a href="/">Buy</a>
          </div>
        </div>
        <div className="product-container">
          <div className="container">
            <Image className="photo" src="https://picsum.photos/200?random=4" fluid />
            <p>Lorem Ipsum</p>
            <p>$ 1499.00</p>
            <p>
              <Rating rating="4" />
            </p>
            <a href="/">Buy</a>
          </div>
          <div className="container">
            <Image className="photo" src="https://picsum.photos/200?random=5" fluid />
            <p>Lorem Ipsum</p>
            <p>$ 54750.99</p>
            <p>
              <Rating rating="5" />
            </p>
            <a href="/">Buy</a>
          </div>
          <div className="container">
            <Image className="photo" src="https://picsum.photos/200?random=6" fluid />
            <p>Lorem Ipsum</p>
            <p>$ 3499.99</p>
            <p>
              <Rating rating="4" />
            </p>
            <a href="/">Buy</a>
          </div>
        </div>
        <div className="product-container">
          <div className="container">
            <Image className="photo" src="https://picsum.photos/200?random=7" fluid />
            <p>Lorem Ipsum</p>
            <p>$ 1499.00</p>
            <p>
              <Rating rating="4" />
            </p>
            <a href="/">Buy</a>
          </div>
          <div className="container">
            <Image className="photo" src="https://picsum.photos/200?random=8" fluid />
            <p>Lorem Ipsum</p>
            <p>$ 54750.99</p>
            <p>
              <Rating rating="5" />
            </p>
            <a href="/">Buy</a>
          </div>
          <div className="container">
            <Image className="photo" src="https://picsum.photos/200?random=9" fluid />
            <p>Lorem Ipsum</p>
            <p>$ 3499.99</p>
            <p>
              <Rating rating="4" />
            </p>
            <a href="/">Buy</a>
          </div>
        </div>
      </div>
  );
}

export default Home;
