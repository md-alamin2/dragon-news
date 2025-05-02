import React, { use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
  const categories = use(categoryPromise);
  console.log(categories);
  return (
    <div>
      <p className="font-bold">All Category</p>
      <div className="grid grid-cols-1 gap-3 mt-5">
        {categories.map((category) => (
          <NavLink 
          key={category.id}
          to={`/news/${category.id}`}
          className={({isActive})=> isActive? "text-center bg-base-300 p-2 text-primary font-semibold":"text-center p-2 hover:bg-base-200 text-accent font-semibold"}
          >{category.name}</NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
