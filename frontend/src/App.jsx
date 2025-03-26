import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';  // Only RouterProvider here
import HomePage from './pages/HomePage';  // Ensure this path is correct
import ChatPage from './pages/ChatPage';  // Ensure this path is correct


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />, 
  },
  {
    path: '/goods',
    element: <HomePage />,  
  },
  {
    path: '/chat',
    element: <ChatPage />,  
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} /> {/* Only this should be here */}
    </div>
  );
}

export default App;
