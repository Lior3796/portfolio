import React from 'react'
import { useCounter } from '../../../context'
const Counter = () => {
    const { counter, dispatch } = useCounter();
    return (
        <div>
            <button onClick={() => dispatch({ type: "increment" })}>+</button>
            <input type="text" value={counter.count} />
            <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        </div>
    )
}
export default Counter