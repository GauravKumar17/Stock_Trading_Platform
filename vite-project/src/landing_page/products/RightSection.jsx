import React from 'react';
function RightSection({heading,desc,image,link1}) {
    return ( 
        <div className="main md:h-[80vh] flex justify-center items-center p-4">
            <div className="container h-full md:w-[70%] bg-red- flex flex-col md:flex-row  justify-between items-center">
                <div className="md:w-[50%] h-[90%] hover:opacity-85 md:hidden"><img src={image} alt="" className="h-full w-full object-contain " /></div>
                <div className="md:w-[32%] space-y-8 p-3 mt-4">
                    <h1 className="text-3xl md:text-4xl font-medium text-gray-700 mb-5">{heading}</h1>
                    <h3 className="text-md md:text-lg md:font-normal text-gray-600 mb-5">{desc}</h3>
                    <div className="a flex flex-col md:flex-row justify-between md:w-[18vw]">
                        <a href="" className="text-sm font-medium md:text-lg md:font-normal hover:text-gray-700 text-blue-600">{link1} </a>
                    </div>
                </div>
                <div className="md:w-[50%] h-[90%] hover:opacity-85 hidden md:block"><img src={image} alt="" className="h-full w-full object-container " /></div>
            </div>
        </div>
     );
}

export default RightSection;