import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { UserInfo } from "./../UserInformation";
import { UploadProfile } from "../UploadProfile";
import { useSelector } from "react-redux";

const UnderLineTabs = () => {
  const darkMode = useSelector((state) => state.darkMode.value);

  const [activeTab, setActiveTab] = React.useState("html");
  const data = [
    {
      label: "اطلاعات کاربر",
      value: "html",
      uploadprofile: <UploadProfile />,
    },
    {
      label: "اطاعات تکمیلی",
      value: "react",
      userinfo: <UserInfo />,
    },
  ];

  return (
    <Tabs value={activeTab} className={`${darkMode ? "dark" : ""} mt-5 mr-10`}>
      <TabsHeader
        className="w-52 rounded-none bg-transparent p-0"
        indicatorProps={{
          className:
            "bg-transparent border-b-2 border-ocean_blue dark:border-[#97dffc] shadow-none rounded-none",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={
              activeTab === value
                ? "text-cool_blue font-iranSans whitespace-nowrap text-base dark:text-white"
                : "text-cool_blue font-iranSans whitespace-nowrap text-base dark:text-white"
            }
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, userinfo, uploadprofile }) => (
          <TabPanel key={value} value={value}>
            {activeTab === value ? userinfo || uploadprofile : null}{" "}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
};

export { UnderLineTabs };
