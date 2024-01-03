import React, {useState} from 'react'

function Colors() {

    const [colors, setColors] = useState(["red", "blue", "white","black"])

    const handleClick = () => {
        setColors(prev => [...prev, "Gray"])
    }

  return (
    <div>
        {
            colors.map((color, index) =>  (<div key={index}>{color}</div>))
        }

        <button onClick={handleClick}>Ekle</button>
    </div>
  )
}

export default Colors