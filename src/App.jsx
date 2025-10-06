import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import AddBlog from './pages/blog/AddBlog'
import EditBlog from './pages/blog/EditBlog'
import Home from './pages/blog/Home'
import SingleBlog from './pages/blog/SingleBlog'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path='/blog/add' element={<AddBlog />} />
        <Route path='/blog/edit' element={<EditBlog />} />
        <Route path='/blog/:id' element={<SingleBlog />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
