import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../NewsCard/NewsCard";

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

  return (
    <div>
      <p>news-{newNewses.length}</p>

      <div className="grid grid-cols-1 gap-5">
        {
            newNewses.map(news=><NewsCard key={news.id} news={news}></NewsCard>)
        }
      </div>
    </div>
  );
};

export default News;
