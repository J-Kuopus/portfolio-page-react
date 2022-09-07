import { useState, useEffect} from "react";
import { FaAngleUp } from "react-icons/fa";
import "./Scroll.css";

// Scroll to top button function
const ScrollUp = () => {
  const [ showTopBtn, setShowTopBtn ] = useState(false);
  
  // Sets whether button appears or not
  useEffect(() => {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            setShowTopBtn(true);
        } else {
            setShowTopBtn(false);
        }
    });
  }, []);
  
  // Implements scroll to top method
  const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
  };


    return (
        <div className="top-to-btm">
            {" "}
            {showTopBtn && (
            <FaAngleUp className="icon-position icon-style"
                       // Assigns click event for scroll button
                       onClick={goToTop} 
             />
            )}
            {" "}
        </div>
    );
};

export default ScrollUp;