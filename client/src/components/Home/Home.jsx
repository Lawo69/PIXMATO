import { useEffect } from "react";

import "./Home.scss";

import Banner from "./Banner/Banner";
import Category from "./Category/Category"
import Product from "../Products/Products";
import { fetchDataFromApi } from "../../utils/api";

const Home = () => {

    useEffect (() => {
        getCategories()
    }, [])

    const getCategories = () => {
        fetchDataFromApi("/api/categories?populate=*").then((res) => console.log(res));
    };

    return (
        <div className="home">
            <Banner />
            <div className="main-content">
                <div className="layout">
                    <Category />
                    <Product headingText="Popular Products" />
                </div>
            </div>
        </div>
    );
};

export default Home;
