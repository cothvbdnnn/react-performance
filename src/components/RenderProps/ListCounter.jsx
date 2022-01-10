import { useState, useEffect } from 'react'

const Counter = ({ render }) => {
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
      {render(count)}
    </div>
  )
}

const ListCounter = () => {
  return (
    <div>
      <Counter render={(item) => <h1>{item}</h1>} />
      <Counter render={(item) => <p>{item}</p>} />
    </div>
  )
}

export default ListCounter;