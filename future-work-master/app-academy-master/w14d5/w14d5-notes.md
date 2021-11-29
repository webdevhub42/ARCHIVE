npx create-react-app {project-name}

PROPS ARE READ ONLY
Never modify props

Try to use as much fat arrow for methods to get right scope.

Simple Calculator
1. Intro to State
2. Class Components
    Functions have to keep passing in props as Arugment
    Class components uses this.props.{prop}
Widgets
1. Lifecycle
    componentDidMount
    componentDidUpdate
    componentWillUnmount

Context To Do List
1. Context
2. Class Components
3. Functional Components

Tweets Revisited
1. Context
2. Routes
    Path
    Exact
    Render
    Compenent, use exact unless otherwise
3. Class Components
4. Functional Components
5. NavLink
    component
    props: to
    activeClassName

BrowserRouter

cant use .map to create multiple elements of an array

props.{items}.map(item => <li item={item}/>)

Set Default props with functional components
{component}.defaultProps= {};

Set Default props with class components
  this.state = {
    state,
    state2: state,
  };

Form Events

  nameOnChange = (e) => {
    this.setState({ name: e.target.value });
  }

  <input id='name' type='text' onChange={this.nameOnChange} value={name} />

Prevent Default submit

onSubmit = (e) => {
    e.preventDefault();
}

<form onSubmit={this.onSubmit}>
</form>

Multiple onChange from one method

const { name, email, phone } = this.state;

onChange = (e) => {
  const { name, value } = e.target;
  this.setState({ [name]: value });
}

<input id='name' name='name' type='text' onChange={this.onChange} value={name} />
<input id='email' name='email' type='text' onChange={this.onChange} value={email} />
<input id='phone' name='phone' type='text' onChange={this.onChange} value={phone} />


textarea

<label htmlFor='comments'>Comments:</label>
<textarea id='comments' name='comments' onChange={this.onChange} value={comments} />

Select tags can use a .map to get array
  <label htmlFor='phone'>Phone:</label>
  <input id='phone' name='phone' type='text' onChange={this.onChange} value={phone} />
  <select name='phoneType' onChange={this.onChange} value={phoneType}>
    <option value=''>Select a phone type...</option>
    {
      this.props.phoneTypes.map(phoneType =>
        <option key={phoneType}>{phoneType}</option>
      )
    }
  </select>

READ MORE ABOUT VALIDATORS ON WEEK 14 HOMEWORK FOR WED

constructor() {
  super();

  this.state = {
    validationErrors: [],
  };

 validate(name, email) {
    const validationErrors = [];

    if (!name) {
      validationErrors.push('Please provide a Name');
    }

    if (!email) {
      validationErrors.push('Please provide an Email');
    }

    return validationErrors;
  }

  onSubmit = (e) => {
    // Prevent the default form behavior
    // so the page doesn't reload.
    e.preventDefault();

    // Retrieve the contact us information from state.
    const {
      name,
      email,
      phone,
      phoneType,
      comments,
    } = this.state;

    // Get validation errors.
    const validationErrors = this.validate(name, email);

    // If we have validation errors...
    if (validationErrors.length > 0) {
      // Update the state to display the validation errors.
      this.setState({ validationErrors });
    } else {
      // Create a new object for the contact us information.
      const contactUsInformation = {
        name,
        email,
        phone,
        phoneType,
        comments,
        submittedOn: new Date(),
      };

      // For now, just log the contact us information to the console
      // though ideally, we'd persist this information to a database
      // using a REST API.
      console.log(contactUsInformation);

      // Reset the form state.
      this.setState({
        name: '',
        email: '',
        phone: '',
        phoneType: '',
        comments: '',
        validationErrors: [],
      });
    }
  }

  Using a validation library
  npm install validator
  import isEmail from 'validator/es/lib/isEmail';

  validate(name, email) {
  const validationErrors = [];

  if (!name) {
    validationErrors.push('Please provide a Name');
  }

  if (!email) {
    validationErrors.push('Please provide an Email');
  } else if (!isEmail(email)) {
    validationErrors.push('Please provide a valid Email');
  }

  return validationErrors;
}

If there's a loop, make sure to break out of loop with a return.

CONTEXT


APP WITH CONTEXT FILE
// App.js
import React from 'react';
import PupContext from './PupContext';
import banana from './pups/banana-pup.jpg'
import sleepy from './pups/sleepy-pup.jpg'
import speedy from './pups/speedy-pup.jpg'

const App = ({ puppyType }) => (
  <div id="app">
    <img src={puppyType} alt="pup" />
  </div>
);

class AppWithContext extends React.Component {
  constructor() {
    super();
    this.state = {
      puppyType: speedy,
      updateContext: this.updateContext,
    };
  }

  updateContext = (puppyType) => {
    this.setState({ puppyType });
  }

  render() {
    return (
      <PupContext.Provider value={this.state}>
        <App puppyType={this.state.puppyType} />
      </PupContext.Provider>
    );
  }
}

export default AppWithContext;

PUPPY FORM
import React from 'react';
import banana from './pups/banana-pup.jpg';
import sleepy from './pups/sleepy-pup.jpg';
import speedy from './pups/speedy-pup.jpg';

class PupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPup: 'select', // Set the default select option
    };
  }

  // Update state with the user's dropdown selection
  updateSelection = (e) => {
    this.setState({ selectedPup: e.target.value });
  }

  render() {
    return (
      <form>
        <select
          name="pup"
          onChange={this.updateSelection}
          value={this.state.selectedPup}>

          <option value="select">Select a pup!</option>
          <option value={speedy}>Speedy Pup</option>
          <option value={banana}>Banana Pup</option>
          <option value={sleepy}>Sleepy Pup</option>
        </select>
        <button onClick={/* TODO: Set up the click handler */}>
          Submit
        </button>
      </form>
    );
  }
}

const PupFormWithContext = () => {
  return (
    <PupContext.Consumer>
      {(value) => <PupForm updateContext={value.updateContext} />}
    </PupContext.Consumer>
  );
};

export default PupFormWithContext;