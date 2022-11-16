import React from 'react'

export default function SystemTimeDisplayMessage() {
  var date = new Date()
  var d1 = date.getHours()
  if (d1 < 12)
    var result = "Morning"
  else if (d1>12 && d1 < 18)
    var result = "Afternoon"
  else if (d1>18 && d1 < 21)
    var result = "Evening"
  else
    var result = "Night"

   return (
    <>    
        <h1>{d1}</h1> <br></br>
        <h1>{result}</h1>
    </>
  )
}
