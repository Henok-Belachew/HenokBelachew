import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'tailwindcss/tailwind.css'
import "./styles.css"

import { BrowserRouter, Routes, Route } from 'react-router-dom'




ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <BrowserRouter >
  <React.StrictMode>


    <Routes>
    <Route  path='/HenokBelachew' element={<App />} />
    
    </Routes>
    
  </React.StrictMode>
  </BrowserRouter>,
)
