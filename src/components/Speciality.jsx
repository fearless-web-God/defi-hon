import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import SpecCard from "./SpecCard";
import { types } from "../lib/constant";

const Speciality = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView, mainControls, slideControls]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: .5, delay: 0.5 }}
      className="flex dots flex-col gap-16 items-center justify-center w-full p-8"
    >
      <h1 className="md:text-5xl text-3xl font-bold text-white">Select Sync Type</h1>

      <div className="grid grid-cols-3 gap-8 ">
        {types.map((item, i) => (
          <SpecCard key={i} document={item} />
        ))}
      </div>
    </motion.div>
  );
};

export default Speciality;
