import React from 'react';
import Rating from './Rating';
import { Image } from 'react-bootstrap';

function Review() {

    return (

        <div className="review">

            <div className="review-photo">

                <Image className="photo-review" src="https://picsum.photos/200?random=1" />

                <div>

                    <p>Lorem Ipsum</p>

                    <Rating rating="3" />

                    <p>$ 799.99</p>

                </div>

            </div>

            <div className="review-photo">

                <Image className="photo-review" src="https://picsum.photos/200?random=2" />

                <div>

                    <p>Lorem Ipsum</p>

                    <Rating rating="5" />

                    <p>$ 54750.99</p>

                </div>

            </div>

            <div className="review-photo">

                <Image className="photo-review" src="https://picsum.photos/200?=3" />

                <div>

                    <p>Lorem Ipsum</p>

                    <Rating rating="4" />

                    <p>$ 699.99</p>

                </div>

            </div>

        </div>

    );

}

export default Review;
