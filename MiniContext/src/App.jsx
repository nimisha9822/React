import Login from './Components/Login'
import UserContextProvider from './Context/UserContextProvider'
import Profile from './Components/Profile'
import './App.css'

function App() {
  

  return (
    <UserContextProvider>
      <h2>React !</h2>
    <Login />
    <Profile />
    </UserContextProvider>
  )
}

export default App
