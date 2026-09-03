import { BrowserRouter, Routes,Route} from 'react-router-dom'
import About from './pages/about'
import Profile from './pages/Profile'

export default function App(){
  return <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/sign-in' element={<SignIn />} />
    <Route path='/sign-u' element={<SignUp />} />
    <Route path='/about' element={<About />} />
    <Route path='/profile' element={<Profile />} />

  </Routes>
  </BrowserRouter>
}