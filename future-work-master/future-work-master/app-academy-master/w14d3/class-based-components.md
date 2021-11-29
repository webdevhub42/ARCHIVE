How to use context, aka the this keyword
    - Context is determined by how a function is invoked
        1. Method style: context is set to the receiver
        2. Function style: context is global or window
        3. Using .call or .apply() : We explicittely set the context and give the fucntions arugements at the same time

Binding and context
    By using .bind() we can explicitely set the context of a fuctnio

Context and arrow functions
    An arrow function will have the same context as the scope it is defined

Recall event handling

Function based components vs class based components
    FUNCTION const dog => return ();
    CLASS can have methods, can have states, can have lifecycle

Props are shared and not meant to be manipulated
State are internal and intended to be manipulated

class GuessingGame extends React.Component{
    constructor(){
        super();
        this.state = {
            numberToGuess: this.generateRandomNumber()
        }
    }

    generateRandomNumber(){
        return Math.floor(Math.random()*10)+1;
    }

    makeTheGuess=()=>{
        if(this.state.guess === this.state.numberToGuess){
            this.setState(message:'You got it right')
        }
        else if(this.state.guess > this.state.numberToGuess){
            this.setState(message:'Too high')
        }
        else if(this.state.guess < this.state.numberToGuess){
            this.setState(message:'Too Low')
    }
    getInputValue e =>{
        //must do setState({state to change}) to change state
        this.setState({guess: Number.parseInt(e.target.value)})
    }

    reset =()=>{
        this.setState({
            guess: '',
            message: '',
            numberToGuess: this.generateRandomNumber()
        })
    }
    render (){
        return(
        <>
        <h1>Guessing Game!</h1>
        <input type='Number' onChange={this.getInputValue}>
        <button type='button' onClick={this.makeTheGuess}> Make your guess
        <p>{this.state.message}</p>
        {this.state.guess === this.state.numberToGuess?
        <button onClick={this.reset}>Play Again</button>
        }
        </>
        );
    }
}
