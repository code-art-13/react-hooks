import React, { Component,PureComponent } from 'react'
let i = 0;
const log = (message) => {
    console.log(`${message} ${i}`);
    i++;
}
export default class ClassCounter extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
        this.increment = () => {

            this.setState(
                function(state) {
                    var o = { counter: state.counter + 1 };
                    return { counter: state.counter + 1 };
                 }, 
                function () {                        
                  console.log(this.state.counter); 
                }
              ); 
            // this.setState(prevState => {
            //    return{ counter: prevState.counter++}
            // }, ()=>{
            //     console.log('incremented counter to ' + this.state.counter)
            // })
        }
        this.decrement = () => {
            this.setState(prevState => {
                return{ counter: prevState.counter--}
             },
             ()=>{
                console.log('incremented counter to ' + this.state.counter)
            })
        }
        log('constructor')
    }
    componentDidMount() {
        log('componentDidMount')
    }
    componentDidUpdate() {
        log('componentDidUpdate')
    }
    // shouldComponentUpdate(nextProps, nextState){
    //     if(nextState.counter !== this.state.counter) {
    //         return true
    //     }
    //     return false
    // }
    render() {
        log("render")
        return (
            <div>
                Counter: {this.state.counter}
                <div>
                    <button onClick={this.increment}>  increment  </button>
                    <br />
                    <button onClick={this.decrement}>  decrement </button>
                </div>
            </div>
        )
    }
}

