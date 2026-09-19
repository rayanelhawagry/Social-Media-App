import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CounterContextProvider from './Context/CounterContext.jsx'
import AuthContextProvider from './Context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <CounterContextProvider>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </CounterContextProvider>
)
