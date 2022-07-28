import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import axios from "axios";

function App() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get("http://localhost:4000/api/products");
      console.log(data);
      setProductData(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <section className="products">
        {productData.map((product) => {
          return <ProductCard data={product} />;
        })}
      </section>
    </>
  );
}

export default App;
