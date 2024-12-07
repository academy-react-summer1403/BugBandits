import React, { useState } from "react";
import {
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
  Typography,
} from "@material-tailwind/react";
import { LuUser } from "react-icons/lu";
import { IoInvertMode } from "react-icons/io5";
import { PiBookOpenTextBold } from "react-icons/pi";
import { IoNewspaperOutline } from "react-icons/io5";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { GoPlus } from "react-icons/go";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DarkModeSlice } from "../../../Redux/Slices/DarkModeSlice";

const HeaderAccess = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode.value);

  const toggleDarkMode = () => {
    dispatch(DarkModeSlice.actions.toggleDarkMode());
  };

  const toggleOpen = () => setOpen((prev) => !prev);

  const actions = [
    { to: "/panel", text: "پنل", icon: <LuUser className="h-5 w-5" /> },
    {
      to: "/courses",
      text: "دوره ها",
      icon: <PiBookOpenTextBold className="h-5 w-5" />,
    },
    {
      to: "/blog",
      text: "اخبار",
      icon: <IoNewspaperOutline className="h-5 w-5" />,
    },
    {
      to: "/teachers",
      text: "اساتید",
      icon: <LiaChalkboardTeacherSolid className="h-5 w-5" />,
    },
  ];

  return (
    <div className="relative h-14 w-full">
      <div className="absolute bottom-3 left-0">
        <SpeedDial
          placement="right"
          open={open}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <SpeedDialHandler>
            <IconButton
              size="lg"
              className="rounded-full bg-ocean_blue dark:bg-blue-gray-200"
              onClick={toggleOpen}
            >
              <GoPlus
                className={`h-7 w-7 transition-transform ${
                  open ? "rotate-45" : "group-hover:rotate-45"
                } dark:text-black`}
              />
            </IconButton>
          </SpeedDialHandler>
          <SpeedDialContent className="flex-row">
            <SpeedDialAction className="sm:h-16 sm:w-16 w-12 h-12" onClick={toggleDarkMode}>
              <IoInvertMode
                className={`h-5 w-5 ${darkMode ? "text-ocean_blue" : ""}`}
              />
            </SpeedDialAction>

            {actions.map(({ to, icon, text }, index) => (
              <Link key={index} to={to}>
                <SpeedDialAction className="sm:h-16 sm:w-16 w-12 h-12">
                  <Typography
                    color="blue-gray"
                    className="text-sm font-iranSans font-normal"
                  >
                    {text}
                  </Typography>
                  {icon}
                </SpeedDialAction>
              </Link>
            ))}
          </SpeedDialContent>
        </SpeedDial>
      </div>
    </div>
  );
};

export { HeaderAccess };
