import React, { useState } from "react";
import { CgCloseO } from "react-icons/cg";
import { ModalSearchInput } from "../ModalSearchInput";
import { SearchTabs } from "../ModalSearchTabs";
import { getCourseList } from "../../../Core/Services/api/CourseApi/course";

const SearchModal = ({ modalRef, onClose }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleSearch = async (query) => {
    setLoading(true);
    const response = await getCourseList(query);
    setResults(response);
    setLoading(false);
  };

  const handleKeyUp = (e) => {
    setQuery(e.target.value);
    if (e.target.value.trim()) {
      handleSearch();
    } else {
      setResults([]);
    }
  };

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
          <ModalSearchInput
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyUp={handleKeyUp}
          />
        </div>
      </div>
      <div className="w-2/5 h-20 mt-3">
        <SearchTabs />
      </div>
    </div>
  );
};

export { SearchModal };
