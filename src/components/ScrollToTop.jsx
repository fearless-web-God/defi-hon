import { useEffect } from 'react';

const ScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []); // Empty dependency array ensures this runs only on component mount

  return null; // This component doesn't render anything
};

export default ScrollToTop;
