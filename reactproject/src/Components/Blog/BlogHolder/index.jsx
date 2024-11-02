import React, { useEffect, useState } from "react";
import { FilterNavBar } from "../../Teachers/FilterNavBar";
import { FirstRow } from "../BlogFirstRow";
import { BlogSecondRow } from "../BlogSecondRow";
import { BlogHeader } from "../BlogHeader";
import { useNavigate, useParams } from "react-router-dom";
import { getNews } from "../../../Core/Services/api/NewsApi/news.api";
import { Loading } from "../../Common/Loading";

const BlogHolder = () => {
  // const navigate = useNavigate();
  // const handleNavigation = () => {
  //   navigate(`/blog/detail/${id}`);
  // };
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    setLoading(true);
    const result = await getNews();
    setNews(result);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return (
      <div className="h-[610px] flex justify-center">
        <Loading />
      </div>
    );
  }

  return (
    <div dir="rtl" className="w-5/6 m-auto mt-10">
      <div>
        <FilterNavBar />
      </div>
      <BlogHeader />
      <div className="w-full h-auto bg-white mt-5 rounded-md flex flex-col">
        <div className="m-7 ">
          <FirstRow news={news && news} />
          <BlogSecondRow news={news && news} />
          <FirstRow news={news && news} />
        </div>
      </div>
    </div>
  );
};

export { BlogHolder };
