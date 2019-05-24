# Usage
```javascript

const app = () => {
  const onHover = () => alert('hover!');
  const hoverElement = useHover(onHover);
  
  return (
    <div ref={hoverElement}>Hello world</div>
  )
}
```