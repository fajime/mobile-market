import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "./../context/AppContext";

export const Home = () => {
  const { loading, mobiles, setSelected } = useContext(AppContext);
  const [filteredList, setFilteredList] = new useState([]);

  useEffect(() => {
    setFilteredList(mobiles);
  }, [mobiles]);

  const filterBySearch = (event) => {
    const query = event.target.value;
    let updatedList = [...mobiles];
    updatedList = updatedList.filter((item) => {
      return (
        item.model.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
        item.brand.toLowerCase().indexOf(query.toLowerCase()) !== -1
      );
    });
    setFilteredList(updatedList);
  };

  const handleSelected = (id) => {
    setSelected(id);
  };

  return (
    <>
      <div className="w-full bg-slate-700 p-5 fixed top-20 z-50">
        <input
          onChange={filterBySearch}
          type="search"
          className="-left-3/4 p-4 pl-10 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search"
        ></input>
      </div>

      <div className="grid grid-cols-4 gap-6 m-10 absolute z-0 top-40">
        {!loading &&
          filteredList.map((mobile) => (
            <Link
              className="flex flex-col items-center p-4 bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              to="detail"
              key={mobile.id}
              data-test={mobile.id}
              onClick={() => handleSelected(mobile.id)}
            >
              <img
                className="object-cover w-full md:h-auto md:w-24 md:rounded-none md:rounded-l-lg"
                src={mobile.imgUrl}
                title={mobile.model}
                alt={mobile.model}
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                  {mobile.model}
                </h5>
                <p className="mb-3 text-xs font-normal text-gray-700 dark:text-gray-400">
                  {mobile.brand}
                </p>
                <p className="mb-3 text-xs font-normal text-gray-700 dark:text-gray-400">
                  {mobile.price} EUR
                </p>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
};
