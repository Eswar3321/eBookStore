import { useLocation } from 'reat-router-dom';
import { useEffect } from 'react';

const ScrollToTop = () => {
  const { pathName } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathName]);
  return <div></div>;
};

export default ScrollToTop;
