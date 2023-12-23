import { Outlet } from "react-router-dom";
import { NavBar } from ".";

const DefaulRoutes = () => {
  return (
    <>
      <div className="bg-gray-950 min-w-full min-h-screen">
        <NavBar />
        <Outlet />
      </div>
    </>
  );
};

export default DefaulRoutes;
