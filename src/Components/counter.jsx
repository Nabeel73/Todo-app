import React, { Component } from 'react';

class Counter extends Component {
    state  = {
        count : 0.
    };
        render() { 
             return( 
        <div>
        <span>{this.formatcount()}</span><br></br>
        <span>{5*5}</span>
        
        <hr></hr>
        <button>Increment</button>
        </div>
        );
    }
     formatcount(){
         const { count } = this.state;
       // return this.state.count === 0 ?  'Zero' : this.state.count;
       return count === 0 ?  'Zero' : this.state.count;

     }
}
    //formatCount(){
    //const { count } = this.state;
   // return this.state.count === 0 ? : this.state.count;
   // return count === 0 ? "Zero":count;

 
export default Counter;