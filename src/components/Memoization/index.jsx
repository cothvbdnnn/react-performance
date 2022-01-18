const memoize = func => {
  const result = {}
  return (...params) => {
    const paramKey = JSON.stringify(params)
    console.log(result);
    if (!result[paramKey]) {
      result[paramKey] = func(...params)
    }
    return result[paramKey]
  }
}

const sum = memoize((a, b) => {
  console.log('bat dau');
  const start = new Date();
  while (new Date() - start < 3000);
  console.log(a + b);
  return a + b;
})

export default function App() {
  return (
    <div>
      <p>{sum(1, 2)}</p>
      <button onClick={() => sum(1, 2)}>Click</button>
    </div>
  )
}
