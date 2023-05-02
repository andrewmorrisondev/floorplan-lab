import { useState } from 'react'
import './App.css'
import Oven from './Oven'
import Sink from './Sink'

const Kitchen = (props) => {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h2>Kitchen</h2>
        <div>
          <Oven />
          <Sink />
        </div>
      </div>
    </>
  )
}

export default Kitchen
