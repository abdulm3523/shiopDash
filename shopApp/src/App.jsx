import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Pages } from "./pages";
import { AddProduct } from "./pages/addProduct";
import { Dashboard } from "./pages/dashboard";
import { ProductDetails } from "./pages/productDetails";
import { ProductList } from "./pages/productList";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Pages />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<ProductList />}>
              <Route path=":id" element={<ProductDetails />} />
            </Route>
            <Route path="/add-product" element={<AddProduct />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
