import React, { Suspense } from "react";
import Categories from "../Categories/Categories";

const LeftAside = () => {
  return (
    <div>
      <Suspense fallback={<div className="skeleton h-20 w-36"></div>}>
        <Categories />
      </Suspense>
    </div>
  );
};

export default LeftAside;
