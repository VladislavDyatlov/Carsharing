import './App.css';
import Booking from './component/BookingPage/Booking'
import {Provider} from 'react-redux'
import {store} from './redux'
import Page from './component/MainPage/Page';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
    <div className="myapp">
      <Routes>
        <Route index path="/" element={<Page />} />
        <Route path="/booking/*" element={<Booking />} />
      </Routes>
    </div>
    </Provider>
  );
}

export default App;