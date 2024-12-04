import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <nav className="col-md-3 col-lg-2 d-md-block sidebar">
      <h3 className="text-center py-3">
        {" "}
        <Link to="/">Dashboard</Link>
      </h3>
      <Link to="/add-product" id="add-product-link">
        <i className="ri-add-circle-line"></i> Add Product
      </Link>
      <Link to="/products" id="all-products-link">
        <i className="ri-list-check"></i> All Products
      </Link>
    </nav>
  );
};

export default SideBar;
