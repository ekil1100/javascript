import React from 'react'

// null means pause
// 1000 means 1 sec
type DelayType = null | number

// 🔴 Finish this function
function useIncreasingCount(setCount, delay: DelayType) {
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => c + 1)
    }, delay)

    return () => clearInterval(interval)
  }, [delay])
}

function Counter() {
  const [count, setCount] = React.useState<number>(0)
  const [delay, setDelay] = React.useState<DelayType>(null)

  useIncreasingCount(setCount, delay)

  // 🔴 Finish this function
  const toggleDelay = () => {
    setDelay((d) => (d === null ? 1000 : null))
  }

  return <h1 onClick={toggleDelay}>{count}</h1>
}
