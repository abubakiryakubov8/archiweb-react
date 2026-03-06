import React, { useState } from 'react'
const HomeComponent = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
            <p>Count: {count}</p>

        </div>

    )
};
export default HomeComponent;
