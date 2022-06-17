import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Website from './Website/Website';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Website/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
