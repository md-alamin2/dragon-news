import React from "react";
import { FaStar, FaEye, FaShareAlt, FaRegBookmark } from "react-icons/fa";
import { format } from "date-fns";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    image_url,
    details,
    rating,
    total_view,
    tags,
  } = news;

  return (
    <div className="card w-full bg-base-100 border border-gray-200 rounded-xl shadow-sm max-w-md mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-base-200 rounded-xl">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src={author.img} alt={author.name} />
            </div>
          </div>
          <div>
            <h2 className="font-semibold text-sm">{author.name}</h2>
            <p className="text-xs text-gray-500">
              {format(new Date(author.published_date), "yyyy-MM-dd")}
            </p>
          </div>
        </div>
        <div className="flex gap-2 text-gray-500">
          <FaRegBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <div className="px-4 font-bold text-base leading-tight mt-3 mb-2">{title}</div>

      {/* Image */}
      <figure className="px-4 mt-5">
        <img src={image_url} alt="News" className="w-full h-52 object-cover rounded-2xl" />
      </figure>

      {/* Content */}
      <div className="p-4 text-sm text-gray-700 mt-8">
        <p className="mb-2">
          {format(new Date(author.published_date), "EEEE, MMMM d, yyyy")} |
          <span className="ml-1">
            Tag Cloud Tags: {tags?.join(", ")}
          </span>
        </p>
        <p>
          {details.slice(0, 170)}...
          <span className="text-red-500 font-semibold cursor-pointer"> Read More</span>
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between p-4 border-t border-gray-200 text-sm text-gray-600">
        <div className="flex items-center gap-1 text-orange-400">
          {[...Array(rating.number)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="ml-1 text-gray-600">{rating.number}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaEye className="text-gray-500" />
          {total_view}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
