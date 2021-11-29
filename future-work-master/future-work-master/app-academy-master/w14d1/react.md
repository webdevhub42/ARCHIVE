VDomNode

type: string | function | class
prop: Array of VDomNodeProperty
children: Array of VDomNode


// react create elment
import 'https://unpkg.com/react@16/umd/react.development.js'

// react dom.render
import 'https://unpkg.com/react-dom@16/umd/react-dom.development.js'

```
const App = () => React.createElement(
	'h1',
	'null,
	'Hello, programmers!'	
);

const target = document.querySelect('main');
const app = React.createElement(App, null);
ReactDOM.render(app, target);

export default = App;
```
