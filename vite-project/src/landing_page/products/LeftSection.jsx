import React from 'react';
function LeftSection({heading,desc,image,link1,link2}) {
    return ( 
        <div className="main md:h-[80vh] flex justify-center items-center p-4">
            <div className="container h-full md:w-[75%] bg-red- flex flex-col md:flex-row  justify-between items-center">
                <div className="md:w-[50%] h-[90%] hover:opacity-85"><img src={image} alt="" className="h-full w-full object-contain" /></div>
                <div className="md:w-[32%] space-y-8 p-3 mt-4">
                    <h1 className="text-3xl md:text-4xl font-medium text-gray-700 mb-5">{heading}</h1>
                    <h3 className="text-md md:text-lg md:font-normal text-gray-600 mb-5">{desc}</h3>
                    <div className="a flex flex-col md:flex-row justify-between md:w-[18vw]">
                        <a href="" className="text-sm font-medium md:text-lg md:font-normal hover:text-gray-700 text-blue-600">{link1} </a>
                        <a href="" className="text-sm font-medium md:text-lg md:font-normal hover:text-gray-700 text-blue-600">{link2} </a>
                    </div>
                    <div className="store flex space-x-4 md:space-x-10">
                        <a href=''><img src="media/googlePlay.svg" alt="googleplay" className="h-full w-full object-contain" /></a>
                        <a href=''><img src="media/appStore.svg" alt="appstore" className="h-full w-full object-contain" /></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;