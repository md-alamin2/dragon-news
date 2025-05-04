import React, { use } from "react";
import Marquee from "react-fast-marquee";
import { AuthContext } from "../../Provider/AuthContext";

const LatestNews = () => {
  const { titles } = use(AuthContext);
  return (
    <div className="w-11/12 lg:container mx-auto mt-8">
      <div className="flex items-center gap-5 bg-base-200 p-4">
        <p className="text-xl font-medium text-white bg-secondary px-5 py-2">
          Latest
        </p>
        <Marquee className="flex gap-5" pauseOnHover={true} speed={60}>
          {titles.map((title) => (
            <p className="font-bold mr-5">{title}.</p>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default LatestNews;
