import React, { useEffect, useState } from 'react';
import Square from './Square';
import './Board.css'

const Board = () => {
    const [targetSquare, setTargetSquare] = useState({x:1, y:1});

    const handleKeyDown = (e) => {
        handleArrows(e.code);
    }

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        }
    })

    const handleArrows = (keyCode) => {
        switch(keyCode) {
            case "ArrowRight":
                if (targetSquare.x === 5) return;
                setTargetSquare({ x: targetSquare.x+1, y: targetSquare.y });
                break;
            case "ArrowLeft":
                if (targetSquare.x === 1) return;
                setTargetSquare({ x: targetSquare.x-1, y: targetSquare.y });
                break;
            case "ArrowUp":
                if (targetSquare.y === 5) return;
                setTargetSquare({ x: targetSquare.x, y: targetSquare.y+1 });
                break;
            case "ArrowDown":
                if (targetSquare.y === 1) return;
                setTargetSquare({ x: targetSquare.x, y: targetSquare.y-1 });
                break;
            default:
                return;
        }
    };

    const squares = [];
    for (let y = 5; y >= 1; y--) {
        for (let x = 1 ; x <= 5; x++) {
            squares.push({ x, y });
        }
    }

    return (
        <div className='board'>
            {squares.map((square, i) => {
                return (
                    <div key={i} onClick={() => setTargetSquare({x:square.x, y:square.y})}>
                        <Square square={square} currentSquare={targetSquare} />
                    </div>
                );
            })}
        </div>
    );
};

export default Board;