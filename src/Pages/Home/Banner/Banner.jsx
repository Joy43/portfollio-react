// import { Carousel } from "keep-react";
import { useEffect, useState } from "react";
import "./Banner.css";
// import { AuthContext } from "../Authentication/AuthProvider/Authprovider";
import "./Banner.css";
const Banner = () => {
  //   const { mode } = useContext(AuthContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slider = document.querySelector(".slider");

    function activate(e) {
      const items = document.querySelectorAll(".item");
      e.target.matches(".next") && slider.append(items[0]);
      e.target.matches(".prev") && slider.prepend(items[items.length - 1]);
    }

    document.addEventListener("click", activate, false);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("click", activate, false);
    };
  }, []);

  const items = [
    "https://i.ibb.co/LhKZCk5/web-developer.gif",
    // "https://i.ibb.co/Y0NGz8w/page-3.gif",
    // "https://i.ibb.co/xqyHKcm/page-2.gif",
    // "https://i.ibb.co/ZLnKXbm/user-of-pdf-most.gif",
    // "https://i.ibb.co/MNYn3gF/5.png",
    // "https://i.ibb.co/5hDPDpv/speech-document.png",
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  return (
    <div className="banner-div">
      <ul className="slider">
        {items.map((item, index) => (
          <li
            key={index}
            className={` ${index === currentIndex ? "active" : ""} item`}
            style={{ backgroundImage: `url('${item}')` }}
          >
            <div className="content bg-transparent">
              <button className="bg-[#F1E9D5]">Read More</button>
            </div>
          </li>
        ))}
      </ul>
      <nav className="nav">
        <button
          className="btn prev"
          //----------- name="arrow-back-outline"----------
          onClick={prevSlide}
        >
          {/* --------- Corrected: Added ion-icon class ----------*/}
          <ion-icon name="arrow-back-outline"></ion-icon>
        </button>
        <button
          className="btn next"
          //--------- name="arrow-forward-outline"----------
          onClick={nextSlide}
        >
          {/*---------- Corrected: Added ion-icon class -------------*/}
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </button>
      </nav>
    </div>
  );
};

export default Banner;
