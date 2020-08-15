import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalStorage";

import Aside from "../components/aside/Index";
import Wrap from "../components/wrap/Index";
import Error from "../components/error/Index";
import Loading from "../components/loading/Index";

const Home = () => {

  const { error, msgError, isLoading } = useContext(GlobalContext);

  return (
    <main className="main-content">
      {isLoading 
        ? ( <Loading /> )
        : (
          error ? (
            <Error msgError={msgError} />
          ) : (
            <>
              <Aside />
              <Wrap />
            </>
          )
        )
      }
    </main>
  );
};

export default Home;
