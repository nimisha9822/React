import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from '../src/Home/Home'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Github , {githubInfoLoader} from './components/Github/Github'
import User from './components/User/User'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       },
//     ]
//   }
// ])
const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home /> }/>
    <Route path='about' element={<About/> }/>
    <Route path='contact' element={<Contact /> }/>
    <Route path='github' loader={githubInfoLoader} element={<Github/> }/>
    <Route path='user/:userid' element={<User/> }/>
  </Route>
  ))

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)
