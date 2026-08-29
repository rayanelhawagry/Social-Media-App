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

const router = createBrowserRouter([
  {
    path: '', element: <MainLayout />, children: [
      { index: true, element: <FeedPage /> },
      { path: 'profile', element: <Profile /> },
      { path: 'post-details', element: <PostDetails /> },
      { path: '*', element: <NotFound /> }
    ]
  },
  {
    path: '', element: <AuthLayout />, children: [
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> }
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
