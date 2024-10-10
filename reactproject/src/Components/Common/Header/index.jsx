// import React, { useState, useRef, useEffect } from "react";
// import { Fragment } from "react";
// import { NavLink } from "react-router-dom";
// import { HiMoon } from "react-icons/hi";
// import { FaUserCircle } from "react-icons/fa";
// import { ProfileModal } from "../../Landing/ProfileModal";

// const Header = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const modalRef = useRef(null);

//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen);
//   };

//   const handleClickOutside = (event) => {
//     if (modalRef.current && !modalRef.current.contains(event.target)) {
//       setIsModalOpen(false);
//     }
//   };

//   useEffect(() => {
//     if (isModalOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [isModalOpen]);

//   return (
//     <header className="w-full h-20 pt-10 border">
//       <div dir="rtl" className="w-5/6 flex flex-row mx-auto border">
//         <div className="flex text-dark_gray ml-[780px] whitespace-nowrap">
//           <NavLink to="" className="ml-7 hover:text-bright_blue">
//             logo
//           </NavLink>
//           <NavLink to="" className="ml-7 hover:text-bright_blue">
//             خانه
//           </NavLink>
//           <NavLink to="/courses" className="ml-7 hover:text-bright_blue">
//             دوره ها
//           </NavLink>
//           <NavLink to="" className="ml-7 hover:text-bright_blue">
//             اساتید
//           </NavLink>
//           <NavLink to="" className="ml-7 hover:text-bright_blue">
//             اخبار
//           </NavLink>
//           <NavLink to="" className="ml-7 hover:text-bright_blue">
//             درباره ما
//           </NavLink>
//         </div>
//         <div className="flex">
//           <HiMoon className="w-9 h-9 text-white bg-ocean_blue rounded-full border-4 border-ocean_blue" />
//           <FaUserCircle
//             onClick={toggleModal}
//             className="w-9 h-9 cursor-pointer text-ocean_blue mr-2"
//           />
//           {isModalOpen && (
//             <div ref={modalRef}>
//               <ProfileModal onClose={toggleModal} />
//             </div>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// };

import React, { useState, useRef, useEffect } from "react";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { HiMoon } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";
import { ProfileModal } from "../../Landing/ProfileModal";

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

  return (
    <header className="w-full border md:h-14 lg:h-16 xl:h-20">
      <div dir="rtl" className="mx-auto p-4 md:p-6 lg:p-8 xl:p-10">
        <div className="flex flex-row justify-between px-16">
          <div className="flex text-dark_gray whitespace-nowrap">
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
            <HiMoon className="w-9 h-9 text-white bg-ocean_blue rounded-full border-4 border-ocean_blue" />
            <FaUserCircle
              onClick={toggleModal}
              className="w-9 h-9 cursor-pointer text-ocean_blue mr-2"
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
  );
};

export { Header };
