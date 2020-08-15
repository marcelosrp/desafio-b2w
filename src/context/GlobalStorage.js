import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const URL = "https://www.mocky.io/v2/5a5e38f3330000b0261923a5";

  const [data, setData] = useState(null);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = () => {
    axios
      .get(URL, {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      })
      .then((res) => {
        setData(res.data.profile);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <GlobalContext.Provider value={{ data }}>{children}</GlobalContext.Provider>
  );
};
