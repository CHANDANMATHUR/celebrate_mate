import Login from "./Login";
import SignUp from "./SineIn";
import EventForm from "./CreateEvent";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const Home = () => {



  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/SineIn" element={<SignUp />} />
          <Route path="/CreateEvent" element={<EventForm />} />
        </Routes>
      </Router>
    </>
  )
}



export default Home;