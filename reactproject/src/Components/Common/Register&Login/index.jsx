import React, { Fragment } from "react";
import auth from "./../../../assets/images/auth.svg";

const Log = () => {
  return (
    // <div className="w-4/6 h-1/2 border bg-white m-auto" >
    //     <div>

    //     </div>
    // </div>
    <Fragment>
      <div className="w-[1000px] h-[500px] bg-white m-auto flex mt-28 rounded-3xl">
        <div className="p-4">
          <img src={auth} className="w-5/6 h-full" />
        </div>
        <div className="w-1/2 h-full"></div>
      </div>
    </Fragment>
  );
};

export { Log };
