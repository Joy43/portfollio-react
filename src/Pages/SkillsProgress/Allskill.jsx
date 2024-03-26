import Skilljs from "./SkillJs";
import SkillNodejs from "./SkillNodejs";
import SkillProgress from "./SkillProgress";
import TailwindSkill from "./Tailwindcss";

const Allskill = () => {
  return (
    <div className="shadow-2xl mb-6 mt-4 grid grid-cols-4 p-3">
      <SkillProgress></SkillProgress>
      <SkillNodejs></SkillNodejs>
      <Skilljs></Skilljs>
      <TailwindSkill></TailwindSkill>
    </div>
  );
};

export default Allskill;
