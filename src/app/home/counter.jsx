import React, { useState } from 'react'

const Counter = () => {

    const [count ,setCount] = useState(0)

    const incremnet =()=>{
        setCount((prev)=> prev + 1)
    }

    const decremnet = ()=>{
        setCount((prev) => (prev > 0 ? prev -1 : 0))
    }


    const reset =()=> setCount(0)


    if(count >2){
        throw new Error('got the error')
    }
  return (
 <>
 
<div className='flex flex-col '>
    <div>
    {count}
</div>


<div className='flex flex-row items-center gap-4'>
    <button onClick={incremnet}>+</button>
<button onClick={decremnet}>-</button>
<button onClick={reset}>Reset</button>
</div>
</div>
 
 </>
  )
}

export default Counter