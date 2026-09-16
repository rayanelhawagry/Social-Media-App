import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './Layouts/MainLayout';
import AuthLayout from './Layouts/AuthLayout';
import FeedPage from './Pages/FeedPage';
import Profile from './Pages/Profile';
import PostDetails from './Pages/PostDetails';
import NotFound from './Pages/NotFound';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ProtectedRoute from './Components/ProtectedRoute';
import AuthProtectedRoute from './Components/AuthProtectedRoute';

const router = createBrowserRouter([
  {
    path: '', element: <MainLayout />, children: [
      { index: true, element: <ProtectedRoute><FeedPage /></ProtectedRoute> },
      { path: 'profile', element: <ProtectedRoute><Profile /></ProtectedRoute> },
      { path: 'post-details', element: <ProtectedRoute><PostDetails /></ProtectedRoute> },
      { path: '*', element: <NotFound /> }
    ]
  },
  {
    path: '', element: <AuthLayout />, children: [
      { path: 'login', element: <AuthProtectedRoute><Login /></AuthProtectedRoute> },
      { path: 'register', element: <AuthProtectedRoute><Register /></AuthProtectedRoute> }
    ]
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
