import React, { Component } from 'react';
class Counter extends Component {
    state  = {
      count : 0
      };
     // constructor(){
       //   super();
         // this.handlerIncrement.bind(this);
    //  }
    handlerIncrement = () => {
       // this.state.count++;
        this.setState({ count: this.state.count + 1});
     //console.log("Increment clicked",this);
     }
    render(){
        return(
            <div>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handlerIncrement}
                   className="btn btn-secondary btn-sm">
                       Increment
                       </button>
          </div>
       );
    }
    formatCount(){
        const { count } = this.state;
        return count === 0 ? "Zero"  : count;     

    }
     getBadgeClasses() {
       let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    };
}
export default Counter;