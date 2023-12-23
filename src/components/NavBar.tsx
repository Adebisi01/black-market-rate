import { Link, NavLink } from "react-router-dom";
import { routes } from "../routes";

import HeadlessPopOver from "./HeadlessPopOver";
const NavBar = () => {
  return (
    <>
      <div className=" w-full p-2 lg:px-8 px-3  flex items-center justify-between ">
        <Link
          to={"/"}
          className="flex items-center gap-2 flex-1 cursor-pointer"
        >
          <img
            className="bg-white rounded-full p-0.5"
            src="/exchangeLogo.png"
            alt=""
          />{" "}
          <span className="text-white  font-bold">Black Market Rate</span>
        </Link>
        <section className=" items-center gap-3 flex-2 text-white text-sm hidden lg:flex">
          {routes.map((route) => (
            <NavLink to={route.path}>{route.title} </NavLink>
          ))}
        </section>
        <section className="lg:hidden text-white flex justify-end ">
          <HeadlessPopOver >
            
          <section className="  bg-white-700 bg-gray-700 flex flex-col gap-3  p-3 w-[70vw] max-w-lg">
            {routes.map((route) => (
              <NavLink to={route.path} className="font-semibold text-lg hover:scale-105 transition duration-200 hover:text-gray-400">
                {route.title}{" "}
              </NavLink>
            ))}
          </section>
          </HeadlessPopOver>
        </section>
      </div>
    </>
  );
};

export default NavBar;
