import { type Dispatch, type SetStateAction } from "react";
import { toast } from "react-toastify";
import type { TechnologyProps } from "../type/type";
import { RxCross2 } from "react-icons/rx";

interface SelectedCardProps{
    tec:TechnologyProps
    isTech: TechnologyProps[];
    setIsTech:Dispatch<SetStateAction<TechnologyProps[]>>
}

function SelectTechCard({ tec, isTech, setIsTech }:SelectedCardProps) {
  const handleDelete = (id:number) => {
    const remainingTech = isTech.filter((item) => item.id !== id);
    setIsTech(remainingTech);
    toast.success(`${tec.name} is successfully delete`);
  };
  return (
    <div>
      <div className="flex items-center justify-between rounded-2xl border-2 border-gray-200 bg-white px-3 py-2">
    
        <div className="flex items-center gap-4">
          
          <img
            src={tec.icon}
            alt={tec.name}
            className="h-12 w-12 object-contain"
          />

        
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{tec.name}</h3>

            <p className="text-sm text-gray-400">{tec.category}</p>
          </div>
        </div>


        <div>
          <button
            onClick={() => handleDelete(tec.id)}
            className="text-3xl font-light text-gray-400 hover:text-red-500"
          >
            <RxCross2 />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SelectTechCard;
