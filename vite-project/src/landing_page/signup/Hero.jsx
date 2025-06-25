import React from 'react';
function Hero() {      
    return ( 
        <div className="main md:h-[100vh] md:flex md:justify-center p-2 ">
            <div className="container h-full md:w-[80vw] flex flex-col items-center overflow-hidden">
                <div className="img w-[85%] h-[80%] flex justify-center items-center  mt-5"><img src="media/signup.svg" alt="" className='h-full w-full object-contain md:hidden ' /></div>
                <div className=" md: border-none  shadow-lg w-[90%] flex flex-col items-center justify-center mt-4 p-4 md:mt-0 md:p-0 bg-white rounded-lg">
                <div className="para flex flex-col items-center md:m-25 ">
                    <hl className=" text-2xl md:text-4xl font-medium text-gray-700 mb-5">Open a free demat & trading account online</hl>
                    <h3 className="md:text-xl md:font-normal text-gray-600 hidden md:block">Start investing brokerage free and join a community of 1.5+ crore investors and traders</h3>
                </div>
                <div className="md:flex md:justify-between w-full ">
                    <div className="img w-[50%] h-[80%]"><img src="media/signup.svg" alt="" className='h-full w-full object-contain hidden md:block' /></div>
                    <div className="form md:w-[50%]">
                        <div className="mb-10 ">
                            <h2 className=" text-xl md:text-2xl font-medium text-gray-700">Signup now</h2>
                            <h3 className="md:text-lg md:font-normal text-gray-500 mb-4 hidden md:block">Or track your existing application</h3>
                        <form action="" className="class">
                            <div className="flex mt-6 mb-8">
                                <div className="flex justify-center border-1 border-r-0 p-3 pl-3 pr-3 border-gray-500">
                                    <img src="media/flag.svg" alt="" />
                                    <p className="l">+91</p>
                                </div>
                                <input type="text" maxlength="10" pattern="[0-9]{10}" inputmode="numeric" placeholder="Enter your mobile number" className="border-1 md:p-3 md:pl-6 md:pr-7 p-2 pl-20 pr-20 text-md text-gray-500 w-[18vw] border-gray-500" />

                            </div>
                            <button className="text-lg border-0 md:p-3 p-2 pl-20 pr-20 md:pl-25 md:pr-25 bg-blue-500 text-white font-medium rounded-sm hover:bg-gray-800">Get OTP</button>
                        </form>
                        </div>
                        <div className="para text-sm md:text-md text-gray-400">By proceeding, you agree to the Zerodha <a className='text-blue-600'>terms</a> & <a className='text-blue-600'>privacy policy</a></div>
                    </div>
                </div>
                </div>
            </div>
        </div>
     );
}

export default Hero;