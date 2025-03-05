import React, { useState } from 'react'

function Counter1() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Incre</button>
            <button onClick={() => setCount(count - 1)}>Decre</button>
            <button onClick={() => setCount(0)}>Reset</button>




        </div>
    )
}

export default Counter1