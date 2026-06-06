import SkillCard from "./SkillCard";
import { skills } from "../data/portfolioData";

function Skills() {
  return (
    <section>
      <h2>Skills</h2>

      <ul>
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </ul>
    </section>
  );
}

export default Skills;