import { useState } from "react"

const Counter=()=>{

    const [count, setCount] = useState(0)

    const handleIncrease = () => {
        setCount(count + 1)
    }
    const handleDecrease = () => {
        setCount(count - 1)
    }

    return(
        <div>
           <span>{count}</span>
           <button onClick={handleIncrease}>+</button>
           <button onClick={handleDecrease}>-</button>
        </div>
    )

}

export default Counter