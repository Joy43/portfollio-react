import Contact from "../../Contact/Contact";
import Feedback from "../../Feedback/Feedback";
import Aboutus from "../Aboutus/AboutUs";
import Banner from "../Banner/Banner";
import Motionportfolli from "../Portfolliosite/Site1/Motionportfollio";

const Home = () => {
  return (
    <div>
      <div>
        <Banner></Banner>
      </div>
      <div>
        <Aboutus></Aboutus>
      </div>
      <div>
        <Motionportfolli></Motionportfolli>
      </div>
      <div>
        <Contact></Contact>
      </div>
      <div>
        <Feedback></Feedback>
      </div>
    </div>
  );
};

export default Home;
