import './App.css';
import Navbar from './components/Navbar/Navbar';
import SearchFlight from './components/Navbar/SearchFlight/SearchFlight';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SearchFlight/>
    </div>
  );
}

export default App;
