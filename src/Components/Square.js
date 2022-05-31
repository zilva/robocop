import React, { useEffect, useState } from 'react';
import Robot from './Robot';
import './Square.css'

const Square = ({square, currentSquare}) => {
    const [showRobo, setShowRobo] = useState(null);

    useEffect(() => {
        if( square.x === currentSquare.x && square.y === currentSquare.y ) {
            setShowRobo(true)
        } else {
            setShowRobo(false)
        }
    },[square,currentSquare])

    return (
        <div className='square'>
            {showRobo && <Robot />}
        </div>
    );
}

export default Square;
