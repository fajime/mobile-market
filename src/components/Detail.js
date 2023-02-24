import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { AppContext } from "./../context/AppContext";

export const Detail = () => {
  const { mobileSelected, setCarrito } = useContext(AppContext);
  const [colorSelect, setColorSelect] = useState(null);
  const [almSelect, setAlmSelect] = useState(null);
  const [notSelect, setNotSelect] = useState(true);

  const handleColorSelect = (ev) => {
    setColorSelect(ev.target.value);
  };

  const handleAlmSelect = (ev) => {
    setAlmSelect(ev.target.value);
  };

  const addProducto = () => {
    if (!colorSelect || !almSelect) {
      setNotSelect(false), setTimeout(() => setNotSelect(true), 2000);
    } else {
      const obj = {
        id: mobileSelected.id,
        colorCode: colorSelect,
        storageCode: almSelect,
      };
      setCarrito(obj);
      setNotSelect(true);
    }
  };

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="fixed top-14 w-full">
          {!notSelect && (
            <div
              id="toast-success"
              className="flex p-2 mt-8 mr-52 ml-52 text-gray-500 bg-red-800 rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
              role="alert"
            >
              <div className="inline-flex align-middle flex-shrink-0 justify-center items-center w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Warning icon</span>
              </div>
              <div className="ml-3 align-middle leading-8 font-normal text-white">
                Debes seleccionar color y almacenamiento
              </div>
            </div>
          )}
        </div>
        <div className="container px-6 py-20 mx-auto">
          <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
            <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
              <div className="text-center mb-4 w-full font-semibold text-gray-800 capitalize lg:text-2xl dark:text-white">
                {mobileSelected.model}
              </div>
              <img
                className="object-cover w-full h-1/4 mr-9 md:rounded-none md:rounded-l-lg"
                src={mobileSelected.imgUrl}
                title={mobileSelected.model}
                alt={mobileSelected.model}
              />
            </div>
            <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
              <div className="text-sm text-blue-500 uppercase mb-3">
                <p className="font-bold">Descripción</p>
              </div>
              <div className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                <p className="font-bold">Marca</p>
                {mobileSelected.brand}
              </div>
              <div className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                <p className="font-bold">Precio</p>
                {mobileSelected.price}
              </div>
              <div className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                <p className="font-bold">Modelo CPU</p>
                {mobileSelected.cpu}
              </div>
              <div className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                <p className="font-bold">Memoria RAM</p>
                {mobileSelected.ram}
              </div>
              <div className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                <p className="font-bold">Sistema Operativo</p>
                {mobileSelected.os}
              </div>
              <div className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                <p className="font-bold">Resolución pantalla</p>
                {mobileSelected.displayResolution}
              </div>
              <div className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                <p className="font-bold">Batería</p>
                {mobileSelected.battery}
              </div>
              <div className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                <p className="font-bold">Cámara Principal</p>
                {typeof mobileSelected.primaryCamera === "object" &&
                  mobileSelected.primaryCamera.map((camera, index) => (
                    <span className="mr-3" key={index}>
                      {camera}
                    </span>
                  ))}

                {typeof mobileSelected.primaryCamera !== "object" && (
                  <span className="mr-3">{mobileSelected.primaryCamera}</span>
                )}
              </div>
              <div className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                <p className="font-bold">Cámara Secundaria</p>
                {typeof mobileSelected.secondaryCmera === "object" &&
                  mobileSelected.secondaryCmera.map((camera, index) => (
                    <span className="mr-3" key={index}>
                      {camera}
                    </span>
                  ))}
                {typeof mobileSelected.secondaryCmera !== "object" && (
                  <span className="mr-3">{mobileSelected.secondaryCmera}</span>
                )}
              </div>
              <div className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                <p className="font-bold">Dimensiones</p>
                {mobileSelected.dimentions}
              </div>
              <div className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                <p className="font-bold">Peso</p>
                {mobileSelected.weight}
              </div>
            </div>

            <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
              <div className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                <div className="text-sm text-blue-500 uppercase mb-3">
                  <p className="font-bold">Acciones</p>
                </div>
                <div className="mb-4">
                  <p className="font-bold">Colores</p>
                  {typeof mobileSelected.colors === "object" &&
                    mobileSelected.colors.map((color, index) => (
                      <div key={index} className="flex items-center mb-1">
                        <input
                          onChange={handleColorSelect}
                          type="radio"
                          id={color}
                          name="colors"
                          value={color}
                        ></input>
                        <label htmlFor={color} className="ml-3">
                          {color}
                        </label>
                      </div>
                    ))}
                </div>
                <div className="mb-5">
                  <p className="font-bold">Almacenamiento</p>
                  {typeof mobileSelected.internalMemory === "object" &&
                    mobileSelected.internalMemory.map(
                      (almacenamiento, index) => (
                        <div key={index} className="flex items-center mb-1">
                          <input
                            onChange={handleAlmSelect}
                            type="radio"
                            id={almacenamiento}
                            name="almacenamiento"
                            value={almacenamiento}
                          ></input>
                          <label htmlFor={almacenamiento} className="ml-3">
                            {almacenamiento}
                          </label>
                        </div>
                      )
                    )}
                </div>
                <button
                  onClick={addProducto}
                  type="button"
                  className="text-white bg-blue-700 rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                >
                  Añadir Producto
                </button>
              </div>
              <div className="mt-10">
                <Link
                  className="w-full bg-cyan-900 text-[14px] text-white text-center p-2 rounded-lg uppercase mb-4 font-bold"
                  to="/"
                >
                  Volver al listado de productos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
