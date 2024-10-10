import React, { Fragment } from "react";
import auth from "./../../../assets/images/auth/auth.svg";

const Log = () => {
  return (
    <Fragment>
      <div className="w-[900px] h-[500px] bg-white m-auto flex mt-28 rounded-3xl">
        <div className="p-4">
          <img src={auth} className="w-5/6 h-full" />
        </div>
        <div className="w-1/2 h-full"></div>
      </div>
    </Fragment>
  );
};

export { Log };
