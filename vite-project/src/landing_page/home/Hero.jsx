import React from 'react';
import {Link} from 'react-router-dom';
function Hero() {
    return (  
        <div className='container h-[90vh] md:h-[100vh]  flex flex-col items-center min-w-0 overflow-hidden'>
            <div className="img h-[35%] md:h-[45%] w-[90%]  md:mt-15 mb- md:mb-15  " >
                <img src="media/landing.png" alt="" className='h-full w-full object-contain'/>
            </div>
            <div className='text-center p-2 '>
                <h1 className='text-5xl mb-5 text-gray-800 font-medium'>Invest in everything</h1>
                <h2 className='text-xl mb-8'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</h2>
                <button className='text-xl border-0 p-3 pl-8 pr-8 bg-blue-500 text-white font-medium rounded-md hover:bg-black'><Link to="/signup" >Sign up for free</Link></button>
            </div>

        </div>
    );
}

export default Hero;