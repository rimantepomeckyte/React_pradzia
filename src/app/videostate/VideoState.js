import React, {useState} from "react";

const VideoState = () => {
    const [count, setCount] = useState(2)

    const decrementCount = () => {
        setCount(prevCount => prevCount - 1)
    }
    const incrementCount = () => {
        setCount(prevCount => prevCount + 1)
    }
    return(
        <div className="my-3">
            <button className="btn btn-dark" onClick={decrementCount}>-</button>
            <span>{count}</span>
            <button className="btn btn-info" onClick={incrementCount}>+</button>
        </div>
    )
}

export default VideoState