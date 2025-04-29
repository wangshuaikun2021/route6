import React, {useState} from 'react'
import { Navigate } from 'react-router-dom'

export default function Home() {
  const [sum, setSum] = useState(1)
  return (
    <div>
      <h1>这是一个Home</h1>
      {sum === 2 ? <Navigate to="/about" /> : <h2>当前sum值为{sum}</h2>}
      
      <button onClick={()=>setSum(2)}>改变状态为2并跳转至About</button>

    </div>
  )
}
