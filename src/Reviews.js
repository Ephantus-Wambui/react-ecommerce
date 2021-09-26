import React from 'react';
import { Image } from 'react-bootstrap';
import image2 from './image/hp-envy-360.jfif';
import image3 from './image/iPhone-13.jfif';
import image5 from './image/mercedes-amg.jfif';
import Rating from './Rating';

function Review() {

    return (

        <div className="review">

            <div className="review-photo">

                <Image className="photo-review" src={image3} />

                <div>

                    <p>iPhone 13</p>

                    <Rating rating="3" />

                    <p>$ 799.99</p>

                </div>

            </div>

            <div className="review-photo">

                <Image className="photo-review" src={image5} />

                <div>

                    <p>Mercedes AMG</p>

                    <Rating rating="5" />

                    <p>$ 54750.99</p>

                </div>

            </div>

            <div className="review-photo">

                <Image className="photo-review" src={image2} />

                <div>

                    <p>hp Envy 360</p>

                    <Rating rating="4" />

                    <p>$ 699.99</p>

                </div>

            </div>

        </div>

    );

}

export default Review;
