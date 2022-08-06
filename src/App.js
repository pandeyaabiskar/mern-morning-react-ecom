import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import ProductDetail from "./components/ProductDetail";
import useFetch from "./hooks";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {getAllProductData} from './store/slices/productSlice';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react'

function App() {
  const dispatch = useDispatch();

  //Redux
  const {productData, isPending, error} = useSelector(state => state.product)
  useEffect(() => {
    dispatch(getAllProductData());
  }, []);




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
