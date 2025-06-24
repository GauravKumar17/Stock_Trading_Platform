import React from 'react';
function Stats() {
    return (  
    <>
    <div className="container h-[100vh] md:h-[70vh] w-[100vw] flex flex-col md:flex-row  md:justify-around p-4 mt-10 md:mt-2 overflow-hidden ">
        <div className="items md:w-[75vw] md:flex md:justify-center md:items-center  h-[100%] p-2 md:pr-5 md:space-x-20 ">
            <div className="left md:w-[60%] md:h-[65%] h-[30%] mb-10 "><img src="media/varsity2.svg" alt="varsity" className='h-full w-full object-contain' /></div>
            <div className="right  ">
                <h1 className='text-3xl text-gray-700 font-medium mb-6 md:mb-10'>Free and open market education</h1>
                <h3 className='text-md md:text-lg text-gray-700 font-normal mb-3'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</h3>
                <a href="" className='text-md font-medium text-blue-600 hover:text-black '>Varsity -&gt;</a>
                <h3 className='text-md text-gray-700 font-normal md:text-lg mb-3 mt-3 md:mt-10 '>TradingQ&A, the most active trading and investment community in India for all your market related queries.</h3>
                 <a href="" className='text-md font-medium text-blue-600 hover:text-black'>Trading Q&A -&gt;</a>
            </div>
        </div>
    </div>
    
        
    </>
);
}

export default Stats;