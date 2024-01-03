import React, {useState, useMemo, useCallback} from 'react'
// import User from './User'
import Header from './Header'



function Counter() {
    const [count, setCount] = useState(0)
    // const [name, setName] = useState("Ahmet")
    const [amount, setAmount] = useState(1)
    console.log("Counter component re-rendered")

    // const userData = useMemo(()=>{
    //   return {
    //     id: 1,
    //     name,
    //   }
    // },[name])

    // const increment = () => {
    //   setCount(count + 1)
    // }

    const increment = useCallback(()=>{
      setCount(prev => prev + amount)
    },[amount])

  return (
    <div>

        <Header increment={increment}/> 
        {/* <User data={userData}/> */}
        <hr />


        <h2>{count}</h2>
        <button onClick={increment}>Arttır</button>

        <hr />

        <button onClick={()=> setAmount(1)}>+1</button>
        <button onClick={()=> setAmount(3)}>+3</button>
        <button onClick={()=> setAmount(5)}>+5</button>
        <div>Amount : {amount}</div>
        {/* <button onClick={() => setName(name === "Ahmet" ? "Mehmet" : "Ahmet")}>Set Name</button> */}
    </div>
  )
}

export default Counter