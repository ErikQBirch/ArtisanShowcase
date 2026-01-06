import { useState } from 'react'

function Scrap() {
  const [count, setCount] = useState(0);
//   const [name,setName] = useState("")
  

  return (
    <>
        <button onClick={() => setCount((count) => count + 1)}>
          Hello Number {count}
        </button>
    </>
  )
}

export default Scrap;
