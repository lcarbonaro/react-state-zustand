//import { useState } from 'react'

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";

import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <ul
                className="menu"
            >
                <li className="menu-item">
                    <Link to="/">Shop</Link>
                </li>
                <li className="menu-item" >
                    <Link to="/cart">Cart</Link>
                </li>
            </ul>
            <hr />

            <Routes>
                <Route path="/" element={<Shop />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;