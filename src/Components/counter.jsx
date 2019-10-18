import React, { Component } from 'react';
class Counter extends Component {
    state  = {
      count : 1,
      imageUrl:"https://picsum.photos/200/300?image=0",
     tags : []
    };
    constructor(){
     // console.log("Constructor",this );
     super()
    this.handlerIncrement = this.handlerIncrement.bind(this);
    this.addNumber.setstate = this.addNumber.bind(this);
    } 

    handlerIncrement(){
        console.log('Increment Clicked');
    }
    addNumber(){
        document.write('');
    }
    render(){
        return(
            <div>
                <h1>Hello Counter App</h1>
                <span>{this.state.count}</span><br/><br/><br/>
                <button onClick={this.addNumber} className="btn btn-secondary btn-sm">Add</button> 
                <button onClick={this.handlerIncrement} className="btn btn-danger btn-sm">Delete</button><br/><br/><br/>
                <button>Add</button>          <button>Delete</button><br/><br/><br/>
                <button>Add</button>          <button>Delete</button><br/><br/><br/>
                <button>Add</button>          <button>Delete</button><br/><br/><br/>
            
            <button onClick={this.handlerIncrement} className="btn btn-secondary btn-sm">Increment</button>
           
           {/*<span className={this.getBadgeClasses()}>{this.formatCount()}</span>*/}
                              
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