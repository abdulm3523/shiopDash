import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Pages } from "./pages";
import { AddProduct } from "./pages/addProduct";
import { Dashboard } from "./pages/dashboard";
import ProductDetails from "./pages/productDetails";
import { ProductList } from "./pages/productList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { EditProduct } from "./pages/editProduct";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const queryInstance = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryInstance}>
        <Router>
          <Routes>
            <Route path="/" element={<Pages />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/products" element={<ProductList />}></Route>
              <Route path="/products/:id/:title" element={<ProductDetails />} />
              <Route path="/product/edit/:id" element={<EditProduct />} />
              <Route path="/add-product" element={<AddProduct />} />
            </Route>
          </Routes>
        </Router>
        <ToastContainer />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
