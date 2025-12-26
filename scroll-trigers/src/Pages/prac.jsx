import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
const Practice = () => {
  useGSAP(() => {
    gsap.to("#page2 h1", {
      transform: "translateX(-200%)",

      scrollTrigger: {
        trigger: "#page2 ",
        scroller: "body",
        markers: true,
        pin: true,
        start: "top -15% ",
        end: "top -150% ",
        scrub: 3,
        pin: true,
      },
    });

//     gsap.to("#cards", {
//     x: "500%",
//     scrollTrigger: {
//       trigger: "#page3",
//       start: "top top",
//       end: "top -200%",
//       scrub: 3,
//       pin: true,
//       markers: true,
//     },
//   });
  }, []);
useGSAP(() => {
  const cards = document.querySelector("#cards");
  const scrollAmount = cards.scrollWidth - window.innerWidth;
  
  gsap.to(cards, {
    x: -scrollAmount,
    ease: "none",
    scrollTrigger: {
      trigger: "#page3",
      start: "top top",
      end: `+=${scrollAmount}`,
      scrub: 1,
      pin: true,
      anticipatePin: 1,
      markers: true,
    },
  });
}, []);
  return (
    <div>
      <div
        id="page1"
        className="h-screen w-full bg-slate-900 pt-[5vw] pb-[5vw]"
      ></div>

      <div id="page2" className="h-screen w-full bg-slate-900 mb-10">
        <h1 className="text-[40vw]  text-white uppercase ">Sibtainiqbal</h1>
      </div>

      <div id="page3" className="h-screen w-full bg-slate-900 p-10">
        <h1 className="text-red text-center mt-5 text-[5vw]">
          Nothing to see here ....{" "}
        </h1>
        <div
          id="cards"
          className="text-white flex flex-row gap-9 mt-10 "
        >
          <div className="item min-w-[320px] h-[260px] bg-yellow-100 text-black p-6 rounded-xl flex items-center justify-center text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Necessitatibus, temporibus esse magni illum eos natus ipsum minus?
            Quis excepturi voluptates atque dolorum minus eligendi! Omnis minima
            magni recusandae ex dignissimos.
          </div>


          <div className="item min-w-[320px] h-[260px] bg-yellow-300 text-white p-6 rounded-xl flex items-center justify-center text-lg">
            Eaque ullam illum nobis deleniti mollitia unde, sed, nemo ipsa
            ratione ex, dicta aliquam voluptates! Odio vitae eum nobis
            dignissimos sunt ipsum repellendus totam optio distinctio. Laborum
            suscipit quia aperiam.
          </div>
          <div className="item min-w-[320px] h-[260px] bg-yellow-400 text-black p-6 rounded-xl flex items-center justify-center text-lg">
            Animi, porro molestias? Reiciendis dolor aspernatur ab quos nulla
            impedit, dolores ullam hic commodi nobis nam. Dolorem expedita
            laudantium dignissimos nobis a. Dolorem, unde quidem. Tempora et a
            quibusdam inventore!
          </div>
          <div className="item min-w-[320px] h-[260px] bg-yellow-500 text-black p-6 rounded-xl flex items-center justify-center text-lg">
            Labore, unde amet! Alias delectus hic laboriosam et dolorum? Saepe,
            dicta eaque? Veniam eos blanditiis neque. Officia et nostrum,
            tempore modi quo praesentium aspernatur vero dolor, ipsa unde
            perspiciatis minima.
          </div>
          <div className="item min-w-[320px] h-[260px] bg-yellow-500 text-black p-6 rounded-xl flex items-center justify-center text-lg">
            Labore, unde amet! Alias delectus hic laboriosam et dolorum? Saepe,
            dicta eaque? Veniam eos blanditiis neque. Officia et nostrum,
            tempore modi quo praesentium aspernatur vero dolor, ipsa unde
            perspiciatis minima.
          </div>
          <div className="item min-w-[320px] h-[260px] bg-yellow-500 text-black p-6 rounded-xl flex items-center justify-center text-lg">
            Labore, unde amet! Alias delectus hic laboriosam et dolorum? Saepe,
            dicta eaque? Veniam eos blanditiis neque. Officia et nostrum,
            tempore modi quo praesentium aspernatur vero dolor, ipsa unde
            perspiciatis minima.
          </div>
          <div className="item min-w-[320px] h-[260px] bg-yellow-500 text-black p-6 rounded-xl flex items-center justify-center text-lg">
            Labore, unde amet! Alias delectus hic laboriosam et dolorum? Saepe,
            dicta eaque? Veniam eos blanditiis neque. Officia et nostrum,
            tempore modi quo praesentium aspernatur vero dolor, ipsa unde
            perspiciatis minima.
          </div>
          <div className="item min-w-[320px] h-[260px] bg-yellow-500 text-black p-6 rounded-xl flex items-center justify-center text-lg">
            Labore, unde amet! Alias delectus hic laboriosam et dolorum? Saepe,
            dicta eaque? Veniam eos blanditiis neque. Officia et nostrum,
            tempore modi quo praesentium aspernatur vero dolor, ipsa unde
            perspiciatis minima.
          </div>
          <div className="item min-w-[320px] h-[260px] bg-yellow-500 text-black p-6 rounded-xl flex items-center justify-center text-lg">
            Labore, unde amet! Alias delectus hic laboriosam et dolorum? Saepe,
            dicta eaque? Veniam eos blanditiis neque. Officia et nostrum,
            tempore modi quo praesentium aspernatur vero dolor, ipsa unde
            perspiciatis minima.
          </div>
          <div className="item min-w-[320px] h-[260px] bg-yellow-500 text-black p-6 rounded-xl flex items-center justify-center text-lg">
            Labore, unde amet! Alias delectus hic laboriosam et dolorum? Saepe,
            dicta eaque? Veniam eos blanditiis neque. Officia et nostrum,
            tempore modi quo praesentium aspernatur vero dolor, ipsa unde
            perspiciatis minima.
          </div>
          {/* <div className="item">
            Quaerat error dolorem aspernatur magni dicta ut consequuntur maxime
            tempore. Animi odio eos quod culpa nulla consectetur? Aperiam ipsam
            ducimus delectus reprehenderit unde, non laborum voluptate
            laboriosam, officiis at ea!
          </div>
          <div className="item">
            Rem nobis facere provident magni minima iste commodi aliquam harum?
            Facere error quos cumque perspiciatis voluptatibus deserunt maiores,
            fugiat sunt sit ab inventore natus saepe, eveniet alias ipsam
            placeat voluptas!
          </div>
          <div className="item">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Necessitatibus, temporibus esse magni illum eos natus ipsum minus?
            Quis excepturi voluptates atque dolorum minus eligendi! Omnis minima
            magni recusandae ex dignissimos.
          </div> */}
          {/* <div className="item">
            Magnam eveniet inventore assumenda ullam. At saepe voluptatibus sed
            dicta reiciendis, excepturi nisi perferendis, accusantium est
            suscipit tempora dolorum praesentium cupiditate doloribus non? Sint
            numquam recusandae dolore quis esse ea?
          </div>
          <div className="item">
            Temporibus cum dolor minima consequatur esse veritatis enim nemo
            cupiditate laborum doloribus reiciendis perferendis, quas fugit
            earum rerum, at beatae alias amet aspernatur dolorem dolore error
            commodi. Perspiciatis, reiciendis amet!
          </div>
          <div className="item">
            Vitae, tenetur beatae error corrupti odit expedita quisquam commodi
            ea aspernatur aliquid, eveniet reprehenderit sequi, similique
            maiores praesentium quam! Optio tenetur saepe unde voluptatem minus
            tempora maxime temporibus ducimus ullam!
          </div> */}
        </div>
      </div>

      <div id="page4" className="h-screen w-full bg-yellow-300 mb-10"></div>
    </div>
  );
};

export default Practice;
