import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../NewsCard/NewsCard";
import EmptyState from "../EmptyState/EmptyState";
import { Helmet } from "react-helmet-async";

const News = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const [newNewses, setNewNewses] = useState([]);

  useEffect(() => {
    if (id == "0") {
      return setNewNewses(data);
    } else if (id == "1") {
      const newses = data.filter((news) => news.others.is_today_pick === true);
      return setNewNewses(newses);
    }
    const newses = data.filter((news) => news.category_id == id);
    setNewNewses(newses);
  }, [id, data]);

  if(newNewses.length<1) return<EmptyState></EmptyState>
  return (
    <div className="h-[1725px] overflow-y-auto">
      <Helmet>
        Home
      </Helmet>
      <p className="text-xl font-semibold ml-6 mb-3">Dragon News</p>

      <div className="grid grid-cols-1 gap-5">
        {
            newNewses.map(news=><NewsCard key={news.id} news={news}></NewsCard>)
        }
      </div>
    </div>
  );
};

export default News;
