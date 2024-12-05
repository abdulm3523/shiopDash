import { Link } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { LoadingIndigator } from "../component/LoadingIndigator";
import { ProductCard } from "../component/productCard";
import { ErrorHandel } from "../component/error";
import { useState } from "react";

const fetchProduct = async ({ queryKey }) => {
  const response = await axios.get(
    `http://localhost:3000/products?_page=${queryKey[1].page}&_per_page=8`
  );

  return response.data;
};

export const ProductList = () => {
  const [page, setPage] = useState(1);
  console.log(fetchProduct());

  const {
    data: product,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["products", { page }],
    queryFn: fetchProduct,
  });
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (id) => {
      return axios.delete(`http://localhost:3000/products/${id}`);
    },
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries(["products"]);
    },
  });

  const handelOnDelete = (id) => {
    // const filter = product.filter((product) => product.id != id);
    mutation.mutate(id);
  };

  if (isLoading) return <LoadingIndigator />;
  if (error) return <ErrorHandel err={error} />;
  return (
    <>
      <h1 className="text-center mb-4">Products</h1>
      <div className="row g-4">
        {product.data.map((item) => (
          <ProductCard onDelete={handelOnDelete} product={item} key={item.id} />
        ))}
      </div>
      <div className="d-flex justify-content-center align-items-center">
        {product.prev && (
          <button
            className="btn btn-primary mt-3"
            onClick={() => setPage(product.prev)}
          >
            Prev
          </button>
        )}
        {product.next && (
          <button
            className="btn btn-primary mt-3"
            onClick={() => setPage(product.next)}
          >
            Next
          </button>
        )}
      </div>
    </>
  );
};
