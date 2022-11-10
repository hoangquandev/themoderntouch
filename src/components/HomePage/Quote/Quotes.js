import React from "react";
import ReactTypingEffect from 'react-typing-effect';

const Quotes = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h4 style={{ marginBottom: "0.1rem" }}>
        “Quality <span> </span>
        <ReactTypingEffect
          text={[" Life", " Design"]}

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
