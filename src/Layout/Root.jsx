import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header/Header";
import LatestNews from "../Components/LatestNews/LatestNews";
import Navbar from "../Components/NavBar/Navbar";
import LeftAside from "../Components/LeftAside/LeftAside";
import RightAside from "../Components/RightAside/RightAside";

const Root = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <LatestNews></LatestNews>
        <nav>
            <Navbar></Navbar>
        </nav>
      </header>
      <main className="w-11/12 lg:container mx-auto grid grid-cols-10 mb-5">
        <aside className="col-span-2">
            <LeftAside></LeftAside>
        </aside>
        <section className="col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-2">
            <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default Root;
