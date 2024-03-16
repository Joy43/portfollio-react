import { AnimatePresence, motion, spring } from "framer-motion";
import tech from "../../../../assets/icon/tech.png";
import hotel from "../../../../assets/icon/logo.png";
import convert from "../../../../assets/icon/ourconvert.png";
import { useState } from "react";
import Typewriter from "typewriter-effect";
// ---tech world----
import techcover from "../../../../assets/portfollio/texchworld/tecg-cover.png";
import tecgleft from "../../../../assets/portfollio/texchworld/rtech-left.png";
import techright from "../../../../assets/portfollio/texchworld/right.png";
// -------our convert----------
import convertcover from "../../../../assets/portfollio/texchworld/convert -cover.png";
import convertleft from "../../../../assets/portfollio/texchworld/convertleft.png";
import convetright from "../../../../assets/portfollio/texchworld/convet--right.png";

// -----hotel world-------
import hotelCover from "../../../../assets/portfollio/texchworld/hotel-cover.png";
import hotelRight from "../../../../assets/portfollio/texchworld/hotel-left.png";
import hotelLeft from "../../../../assets/portfollio/texchworld/hotel-right.png";
const Motionportfolli = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="text-center items-center text-sky-400 shadow-md text-4xl ">
        {/* ----------type writing---------------- */}
        <Typewriter
          options={{
            strings: ["MY EXCLUSIVE", "UNIQUE PORTFOLLIO"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <div className="grid  md:grid-cols-3 sm:grid-cols-2">
        {/* --------card -1 -world teachnoloy-- */}
        <motion.div
          layout
          transition={{ layout: { duration: 1, type: spring } }}
          onClick={() => setIsOpen(!isOpen)}
          className=" mx-auto my-6 max-w-[350px] rounded-lg border font-sans shadow-2xl"
        >
          {/* HEDING ICON DIV */}
          <motion.div
            layout="position"
            className="rounded-lg border w-full inline-flex font-sans  p-4 text-center shadow-2xl "
          >
            <img src={tech} className=" rounded-lg h-20" alt="" />
            <span className="text-4xl text-red-400"> World Teachnoloy</span>
          </motion.div>
          {isOpen && (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                {/* Post img */}
                <div className="flex flex-col shadow-md gap-1">
                  <div className="w-full">
                    <img
                      width={400}
                      height={200}
                      className="h-[150px] w-full bg-black/40"
                      src={techcover}
                      alt=""
                    />
                  </div>
                  <div className="flex gap-1 shadow-lg overflow-hidden">
                    <img
                      width={201}
                      height={201}
                      className="h-[150px] w-[49.5%] bg-black/40"
                      src={techright}
                      alt=""
                    />
                    <img
                      width={202}
                      height={202}
                      className="h-[150px] w-[49.5%]  bg-black/40"
                      src={tecgleft}
                      alt=""
                    />
                  </div>
                </div>
                {/* Post content */}
                <div className="p mt-3 space-y-2 px-4">
                  <h2 className=" text-xl font-semibold">
                    {" "}
                    A company that produces electronics components.
                  </h2>
                  <h2 className=" text-sm">
                    Multiple role-based sites where individuals can log in as
                    typical clients and a few particular individuals can log in
                    as admins.
                  </h2>
                </div>
                {/* -------visit button -----------*/}
                <div className="text-center m-6">
                  <a href="https://bespoke-pothos-a257c1.netlify.app/">
                    <button className="btn btn-active btn-secondary">
                      <a href="https://example.com">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3.203 17.198a5.973 5.973 0 0 1-8.4-.015l-.001-.001a5.965 5.965 0 0 1-.131-8.589l4.968 4.969a1.5 1.5 0 0 0 2.121 2.121l4.969-4.969a5.96 5.96 0 0 1-.014 8.401l-.002.002a5.963 5.963 0 0 1-4.51 2.01zM12 5.25c-2.488 0-4.5 2.012-4.5 4.5s2.012 4.5 4.5 4.5 4.5-2.012 4.5-4.5-2.012-4.5-4.5-4.5z" />
                        </svg>
                      </a>
                      Visit Now
                    </button>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </motion.div>
        {/* ------card-2 hotel--- */}
        <motion.div
          layout
          transition={{ layout: { duration: 1, type: "spring" } }}
          onClick={() => setIsOpen(!isOpen)}
          className=" mx-auto my-6 max-w-[350px] rounded-lg border font-sans shadow-2xl"
        >
          {/* HEDING ICON DIV */}
          <motion.div
            layout="position"
            className="rounded-lg border w-full inline-flex font-sans  p-6 shadow-2xl "
          >
            <img src={hotel} className=" shadow-md h-20" alt="" />
            <span className="text-2xl text-red-400">Hotel Management</span>
          </motion.div>
          {isOpen && (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                {/*-------------- Post img------------- */}
                <div className="flex flex-col shadow-md gap-1">
                  <div className="w-full">
                    <img
                      width={400}
                      height={200}
                      className="h-[150px] w-full bg-black/40"
                      src={hotelCover}
                      alt=""
                    />
                  </div>
                  <div className="flex gap-1 shadow-lg overflow-hidden">
                    <img
                      width={201}
                      height={201}
                      className="h-[150px] w-[49.5%] bg-black/40"
                      src={hotelLeft}
                      alt=""
                    />
                    <img
                      width={202}
                      height={202}
                      className="h-[150px] w-[49.5%]  bg-black/40"
                      src={hotelRight}
                      alt=""
                    />
                  </div>
                </div>
                {/*---------- Post content --------------*/}
                <div className="p mt-3 space-y-2 px-4">
                  <h2 className=" text-xl font-semibold">
                    {" "}
                    A company that produces Hotel Room Booking
                  </h2>
                  <h2 className=" text-sm">
                    Multiple role-based sites where individuals can log in as
                    typical clients and a few particular individuals can log in
                    as admins.
                  </h2>
                </div>
                {/* -------visit button  hotel-----------*/}
                <div className="text-center m-6">
                  <a href="https://dapper-daffodil-9c8959.netlify.app/">
                    <button className="btn btn-active btn-secondary">
                      <a href="https://example.com">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3.203 17.198a5.973 5.973 0 0 1-8.4-.015l-.001-.001a5.965 5.965 0 0 1-.131-8.589l4.968 4.969a1.5 1.5 0 0 0 2.121 2.121l4.969-4.969a5.96 5.96 0 0 1-.014 8.401l-.002.002a5.963 5.963 0 0 1-4.51 2.01zM12 5.25c-2.488 0-4.5 2.012-4.5 4.5s2.012 4.5 4.5 4.5 4.5-2.012 4.5-4.5-2.012-4.5-4.5-4.5z" />
                        </svg>
                      </a>
                      Visit Now
                    </button>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </motion.div>
        {/* ----------card-3-team project---- */}
        <motion.div
          layout
          transition={{ layout: { duration: 1, type: "spring" } }}
          onClick={() => setIsOpen(!isOpen)}
          className=" mx-auto my-6 max-w-[350px] rounded-lg border font-sans shadow-2xl"
        >
          {/*--------- HEDING ICON DIV */}
          <motion.div
            layout="position"
            className="rounded-lg border w-full inline-flex font-sans  p-4 text-center shadow-2xl "
          >
            <img src={convert} className=" rounded-lg h-20" alt="" />
            <span className="text-4xl text-red-400">
              {" "}
              Our Conveter Team Projects
            </span>
          </motion.div>
          {isOpen && (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                {/* Post img */}
                <div className="flex flex-col shadow-md gap-1">
                  <div className="w-full">
                    <img
                      width={400}
                      height={200}
                      className="h-[150px] w-full bg-black/40"
                      src={convertcover}
                      alt=""
                    />
                  </div>
                  <div className="flex gap-1 shadow-lg overflow-hidden">
                    <img
                      width={201}
                      height={201}
                      className="h-[150px] w-[49.5%] bg-black/40"
                      src={convetright}
                      alt=""
                    />
                    <img
                      width={202}
                      height={202}
                      className="h-[150px] w-[49.5%]  bg-black/40"
                      src={convertleft}
                      alt=""
                    />
                  </div>
                </div>
                {/* Post content */}
                <div className="p mt-3 space-y-2 px-4">
                  <h2 className=" text-xl font-semibold">
                    {" "}
                    Ours conveter provide any type file Convert
                  </h2>
                  <h2 className=" text-sm">
                    Multiple role-based sites where individuals can log in as
                    typical clients and a few particular individuals can log in
                    as admins.
                  </h2>
                </div>
                {/* -------visit button -----------*/}
                <div className="text-center m-6">
                  <a href="https://65e7529ab4d1303a91b40734--eloquent-choux-c790a4.netlify.app/">
                    <button className="btn btn-active btn-secondary">
                      <a href="https://example.com">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3.203 17.198a5.973 5.973 0 0 1-8.4-.015l-.001-.001a5.965 5.965 0 0 1-.131-8.589l4.968 4.969a1.5 1.5 0 0 0 2.121 2.121l4.969-4.969a5.96 5.96 0 0 1-.014 8.401l-.002.002a5.963 5.963 0 0 1-4.51 2.01zM12 5.25c-2.488 0-4.5 2.012-4.5 4.5s2.012 4.5 4.5 4.5 4.5-2.012 4.5-4.5-2.012-4.5-4.5-4.5z" />
                        </svg>
                      </a>
                      Visit Now
                    </button>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </motion.div>
        {/* -----------card -4--- */}
        <motion.div
          layout
          transition={{ layout: { duration: 1, type: "spring" } }}
          onClick={() => setIsOpen(!isOpen)}
          className=" mx-auto my-6 max-w-[350px] rounded-lg border font-sans shadow-2xl"
        >
          {/* HEDING ICON DIV */}
          <motion.div
            layout="position"
            className="rounded-lg border w-full inline-flex font-sans  p-4 text-center shadow-2xl "
          >
            <img src={tech} className=" rounded-lg h-20" alt="" />
            <span className="text-4xl text-red-400"> World Teachnoloy</span>
          </motion.div>
          {isOpen && (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                {/* Post img */}
                <div className="flex flex-col shadow-md gap-1">
                  <div className="w-full">
                    <img
                      width={400}
                      height={200}
                      className="h-[150px] w-full bg-black/40"
                      src={techcover}
                      alt="tech cover"
                    />
                  </div>
                  <div className="flex gap-1 shadow-lg overflow-hidden">
                    <img
                      width={201}
                      height={201}
                      className="h-[150px] w-[49.5%] bg-black/40"
                      src={techright}
                      alt=""
                    />
                    <img
                      width={202}
                      height={202}
                      className="h-[150px] w-[49.5%]  bg-black/40"
                      src={tecgleft}
                      alt=""
                    />
                  </div>
                </div>
                {/* Post content */}
                <div className="p mt-3 space-y-2 px-4">
                  <h2 className=" text-xl font-semibold">
                    {" "}
                    A company that produces electronics components.
                  </h2>
                  <h2 className=" text-sm">
                    Multiple role-based sites where individuals can log in as
                    typical clients and a few particular individuals can log in
                    as admins.
                  </h2>
                </div>
                {/* -------visit button -----------*/}
                <div className="text-center m-6">
                  <a href="https://bespoke-pothos-a257c1.netlify.app/">
                    <button className="btn btn-active btn-secondary">
                      <a href="https://example.com">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3.203 17.198a5.973 5.973 0 0 1-8.4-.015l-.001-.001a5.965 5.965 0 0 1-.131-8.589l4.968 4.969a1.5 1.5 0 0 0 2.121 2.121l4.969-4.969a5.96 5.96 0 0 1-.014 8.401l-.002.002a5.963 5.963 0 0 1-4.51 2.01zM12 5.25c-2.488 0-4.5 2.012-4.5 4.5s2.012 4.5 4.5 4.5 4.5-2.012 4.5-4.5-2.012-4.5-4.5-4.5z" />
                        </svg>
                      </a>
                      Visit Now
                    </button>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Motionportfolli;
