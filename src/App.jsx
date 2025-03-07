import { useState } from "react";

import "./App.css";
import Header from "./components/Header/index";
import ProductsList from "./components/ProductsList";
import SalesSummary from "./components/SalesSummary";
import storeProducts from "../src/data/storeProducts.json";

function App() {
  const [productsData, setProductsData] = useState(storeProducts);

  return (
    <>
      <Header />
      <ProductsList
        productsData={productsData}
        setProductsData={setProductsData}
      />
      <SalesSummary productsData={productsData} />
    </>
  );
}

export default App;
