import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import WalletsCard from "../components/WalletsCard";
import ScrollToTop from "../components/ScrollToTop";

const Connect = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredWallets, setFilteredWallets] = useState([]);

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView, mainControls, slideControls]);

  useEffect(() => {
    const filtered = ConnectLogo.filter((wallet) =>
      wallet.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredWallets(filtered);
  }, [searchTerm]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 2, delay: 0.5 }}
      className="flex  flex-col gap-16 items-center min-h-screen justify-center w-full py-14"
    >
      <ScrollToTop />
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-white">Connect Wallet</h1>
        <h1 className="text-lg text-gray-400 mt-6">
          Please select your wallet to proceed
        </h1>
      </div>

      <input
        type="text"
        placeholder="Search by wallet name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-4 font-bold input input-bordered  md:w-8/12 w-10/12 bg-transparent text-white border-blue-300 shadow-2xl rounded-xl"
      />

      <div className="grid grid-cols-12 gap-4 md:gap-8 p-4">
        {/* Display filtered wallets or all wallets if search is empty */}
        {searchTerm === ""
          ? ConnectLogo.map((item, i) => (
              <WalletsCard document={item} key={i} ind={i} />
            ))
          : filteredWallets.map((item, i) => (
              <WalletsCard document={item} key={i} ind={i} />
            ))}
      </div>
    </motion.div>
  );
};

export default Connect;

export const ConnectLogo = [
  {
    logo: require("../asset/1.png"),
    name: "Wallet Connect",
  },
  {
    logo: require("../asset/best.webp"),
    name: "Best",
  },
  {
    logo: require("../asset/2.jpeg"),
    name: "Trust",
  },
  {
    logo: require("../asset/3.jpeg"),
    name: "Metamask",
  },
  {
    logo: require("../asset/4.png"),
    name: "Ledger",
  },
  {
      logo: require('../asset/bitget.png'),
      name: "Bitget"
  },
  {
    logo: require("../asset/6.png"),
    name: "Coinbase",
  },
  {
    logo: require("../asset/7.png"),
    name: "Saitamask",
  },
  {
    logo: require("../asset/8.png"),
    name: "Terra Station",
  },
  {
    logo: require("../asset/9.jpeg"),
    name: "Phantom",
  },
  {
    logo: require("../asset/10.png"),
    name: "Cosmos Station",
  },
  {
      logo: require('../asset/okx.png'),
      name: "OKX"
  },
  {
      logo: require('../asset/sol.jfif'),
      name: "Solflare"
  },
  {
    logo: require("../asset/13.jpg"),
    name: "Argent",
  },
  {
    logo: require("../asset/14.png"),
    name: "Binance Chain",
  },
  {
    logo: require("../asset/15.png"),
    name: "Safemoon",
  },
  {
    logo: require("../asset/16.jfif"),
    name: "Gnosis Safe",
  },
  // {
  //     logo: require('../asset/17.jpeg'),
  //     name: ""
  // },
  // {
  //     logo: require('../asset/18.png'),
  //     name: ""
  // },
  {
    logo: require("../asset/19.png"),
    name: "imToken",
  },
  {
    logo: require("../asset/20.jpeg"),
    name: "ONTO",
  },
  // {
  //     logo: require('../asset/21.png'),
  //     name: ""
  // },
  // {
  //     logo: require('../asset/22.png'),
  //     name: ""
  // },
  {
    logo: require("../asset/23.png"),
    name: "Aave",
  },
  {
    logo: require("../asset/24.jpeg"),
    name: "TokenPocket",
  },
  {
    logo: require("../asset/25.jpg"),
    name: "Formatic",
  },
  {
    logo: require("../asset/26.jpeg"),
    name: "MathWallet",
  },
  {
    logo: require("../asset/27.jfif"),
    name: "Ledger Live",
  },
  // {
  //     logo: require('../asset/28.png'),
  //     name: ""
  // },
  // {
  //     logo: require('../asset/29.png'),
  //     name: ""
  // },
  {
    logo: require("../asset/30.png"),
    name: "Dharma",
  },
  {
    logo: require("../asset/31.jfif"),
    name: "1inch Wallet",
  },
  {
    logo: require("../asset/32.jfif"),
    name: "Huobi",
  },
  // {
  //     logo: require('../asset/33.jpg'),
  //     name: ""
  // },
  // {
  //     logo: require('../asset/34.jfif'),
  //     name: ""
  // },
  {
    logo: require("../asset/35.png"),
    name: "TrustVault",
  },
  {
    logo: require("../asset/36.png"),
    name: "Atomic",
  },
  {
    logo: require("../asset/37.png"),
    name: "Coin98",
  },
  {
    logo: require("../asset/38.png"),
    name: "Tron",
  },
  // {
  //     logo: require('../asset/39.png'),
  //     name: ""
  // },
  // {
  //     logo: require('../asset/40.jpeg'),
  //     name: ""
  // },
  {
    logo: require("../asset/41.png"),
    name: "D'CENT",
  },
  {
    logo: require("../asset/42.jfif"),
    name: "Nash",
  },
  {
    logo: require("../asset/43.png"),
    name: "Coinmoni",
  },
  // {
  //     logo: require('../asset/44.png'),
  //     name: ""
  // },
  // {
  //     logo: require('../asset/45.png'),
  //     name: ""
  // },
  {
    logo: require("../asset/46.jpg"),
    name: "Tokenary",
  },
  {
    logo: require("../asset/47.png"),
    name: "Torus",
  },
  {
    logo: require("../asset/48.jpeg"),
    name: "Safepal",
  },
  {
    logo: require("../asset/49.png"),
    name: "Spatium",
  },
  // {
  //     logo: require('../asset/50.png'),
  //     name: ""
  // },
  // {
  //     logo: require('../asset/51.png'),
  //     name: ""
  // },
  {
    logo: require("../asset/52.png"),
    name: "Ownbit",
  },
  {
    logo: require("../asset/53.jpg"),
    name: "EasyPocket",
  },
  {
    logo: require("../asset/54.png"),
    name: "Bridge Wallet",
  },
  {
    logo: require("../asset/55.png"),
    name: "SparkPoint",
  },
  // {
  //     logo: require('../asset/56.png'),
  //     name: ""
  // },
  // {
  //     logo: require('../asset/57.jfif'),
  //     name: ""
  // },
  {
    logo: require("../asset/58.jfif"),
    name: "Vision",
  },
  {
    logo: require("../asset/59.png"),
    name: "PeakDefi",
  },
  {
    logo: require("../asset/60.png"),
    name: "Unstoppable",
  },
  {
    logo: require("../asset/61.png"),
    name: "HaloDefi",
  },
  // {
  //     logo: require('../asset/62.png'),
  //     name: ""
  // },
  // {
  //     logo: require('../asset/63.png'),
  //     name: ""
  // },
  {
    logo: require("../asset/64.png"),
    name: "Ellipal",
  },
  {
    logo: require("../asset/65.png"),
    name: "KEYRING PRO",
  },
  {
    logo: require("../asset/66.jpeg"),
    name: "Aktionariat",
  },
  {
    logo: require("../asset/67.png"),
    name: "Talken",
  },
  // {
  //     logo: require('../asset/68.png'),
  //     name: ""
  // },
  // {
  //     logo: require('../asset/69.jfif'),
  //     name: ""
  // },
  {
    logo: require("../asset/70.png"),
    name: "PayTube",
  },
  {
    logo: require("../asset/71.jpeg"),
    name: "Linen",
  },
  // {
  //     logo: require(''),
  //     name: ""
  // },
];
