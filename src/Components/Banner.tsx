import bannerImg from '../assets/banner-stack.png'

function Banner() {
    return (
        <div>
            <div className='flex justify-between  items-center'>
                <div >
                    <h1 className='text-[60px] font-bold leading-none '>Build Your Ideal <br /><span className="text-[60px] font-bold leading-none bg-gradient-to-r from-[#F97316] via-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">Development Stack</span></h1>
                    <p className='mt-4 mb-9 font-Plus Jakarta Sans'>Explore frontend, backend, database, and tooling options,<br />compare them side by side, and put together the stack that fits <br /> your next project.</p>
                    {/* <button className="bg-gradient-to-r from-[#F97316] to-[#EC4899] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">Explore Technologies</button>
                    <button type="submit" className="btn px-12 py-5 rounded-lg ">Button</button> */}
                    <button className="bg-gradient-to-r from-[#F97316] to-[#EC4899] text-white font-semibold px-4 py-2 mr-3 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">Explore Technologies</button>

                    <button
                        type="button"
                        className="bg-transparent border border-gray-400 text-gray-800 font-semibold px-4 py-2 rounded-lg hover:bg-gray-100 transition-all duration-300"
                        >
                        Learn More
                    </button>
                </div>
                <div className=''>
                    <img src={bannerImg} alt="" />
                </div>
            </div>

        </div>
    );
}

export default Banner;