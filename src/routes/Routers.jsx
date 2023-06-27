import { Routes, Route } from 'react-router-dom';
import About from '../Components/About';
import Profile from '../Components/Profile';
import MainLayout from '../Pages/MainLayout';
import Login from '../Pages/authentication/authentication3/Login3';

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />} />
      <Route path='/about' element={<About />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/login' element={<Login />} />
    </Routes >
  )
}

export default Routers;