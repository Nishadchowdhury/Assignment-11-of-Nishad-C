import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import Footer from "./Components/Shared/Footer/Footer";
import Header from "./Components/Shared/Header/Header";

function App() {
  return (
    <>
      <Header/>

      <Routes>

        <Route path='/' element={<Home />} />


        <Route path='*' element={<NotFound/>} />

      </Routes>

      <Footer/>
    </>
  );
}

export default App;
