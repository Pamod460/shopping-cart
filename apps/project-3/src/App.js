import './App.css';
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Components/Home/Home";
import Checkout from "./Components/Checkout/CheckOut";
import Cart from "./Components/Cart/Cart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
        <Footer/> </BrowserRouter>
    </div>
  );
}

export default App;
