```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: attempting to update state directly
    count = count + 1; 
  }, []);

  return <div>Count: {count}</div>;
}
```