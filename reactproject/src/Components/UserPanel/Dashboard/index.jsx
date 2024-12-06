import React, { useEffect, useState } from "react";
import { HoverButtons } from "../HoverButtons";
import { PanelHeader } from "../PanelHeader";
import { useSelector } from "react-redux";
import { ProfileCard } from "../ProfileCard";
import { ProfileProgress } from "../Progress";
import { getUserInfo } from "../../../Core/Services/api/UserPanel/getuserinfo.api";

const Dashboard = () => {
  const darkMode = useSelector((state) => state.darkMode.value);

  const [info, setInfo] = useState({});

  const getData = async () => {
    const userInfo = await getUserInfo();
    setInfo(userInfo);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={`${darkMode ? "dark" : ""} w-11/12 h-auto flex flex-col`}>
      <div className="w-full h-14 sm:mr-20 mb-5">
        <PanelHeader />
      </div>
      <div className="lg:w-5/6 sm:w-96 w-full  h-auto sm:pb-9 bg-white dark:bg-midnight_blue sm:mx-20 rounded-3xl flex md:flex-row flex-col">
        <div className="w-auto h-80 m-10 border rounded-md p-5 flex flex-col gap-2 items-center">
          <ProfileCard
            currentPictureAddress={
              info.userImage && info.userImage.length > 0
                ? info.userImage[0].puctureAddress.replace(/\\/g, "/")
                : null
            }
          />
          <h1 className="whitespace-nowrap md:text-xl mt-10 text-ocean_blue">
            {info.lName ? `${info.lName} خوش آمدید.` : "خوش آمدید."}
          </h1>
          <h1 className="text-ocean_blue md:text-xl whitespace-nowrap font-kalamehNum">
            تلفن همراه : {info.phoneNumber || "ناموجود"}
          </h1>
          <h1 className="text-ocean_blue md:text-xl whitespace-nowrap">
            آدرس ایمیل : {info.email || "ناموجود"}
          </h1>
        </div>
        <div>
          <div className="hidden md:block">
            <HoverButtons />
          </div>
          <div
            dir="ltr"
            className="md:w-[482px] m-10 mt-0 md:mt-10 md:m-0 pt-4 border flex justify-center items-center rounded-md"
          >
            <ProfileProgress
              profileCompletionPercentage={
                info.profileCompletionPercentage || 0
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Dashboard };
