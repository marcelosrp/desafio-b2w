import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const URL = "https://www.mocky.io/v2/5a5e38f3330000b0261923a5";

  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [msgError, setMsgError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = () => {
    setIsLoading(true);

    axios
      .get(URL, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        setData(res.data.profile);
      })
      .catch((err) => {
        if (err.response.status === 404) {
          setError(true);
          setMsgError("Foi encontrado um erro ao executar essa página.");
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <GlobalContext.Provider value={{ data, error, msgError, isLoading }}>
      {children}
    </GlobalContext.Provider>
  );
};
