import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import axios from "axios";

function App() {
  const [productData, setProductData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get("http://localhost:4000/api/products/1");
        console.log(data);
        setProductData(data);
        setIsPending(false);
      } catch (err) {
        setError("Sorry, Couldn't Fetch Data. Please Try Again Later.");
        setIsPending(false);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <section className="products">
        {!isPending &&
          !error &&
          productData &&
          productData.map((product, index) => {
            return <ProductCard key={index} data={product} />;
          })}
        {isPending && <h1>Loading...</h1>}
        {error && <h1>{error}</h1>}
      </section>
    </>
  );
}

export default App;
