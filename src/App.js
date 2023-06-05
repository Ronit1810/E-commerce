import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Category from "./components/Category/Category";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import AppContext from "./utils/context";


function App() {
    return (
        <BrowserRouter>
        <AppContext>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Category/:id" element={<Category />} />
                <Route path="/product/:id" element={<SingleProduct />} />
            </Routes>
            <Newsletter />
            <Footer />
        </AppContext>    
        </BrowserRouter>
    )
}

export default App;
