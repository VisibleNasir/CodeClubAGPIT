import { Route, BrowserRouter, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './components/homepage'


function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<h1>About</h1>} />
      <Route path="/events" element={<h1>Events</h1>} />
      <Route path="/contact" element={<h1>Contact</h1>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
