// import logo from './logo.svg';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';

import Home from './Components/Home/Home';


import Statiostics from './Components/Statistics/Statistics';
import Topics from './Components/Topics/Topics';
import Main from './Layout/Main';
const router = createBrowserRouter([
  {
    path: '/', element: <Main></Main>, children: [
      {
        path: '/',
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Home></Home>
      },
      {
        path: '/home',


        element: <Home></Home>
      },

      { path: '/topics', element: <Topics></Topics> },
      { path: '/statistics', element: <Statiostics></Statiostics> },
      { path: '/blog', element: <Blog></Blog> },


    ]

  },

])
function App() {
  return (
    <div className="App">

      <RouterProvider router={router}></RouterProvider>


    </div>
  );
}

export default App;
