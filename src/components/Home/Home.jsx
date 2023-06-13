import "./Home.scss";


import Banner from "./Banner/Banner";
import Category from "../Home/Category/Category";
import Products from "../Products/Products";
import { useEffect, useContext } from "react";
import { fetchDataFromApi } from "../../utils/api";

import { Context } from "../../utils/context";

const Home = () => {
    const {Categories, setCategories, products, setproducts} = useContext(Context)

    useEffect(()=>{
        getProducts();
        getCategories();
    },[])

    const getCategories = ()=>{
        fetchDataFromApi('/api/categories?populate=*').then((res) => {console.log(res); setCategories(res)})
    }
    const getProducts = ()=>{
        fetchDataFromApi('/api/products?populate=*').then((res) => {console.log(res); setproducts(res)})
    }
    return <div>
        <Banner />
        <div className="main-content">
            <div className="layout">
              <Category Categories={Categories} />
              <Products products={products} headingText="Popular Products" />
            </div>
        </div>
        
    </div>;
};

export default Home;
