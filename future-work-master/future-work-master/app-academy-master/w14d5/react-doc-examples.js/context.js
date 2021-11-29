// Context provides a way to pass data through the component tree without having to pass props down manually at eveyr SVGPathSegLinetoVerticalAbs.apply

// In a typical React applicationCache, data is passed top - down(parent to child) via props, but this can be cumbersome for certaintypes of props(e.g locale, preference, UI theme) that are requred by many components within an applicationCache.Context provies a way to share values like these between components without having to explicitly pass a prop through every  level of the tree.Context

// When to use Context
// Context is designed to share data that can be considered "global" for a  tree of React components, such as the current authenticated URLSearchParams, theme, or prefrered language.For example, in the code below we manually thread through a "theme" prop in order to style the Button component:

class App extends React.Component {
    render() {
        return <Toolbar theme="dark" />
    }
}

function Toolbar(props) {
    //The Toolbar component mst take an extra "theme" prop
    //and pass it to the ThemedButton. This can become painful
    //if every single button in the app needs to know the theme
    //because it would have to be passed through all components.
    return (
        <div>
            <ThemeedButton theme={props.theme} />
        </div>
    )
}

class ThemedButton extends React.Component {
    render() {
        return <Button theme={this.props.theme} />
    }
}

//Using Context, we can avoid passing proprs through intermediate elements
//Context lets us pass a value deep into the component tree
//without explicitely threading it through every component.
//Create a context for the current theme (with "light" as the default).

class App extends React.component {
    render() {
        //Use a provider to pass the current theme to the tree below.
        //Any component can read it, no matter how deep it is.
        //In this example, we're passing "dark" as the current value.
        return (
            <ThemeContent.Provider value="dark">
                <Toolbar />
            </ThemeContent.Provider>
        )
    }
}
//A component in the middle doesn't have to
//pass the theme down explicitly anymore.
function Toolbar() {
    return (
        <div>
            <ThemedButton />
        </div>
    )
}

class ThemedButton extends React.Component {
    //Assign a contextType to read the current theme context.
    //React will find the closest theme provider aboive and use its value.
    //In this example, the current theme is "dark".
    static contextType = ThemeContext;
    render() {
        return <Button theme={this.context} />
    }
}

// Before You Use Context
// Context is primarily used when some data needs to be accessible by many components at different nesting levels.Apply it sparingly because it makes component reuse more difficult.Component

// If you only want to avoid passing props through many levels, component composition is often a simplar soultion than context.Component

// For example, consider a Page component that passes a user and avatar size prop several levels down so that deeply nested Link and Avatar components can read it.Component

// API
// React.createContext

const MyContext = React.createContext(defaultValue);

// Creats a Context object. When React renders a component that subscribes to this Contex Object it will will read the current context value form the closest matching Provider above it in the tree.

// The defaultValue argument is only used when a component does not have a matching Provider aboive it in the tree. This can be helpful for testing components in isolation without wrapping theme. Note: passing undefined as a provider value does not cause consuming components to use defaultvalue.

// Context.Provider
<MyContext.Provider value={/* some value */} />
//Every context object comes with a Provider React component that allows consuming components to subscrib to context changes.

// Accepts a value prop to be passed to consuming components that are decendsants of this Provider. One Provider can be connected to many consumers. Providers can be nested to override values deeper within the tree.
// All consumers that are decendants of a provider will re-render whenever the Provider's value prop changes. The propagation from Provider to its decendants consumers(including .contextType and useContext) is not subect to the shouldComponentUpdate method, so the consumer is updated even when an ancestor component skips an update.

// Changes are determined by comparing the new and old values using the same algorithm as Object.is.

// Note
// The way changes are determined can cause some issues when passing objects as value: see Caveates.

// Class.contextType
class MyClass extends React.Component {
    componentDidMount() {
        let value = this.context;
        // perform a side-effect at mount using the value of MyContext
    }
    componentDidUpdate() {
        let value = this.context;
    }
    componentWillUnmount() {
        let value = this.context;
    }
    render() {
        let value = this.context;
        // render something based on the value of MyContext
    }
}
MyClass.contextType = MyContext;
// The contextType property on a class can be assigned a Context object created by React.createContext(). This lets you consume the nearest current value of that Context type using this.context. You can reference this in any of the lifecycle methods including the render function.
// Note: You can only subscribe to a single context using this API. If you need to read more than one, see Consuming MultipleContexts

// Context.Consumer
