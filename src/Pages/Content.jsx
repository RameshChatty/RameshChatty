import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import HeroImage from "../assets/images/hero-image.png";

// import homeLogo from "./../assets/images/image.png";

export const Content = () => {
  return (
    <>
      <section>
        <div className="flex flex-wrap top-2 pt-20">
          <div className="w-1/3 ml-auto h-12">
            <p className="text-amber-600  text-2xl">Hello, I'm</p>
            <p className="text-blue-700 pt-8 text-6xl">Ramesh Chatty</p>
            <p className="text-blue-600 pt-3 text-lg">
              Java Fullstack Developer
            </p>
            <p className="pt-5 text-lg">
              I'm a Lead software engineer based in Hyderabad, India. I'm very
              passionate and dedicated to my work.Currently, I am employed by
              Opentext India as a Lead Software Engineer
            </p>

            <div className="grid grid-rows-2 grid-cols-2 grid-flow-col gap-4 pt-5">
              <div className="col-span-1 border-4 max-w-6xl text-center rounded-3xl hover:bg-blue-700">
                <span className="hover:transform-3d to-25%">Opentext</span>
              </div>
              <div className="col-span-1 border-4 max-w-6xl text-center rounded-3xl hover:bg-blue-700">
                <span className="">Infosys</span>
              </div>
              <div className="col-span-1 border-4 max-w-6xl text-center rounded-3xl hover:bg-blue-700">
                <span className="">Tech Mahindra</span>
              </div>
              <div className="col-span-1 border-4 max-w-6xl text-center rounded-3xl hover:bg-blue-700">
                <span className="">CGG</span>
              </div>
            </div>
          </div>
          <div className="w-1/3 mr-auto h-80 pl-25 ">
            <img src={HeroImage} className="z-80 " />
          </div>
        </div>
      </section>
    </>
  );
};
