import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { ProfileModal } from "../../Landing/ProfileModal";
import moon from "./../../../assets/images/landing/moon.svg"


const Header = () => {
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

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    
    <div className={`${darkMode && "dark"}`}>
        <header className="w-full  md:h-14 lg:h-16 xl:h-20 ">
      <div dir="rtl" className="mx-auto p-4 md:p-6 lg:p-8 xl:p-10 dark:bg-navy_blue">
        <div className="flex flex-row justify-between px-16">
          <div className="flex text-dark_gray whitespace-nowrap dark:text-white">
            <NavLink to="" className="ml-7 hover:text-bright_blue">
              logo
            </NavLink>
            <NavLink to="" className="ml-7 hover:text-bright_blue">
              خانه
            </NavLink>
            <NavLink to="/courses" className="ml-7 hover:text-bright_blue">
              دوره ها
            </NavLink>
            <NavLink to="" className="ml-7 hover:text-bright_blue">
              اساتید
            </NavLink>
            <NavLink to="" className="ml-7 hover:text-bright_blue">
              اخبار
            </NavLink>
            <NavLink to="" className="ml-7 hover:text-bright_blue">
              درباره ما
            </NavLink>
          </div>
          <div className="flex">
            <img src={moon} onClick={toggleDarkMode} className="w-9 h-9 cursor-pointer" ></img>
            <FaUserCircle
              onClick={toggleModal}
              className="w-9 h-9 cursor-pointer text-ocean_blue mr-2 dark:text-white"
            />
            {isModalOpen && (
              <div ref={modalRef}>
                <ProfileModal onClose={toggleModal} />
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
    </div>
  );
};

export { Header };
