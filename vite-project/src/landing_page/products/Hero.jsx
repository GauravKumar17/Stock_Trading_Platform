import React from 'react';
function Hero() {
    return (
        <div className="main h-[50vh] w-[100%] flex flex-col justify-center items-center ">
            <div className="hero h-[100%] w-[90%] md:w-[73%] flex flex-col justify-center  text-center  border-b-1 border-b-gray-200">
                <h1 className=" text-5xl md:text-5xl font-medium text-gray-700 mb-5">Zerodha Products</h1>
                <h2 className="text-xl md:text-2xl md:font-normal text-gray-600 mb-5">Sleek, modern, and intuitive trading platforms</h2>
                <h3 className="md:text-lg md:font-normal text-gray-600 mb-5">Check out our <a href="" className="text-blue-600 hover:text-gray-800"> investment offerings → </a></h3>
            </div>
        </div>
      );
}

export default Hero;