const expensiveCalculation = (num) => {
  console.log('Calculating...');
  let result = 0;
  for (let i = 0; i < 1000000000; i++) {
    result += 1;
  }
  return num + result;
};
const UseMemoExample = () => {
  const [number, setNumber] = useState(1);
  const [count, setCount] = useState(0);
  const calculation = useMemo(() => {
    return expensiveCalculation(number);
  }, [number]);

  return (
    <div>
      <div>
        <p>Number: {number}</p>
        <button onClick={() => setNumber(number + 1)}>
          Change Number
        </button>
      </div>

      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>
          Re-render Component
        </button>
      </div>

      <div>
        <p>Expensive Calculation Result: {calculation}</p>
      </div>

      <p>Click "Re-render Component" - calculation won't recompute unless number changes</p>
    </div>
  );
};

export default UseMemoExample;



        