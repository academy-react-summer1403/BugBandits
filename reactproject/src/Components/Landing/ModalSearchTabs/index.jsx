import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

const SearchTabs = () => {
  const data = [
    {
      label: "همه",
      value: "all",
      desc: "",
    },
    {
      label: "دوره ها",
      value: "courses",
      desc: "",
    },

    {
      label: "اخبار",
      value: "news",
      desc: "",
    },

    {
      label: "اساتید",
      value: "teachers",
      desc: "",
    },
  ];

  return (
    <Tabs id="custom-animation" value="all">
      <TabsHeader className="bg-opacity-100 ">
        {data.map(({ label, value }) => (
          <Tab key={value} value={value}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody
        animate={{
          initial: { y: 250 },
          mount: { y: 0 },
          unmount: { y: 250 },
        }}
      >
        {data.map(({ value, desc }) => (
          <TabPanel
            key={value}
            value={value}
            className="bg-white rounded-lg mt-2"
          >
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
};

export { SearchTabs };
