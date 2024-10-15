import React from "react";
import auth from "./../../../assets/images/auth/auth.svg";
import { useSelector } from "react-redux";

const Log = () => {
  const darkMode = useSelector((state) => state.darkMode.value);

  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="dark:border dark:border-navy_blue dark:bg-navy_blue dark:h-[739px]">
        <div className="w-3/5 h-[500px] bg-white dark:bg-midnight_blue m-auto flex mt-28 rounded-3xl">
          <img src={auth} className="w-1/2 p-4" />
        </div>
      </div>
    </div>
  );
};

export { Log };
