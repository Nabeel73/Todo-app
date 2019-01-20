import React, { Component } from 'react';

class Counter extends Component {
    state  = {
        count : 0,
       //imageUrl:"https://picsum.photos/200/300?image=0",
        tags : []
    };
    rendersTags(){
        if(this.state.tags.length === 0) return <p>There is no tags!</p>;
        return <ul> {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    }
    render(){
        return(
            <div>    
          {this.state.tags.length === 0 && "Please create new tags!"}
          {this.rendersTags()}
            </div> );
    }
}

export default Counter;