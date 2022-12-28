import React from "react";
import { useRouteError } from "react-router";
import errorImg from './error.jpg'
const ErrorMsg = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="errorMsg">
       <img src={errorImg} alt="" />
    </div>
  );
};

export default ErrorMsg;
