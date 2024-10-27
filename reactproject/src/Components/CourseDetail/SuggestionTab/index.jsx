import React, { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { WriteSuggestion } from "../WriteSuggestion";
import { Comments } from "../Comments";

const SuggestionTab = () => {
  const darkMode = useSelector((state) => state.darkMode.value);

  const [activeTab, setActiveTab] = useState("html");
  const data = [
    {
      label: "نظرات کاربران",
      value: "html",
      desc: <Comments />,
    },
    {
      label: "ثبت نظر",
      value: "react",
      userinfo: <WriteSuggestion />,
    },
  ];

  return (
    <Tabs
      value={activeTab}
      className={`${darkMode ? "dark" : ""} mt-10 mr-10 pt-5`}
    >
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
        {data.map(({ value, userinfo, desc }) => (
          <TabPanel key={value} value={value}>
            {activeTab === value ? userinfo || desc : null}{" "}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
};

export { SuggestionTab };
