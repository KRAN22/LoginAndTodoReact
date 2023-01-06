import React, { useState } from "react";

export const Counter=()=>{
    const [count,setCount] = useState(0)
    const onClickListener=()=>{
        setCount(count+1)
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={onClickListener}>Increment</button>
        </div>
    )
}