import { useEffect, useState } from "react";
import { AppContext } from "./AppContext";
import axios from "axios";

export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [mobileSelected, setMobileSelected] = useState(true);
  const [mobiles, setMobiles] = useState([]);
  const [totalResults, setTotalResults] = useState(null);
  const [totalCarrito, setTotalCarrito] = useState(0);
  const [productosCarrito, setProductosCarrito] = useState([]);

  const baseUrl = process.env.REACT_APP_API_URL || "";

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/product`)
      .then((response) => {
        setMobiles(response.data);
        setLoading(false);
        setTotalResults(response.data.length);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [baseUrl]);

  const setSelected = (id) => {
    axios
      .get(`${baseUrl}/api/product/${id}`)
      .then((response) => {
        setMobileSelected(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const setCarrito = (element) => {
    axios
      .post(`${baseUrl}/api/cart`, element)
      .then((response) => {
        if (totalCarrito === 0) {
          setTimeout(() => {
            setTotalCarrito(0);
            setProductosCarrito([]);
          }, 360000);
        }
        setTotalCarrito(totalCarrito + response.data.count);
        setProductosCarrito([...productosCarrito, element]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <AppContext.Provider
      value={{
        mobiles,
        loading,
        totalResults,
        setSelected,
        mobileSelected,
        setCarrito,
        totalCarrito,
        productosCarrito,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
