import React, { useReducer } from 'react'

function Counter2() {
    // const reducerfn = (initialstate, action) => {
    //     if (action === "Increment") {
    //         return (initialstate += 1);

    //     } else if (action === "Decrement") {
    //         return (initialstate -= 1);

    //     } else {
    //         return (initialstate = 0);
    //     }
    // };
    const reducerfn = (initialstate, action) => {

        switch (action) {
            case "Increment":
                return initialstate + 1;
            case "Decrement":
                return initialstate - 1;
            case "Reset":
                return 0;
            default:
                return initialState;
        }
    };
    let initialState = 0;
    const [count, dispatch] = useReducer(reducerfn, initialState);

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => dispatch("Increment")}>Incre</button>
            <button onClick={() => dispatch("Decrement")}>Decre</button>
            <button onClick={() => dispatch("reset")}>Reset</button>

        </div>
    )
}

export default Counter2