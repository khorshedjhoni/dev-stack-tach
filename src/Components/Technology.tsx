import  { type Dispatch, type SetStateAction } from "react";
import { toast } from "react-toastify";
import type { TechnologyProps } from "../type/type";

interface TechProps{
  tech: TechnologyProps;
  isTech: TechnologyProps[];
  setIsTech:Dispatch<SetStateAction<TechnologyProps[]>>
}

function Technology({ tech,  isTech, setIsTech }:TechProps) {
  let isAdded = false;

  for (const item of isTech) {
    if (item.id === tech.id) {
      isAdded = true;
      break;
    }
  }


  const handleClick = () => {
    setIsTech([...isTech, tech]);

    toast.success(`${tech.name} is successfully added`);
  };
  return (
    <div>
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
        <div className="flex items-start justify-between">
          <img
            src={tech.icon}
            alt={tech.name}
            className="h-12 w-12 object-contain"
          />

          <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm font-medium text-blue-500">
            {tech.badge}
          </span>
        </div>

        <h2 className="mt-5 text-2xl font-bold text-slate-900">{tech.name}</h2>

        <p className="mt-3 min-h-[72px] text-[15px] leading-6 text-slate-500">
          {tech.description}
        </p>

        <div className="my-5 border-t border-gray-100"></div>

        <div className="flex items-center justify-between gap-3 text-sm">
          <span className="rounded-md bg-slate-100 px-3 py-1 text-slate-600">
            {tech.category}
          </span>

          <span className="text-slate-500">{tech.difficulty}</span>

          <span className="flex items-center gap-1 text-slate-700">
            <span className="text-yellow-400">★</span>
            {tech.rating}
          </span>
        </div>

        <button
          onClick={handleClick}
          type="button"
          disabled={isAdded}
          className={`mt-5 w-full rounded-lg py-3 text-sm font-medium transition ${
            isAdded
              ? "cursor-not-allowed bg-green-100 text-green-600"
              : "bg-slate-950 text-white hover:bg-slate-800"
          }`}
        >
          {isAdded ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
}

export default Technology;
