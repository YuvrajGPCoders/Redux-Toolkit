import './App.css';


import UserDetails from './store/components/UserDetails';
import Navbar from './store/components/Navbar';

function App() {
  return (
    <div className="App">
   <Navbar/>
     <UserDetails/>
    </div>
  );
}

export default App;
