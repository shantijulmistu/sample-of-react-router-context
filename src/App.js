import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import PrivateRoute from './routes/PrivateRoute';
import Orders from './components/Orders/Orders';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => {
            return fetch('https://jsonplaceholder.typicode.com/photos')
          },
          element: <Home></Home>
        },
        {
          path: "/home",
          loader: () => {
            return fetch('https://jsonplaceholder.typicode.com/photos')
          },
          element: <Home></Home>
        },
        {
          path: "/orders",
          element: <PrivateRoute><Orders></Orders></PrivateRoute>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
