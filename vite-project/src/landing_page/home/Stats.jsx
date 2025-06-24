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
    
        <div className='container h-[40vh] b flex flex-col items-center min-w-0 overflow-hidden mt-10'>
            <div className='text-center p-2 '>
                <h1 className=' text-3xl md:text-4xl  mb-5 text-gray-700 font-medium'>Open a Zerodha account</h1>
                <h2 className=' text-md md:text-lg text-gray-600 mb-8'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</h2>
                <button className='text-lg md:text-xl border-0 md:p-2 p-1 md:pl-8 md:pr-8 pl-4 pr-4 bg-blue-500 text-white font-medium rounded-sm text-center hover:bg-black'>Sign up for free</button>
            </div>

    </div>
    </>
);
}

export default Stats;