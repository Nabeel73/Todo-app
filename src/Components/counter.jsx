import React, { Component } from 'react';
class Counter extends Component {
    state  = {
        count : 1
       //imageUrl:"https://picsum.photos/200/300?image=0",
      //  tags : []
    };
    constructor(){
     // console.log("Constructor",this );
     super()
    this.handlerIncrement = this.handlerIncrement.bind(this);
    } 

    handlerIncrement(){
        console.log('Increment Clicked');
    }
    render(){
        return(
            <div>
           {/*<span className={this.getBadgeClasses()}>{this.formatCount()}</span>*/}
            <button onClick={this.handlerIncrement} className="btn btn-secondary btn-sm">Increment</button>
            
            <button onClick={this.handlerIncrement} className="btn btn-secondary btn-sm">Increment</button>
            

            
            </div>
            
        );
    }
     getBadgeClasses() {
       let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    };
}
export default Counter;