```js

const app = () => {
    const { loading, error, data, refetch } = useAxios({method: 'post', url: '/something', data: {name: 'dong'}});
    return (
      <div>
        { loading && <div>loading...</div> }
        { error && <div>something wrong</div>}
        <div>{ data }</div>
        <button onClick={refetch}>Refresh</button>
      </div>
      
    );
}
```