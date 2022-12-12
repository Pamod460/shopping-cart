import './App.css';
import Footer from "./Components/Layout/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Components/Home/Home";
import Checkout from "./Components/Checkout/CheckOut";
import Cart from "./Components/Cart/Cart";
import Navbar from "./Components/Layout/NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <br/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
        <br/>
        <Footer/> </BrowserRouter>
    </div>
  );
}

export default App;
