import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import HeroImage from "../assets/images/photo.jpg";
import OpenText from "../assets/images/opentext.png";
import techM from "../assets/images/tech-m.png";
import infosys from "../assets/images/infosys.png";
import cgg from "../assets/images/cgg.png";

// import homeLogo from "./../assets/images/image.png";

export const Content = () => {
  return (
    <>
      <section>
        <div className="flex flex-wrap">
          <div className="flex flex-wrap top-2 p-20">
            <div className="w-2/3 ml-auto h-4">
              <p className="text-amber-600  text-2xl text-center">Hello, I'm</p>
              <p className="text-blue-700 pt-4 text-6xl text-center transform-view hover:font-extrabold">
                Ramesh Chatty
              </p>
              <p className="text-blue-600 pt-3 text-lg text-center hover:text-red-500">
                Java Fullstack Developer
              </p>
              <p className="pt-5">
                With over a decade of experience in Java development, I am a
                passionate software lead developer dedicated to creating
                high-performance, scalable, and secure applications. Throughout
                my career, I have led cross-functional teams to deliver
                innovative solutions for diverse industries, excelling in both
                hands-on coding and strategic leadership. My expertise spans
                enterprise-level application development, microservices
                architecture, and cloud integration, and I'm always eager to
                tackle challenging projects with creativity and precision.
              </p>
            </div>
            <div className="w-1/3 mr-auto pl-25 ">
              <img src={HeroImage} className="z-400 rounded-2xl max-h-80" />
            </div>
          </div>
          <div className="container p-20 ">
            <div class="grid grid-cols-4 flex-1/4 flex-wrap  ">
              <div>
                <img src={OpenText} className="h-25  w-75" />
              </div>
              <div>
                <img src={techM} className="h-25  w-75" />
              </div>
              <div>
                <img src={infosys} className="h-25  w-75" />
              </div>
              <div>
                <img src={cgg} className="h-25 w-75" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
