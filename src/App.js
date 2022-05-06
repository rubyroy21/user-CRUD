import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import "bootstrap/js/src/collapse.js";
import { AllRoutes } from './components/AllRoutes/AllRoutes';
import { Navbar } from './components/Layout/Navbar';

function App() {
  return (
    <div className="App"> 
      <Navbar/>
      <AllRoutes/>
    </div>
  );
}

export default App;
