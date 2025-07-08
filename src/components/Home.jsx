import Login from "./Login";
import SignUp from "./SineIn";
import { useEffect } from "react";
import EventForm from "./CreateEvent";
import axios from "axios";
import Navbar from "./Navbar";
const Home = () => {



  return (
    <>
      <Navbar />
      <EventForm />
    </>
  )
}

export default Home;