import React from "react";

import "./style.scss";

const Error = ({ msgError }) => (
    <div className="error">
        <h1>{msgError}</h1>
        <h2>Atualize a página para tentar novamente.</h2>
    </div>
);

export default Error