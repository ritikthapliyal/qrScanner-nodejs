import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'
import Scanner from './Components/Scanner'

function App() {

  return (
      <BrowserRouter>
          <div className="App">
            <Routes>
                <Route path='/' Component={Login}></Route>
                <Route path='/dashboard' Component={Dashboard}></Route>
                <Route path='/scan' Component={Scanner}></Route>
            </Routes> 
          </div>
      </BrowserRouter>
  )
}

export default App;