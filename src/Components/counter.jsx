import React, { Component } from 'react';

class Counter extends Component {
    state  = {
        count : 0,
        imageUrl:"https://picsum.photos/200/300?image=0"
    };
    styles = {
        fontSize : 24,
        fontWeight : "bold",
        fontFamily: 'Times New Roman',

        
    };
        render() { 
             return( 
        <div>
        <img src={this.state.imageUrl}  alt=""/>
        <span>{this.formatcount()}</span><br></br>
        <span>{5*5}</span>
        
        <hr></hr>
        <span style={this.styles} className="badge badge-primary m-3">{this.formatcount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
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