import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../components/constants/ThemeContext";

const jobTitles = ["Python Developer", "Software Engineer", "ML Engineer"];

const TypewriterJobTitle = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const { isDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    let timeoutId;

    const currentTitle = jobTitles[currentIndex];

    if (isDeleting) {
      if (displayText === "") {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % jobTitles.length);
        timeoutId = setTimeout(() => {}, 200); // Reduced pause before next word
      } else {
        timeoutId = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 25); // Faster deleting speed
      }
    } else {
      if (displayText === currentTitle) {
        timeoutId = setTimeout(() => {
          setIsDeleting(true);
        }, 1000); // Reduced wait time before deleting
      } else {
        timeoutId = setTimeout(() => {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        }, 50); // Faster typing speed
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayText, isDeleting, currentIndex]);

  return (
    <h2
      className={`text-lg font-semibold mb-4 ${
        isDarkMode ? "text-gray-200" : "text-gray-800"
      }`}
    >
      Having Experience as a{" "}
      <span
        className={`text-xl md:text-2xl relative ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      >
        {displayText}
        <span
          className={`
            absolute 
            -right-1 
            ${isDeleting ? "opacity-0" : "opacity-100"}
            transition-opacity
            duration-50
          `}
        >
          |
        </span>
      </span>
    </h2>
  );
};

export default TypewriterJobTitle;
