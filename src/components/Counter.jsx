import { useState } from "react";

export function Counter() {
    const [counter, setCounter] = useState(0)

    function increment() {
        setCounter(counter + 1);
    }

    function decrement() {
        setCounter(counter - 1);
    }


    return (
        <div>
            <h2>{counter}</h2>
            <button type="button" title="Increment" onClick={increment}>
                Increment
            </button>
            <br />
            <button type="button" title="decrement" onClick={decrement}>
                Decrement
            </button>
        </div>
    );
}