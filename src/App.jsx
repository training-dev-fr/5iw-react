 import './App.css'
import List from './Component/List/List'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/user" element={<List type="user" />} /> 
        <Route path="/product" element={<List type="product" />} /> 
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
