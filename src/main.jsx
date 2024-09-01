import React from 'react'
import ReactDOM from 'react-dom/client'
const LazyLoading=React.lazy(()=>import("./App.jsx") );
import Spinner from './Components/Spinner/Spinner.jsx'
import './index.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { ThemeProvider } from './Context/ThemeContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
   <React.Suspense fallback={<Spinner/>}>
   <LazyLoading />
   </React.Suspense>
    </ThemeProvider>
  </React.StrictMode>,
)
