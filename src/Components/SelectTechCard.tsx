import React from 'react';

function SelectTechCard({tec,isTech,setIsTech}) {

    const handleDelete=(id)=>{
       const remainingTech = isTech.filter((item) => item.id !== id);
        setIsTech(remainingTech)
    }
    return (
        <div>
            <div className="flex items-center justify-between rounded-2xl border-2 border-gray-200 bg-white px-3 py-2">

    {/* Left div */}
    <div className="flex items-center gap-4">

        {/* Technology icon */}
        <img
            src={tec.icon}
            alt={tec.name}
            className="h-12 w-12 object-contain"
        />

        {/* Name + Category */}
        <div>
            <h3 className="text-lg font-semibold text-gray-900">
                {tec.name}
            </h3>

            <p className="text-sm text-gray-400">
                {tec.category}
            </p>
        </div>

    </div>

    {/* Right div - Delete */}
    <div>
        <button
            onClick={() => handleDelete(tec.id)}
            className="text-3xl font-light text-gray-400 hover:text-red-500"
        >
            ×
        </button>
    </div>

</div>
        </div>
    );
}

export default SelectTechCard;