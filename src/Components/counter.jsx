import React, { Component } from 'react';

class Counter extends Component {
    state  = {
        count : 1,
        //imageUrl:"https://picsum.photos/200/300?image=0"
        tags :['tag1','tag2','tag3']

    };
    styles = {
        fontSize : 24,
        fontWeight : "bold",
        fontFamily: 'Times New Roman',
        
    };
        render() { 
            let classes = "badge m-2 badge-";
            classes += (this.state.count === 0) ? "warning" : "primary";

          
  return( 
        <div>
        <img src={this.state.imageUrl}  alt=""/>
        <span>{this.formatcount()}</span><br></br>
        <span>{5*5}</span>
     
        <hr></hr>
        <span style={this.styles} className="badge badge-warning m-3">{this.formatcount()}</span>
        <span className={classes}>{this.formatcount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>{this.state.tags.map(tags=><li key={tags}>{tags}</li>)}</ul>

        </div>
        );
    }
    myMethodTest() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

   // getBadgeClasses() {
     // let classes = "badge m-2 badge-";
      // classes += (this.state.count === 0) ? "warning" : "primary";
      // return classes;
    //};

     formatcount(){
     //    const { count } = this.state;
       // return this.state.count === 0 ?  'Zero' : this.state.count;
      // return count === 0 ?  'Zero' : this.state.count;

     }
}
    //formatCount(){
    //const { count } = this.state;
   // return this.state.count === 0 ? : this.state.count;
   // return count === 0 ? "Zero":count;

 
export default Counter;