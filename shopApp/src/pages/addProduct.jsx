import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

export const AddProduct = () => {
  const [product, setProduct] = useState({
    id: crypto.randomUUID(),
    title: "",
    price: "",
    description: "",
    category: "Cloth",
    image: "",
    rating: "",
  });

  const handelOnChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  // Mutatin the product
  const mutation = useMutation({
    mutationFn: (newProduct) => {
      return axios.post("http://localhost:3000/products/", newProduct);
    },
    onError: (error) => {
      toast.success(`Something Was wrong ${error.message}`);
    },
    onSuccess: () => {
      toast.success(`Successfully Added`);
    },
  });

  const resetData = () => {
    setProduct({
      id: crypto.randomUUID(),
      title: "",
      price: "",
      description: "",
      category: "Cloth",
      image: "",
      rating: "",
    });
  };
  // handel add product action
  const handelOnSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(product);
    resetData();
  };

  return (
    <div id="add-product" className="mb-4">
      <h2>Add Product</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="productName" className="form-label">
            Product Name
          </label>
          <input
            onChange={handelOnChange}
            value={product.title}
            name="title"
            type="text"
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
            onChange={handelOnChange}
            value={product.price}
            name="price"
            type="text"
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
            onChange={handelOnChange}
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
            onChange={handelOnChange}
            value={product.description}
            name="description"
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
            onChange={handelOnChange}
            value={product.image}
            name="image"
            type="text"
            className="form-control"
            id="productImage"
            placeholder="Product Image"
          />
        </div>
        <button
          onClick={handelOnSubmit}
          type="submit"
          className="btn btn-primary"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};
