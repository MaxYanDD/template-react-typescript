import React from 'react'
import useEqual from './useEqualArr'

const EqualArr = () => {
  const { arrA, setArrA, arrB, setArrB, isEqual } = useEqual()

  return (
    <>
      <div>
        <button onClick={() => setArrA([...arrA.slice(0, arrA.length - 1)])}>-</button>
        <span>{arrA.toString()}</span>
        <button onClick={() => setArrA([...arrA, 1])}>+</button>
      </div>
      <span>{String(isEqual)}</span>
      <div>
        <button onClick={() => setArrB([...arrB.slice(0, arrB.length - 1)])}>-</button>
        <span>{arrB.toString()}</span>
        <button onClick={() => setArrB([...arrB, 1])}>+</button>
      </div>
    </>
  )
}

export default EqualArr
