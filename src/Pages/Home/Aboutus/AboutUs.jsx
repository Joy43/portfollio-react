import { useState } from "react";
import Typewriter from "typewriter-effect";
import about from "../../../assets/slide/about us.gif";
const Aboutus = () => {
  const accordionData = [
    // {
    //   title: "Profile",
    //   subTitle: [1, 2, 3, 4],
    //   svg: (
    //     <svg
    //       width={20}
    //       fill="white"
    //       viewBox="0 0 1920 1920"
    //       xmlns="http://www.w3.org/2000/svg"
    //     >
    //       ...
    //     </svg>
    //   ),
    // },
    {
      title: "Skills",
      subTitle: [
        "web Application and app Design",
        "Full stack web Development with",
        "App interface/ Website into app",
      ],
      svg: (
        <svg
          width={20}
          version="1.1"
          id="_x32_"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="white"
        >
          ...
        </svg>
      ),
    },
    {
      title: "Experience",
      subTitle: [
        "Full stack Developer internship",
        "c program,java script expert",
        " App interface/ Website into app/app published anmazon store",
      ],
      svg: (
        <svg
          width={20}
          fill="white"
          viewBox="0 -1.5 35 35"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          ...
        </svg>
      ),
    },
    {
      title: "Education",
      subTitle: [
        "Computer science and engineering (CSE)",
        "Jonior School Certificate Nabarun Public School",
        "srcondery school certificate in Nabarun Public school",
        "Higher school certificate in Royal Media college",
      ],
      svg: (
        <svg
          width={20}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          className="bi bi-gear-fill"
        >
          ...
        </svg>
      ),
    },
  ];

  // Toggle State and Function
  const [isActive, setIsActive] = useState(null);
  const [subTitle, setSubTitle] = useState(null);

  const handleToggle = (idx) => {
    if (accordionData[idx].title === "Education") {
      setIsActive(idx); // Always keep "Education" section active
      setSubTitle(accordionData[idx].subTitle); // Show sub-items of "Education"
    } else {
      setIsActive((prevIdx) => (prevIdx === idx ? null : idx));
      if (
        accordionData[idx].title === "Skills" ||
        accordionData[idx].title === "Experience"
      ) {
        setSubTitle(accordionData[idx].subTitle);
      } else {
        setSubTitle(null);
      }
    }
  };

  return (
    <div>
      <div className="text-center items-center text-sky-400 shadow-md text-4xl ">
        {/* ----------type writing---------------- */}
        <Typewriter
          options={{
            strings: ["About", "Us", "Shahsultan Islam Joy"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>

      {/* -----about us---- */}
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <img src={about} alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            {/* ------ all tabs--- */}

            <div
              className={`max-w-[400px] my-10 overflow-hidden border-x ${
                isActive === accordionData.length - 1
                  ? "border-x border-b"
                  : "border-x"
              } border-[#03BF70] rounded-lg`}
            >
              {accordionData?.map((data, idx) => (
                <div key={idx}>
                  {/* header / title  */}
                  <div
                    onClick={() => handleToggle(idx)}
                    className="relative flex cursor-pointer items-center gap-6 bg-[#2e2c2c] p-5"
                  >
                    {data?.svg}
                    <h5 className="text-white font-medium">{data?.title}</h5>
                    <span className="w-0 h-0 border-b-[15px] border-b-[#03BF70] border-r-[15px] border-r-transparent absolute -bottom-[7px] left-10 -rotate-45"></span>
                  </div>
                  {/* body / content  */}
                  <div
                    className={`grid overflow-hidden transition-all duration-300 ease-in-out  ${
                      isActive === idx
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      {/* Render subtitle if it's the section that was clicked */}
                      {subTitle &&
                        subTitle.map((subData, irx) => (
                          <div
                            key={irx}
                            className="w-full text-gray-400 py-4 pl-16 pr-4 transition-all duration-500 hover:text-black hover:bg-green-100 border-l-4 border-white hover:border-[#03BF70]"
                          >
                            {irx + 1}. {subData}
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
