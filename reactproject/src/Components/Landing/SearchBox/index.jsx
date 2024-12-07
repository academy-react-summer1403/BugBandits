import React, { useEffect, useRef, useState } from "react";
import { LuSearch } from "react-icons/lu";
import { SearchModal } from "../SearchModal";

const SearchBox = () => {
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
      document.body.style.overflow = "hidden";
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.body.style.overflow = "";
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  return (
    <div className="pt-5 flex items-center">
      <input
        className="w-full md:w-96 h-12 border pr-5 pl-12 border-ocean_blue rounded-2xl placeholder:text-light_gray placeholder:text-sm outline-none text-dark_gray"
        placeholder="تو فقط اسم ببر ..."
        onClick={toggleModal}
      />
      <button className="relative top-0.5 left-2">
        <LuSearch className="w-9 h-9 text-white bg-ocean_blue rounded-xl border-4 border-ocean_blue absolute left-0 -top-5" />
      </button>
      {isModalOpen && <SearchModal onClose={toggleModal} />}
    </div>
  );
};

export { SearchBox };
