import { ChevronUpSquare } from "lucide-react";

import { useState, useEffect } from "react";

function ScrollButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 200 && window.innerWidth < 768) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-2 right-1.5 z-50 flex items-center justify-center rounded-full p-1 md:hidden lg:block"
        >
          <ChevronUpSquare
            width={24}
            height={24}
            strokeWidth="1.5"
            className="dark:text-stone-300"
          />
        </button>
      )}
    </>
  );
}

export default ScrollButton;
