```javascript

const app = () => {
    const count = useInput('0');
    return (
      <div>
        <span>Count: </span>
        <input { ...count }/>
      </div>
      
    )
}
```