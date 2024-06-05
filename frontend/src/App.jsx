import './App.css'
import Home from './components/Home'
import Loginpage from './components/Loginpage'
import { Navigate, Routes, Route } from 'react-router-dom'
import Signuppage from './components/Signuppage'
import { useAuthContext } from './context/AuthContext.jsx';
import { Toaster } from 'react-hot-toast';


function App() {
  const { authUser } = useAuthContext();
  return (
    <div className=''>
      <Routes>
        <Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
        <Route path='/login' element={authUser ? <Navigate to="/" /> : <Loginpage />} />
        <Route path='/signup' element={authUser ? <Navigate to="/" /> : <Signuppage />} />
      </Routes>
      <Toaster
        toastOptions={{
          className: '',
          style: {
            border: "1px solid #8AEAEE",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#292E38',
            padding: '10px 40px 10px 40px',
            color: '#8AEAEE',

          },
        }}
      />

    </div>

  )
}

export default App
