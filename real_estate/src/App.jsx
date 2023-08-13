import './App.css'
import HomePage from './pages/HomePage'
import Houses from './pages/Houses'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './pages/About'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import AssetDescription from './pages/AssetDescription'
import HouseDeatil from './components/HouseDetail'
import Lands from './pages/Lands'
import LandDetail from './components/LandDetail'



function App() {


  return (
    <div className='h-auto overflow-x-hidden font-poppins'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/'  element={<HomePage />} />
          <Route path='houses/' element={<Houses />} />
          <Route path='lands/' element={<Lands />} />
          <Route path='about/' element={<About />} />
          <Route path='houses/:id' element={<HouseDeatil />} />
          <Route path='lands/:id' element={<LandDetail />} />
          <Route path='login/' element={<LoginPage />} />
          <Route path='signup/' element={<SignUpPage />} />
          <Route path='asset/' element={<AssetDescription />} />
        </Routes>
       
       
      </Router>
      
    </div>
  )
}

export default App
