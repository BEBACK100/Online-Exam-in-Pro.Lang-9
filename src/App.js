// import logo from './logo.svg';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
// import Errorpage from './Components/Errorpage/Errorpage';

import Home from './Components/Home/Home';



import Statiostics from './Components/Statistics/Statistics';
import Topics from './Components/Topics/Topics';
import Mcqfield from './Components/Mcqfield/Mcqfield';
import Main from './Layout/Main';
import Errorpage from './Components/Errorpage/Errorpage';
const router = createBrowserRouter([
  {
    path: '/', element: <Main></Main>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: '/',
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Home></Home>
      },
      {
        path: '/home',


        element: <Home></Home>
      },

      {
        path: '/Topics',
        element: <Topics></Topics>
      },
      {
        path: '/Topics/:Topicsid',
        loader: async ({ params }) => {
          // console.log(params.Topicsid);
          return fetch(` https://openapi.programming-hero.com/api/quiz/${params.Topicsid}`)
        },
        element: <Mcqfield></Mcqfield>
      },
      {
        path: '/statistics',
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Statiostics></Statiostics>
      },


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
