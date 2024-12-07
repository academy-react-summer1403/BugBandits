import React, { useEffect, useState } from "react";
import { BreadCrumbsBlogDetail } from "../BreadCrumbsBlogDetail";
import { BlogDetailCard } from "../BlogDetailCard";
import { MoreNewsSection } from "../MoreNewsSection";
import { Loading } from "../../Common/Loading";
import { useParams } from "react-router-dom";
import { getNewsDetail } from "../../../Core/Services/api/NewsApi/newsdetail.api";

const BlogDetailHolder = () => {
  const [newsDetail, setNewsDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const getData = async () => {
    setLoading(true);
    const result = await getNewsDetail(id);
    setNewsDetail(result.detailsNewsDto);
    setLoading(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (id) {
      getData();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="h-[610px] flex justify-center">
        <Loading />
      </div>
    );
  }
  return (
    <div className="w-5/6 h-auto m-auto">
      <div
        dir="rtl"
        className="w-full h-auto rounded-xl bg-white dark:bg-midnight_blue"
      >
        <BreadCrumbsBlogDetail text={newsDetail?.title || "فلان خبر"} />
      </div>
      <div>
        <BlogDetailCard {...newsDetail} />
      </div>
      <div>
        <MoreNewsSection />
      </div>
    </div>
  );
};

export { BlogDetailHolder };
