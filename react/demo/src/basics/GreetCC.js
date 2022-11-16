import React, { Component } from 'react'

export default class GreetCC extends Component {
    constructor(){
        super()
        this.greetUser = this.greetUser.bind(this)
        this.message = "Hello "
    }
    
    greetUser(){
        var user = document.getElementById('uname').value
        //alert("Hello " + user) 
        alert(this.message + user) //Since we make a direct call from react to this function 'this' reference is not accessible here
    }
    render() {
    return (
      <>
        What's your name <input type = "text" id= "uname"></input>
        <p></p>
        <button onClick={this.greetUser}>Greet</button>
      </>
    )
  }
}
