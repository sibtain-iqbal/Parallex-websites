import React, { useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export  const ScrollTriger = () => {
  useGSAP(() => {
    gsap.from("#page1 #box", {
      scale : 0,
      duration : 2,
      rotate : 360,
      // repeat : -1,
      // yoyo : true
      // scrollTrigger : {
      //   trigger : "#page3 #box"

      // }
      
      
    });
    gsap.from("#page2 #box", {
      scale : 0,
      duration : 1,
      rotate : 360,


      // repeat : -1, 
      // yoyo : true

      // scrollTrigger : "#page2 #box"

      scrollTrigger : {
        trigger : "#page2 #box",
        scroller : "body",
        markers : true,
        start : "top 60%",
        scrub : true
      }
      
      
      
    });




  }, []);

  return (
    <div>

      <div
        id="page1"
        className="w-full h-screen bg-blue-300 flex justify-center items-center"
      >
        <div id="box" className="bg-yellow-500 h-[400px] w-[400px] "></div>
      </div>

      <div
        id="page2"
        className="w-full h-screen bg-blue-100 flex justify-center items-center"
      >
        <div id="box" className="bg-yellow-500 h-[400px] w-[400px]"></div>
      </div>

      <div
        id="page3"
        className="w-full h-screen bg-red-300 flex justify-center items-center"
      >
        <div id="box" className="bg-yellow-500 h-[400px] w-[400px]"></div>
      </div>

      <div
        id="page4"
        className="w-full h-screen bg-green-300 flex justify-center items-center"
      >
        <div id="box" className="bg-yellow-500 h-[400px] w-[400px]"></div>
      </div>
    </div>
  );
};
