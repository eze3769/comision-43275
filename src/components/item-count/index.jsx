import React from 'react'

const ItemCount = () => {
    const [counter, setCounter] = React.useState(1)
  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
        <button>-</button>
        <p>{counter}</p>
        <button>+</button>
    </div>
  )
}

export default ItemCount