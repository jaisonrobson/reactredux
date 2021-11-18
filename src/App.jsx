import React, { useState, useReducer } from 'react'

function reducer(state, action) {
    return { count: state.count + 1 }
}

const App = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 })
    const [count, setCount] = useState(0)

    function increment() {
        // setCount(prevCount => prevCount + 1)
        dispatch()
    }

    function decrement() {
        setCount(prevCount => prevCount - 1)
    }

    return (
        <div>
            <button onClick={decrement}>-</button>
            <span>{state.count}</span>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default App
