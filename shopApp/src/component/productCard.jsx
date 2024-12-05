import { Link } from "react-router-dom";

const formatTitleUrl = (title) => {
  const url = title?.toLowerCase().replace(/\s+/g, "-");

  return url;
};
export const ProductCard = ({ product, onDelete }) => {
  return (
    <div key={product.id} className="col-sm-6 col-md-4 col-lg-3">
      <div className="product-card p-3">
        <img
          src={product.image}
          alt="Product Image"
          className="product-image"
        />
        <Link to={`/products/${product.id}/${formatTitleUrl(product.title)}`}>
          <h2 className="product-title mt-3">{product.title}</h2>
        </Link>
        <p className="product-price">${product.price}</p>
        <div className="d-flex justify-content-center">
          <button className="btn btn-primary m-2">
            <i className="ri-shopping-bag-line"></i>
          </button>
          <Link
            to={`/product/edit/${product.id}`}
            className="btn btn-primary m-2"
          >
            <i class="ri-edit-box-line"></i>
          </Link>
          <button
            onClick={() => onDelete(product.id)}
            className="btn btn-primary m-2"
          >
            <i class="ri-delete-bin-6-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
