import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import Speciality from '../components/Speciality';
import ScrollToTop from "../components/ScrollToTop";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loaderTimeout = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(loaderTimeout);
  }, []);

  return (
    <div className='banner w-full min-h-screen flex flex-col justify-center items-center'>
      {loading ? (
        // Loader component or loading message
        // <span className="loading loading-ring  w-72 h-72 bg-gray-500"></span>
        // <span className="loading loading-dots w-40 h-40 bg-gray-200"></span>
        <span className="loading loading-bars w-32 h-32 bg-gray-500"></span>

      ) : (
        // Content to display after loading
        <>
          <ScrollToTop />
          <Banner />
          <Speciality />
        </>
      )}
    </div>
  );
};

export default Home;
