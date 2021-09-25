import React from 'react';
import { IoIosStar, IoIosStarOutline } from 'react-icons/io';

function Rating(props) {

    const styles = {
        starStyle: {
            color: 'orange'
        }
    }

    return (
        <div style={styles.starStyle}>
            {props.rating >= 1 ? (
                <IoIosStar />
            ) : (
                <IoIosStarOutline />
            )}{props.rating >= 2 ? (
                <IoIosStar />
            ) : (
                <IoIosStarOutline />
            )}
            {props.rating >= 3 ? (
                <IoIosStar />
            ) : (
                <IoIosStarOutline />
            )}
            {props.rating >= 4 ? (
                <IoIosStar />
            ) : (
                <IoIosStarOutline />
            )}
            {props.rating >= 5 ? (
                <IoIosStar />
            ) : (
                <IoIosStarOutline />
            )}
        </div>
    )
}

export default Rating;
