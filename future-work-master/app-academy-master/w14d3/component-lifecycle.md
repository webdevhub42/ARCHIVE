
mounting and update

mounting: constructor is a normal constructor and no AJAX allowed since it may get created again, compontentDidMount call that method  create that methot to live in the dom and can do initial AJAX calls, compontentDidUpdate do not update this, componentWillUnmount called before it removes it and used to clean up.

redner phase: pure and has no side effect. May be paused, abort or restarted, commit phase: can work with the dom to update

```
import React from 'react';
import Stopwatch from './stopwatch';

render (){
    return(
        <>
        <h1>Stopwatch Manager</>
        <p></p>
        </>
    )
}
```
