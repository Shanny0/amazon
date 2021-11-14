
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import News from './Components/News/News';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <News/>
    <Sidebar/>
    </div>
  );
}

export default App;
