import {Route, NavLink, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'

import MainPage from './pages/MainPage'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'
import Wrapper from './wrapper/Wrapper'
import LatestProducts from './pages/LatestProducts'

import './App.module.css'


const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Wrapper />}>
      <Route path="/" element={<MainPage/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/products" element={<Products/>} >
        <Route path="latest-products" element={<LatestProducts />} />
        </Route>
      <Route path="/contact" element={<Contact/>} />
    </Route>
   )
  )
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App