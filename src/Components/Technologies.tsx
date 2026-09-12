import { use, useState } from "react";
import Technology from "./Technology";
import SelectedTech from "./SelectedTech";
import type { TechnologyProps } from "../type/type";

interface TechnologiesProps {
  techPromises: Promise<TechnologyProps[]>;
  
}

function Technologies({ techPromises }:TechnologiesProps) {
  const technologies = use(techPromises);

  const [isTech, setIsTech] = useState<TechnologyProps[]>([]);

  return (
    <div>
      <div>
        <h1 className="font-bold text-4xl my-5 leading-3.5">
          Explore the <span className="mt-5 block text-[#EC4899] sm:mt-0 sm:inline text-brand-gradient">Technologies</span>
        </h1>
        <p className="mb-10 ">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="col-span-1 md:col-span-8 ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {technologies.map((tech, idx: number) => (
              <Technology
                key={idx}
                
                tech={tech}
                isTech={isTech}
                setIsTech={setIsTech}
              ></Technology>
            ))}
          </div>
        </div>
        <div className="md:col-span-4 col-span-1">
          <SelectedTech isTech={isTech} setIsTech={setIsTech}></SelectedTech>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
