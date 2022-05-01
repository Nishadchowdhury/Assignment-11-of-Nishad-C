import { Routes, Route} from "react-router-dom";
import './App.css';
import CreateWithEmailAndPass from "./Components/Authentication/CreateWithEmailAndPass";
import EmailLogin from "./Components/Authentication/EmailLogin";
import Home from "./Components/Home/Home";
import InventoryUpdate from "./Components/Inventory/InventoryUpdate";
import NotFound from "./Components/NotFound/NotFound";
import Footer from "./Components/Shared/Footer/Footer";
import Header from "./Components/Shared/Header/Header";

function App() {
  return (
    <>
      <Header/>

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/login' element={<EmailLogin />} />
        <Route path='/createAccount' element={<CreateWithEmailAndPass />} />
        <Route path='/inventory/:id' element={<InventoryUpdate />} />





        <Route path='*' element={<NotFound/>} />

      </Routes>

      <Footer/>
    </>
  );
}

export default App;
