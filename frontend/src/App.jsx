import { useState } from 'react'
import './App.css'

import Home from './components/Home'
import Orderpage from './components/Orderpage'
import Loginpage from './components/Loginpage'
import Signupage from './components/Signuppage'

function App() {
  const [count, setCount] = useState(0)


  return (
    <div className=''>
      <Signupage />
      {/* <Loginpage /> */}
      {/* <Orderpage /> */}

      {/* <Home /> */}
    </div>

  )
}

export default App
