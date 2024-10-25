import React from "react";
import { Input, Select, Option, Button } from "@material-tailwind/react";
import { useSelector } from "react-redux";

const UserInfo = () => {
  const darkMode = useSelector((state) => state.darkMode.value);
  const [date, setDate] = React.useState();
  return (
    <section className={`${darkMode ? "dark" : ""} py-5 container`}>
      <div className="flex flex-col mt-5">
        <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
          <div className="w-full ">
            <Input
              size="lg"
              variant="static"
              label="نام"
              labelProps={{
                className: "font-iranSans",
              }}
              className="text-ocean_blue dark:text-white"
            />
          </div>
          <div className="w-full">
            <Input
              size="lg"
              variant="static"
              label="نام خانوادگی"
              labelProps={{
                className: "font-iranSans",
              }}
              className="text-ocean_blue dark:text-white"
            />
          </div>
        </div>

        <div className="mb-6 flex flex-col gap-4 md:flex-row mt-5">
          <div className="w-full">
            <Select
              variant="static"
              size="lg"
              label="جنسیت"
              className="border-t-blue-gray-200 dark:text-white font-iranSans aria-[expanded=true]:border-t-primary"
              menuProps={{
                className: `${
                  darkMode
                    ? "bg-midnight_blue text-white"
                    : "bg-white text-black"
                } rounded-md shadow-lg`,
              }}
              labelProps={{
                className: "font-iranSans",
              }}
            >
              <Option className="font-iranSans">زن</Option>
              <Option className="font-iranSans">مرد</Option>
            </Select>
          </div>
          <div className="w-full">
            <Input
              variant="static"
              size="lg"
              placeholder="1370-10-3"
              label="تاریخ تولد"
              className="w-full placeholder:font-kalamehNum text-ocean_blue dark:text-white"
              labelProps={{
                className: "font-iranSans",
              }}
            />
          </div>
        </div>
        <div className="mb-6 flex flex-col items-end gap-4 md:flex-row mt-5">
          <div className="w-full">
            <Input
              size="lg"
              variant="static"
              label="ایمیل"
              labelProps={{
                className: "font-iranSans",
              }}
              className="text-ocean_blue dark:text-white"
            />
          </div>
          <div className="w-full">
            <Input
              size="lg"
              variant="static"
              label=" شماره موبایل"
              labelProps={{
                className: "font-iranSans",
              }}
              className="text-ocean_blue dark:text-white"
            />
          </div>
        </div>
      </div>
      <div>
        {/* <Button
          variant="outlined"
          color="blue-gray"
          className="font-iranSans font-normal"
        >
          ثبت تغییرات
        </Button> */}
        <Button
          type="button"
          className="font-iranSans py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-gray-200 bg-white dark:bg-midnight_blue text-gray-500 shadow-sm hover:bg-gray-50 focus:outline-none"
        >
          ثبت تغییرات
        </Button>
      </div>
    </section>
  );
};

export { UserInfo };
