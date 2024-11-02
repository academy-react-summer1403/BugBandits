import React from "react";
import { CgCloseO } from "react-icons/cg";
import { LuSearch } from "react-icons/lu";
import { ModalSearchInput } from "../ModalSearchInput";
import { SearchTabs } from "../ModalSearchTabs";
// import DropdownSearch from "../ModalSearchInput";

const SearchModal = ({ modalRef, onClose }) => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 z-50">
      <div
        // ref={modalRef}
        className="w-2/5 h-16 flex flex-row bg-white rounded-lg shadow-lg p-5"
      >
        <button
          onClick={onClose}
          className="w-8 h-full text-gray-500 hover:text-gray-700"
        >
          <CgCloseO className="w-6 h-6 " />
        </button>
        <div className="w-full h-full">
          <ModalSearchInput />
        </div>
      </div>
      <div className="w-2/5 h-20 mt-3">
        <SearchTabs />
      </div>
    </div>
  );
};

export { SearchModal };
