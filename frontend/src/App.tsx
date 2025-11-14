import Home from './pages/home.tsx'
import Menu from './pages/menu.tsx'
import GiftShop from './pages/giftshop.tsx'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <Routes> 
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/giftshop" element={<GiftShop />} />
    </Routes>
  )
}

export default App
