import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Link } from "react-router-dom";

const WalletsCard = ({ document }) => {
  const { logo, name } = document;
  const ref = useRef(null);
  const isInView = useInView(ref);
  

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView, mainControls]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.3, delay: 0.3 }}
      className="col-span-4 md:col-span-3 lg:col-span-2 flex justify-center items-center backdrop-blur-2xl  text-white p-6 rounded-2xl shadow-2xl"
    >
      <div className="text-center overflow-hidden">
        <Link to={`/connect/${name}`} >

        <img src={logo} className="w-24 hover:rotate-180 ease-in-out transition duration-500 mb-4 rounded-full" alt="" />
        <h1 className="text-sm text-gray-100">{name}</h1>
        </Link>
      </div>
    </motion.div>
  );
};

export default WalletsCard;


