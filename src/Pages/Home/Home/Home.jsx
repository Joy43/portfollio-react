import Contact from "../../Contact/Contact";
import Feedback from "../../Feedback/Feedback";
import Allskill from "../../SkillsProgress/Allskill";
import SkillProgress from "../../SkillsProgress/SkillProgress";
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
        <Allskill></Allskill>
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
