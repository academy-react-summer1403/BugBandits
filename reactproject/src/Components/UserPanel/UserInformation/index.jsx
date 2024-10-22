import React from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import {
  Input,
  Typography,
  Select,
  Option,
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const UserInfo = () => {
  const [date, setDate] = React.useState();

  return (
    <section className="py-5 container">
      <div className="flex flex-col mt-5 ">
        <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
          <div className="w-full ">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium font-iranSans text-ocean_blue"
            >
              نام
            </Typography>
            <Input
              size="lg"
              labelProps={{ className: "hidden" }}
              className="w-full "
            />
          </div>
          <div className="w-full">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium font-iranSans text-ocean_blue"
            >
              نام خانوادگی
            </Typography>
            <Input
              size="lg"
              labelProps={{ className: "hidden" }}
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
            />
          </div>
        </div>

        <div className="mb-6 flex flex-col gap-4 md:flex-row">
          <div className="w-full">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium font-iranSans text-ocean_blue"
            >
              جنسیت
            </Typography>
            <Select
              size="lg"
              labelProps={{ className: "hidden" }}
              className="border-t-blue-gray-200 font-iranSans aria-[expanded=true]:border-t-primary"
            >
              <Option className="font-iranSans">زن</Option>
              <Option className="font-iranSans">مرد</Option>
            </Select>
          </div>
          <div className="w-full">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium font-iranSans text-ocean_blue"
            >
              تاریخ تولد
            </Typography>
            <Popover placement="bottom">
              <PopoverHandler>
                <Input
                  size="lg"
                  onChange={() => null}
                  value={date ? format(date, "PPP") : ""}
                  labelProps={{ className: "hidden" }}
                  className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                />
              </PopoverHandler>
              <PopoverContent>
                <DayPicker
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  showOutsideDays
                  className="border-0"
                  classNames={{
                    caption:
                      "flex justify-center py-2 mb-4 relative items-center",
                    caption_label: "text-sm !font-medium text-gray-900",
                    nav: "flex items-center",
                    nav_button:
                      "h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300",
                    nav_button_previous: "absolute left-1.5",
                    nav_button_next: "absolute right-1.5",
                    table: "w-full border-collapse",
                    head_row: "flex !font-medium text-gray-900",
                    head_cell: "m-0.5 w-9 !font-normal text-sm",
                    row: "flex w-full mt-2",
                    cell: "text-gray-600 rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative",
                    day: "h-9 w-9 p-0 !font-normal",
                    day_selected:
                      "rounded-md bg-gray-900 text-white hover:bg-gray-900 hover:text-white",
                    day_today: "rounded-md bg-gray-200 text-gray-900",
                    day_outside: "day-outside text-gray-500 opacity-50",
                    day_disabled: "text-gray-500 opacity-50",
                  }}
                  components={{
                    IconLeft: (props) => (
                      <ChevronLeftIcon
                        {...props}
                        className="h-4 w-4 stroke-2"
                      />
                    ),
                    IconRight: (props) => (
                      <ChevronRightIcon
                        {...props}
                        className="h-4 w-4 stroke-2"
                      />
                    ),
                  }}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
          <div className="w-full">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium font-iranSans text-ocean_blue"
            >
              ایمیل
            </Typography>
            <Input
              size="lg"
              labelProps={{ className: "hidden" }}
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
            />
          </div>
          <div className="w-full">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium font-iranSans text-ocean_blue"
            >
              شماره موبایل
            </Typography>
            <Input
              size="lg"
              labelProps={{ className: "hidden" }}
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200 placeholder:font-kalamehNum"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { UserInfo };
