import './App.css'
import Home from './components/Home'
import Loginpage from './components/Loginpage'
import { Navigate, Routes, Route } from 'react-router-dom'
import Signuppage from './components/Signuppage'
import { useAuthContext } from './context/AuthContext.jsx';
import { Toaster } from 'react-hot-toast';
import Orderpage from './components/Orderpage.jsx'
import Yourorderpage from './components/Yourorderpage.jsx'
import Profilepage from './components/Profilepage.jsx'


function App() {
  const { authUser } = useAuthContext();
  return (
    <div className=''>
      <Routes>
        <Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
        <Route path='/item/:id' element={authUser ? <Orderpage /> : <Navigate to={"/login"} />} />
        <Route path='/login' element={authUser ? <Navigate to="/" /> : <Loginpage />} />
        <Route path='/signup' element={authUser ? <Navigate to="/" /> : <Signuppage />} />
        <Route path='/myorders' element={authUser ? <Yourorderpage /> : <Navigate to="/" />} />
        <Route path='/profile' element={authUser ? <Profilepage /> : <Navigate to="/" />} />
      </Routes>
      <Toaster
        toastOptions={{
          className: '',
          style: {
            border: "1px solid #FFBF00",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#001011',
            padding: '10px 40px 10px 40px',
            color: '#FFBF00',

          },
        }}
      />

    </div>

  )
}

export default App
