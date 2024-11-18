import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Game from './components/Game/Game'

const App = () => {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/game" element={<Game />} />
    </Routes>
    )
}

export default App
