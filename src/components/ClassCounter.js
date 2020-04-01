import React, { Component, PureComponent } from 'react'
let i = 0;
const log = (message) => {
    console.log(`${message} ${i}`);
    i++;
}
export default class ClassCounter extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
            showCounter: true
        }
        this.increment = () => {
            this.setState(state => ({ counter: state.counter + 1 }),
                () => console.log('incremented counter to ' + this.state.counter)
            );
        }
        this.decrement = () => {
            this.setState(state => ({ counter: state.counter - 1 }),
                () => console.log('decremented counter to ' + this.state.counter)
            );
        }
        log('constructor')
    }
    componentDidMount() {
        log('componentDidMount')
    }
    componentDidUpdate() {
        log('componentDidUpdate')
    }
    componentWillUnmount(){
        log('componentWillUnmount')
    }
   
    render() {
        log("render")
        return (
            <div style={{border: '1px solid', margin: '10px', padding: '10px'}}>
                <div> Counter: {this.state.counter} </div>
                <div>
                    <button onClick={this.increment}><span>+</span></button>
                    <button onClick={this.decrement}><span>-</span></button>
                </div>
             
            </div>
        )
    }
}

