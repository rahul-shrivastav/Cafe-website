import { useState } from 'react'
import './App.css'

import Home from './components/Home'
import Orderpage from './components/Orderpage'

function App() {
  const [count, setCount] = useState(0)


  return (
    <div className=''>
      <Orderpage />

      <Home />
    </div>

  )
}

export default App
