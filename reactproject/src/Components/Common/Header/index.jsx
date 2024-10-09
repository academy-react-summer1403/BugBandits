import React , { useState , useRef, useEffect } from 'react';
import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { HiMoon } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";
import { ProfileModal } from '../../Landing/ProfileModal';

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
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isModalOpen]);

    return (
        <header dir="rtl" className="w-5/6 h-20 borer m-auto pt-10 flex flex-row ">
          <div className="flex text-dark_gray ml-[780px]">
              <NavLink to="" className="ml-7 hover:text-bright_blue">logo</NavLink>
              <NavLink to="" className="ml-7 hover:text-bright_blue">خانه</NavLink>
              <NavLink to="/courses" className="ml-7 hover:text-bright_blue">دوره ها</NavLink>
              <NavLink to="" className="ml-7 hover:text-bright_blue">اساتید</NavLink>
              <NavLink to="" className="ml-7 hover:text-bright_blue">اخبار</NavLink>
              <NavLink to="" className="ml-7 hover:text-bright_blue">درباره ما</NavLink>
          </div>
          <div className="flex">
              <NavLink><HiMoon className="w-9 h-9 text-white bg-ocean_blue rounded-full border-4 border-ocean_blue" /></NavLink>
              <NavLink onClick={toggleModal}><FaUserCircle className="w-9 h-9 text-ocean_blue mr-2" /></NavLink>
              {isModalOpen && (
                    <div ref={modalRef}>
                        <ProfileModal onClose={toggleModal} />
                    </div>
                )}
          </div>
        
        </header>
    );
}

export  {Header};
