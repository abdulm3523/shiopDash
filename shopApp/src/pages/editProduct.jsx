import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const fetchEditData = async ({ queryKey }) => {
  const response = await axios.get(
    `http://localhost:3000/${queryKey[0]}/${queryKey[1]}`
  );

  return response.data;
};

const useProductData = () => {
  const { id } = useParams();

  const {
    data: product,
    isError,
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ["products", id],
    queryFn: fetchEditData,
  });
  return { product, isError, isLoading, isSuccess, id };
};

export const EditProduct = () => {
  const { product, isError, isLoading, isSuccess, id } = useProductData();
  const [updateProduct, setUpdateProduct] = useState();

  // updating the initial product value
  useEffect(() => {
    if (product) setUpdateProduct(product);
  }, [product]);
  console.log("update1", updateProduct);
  console.log("update OLD", product);

  // handel input filed on change
  const handelOnUpdate = (e) => {
    setUpdateProduct({
      ...updateProduct,
      [e.target.name]: e.target.value,
      id,
    });
  };

  const mutation = useMutation({
    mutationFn: (updatedData) => {
      return axios.put(`http://localhost:3000/products/${id}`, updatedData);
    },
    onError: (error) => {
      toast.success(`Something was wrong ${error.message}`);
    },
    onSuccess: () => {
      toast.success(`Successfully updated`);
    },
  });

  const styleProperty = {
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
    position: "top-right",
  };
  // handel on update product submit
  const handelOnSubmit = (e) => {
    e.preventDefault();
    console.log(updateProduct);
    mutation.mutate(updateProduct);
  };
  // Error message
  // if (mutation.isError) {
  //   toast.error("Something was wrong");
  // }
  // if (mutation.isSuccess) {
  //   toast.success(`Successfully Updated`);
  //   console.log("hello");
  // }
  return (
    <div id="add-product" className="mb-4">
      <h2>Edit Product</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="productName" className="form-label">
            Product Name
          </label>
          <input
            name="title"
            type="text"
            onChange={handelOnUpdate}
            value={updateProduct?.title}
            className="form-control"
            id="productName"
            placeholder="Enter product name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productPrice" className="form-label">
            Price
          </label>
          <input
            name="price"
            type="text"
            onChange={handelOnUpdate}
            value={updateProduct?.price}
            className="form-control"
            id="productPrice"
            placeholder="Enter product price"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productCategory" className="form-label">
            Category
          </label>
          <select
            name="category"
            id="productCategory"
            onChange={handelOnUpdate}
            value={updateProduct?.category}
          >
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="Cloth">Cloth</option>
            <option value="Materials">Materials</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="productDescription" className="form-label">
            Description
          </label>
          <textarea
            name="description"
            onChange={handelOnUpdate}
            value={updateProduct?.description}
            className="form-control"
            id="productDescription"
            rows="3"
            placeholder="Enter product description"
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="productImage" className="form-label">
            Thumbnile
          </label>
          <input
            name="image"
            onChange={handelOnUpdate}
            value={updateProduct?.image}
            type="text"
            className="form-control"
            id="productImage"
            placeholder="Enter product price"
          />
        </div>
        <button
          onClick={handelOnSubmit}
          type="submit"
          className="btn btn-primary"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};
