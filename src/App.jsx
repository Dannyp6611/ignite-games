// components & pages
import Home from './pages/Home';
import Nav from './components/Nav';

// Router
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="font-mont">
      <Nav />
      <Routes>
        <Route path="/game/:id" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
