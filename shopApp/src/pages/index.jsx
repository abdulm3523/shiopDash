import { Outlet } from "react-router-dom";
import SideBar from "../component/sideBar";
export const Pages = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <SideBar />
        <main className="col-md-9 ms-sm-auto col-lg-10 content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
