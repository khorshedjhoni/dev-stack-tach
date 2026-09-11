import React, { use } from 'react';
import SelectTechCard from './SelectTechCard';

function SelectedTech({isTech,setIsTech}) {
    console.log(isTech)

    const handleRemoveAll = () => {
        setIsTech([]);
    };

    
    return (
        <div className='card-body rounded-2xl border-2 border-gray-200 bg-white p-5'>
            <h2 className='p-4 leading-2 font-bold text-2xl'>Your Stack</h2>
            {
            (isTech.length ==0)?
            <div><p className='p-4 leading-1 font-semibold text-l'>No technologies selected yet.</p> 
             <label className=" m-4 card rounded-2xl border border-dashed text-accent-content">
    <input type="checkbox" name="card-urgent-1" />
    <div className="card-body">
      
      <p className='text-center'>Your stack is empty.</p>
    </div>
  </label>
            </div> :
            <p className='p-4 leading-1 font-semibold text-xl'>{isTech.length} Technology Selected</p>
            }
        {isTech.map((tec) => (
            <SelectTechCard tec={tec} setIsTech={setIsTech} isTech={isTech}></SelectTechCard>
        ))}
        {
            isTech.length>0 ? <button
                    onClick={handleRemoveAll}
                    className="m-4 w-[calc(100%-2rem)] rounded-xl border border-red-400 py-3 font-semibold text-red-500 hover:bg-red-50"
                >
                    Remove All
                </button>: ""
        }
    </div>
    );
}

export default SelectedTech;