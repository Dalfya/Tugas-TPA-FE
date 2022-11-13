import { Outlet } from 'react-router-dom'
import Navigation from './Components/Nav'
import Header from './routs/Header'

function App() {

  return (
    <div className="container">
      <Navigation />
      <Outlet/>
    </div>
  )
}

export default App
