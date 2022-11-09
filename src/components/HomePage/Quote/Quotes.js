import React from "react";
import Typical from "react-typical";

const Quotes = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h4 style={{ marginBottom: "0.1rem" }}>
        “Quality
        <Typical
          steps={[" Design", 3000, " Life", 3000]}
          loop={Infinity}
          wrapper="span"
        />
        ”
      </h4>
      <p style={{ fontStyle: "italic" }}>
        “Build quality of life” for each client according to the 5D standards:
      </p>
      <h4 style={{ marginTop: "0.1rem" }}>
        Precise - Sufficient - Worth - Beautiful - Unique
      </h4>
    </div>
  );
};

export default Quotes;
