import React from "react";
import "./ErrorMessage.css";

const ErrorMessage = () => {
  return (
    <section className="errorMessage">
      <img src="/images/loader-3.gif" alt="dog" />
      <p>Sorry! Something went wrong.</p>
    </section>
  );
};

export default ErrorMessage;
