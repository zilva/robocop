import React from 'react';
import './Square.css'

const Square = ({square, currentSquare}) => {
    return (
        <div className='square'>
            <div className={`${
                square.x === currentSquare.x && square.y === currentSquare.y? 'robo' : ''
            }`}>

            </div>
        </div>
    );
}

export default Square;
