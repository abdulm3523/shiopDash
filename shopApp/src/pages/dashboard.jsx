import { Link } from "react-router-dom";
export const Dashboard = () => {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <h2 className="mb-3 fs-1">Welcome</h2>
      <Link className="btn btn-primary align-middle" to="/add-product">
        Add Products
      </Link>
    </div>
  );
};
