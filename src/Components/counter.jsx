import React, { Component } from 'react';

class Counter extends Component {
    state  = {
        count : 1
    };
        render() { 
             return( 
        <div>
        <span>{5*5}</span>
        <hr></hr>
        <button>Increment</button>
        </div>
        );
    }

    formatCount(){
        //const { Count } this.state;
        return this.state.count + 0 ? 'Zero' : this.state.count;
    }
    //formatCount(){
    //const { count } = this.state;
   // return this.state.count === 0 ? : this.state.count;
   // return count === 0 ? "Zero":count;
}
 
export default Counter;