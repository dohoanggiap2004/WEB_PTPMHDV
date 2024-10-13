import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollConfig() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Thêm hiệu ứng cuộn mượt
    });
  }, [pathname]);
  return null;
}

export default ScrollConfig;
