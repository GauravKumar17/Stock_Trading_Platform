import React from 'react';
function Pricing() {
    return (  
    <div className="container md:h-[40vh] md:flex min-w-0 overflow-hidden ">
        <div className="md:flex h-[100%] justify-center ">
        <div className="left md:flex md:flex-col  justify-center p-3 md:p-0 md:w-[32%]">
            <h1 className='text-3xl text-gray-700 font-medium mb-6'>Unbeatable pricing</h1>
            <p className='text-md text-gray-700 font-normal mb-3'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
            <a href="" className='text-lg font-medium text-blue-600 hover:text-black hidden md:block'>See pricing -&gt;</a>

        </div>
        <div className="right p-2 md:w-[40%] h-[100%]"><img src="media/ftra.png " alt="" className='h-full w-full object-contain hidden md:block'/>
        <img src="media/ftrb.png " alt="" className='h-full w-full object-contain md:hidden '/>
        </div>
         <a href="" className='text-lg font-medium text-blue-600 hover:text-black md:hidden p-3'>See pricing -&gt;</a>
    </div>
    </div>
);
}

export default Pricing;