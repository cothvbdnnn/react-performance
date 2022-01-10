import { useState, useEffect } from 'react'

const Counter = ({ children }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const loop = setInterval(() => {
      setCount((prevCount) => prevCount += 1);
    }, 1000);
    return () => {
      clearInterval(loop)
    }
  }, [])

  return (
    <div>
      {children(count)}
    </div>
  )
}

const ChildCounter = () => {
  return (
    <div>
      <Counter>
        {(count) => <h1>{count}</h1>}
      </Counter>
      <Counter>
        {(count) => <p>{count}</p>}
      </Counter>
    </div>
  )
}

export default ChildCounter;