import React, {useState} from 'react';
import './Counter.css';


export const Counter = () => {
    const [count, setCount] = useState(0);

    const handlePluse = () => {
        setCount(count + 1)
    }
    const handleMinus = () => {
        setCount(count - 1);
    }

    return (
        <div className="Counter">
            <div>
                <h2>Счетчик:</h2>
                <h1>{count}</h1>
                <button className="minus" onClick={handleMinus}>- Минус</button>
                <button className="plus" onClick={handlePluse}>Плюс +</button>
            </div>
        </div>
    );
}