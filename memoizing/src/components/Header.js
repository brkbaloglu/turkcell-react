import React from 'react'

function Header({ increment }) {
  console.log("Header component re-rendered")
  return (
    <div>
      <h2>Header</h2>
    
      <button onClick={increment}>Arttır</button>

    </div>
  )
}

export default Header