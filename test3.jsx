import React, { useState, useCallback, memo } from 'react';

// Child component that receives a function prop
const ChildComponent = memo(({ onClick, data }) => {
  console.log('ChildComponent rendered');
  return (
    <div>
      <h3>Child Component</h3>
      <p>Data: {data}</p>
      <button onClick={onClick}>Click me</button>
    </div>
  );
});

const UseCallbackExample = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  // Without useCallback - new function created on every render
  // const handleClick = () => {
  //   console.log('Button clicked', count);
  // };

  // With useCallback - same function unless dependencies change
  const handleClick = useCallback(() => {
    console.log('Button clicked', count);
  }, [count]);

  const data = `Count is ${count}`;

  return (
    <div>
      <h2>useCallback Example</h2>
      
      <div>
        <p>Parent Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>
          Increment Count
        </button>
      </div>

      <div>
        <input 
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Type to cause re-renders"
        />
      </div>

      <ChildComponent 
        onClick={handleClick} 
        data={data}
      />

      <p>Type in input - ChildComponent won't re-render because handleClick is memoized</p>
    </div>
  );
};

export default UseCallbackExample;