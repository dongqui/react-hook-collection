# Usage
```javascript

const app = () => {
    const count = usePrevious('0');
    return (
      <div>
        <span>Count: </span>
        <input { ...count }/>
      </div>
      
    )
}
```
