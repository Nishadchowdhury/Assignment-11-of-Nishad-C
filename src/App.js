import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import './App.css';
import CreateWithEmailAndPass from "./Components/Authentication/CreateWithEmailAndPass";
import EmailLogin from "./Components/Authentication/EmailLogin";
import Home from "./Components/Home/Home";
import InventoryUpdate from "./Components/Inventory/InventoryUpdate";
import NotFound from "./Components/NotFound/NotFound";
import Footer from "./Components/Shared/Footer/Footer";
import Header from "./Components/Shared/Header/Header";
import 'react-toastify/dist/ReactToastify.css';
import Inventory from "./Components/Inventory/Inventory";
import AddItem from "./Components/AddItem/AddItem";


function App() {
  return (
    <>
      <Header />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/login' element={<EmailLogin />} />
        <Route path='/createAccount' element={<CreateWithEmailAndPass />} />
        <Route path='/inventory' element={<Inventory />} />
        <Route path='/inventory/:id' element={<InventoryUpdate />} />
        <Route path='/addItem' element={<AddItem />} />





        <Route path='*' element={<NotFound />} />

      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Footer />
    </>
  );
}

export default App;
