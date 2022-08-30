import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Settings  from './pages/Settings';
import Profile from './pages/Profile';
const routes = () => {
  return (
    <Routes>



<Route path="/settings" element={<Settings />} />
          <Route path="/" element={<Profile/>} />

    </Routes>

  )
}

export default routes