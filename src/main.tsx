import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'tailwindcss/tailwind.css'
import "./styles.css"

import { BrowserRouter, Routes, Route } from 'react-router-dom'

// const publicUrl = process.env.P



ReactDOM.createRoot(document.getElementById('root')!).render(
  // basename={process.env.PUBLIC_URL}
  <BrowserRouter basename={process.env.PUBLIC_URL}>
  <React.StrictMode>


    <Routes>
    <Route  path='/HenokBelachew' element={<App />} />
    
    </Routes>
      

      

    
    
    
  </React.StrictMode>
  </BrowserRouter>,
)
