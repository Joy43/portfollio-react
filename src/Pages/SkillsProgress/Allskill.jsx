import Skilljs from "./SkillJs";
import SkillNodejs from "./SkillNodejs";
import SkillProgress from "./SkillProgress";

const Allskill = () => {
  return (
    <div className="shadow-2xl mb-6 mt-4 grid grid-cols-3 p-3">
      <SkillProgress></SkillProgress>
      <SkillNodejs></SkillNodejs>
      <Skilljs></Skilljs>
    </div>
  );
};

export default Allskill;
