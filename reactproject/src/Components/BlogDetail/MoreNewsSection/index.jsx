import React, { useEffect, useState } from "react";
import { MoreNewsCard } from "../MoreNewsCard";
import { getNews } from "../../../Core/Services/api/NewsApi/news.api";

const MoreNewsSection = () => {
  const [newsItem, setNewsItem] = useState([]);

  const getData = async () => {
    const res = await getNews();
    setNewsItem(res.news);
  };

  useEffect(() => {
    getData();
  }, []);

  const selectedNews = [newsItem[0], newsItem[5], newsItem[8], newsItem[9]];

  return (
    <div dir="rtl" className="w-full h-auto mt-20 mb-10">
      <div>
        <h1 className="font-bold text-3xl text-navy_blue">اخبار مشابه</h1>
      </div>
      <div className="flex flex-row gap-9">
        {selectedNews.map((item, index) =>
          item ? (
            <MoreNewsCard
              key={index}
              title={item.title}
              miniDescribe={item.miniDescribe}
              id={item.id}
            />
          ) : null
        )}
      </div>
    </div>
  );
};

export { MoreNewsSection };
