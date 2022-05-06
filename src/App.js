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
import RequireAuth from "./Components/Authentication/RequireAuth/RequireAuth";
import MyItems from "./Components/MyItems/MyItems";


function App() {
  return (
    <>
      <Header />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/login' element={<EmailLogin />} />
        <Route path='/createAccount' element={<CreateWithEmailAndPass />} />


        <Route path='/inventory' element={
          <RequireAuth>
            <Inventory />
          </RequireAuth>} />


        <Route path='/inventory/:id' element={
          <RequireAuth>
            <InventoryUpdate />
          </RequireAuth>
        } />

        <Route path='/addItem' element={
          <RequireAuth>
            <AddItem />
          </RequireAuth>
        } />

        <Route path='/myItems' element={
          <RequireAuth>
            <MyItems />
          </RequireAuth>
        } />


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
