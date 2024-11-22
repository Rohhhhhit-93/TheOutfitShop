import { Carousel } from 'react-bootstrap';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Buynow';
import Buynow from './components/Buynow';

function App() {
  return (
    <div>
      <>
      <Routes>
          <Route path="buynow" element={<Buynow />} />
          
      </Routes>
      </>
    </div>
  );
}

export default App;
