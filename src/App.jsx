import './App.css';
import {StyledNav} from './components/Navbar'
import {Route, Routes} from 'react-router-dom'
import {Home} from './components/screens/Home'
import {Login} from './components/screens/Login'
import {Profile} from './components/screens/Profile'
import {Signup} from './components/screens/Signup'


function App() {
  return (
      <>
     <StyledNav/>
       <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/login' element={<Login/>}></Route>
          <Route exact path='/profile' element={<Profile/>}></Route>
          <Route exact path='/signup' element={<Signup/>}></Route>
        </Routes>
      </>
    );
}

export default App;
