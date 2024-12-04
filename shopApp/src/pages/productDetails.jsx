// import { useParams } from "react-router-dom";
export const ProductDetails = () => {
  // const { id } = useParams();
  return (
    <div className="container productDetails mt-5">
      <div className="row">
        <div className="col-md-6 text-center">
          <img
            src="https://via.placeholder.com/400x400"
            alt="Product Image"
            className="product-image"
          />
        </div>

        <div className="col-md-6">
          <h1 className="mb-3">Sample Product</h1>
          <p className="text-muted mb-4">Category: Electronics</p>
          <p className="lead mb-4">
            This is a detailed description of the sample product. It provides
            features, specifications, and all necessary details about the
            product.
          </p>
          <h3 className="text-primary mb-4">$99.99</h3>

          <div className="d-flex align-items-center mb-4">
            <label htmlFor="quantity" className="me-3">
              Quantity:
            </label>
            <input
              type="number"
              id="quantity"
              className="form-control quantity-input"
              value="1"
              min="1"
            />
          </div>
          <button className="btn btn-success btn-lg">
            <i className="ri-shopping-cart-2-line"></i> Add to Cart
          </button>
        </div>
      </div>

      <div className="mt-5">
        <button className="btn btn-secondary">
          <i className="ri-arrow-go-back-line"></i> Back to Products
        </button>
      </div>
    </div>
  );
};
