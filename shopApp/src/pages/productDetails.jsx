import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const fetchProductDetails = async ({ queryKey }) => {
  const response = await axios.get(
    `http://localhost:3000/${queryKey[0]}/${queryKey[1]}`
  );
  // console.log("d", response.data);
  return response.data;
};

// export const ProductDetailsWrapper = () => {
//   const { id } = useParams();
//   return <ProductDetails id={id} />;
// };

const ProductDetails = () => {
  const { id } = useParams();
  const {
    data: product,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["products", id],
    queryFn: fetchProductDetails,
    // refetchInterval: false,
  });

  console.log(id, product);

  return (
    <div className="container productDetails mt-5">
      <div className="row">
        <div className="col-md-6 text-center">
          <img
            src={product?.image}
            alt="Product Image"
            className="img-fluid img-thumbnail product-image"
          />
        </div>

        <div className="col-md-6">
          <h1 className="mb-3">${product?.price}</h1>
          <p className="text-muted mb-4">{product?.category}</p>
          <p className="lead mb-4">{product?.description}</p>
          <h3 className="text-primary mb-4">${product?.price}</h3>

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
        <Link to={"/products"} className="btn btn-secondary">
          <i className="ri-arrow-go-back-line"></i> Back to Products
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;
