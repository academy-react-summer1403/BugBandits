import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { UserInfo } from "./../UserInformation";

const Tabs = () => {
  const [activeTab, setActiveTab] = React.useState("html");
  const data = [
    {
      label: "اطلاعات کاربر",
      value: "html",
      desc: `Because it's about motivating the doers...`,
    },
    {
      label: "اطاعات تکمیلی",
      value: "react",
      userinfo: <UserInfo />,
    },
  ];

  return (
    <Tabs value={activeTab} className=" mt-5 mr-10">
      <TabsHeader
        className="w-52 rounded-none border-b border-blue-gray-50 bg-transparent p-0"
        indicatorProps={{
          className:
            "bg-transparent border-b-2 border-ocean_blue shadow-none rounded-none",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={
              activeTab === value
                ? "text-cool_blue font-iranSans whitespace-nowrap text-base"
                : "text-cool_blue font-iranSans whitespace-nowrap text-base"
            }
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, userinfo, desc }) => (
          <TabPanel key={value} value={value}>
            {activeTab === value ? userinfo || desc : null}{" "}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
};

export { Tabs };
