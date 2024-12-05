import { Link } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { LoadingIndigator } from "../component/LoadingIndigator";
import { ProductCard } from "../component/productCard";
import { ErrorHandel } from "../component/error";

const fetchProduct = async () => {
  const response = await axios.get("http://localhost:3000/products");

  return response.data;
};

export const ProductList = () => {
  console.log(fetchProduct());

  const {
    data: product,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["products"],
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
        {product.map((item) => (
          <ProductCard onDelete={handelOnDelete} product={item} key={item.id} />
        ))}
      </div>
    </>
  );
};
