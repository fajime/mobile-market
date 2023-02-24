import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";

export const Header = () => {
  const { totalResults, totalCarrito } = useContext(AppContext);
  return (
    <>
      <header className="fixed top-0 left-0 z-50 bg-slate-400 mb-10 shadow-md py-2 text-lg  tracking-tight text-gray-900 dark:text-white flex items-center w-full justify-around h-20">
        <Link className="m-10 font-bold" to="/">
          Product List Mobiles
        </Link>
        <label className="text-sm pr-8">
          Total Productos: <span>{totalResults}</span>
        </label>
        <div className="flex">
          <Link className="m-10 font-medium flex" to="/carrito">
            <ShoppingBagIcon className="h-5 w-5 text-blue-500" />
            <span className="align-middle text-sm mr-2">Ver productos</span>
            <span className="align-middle font-bold text-sm">
              {totalCarrito}
            </span>
          </Link>
        </div>
      </header>
    </>
  );
};
