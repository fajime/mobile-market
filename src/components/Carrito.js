import { useContext } from "react";
import { AppContext } from "./../context/AppContext";

export const Carrito = () => {
  const { productosCarrito } = useContext(AppContext);
  console.log("CARRITO: ", productosCarrito);

  return (
    <>
      <div className="fixed top-20 text-sm ">
        {productosCarrito &&
          productosCarrito.map((producto) => (
            <ul
              key={producto.id}
              className="flex m-3 w-full selection:w-48 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <li className="py-2 px-4 w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                {producto.id}
              </li>
              <li className="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600">
                {producto.colorCode}
              </li>
              <li className="py-2 px-4 w-full rounded-b-lg">
                {producto.storageCode}
              </li>
            </ul>
          ))}
      </div>
    </>
  );
};
