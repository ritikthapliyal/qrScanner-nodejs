import Login from './Components/Login'
import { useSelector } from 'react-redux'
import Scanner from './Components/Scanner/Scanner'
import Dashboard from './Components/Dashboard'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import useAuthVerification from './Utilities/AuthVerification'
import Loading from './Components/Loading'
import ScannedResult from './Components/Scanner/ScannedResult'

function App() {

    const {isLoading} = useAuthVerification()
    const isLoggedIn = useSelector((state) => state.authSlice.isLoggedIn)

    return (
        <BrowserRouter>
            {
                !isLoggedIn &&  !isLoading && <Login/>
            }
            <div className="App">
                <Routes>
                    <Route path='/' 
                           element={ isLoading ? <Loading/> 
                                               : isLoggedIn ? <Dashboard/> : <Loading/> }/>
                    <Route path='/scan' element={<Scanner/>} />
                    <Route path='/scanned-result' element={<ScannedResult/>} />
                </Routes> 
            </div>
        </BrowserRouter>
    )
}

export default App;