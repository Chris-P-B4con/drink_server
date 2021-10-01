import React from "react";
import "./StatusStyles.css";
function Status({ status }) {
  return (
    <div
      className={` ${status.success ? "success" : ""} ${
        status.error ? "error" : ""
      } ${status.success || status.error ? "alert-shown" : "alert-hidden"}`}
    >
      {status.error ? status.error : status.success}
    </div>
  );
}

export default Status;
