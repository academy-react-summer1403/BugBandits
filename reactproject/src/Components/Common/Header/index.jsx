import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { ProfileModal } from "../../Landing/ProfileModal";
import moon from "./../../../assets/images/landing/moon.svg";
import sun from "./../../../assets/images/landing/sun.svg";
import { useDispatch, useSelector } from "react-redux";
import { DarkModeSlice } from "../../../Redux/Slices/DarkModeSlice";
import { HiUser } from "react-icons/hi2";
import logo from "./../../../assets/images/logo/logo.png";
import { DrawerPlacement } from "../HeaderDrawer";

const Header = () => {
  const headerItems = [
    { title: "خانه", route: "/" },
    { title: "دوره ها", route: "/courses" },
    { title: "اساتید", route: "/teachers" },
    { title: "اخبار", route: "/blog" },
    { title: "درباره ما", route: "/aboutus" },
  ];

  const darkMode = useSelector((state) => state.darkMode.value);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div>
      <header
        className={`w-full md:h-14 lg:h-16 xl:h-20 ${darkMode && "dark"} `}
      >
        <div dir="rtl" className="mx-auto p-4 md:p-6 lg:p-8 xl:p-10">
          <div className="flex flex-row justify-between px-16 ">
            <div className=" text-dark_gray whitespace-nowrap dark:text-white hidden sm:flex">
              <NavLink to="" className="ml-7 w-8 h-8">
                <img src={logo} alt="" />
              </NavLink>
              {headerItems.map((item, index) => (
                <NavLink
                  to={item.route}
                  className={({ isActive }) =>
                    `ml-7 hover:text-bright_blue ${
                      isActive
                        ? "text-bright_blue"
                        : "text-dark_gray dark:text-white"
                    }`
                  }
                >
                  {item.title}
                </NavLink>
              ))}
            </div>
            <div className="flex">
              <img
                src={darkMode ? sun : moon}
                onClick={() => dispatch(DarkModeSlice.actions.toggleDarkMode())}
                className="w-9 h-9 cursor-pointer"
              ></img>
              <div className="w-32 h-9 flex flex-row bg-ocean_blue dark:bg-white rounded-2xl mr-2">
                <HiUser className="w-7 h-7 cursor-pointer text-white mr-2 dark:text-navy_blue mt-1" />
                <NavLink
                  to="/login"
                  className="text-white dark:text-navy_blue text-sm border-l-2 dark:border-navy_blue p-2 cursor-pointer"
                >
                  ورود
                </NavLink>
                <NavLink
                  to="/register"
                  className="text-white dark:text-navy_blue text-sm p-2 cursor-pointer"
                >
                  عضویت
                </NavLink>
              </div>
              {/* <FaUserCircle
                onClick={toggleModal}
                className="w-9 h-9 cursor-pointer text-ocean_blue mr-2 dark:text-white"
              /> */}
              {/* {isModalOpen && (
                <div ref={modalRef}>
                  <ProfileModal onClose={toggleModal} />
                </div>
              )} */}
            </div>
          </div>
          <DrawerPlacement />
        </div>
      </header>
    </div>
  );
};

export { Header };
