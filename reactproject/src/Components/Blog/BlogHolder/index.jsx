import React, { useEffect, useState } from "react";
import { FilterNavBar } from "../../Teachers/FilterNavBar";
import { FirstRow } from "../BlogFirstRow";
import { BlogSecondRow } from "../BlogSecondRow";
import { BlogHeader } from "../BlogHeader";
import { useNavigate, useParams } from "react-router-dom";
import { getNews } from "../../../Core/Services/api/NewsApi";

const BlogHolder = () => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/blog/detail");
  };
  const { id } = useParams();
  const [news, setNews] = useState([]);

  const getData = async () => {
    const result = await getNews(id);
    if (result && result.news) {
      setNews(result.news);
    } else {
      console.log("Unexpected data format:", result);
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  return (
    <div dir="rtl" className="w-5/6 m-auto mt-10">
      <div>
        <FilterNavBar />
      </div>
      <BlogHeader />
      <div className="w-full h-auto bg-white mt-5 rounded-md flex flex-col">
        <div className="m-7 ">
          <FirstRow handleNavigation={handleNavigation} news={news} />
          <BlogSecondRow handleNavigation={handleNavigation} news={news} />
          <FirstRow handleNavigation={handleNavigation} news={news} />
        </div>
      </div>
    </div>
  );
};

export { BlogHolder };
