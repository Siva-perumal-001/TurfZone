import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Turfs from "./pages/Turfs";
import Auth from './pages/Auth';
import TurfDetails from "./pages/TurfDetails";
import Booking from "./pages/Booking";
import MyBooking from "./pages/MyBooking";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<Home />} />
        <Route path="/turfs" element={<Turfs />} />
        <Route path="/turfs/:id" element={<TurfDetails/>} />
        <Route path="/turfs/:id/booking/:id" element={<Booking />} />
        <Route path="/my-bookings" element={<MyBooking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
