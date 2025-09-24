import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header
        id="header"
        className=" w-full h-10 top-0 overflow-hidden z-10"
        style={{ display: "block" }}
      >
        <div className="container-fluid">
          <div
            style={{
              height: "62px",
              backgroundColor: "#1d2330",
              overflow: "hidden",
              boxSizing: "border-box",
              border: "1px solid #282e3b",
              textAlign: "right",
              lineHeight: "14px",
              blocksize: "62px",
              fontSize: "12px",
              fontFeatureSettings: "normal",
              textsizeAdjust: "100%",
              boxShadow: "inset 0 -20px 0 0 #262b38",
              padding: "1px",
              margin: "0",
              width: "100%",
            }}
          >
            <div
              style={{
                height: "40px",
                padding: "0",
                margin: "0",
                width: "100%",
              }}
            >
              <iframe
                src="https://widget.coinlib.io/widget?type=horizontal_v2&theme=dark&pref_coin_id=1505&invert_hover=no"
                width="100%"
                height="36px"
                scrolling="auto"
                marginWidth="0"
                marginHeight="0"
                frameBorder="0"
                border="0"
                style={{ border: "0", margin: "0", padding: "0" }}
              ></iframe>
            </div>
            <div
              style={{
                color: "#626b7f",
                lineHeight: "14px",
                fontWeight: "400",
                fontSize: "11px",
                boxSizing: "border-box",
                padding: "2px 6px",
                width: "100%",
                fontFamily: "Verdana, Tahoma, Arial, sans-serif",
              }}
            >
              <a
                href="https://coinlib.io/"
                target="_blank"
                style={{
                  fontWeight: "500",
                  color: "#626b7f",
                  textDecoration: "none",
                  fontSize: "11px",
                }}
              >
                Cryptocurrency Prices
              </a>
              &nbsp;by Coinlib
            </div>
          </div>
        </div>
      </header>
      <div className="navbar backdrop-blur-sm top-0 text-white py-4 z-10">
        
        <div className="navbar-start">
          
        <Link to={"/"} className=" px-4 font-extrabold text-xl flex items-center justify-center gap-2 text-[#36baf7]"><img src={require("../asset/favicon.png")} className="w-10" alt="" /></Link>
       
        </div>
        
        <div className="navbar-end">
          <Link to={"/connect"} className="btn grad text-white border-0">Claim</Link>
        </div>
      </div>

      
    </div>
  );
};

export default Navbar;
