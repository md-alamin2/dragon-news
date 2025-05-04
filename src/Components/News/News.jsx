import React, { use, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../NewsCard/NewsCard";
import EmptyState from "../EmptyState/EmptyState";
import { AuthContext } from "../../Provider/AuthContext";

const News = () => {
  const { setTitles } = use(AuthContext);
  const { id } = useParams();
  const data = useLoaderData();

  const [newNewses, setNewNewses] = useState([]);

  useEffect(() => {
    if (id == "0") {
      setNewNewses(data);
      const newsesTitle = data.map((items) => items.title);
      setTitles(newsesTitle);
      return;
    } else if (id == "1") {
      const newses = data.filter((news) => news.others.is_today_pick === true);
      setNewNewses(newses);
      const newsesTitle = data
        .filter((news) => news.others.is_today_pick === true)
        .map((items) => items.title);
      setTitles(newsesTitle);
      return;
    }
    const newses = data.filter((news) => news.category_id == id);
    setNewNewses(newses);
    const newsesTitle = data
      .filter((news) => news.category_id == id)
      .map((items) => items.title);
    setTitles(newsesTitle);
  }, [id, data, setTitles]);

  if (newNewses.length < 1) return <EmptyState></EmptyState>;
  return (
    <div className="h-[1725px] overflow-y-auto">
      <p className="text-xl font-semibold ml-6 mb-3">Dragon News</p>

      <div className="grid grid-cols-1 gap-5">
        {newNewses.map((news) => (
          <NewsCard key={news.id} news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default News;
