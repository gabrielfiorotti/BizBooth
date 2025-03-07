import { useState } from "react";

import "./App.css";
import Header from "./components/Header/index";
import ProductsList from "./components/ProductsList";
import SalesSummary from "./components/SalesSummary";
import storeProducts from "../src/data/storeProducts.json";
import SheetInfo from "./components/SheetInfo";

function App() {
  const [productsData, setProductsData] = useState(storeProducts);

  return (
    <>
      <Header />
      <main>
        <div id="left-side">
          <ProductsList
            productsData={productsData}
            setProductsData={setProductsData}
          />
        </div>
        <div id="right-side">
          <SalesSummary productsData={productsData} />
          <SheetInfo />
        </div>
      </main>
    </>
  );
}

export default App;
