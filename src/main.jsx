import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import Navbar from './components/Navbar'

import 'remixicon/fonts/remixicon.css'
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='bg-black'>
      <App />
    </div>
  </StrictMode>,
)
