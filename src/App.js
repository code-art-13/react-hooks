import React, {Component} from 'react';
import './App.css';
import { ClassCounter, FunctionalCounter } from './components'

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      showClassCounter: true,
    }
    this.toggleShowClassCounter = () => {
      this.setState((state) => ({...state, ...{showClassCounter: !state.showClassCounter}}))
  }
  }
  render() {
    return (
      <div>
        <button onClick={this.toggleShowClassCounter}><h1>{this.state.showClassCounter? 'Hide': 'Show'} Class Counter</h1></button>
        {this.state.showClassCounter && <ClassCounter />}
      </div>
    )
  }
}

