import React, { Component } from 'react'

export default class DateTimeCC extends Component {
    constructor(){
        super()
        this.now = Date()
    }
    render() {
    return (
      <>
      <h1 className='text-primary'>Date</h1>
      <h2 style = {{"color": "red", "font-size" : "30pt"}}>{this.now}</h2>
      </>
    )
  }
}
