import logo from './logo.svg';
import './Components/CSS/Navbar.css'
import './Components/CSS/Usercrown.css'
import './Components/CSS/ContentSwitch.css'
import './Components/CSS/Randomposts.css'
import './Components/CSS/fullpost.css'
import { Usercrown } from './Components/Userabout';
import './Components/CSS/Userpostsection.css'
import { Nav } from './Components/Navbar';
import { Contentswitcher } from './Components/Contentswitcher';
import { Postsection } from './Components/UserPostssection';
import { Randonpost } from './Components/Homecomponets/Randomposts';
import { Fullpost } from './Components/Fullpost';
function App() {
  return (
   <>
   <Nav  />
   <Usercrown/>
   <Contentswitcher/>
   <Postsection/>

   <Randonpost/>
   <Fullpost/>
   </>
  );
}

export default App;
