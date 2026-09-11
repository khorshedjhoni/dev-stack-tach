import React, { use, useState } from 'react';
import Technology from './Technology';
import SelectedTech from './SelectedTech';



function Technologies({techPromises}) {
    const technologies = use(techPromises) 

    const [isTech,setIsTech] = useState([])

    
    return (
        <div>
            <div>
                <h1 className='font-bold text-4xl my-5 leading-3.5'>Explore the <span className='text-[#EC4899]'>Technologies</span></h1>
                <p className='mb-10 '>Pick one technology per category to build your ideal stack.</p>
            </div>
            <div className="grid grid-cols-12 gap-4">
           <div className='col-span-8 '>
             <div className='grid grid-cols-3 gap-4'>
                { 
                technologies.map((tech,idx:number)=><Technology 
                key ={idx} techPromises={techPromises} tech={tech} isTech={isTech} setIsTech={setIsTech}>
                    
                </Technology>)
            }
             </div>
         
           </div>
            <div  className="col-span-4 ">
                
                {/* {
                    technologies.map((tech,idx:number)=><SelectedTech  key ={idx} techPromises={techPromises} tech={tech} isTech={isTech} setIsTech={setIsTech}></SelectedTech>)
                } */}

                <SelectedTech 
                isTech={isTech}
                setIsTech={setIsTech}
                ></SelectedTech>
               
            </div>
        </div>
        </div>
    );
}

export default Technologies;

  