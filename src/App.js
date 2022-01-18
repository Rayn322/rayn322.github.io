import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Rickroll from './Rickroll';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="fun" element={<Rickroll />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
