import { SectionWrapper } from "../hoc";
import BallCanvas from "./three-models/BallCanvas";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10 mt-20">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
          <p className="mt-2 text-center text-white text-lg">{technology.name}</p>
        </div>
      ))}
      {}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
