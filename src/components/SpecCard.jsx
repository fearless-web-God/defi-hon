import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Link } from "react-router-dom";

const SpecCard = ({ document }) => {
  const { title, desc } = document;
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
      transition={{ duration: .3, delay: 0.3 }}
      className="col-span-4 md:col-span-1 flex justify-center items-center specCard backdrop-blur-3xl text-white p-8 rounded-2xl shadow-2xl"
    >
      <div className="text-center">
        <Link to={"/connect"}>
          <h1 className="text-xl mb-4 font-bold">{title}</h1>
          <h1 className="text-sm text-gray-400">{desc}</h1>
        </Link>
      </div>
    </motion.div>
  );
};

export default SpecCard;
