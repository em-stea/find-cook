import React from "react";

function ErrorStatus(props) {
  return (
    <React.Fragment>
      <div className="upp">
        <div className="col-md-12 centrar">
          <h4>Error {props.errorMessage}</h4>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ErrorStatus;
