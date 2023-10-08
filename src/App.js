import Login from './Components/Login'
import { useSelector } from 'react-redux'
import Scanner from './Components/Scanner/Scanner'
import Dashboard from './Components/Dashboard'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import useAuthVerification from './Utilities/AuthVerification'
import Loading from './Components/Loading'

function App() {

    const {isLoading} = useAuthVerification()
    const isLoggedIn = useSelector((state) => state.authSlice.isLoggedIn)

    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path='/' 
                           element={ isLoading ? <Loading/> 
                                               : isLoggedIn ? <Dashboard/> : <Login/> }/>
                    <Route path='/scan' element={<Scanner/>} />
                </Routes> 
            </div>
        </BrowserRouter>
    )
}

export default App;