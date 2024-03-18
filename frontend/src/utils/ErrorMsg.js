import React from "react";

const ErrorMsg = ({ errorMsg }) => {
  if (errorMsg) {
    return <div style={{ color: "#e33248" }}>{errorMsg}</div>;
  }

  return <div />;
};

export default ErrorMsg;
