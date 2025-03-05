import React, { useReducer } from 'react'

function Toggle() {
    let initialState = {darkMode : false}
    const [] = useReducer(reducerfn, initialState);

  return (
    <div>
        <button>Click</button>
    </div>
  )
}

export default Toggle