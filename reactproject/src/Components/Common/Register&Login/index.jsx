import React, { Fragment } from "react";
import auth from "./../../../assets/images/auth/auth.svg";

const Log = () => {
  return (
    <Fragment>
      <div className="w-3/5 h-[500px] bg-white m-auto flex mt-28 rounded-3xl">
          <img src={auth} className="w-1/2 p-4" />
      </div>
    </Fragment>
  );
};

export { Log };
