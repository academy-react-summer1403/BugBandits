import { IconButton } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { GoArrowUp } from "react-icons/go";
import { HeaderAccess } from "../HeaderAccess";

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-center space-y-2">
      {isVisible && (
        <>
          <IconButton
            onClick={scrollToTop}
            size="lg"
            className="animate-bounce p-3 transition rounded-full bg-ocean_blue dark:bg-blue-gray-200 dark:text-midnight_blue"
          >
            <GoArrowUp className="w-7 h-7" />
          </IconButton>
          <HeaderAccess />
        </>
      )}
    </div>
  );
};

export { ScrollTop };
