import bannerImg from '../assets/banner-stack.png'

function Banner() {
    return (
        <div>
            <div className='flex justify-between flex-col md:flex-row  items-center'>
                <div >
                    <h1 className='text-[60px] font-bold leading-none '>Build Your Ideal <br /><span className="text-[60px] font-bold leading-none bg-brand-gradient bg-clip-text text-transparent">Development Stack</span></h1>

                    <p className='mt-4 mb-9 font-Plus Jakarta Sans'>Explore frontend, backend, database, and tooling options,<br />compare them side by side, and put together the stack that fits <br /> your next project.</p>

                   
                    <button className="bg-brand-gradient text-white font-semibold px-4 py-2 mr-3 rounded-lg shadow-md  ">Explore Technologies</button>

                    <button
                        type="button"
                        className="bg-transparent border border-gray-400 text-gray-800 font-semibold px-4 py-2 rounded-lg hover:bg-gray-100 "
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