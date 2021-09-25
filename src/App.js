import './App.css';
import { Image } from 'react-bootstrap';
import image1 from './image/galaxy-buds.jfif';
import image2 from './image/hp-envy-360.jfif';
import image3 from './image/iPhone-13.jfif';
import image4 from './image/m1-macbook.jfif';
import image5 from './image/mercedes-amg.jfif';
import image6 from './image/surface-studio-3.jfif';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Reviews</a></li>
            <li><a href="/">Checkout</a></li>
            <li><a href="/">Account</a></li>
            <li><a href="/">Contact Us</a></li>
          </ul>
        </nav>
      </header>
      <Product />
    </div>
  );
}

export default App;

function Product() {
  return (
    <div className="products">
      <div className="product-container">
        <div className="container">
          <Image src={image1} fluid />
          <p>Samsung galaxy buds</p>
          <p>$ 99.99</p>
          <a href="/">Buy</a>
        </div>
        <div className="container">
          <Image src={image2} fluid />
          <p>hp Envy 360</p>
          <p>$ 699.99</p>
          <a href="/">Buy</a>
        </div>
        <div className="container">
          <Image src={image3} fluid />
          <p>iPhone 13</p>
          <p>$ 799.99</p>
          <a href="/">Buy</a>
        </div>
      </div>
      <div className="product-container">
        <div className="container">
          <Image src={image4} fluid />
          <p>M1 macbook</p>
          <p>$ 1499.00</p>
          <a href="/">Buy</a>
        </div>
        <div className="container">
          <Image src={image5} fluid />
          <p>Mercedes AMG</p>
          <p>$ 54750.99</p>
          <a href="/">Buy</a>
        </div>
        <div className="container">
          <Image src={image6} fluid />
          <p>Microsoft Surface Studio 3</p>
          <p>$ 3499.99</p>
          <a href="/">Buy</a>
        </div>
      </div>
      <div className="product-container">
        <div className="container">
          <Image src={image4} fluid />
          <p>M1 macbook</p>
          <p>$ 1499.00</p>
          <a href="/">Buy</a>
        </div>
        <div className="container">
          <Image src={image5} fluid />
          <p>Mercedes AMG</p>
          <p>$ 54750.99</p>
          <a href="/">Buy</a>
        </div>
        <div className="container">
          <Image src={image6} fluid />
          <p>Microsoft Surface Studio 3</p>
          <p>$ 3499.99</p>
          <a href="/">Buy</a>
        </div>
      </div>
    </div>
  );
}
