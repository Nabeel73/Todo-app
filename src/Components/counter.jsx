import React, { Component } from 'react';
class Counter extends Component {
    //state  = {
      //value : this.props.counter.value,
     // };
     // constructor(){
       //   super();
         // this.handlerIncrement.bind(this);
    //  };
    //handleIncrement = product => {
     //console.log(product);
     //this.props.value= 0 ;
    // this.setState({ value: this.state.value + 1});    
      //console.log("Increment clicked",this);
   //  };
    // doHandleIncrement = () => {
      //   this.handlerIncrement({ id: 1 });
     //};
    render(){
       // console.log('props', this.props);
        return(
            <div>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button 
                onClick={ () => this.props.onIncrement(this.props.counter)}
                   className="btn btn-secondary btn-sm m-2">
                       Increment
              </button>
              <button
              onClick={ () => this.props.onDelete(this.props.counter.id)}
              className="btn btn-danger btn-sm m-2">Delete</button>
          </div>
       );
    }
    
     getBadgeClasses() {
       let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    };
    formatCount(){
      const { value } = this.props.counter;
      return value === 0 ? "Zero"  : value;     

  }
}
export default Counter;