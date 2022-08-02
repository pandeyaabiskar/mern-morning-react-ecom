import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import ProductDetail from "./components/ProductDetail";
import useFetch from "./hooks";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const {
    data: productData,
    isPending,
    error,
  } = useFetch("http://localhost:4000/api/products");

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
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
          }
        />
        <Route path="/details/:productID" element={<ProductDetail />} />
        <Route path="*" element={<h1>Sorry, Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
