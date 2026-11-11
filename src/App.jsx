import React from 'react'
import './App.css'
import Header from './components/Header'
import { Routes , Route } from 'react-router-dom'
import Home from './pages/Home'    
import Photos from './pages/Photos'
import Posts from './pages/Posts'
import Comments from './pages/Comments'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/comments" element={<Comments />} />
      </Routes>
    </>
  )
}

export default App