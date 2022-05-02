import './App.css';
import Booking from './component/BookingPage/Booking'
import Page from './component/MainPage/Page'
import {
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <div className="myapp">
      <Routes>
        <Route index path="/" element={<Page />} />
        <Route path="/booking/*" element={<Booking />} />
      </Routes>
    </div>
  );
}

export default App;