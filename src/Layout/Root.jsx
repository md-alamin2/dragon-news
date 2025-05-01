import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header/Header";
import LatestNews from "../Components/LatestNews/LatestNews";
import Navbar from "../Components/NavBar/Navbar";

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
      <main>
        <section className="left_nav"></section>
        <section>
          <Outlet></Outlet>
        </section>
        <section className="right_nav"></section>
      </main>
    </div>
  );
};

export default Root;
