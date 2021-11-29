http method + uri path known as endpoints or routes

:id = routing parameter

```
express.get('/', (req, res) =>{
  res.send('Hello from Express!');
});

const port = 8081;

app.listen(port, ()=> console.log(`listening to port ${port}`);
```
