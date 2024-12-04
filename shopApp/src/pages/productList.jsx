import { Link } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
export const ProductList = () => {
  return (
    <>
      <h1 className="text-center mb-4">Products</h1>
      <div className="row g-4">
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="product-card p-3">
            <img
              src="https://via.placeholder.com/400x400"
              alt="Product Image"
              className="product-image"
            />
            <h2 className="product-title mt-3">The Good Earth® Cotton</h2>
            <p className="text-muted">Size: US XL / EU 56 / 4</p>
            <p className="product-price">₹17,565</p>
            <Link to="/1" className="btn btn-primary w-100">
              <i className="ri-shopping-bag-line"></i> Add to Cart
            </Link>
          </div>
        </div>

        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="product-card p-3">
            <img
              src="https://via.placeholder.com/400x400"
              alt="Product Image"
              className="product-image"
            />
            <h2 className="product-title mt-3">Relaxed Organic Chambray</h2>
            <p className="text-muted">Size: US XL / EU 56 / 4</p>
            <p className="product-price">₹17,565</p>
            <button className="btn btn-primary w-100">
              <i className="ri-shopping-cart-2-line"></i> Add to Cart
            </button>
          </div>
        </div>

        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="product-card p-3">
            <img
              src="https://via.placeholder.com/400x400"
              alt="Product Image"
              className="product-image"
            />
            <h2 className="product-title mt-3">The Organic Taper Jean</h2>
            <p className="text-muted">Size: US XL / EU 56 / 4</p>
            <p className="product-price">₹17,565</p>
            <button className="btn btn-primary w-100">
              <i className="ri-shopping-cart-2-line"></i> Add to Cart
            </button>
          </div>
        </div>

        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="product-card p-3">
            <img
              src="https://via.placeholder.com/400x400"
              alt="Product Image"
              className="product-image"
            />
            <h2 className="product-title mt-3">Bomber Jacket</h2>
            <p className="text-muted">Size: US XL / EU 56 / 4</p>
            <p className="product-price">₹17,565</p>
            <button className="btn btn-primary w-100">
              <i className="ri-shopping-cart-2-line"></i> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
