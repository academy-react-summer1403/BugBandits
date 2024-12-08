import React, { useEffect, useState } from "react";
import { CgCloseO } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { ModalSearchInput } from "../ModalSearchInput";
import { search } from "../../../Core/Services/api/LandingApi/search.api";
import { getNews } from "../../../Core/Services/api/NewsApi/news.api";
import { Avatar, Spinner } from "@material-tailwind/react";
import courseImg from "./../../../assets/images/landing/course.svg";
import newsImg from "./../../../assets/images/blog/bloglist.svg";

const SearchModal = ({ onClose }) => {
  const [query, setQuery] = useState("");
  const [courseResults, setCourseResults] = useState([]);
  const [newsResults, setNewsResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!query.trim()) {
      setCourseResults([]);
      setNewsResults([]);
      return;
    }

    const delayDebounceFn = setTimeout(() => {
      handleSearch();
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  const handleSearch = async () => {
    if (!query.trim()) return;

    setLoading(true);
    try {
      const [courseResponse, newsResponse] = await Promise.all([
        search(1, query),
        getNews(query),
      ]);

      setCourseResults(courseResponse || []);
      setNewsResults(
        (newsResponse?.news || []).filter(
          (news) =>
            news.title.toLowerCase().includes(query.trim().toLowerCase()) ||
            news.miniDescribe.toLowerCase().includes(query.trim().toLowerCase())
        )
      );
    } catch (error) {
      console.error("Error fetching data:", error);
      setCourseResults([]);
      setNewsResults([]);
    } finally {
      setLoading(false);
    }
  };

  const handleItemClick = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 z-50">
      {/* Modal Header */}
      <div className="md:w-2/5 w-full h-16 flex bg-white rounded-lg shadow-lg p-5">
        <button
          onClick={onClose}
          className="w-8 h-full text-gray-500 hover:text-gray-700"
        >
          <CgCloseO className="w-6 h-6" />
        </button>
        <div className="w-full h-full">
          <ModalSearchInput
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Results Section */}
      <div className="md:w-2/5 w-full h-96 overflow-y-auto overflow-x-hidden mt-3 bg-white rounded-lg ">
        {loading ? (
          <div className="w-full h-full flex items-center justify-center">
            <Spinner color="blue" className="h-14 w-14" />
          </div>
        ) : (
          <>
            {courseResults.length > 0 && (
              <div>
                <h3 className="text-xl text-ocean_blue flex justify-center font-semibold p-3 border-b border-gray-300">
                  دوره ها
                </h3>
                {courseResults.map((course) => (
                  <div
                    key={course.courseId}
                    className="p-3 border-b border-gray-200 flex gap-2 cursor-pointer"
                    onClick={() =>
                      handleItemClick(`/courses/detailpage/${course.courseId}`)
                    }
                  >
                    <Avatar
                      src={course.tumbImageAddress || courseImg}
                      alt="Course"
                      variant="rounded"
                    />
                    <div>
                      <h4 className="text-lg font-semibold">{course.title}</h4>
                      <p>{course.describe}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {newsResults.length > 0 && (
              <div className="mt-4">
                <h3 className="text-xl text-ocean_blue flex justify-center font-semibold p-3 border-b border-gray-300">
                  اخبار
                </h3>
                {newsResults.map((news) => (
                  <div
                    key={news.id}
                    className="p-3 border-b border-gray-200 flex gap-2 cursor-pointer"
                    onClick={() => handleItemClick(`/blog/detail/${news.id}`)}
                  >
                    <Avatar
                      src={news.currentImageAddressTumb || newsImg}
                      alt="News"
                      variant="rounded"
                    />
                    <div>
                      <h4 className="text-lg font-semibold">{news.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {courseResults.length === 0 && newsResults.length === 0 && (
              <p className="w-full h-full text-center text-ocean_blue flex items-center justify-center">
                موردی یافت نشد
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export { SearchModal };
