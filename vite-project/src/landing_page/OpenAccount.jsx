import React from 'react';
import {Link} from 'react-router-dom';
function OpenAccount() {
    return ( 
        <div className='container h-[40vh] b flex flex-col items-center min-w-0 overflow-hidden mt-10'>
            <div className='text-center p-2 '>
                <h1 className=' text-3xl md:text-4xl  mb-5 text-gray-700 font-medium'>Open a Zerodha account</h1>
                <h2 className=' text-md md:text-lg text-gray-600 mb-8'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</h2>
                <button className='text-lg md:text-xl border-0 md:p-2 p-1 md:pl-8 md:pr-8 pl-4 pr-4 bg-blue-500 text-white font-medium rounded-sm text-center hover:bg-black'><Link to="/signup" >Sign up for free</Link></button>
            </div>

        </div>
    );
}

export default OpenAccount;