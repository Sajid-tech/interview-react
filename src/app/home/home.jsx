import { decrement, increment } from '@/redux/slices/counter'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


export function Home() {
  const count = useSelector((state) => state.counter)
  const dispatch = useDispatch()
if (count > 2) {
  throw new Error("💥 Simulated crash: count exceeded 2!");
}

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}