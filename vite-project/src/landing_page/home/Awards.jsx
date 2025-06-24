import React from 'react';
function Awards() {
    return (
      <>
      <div className='md:flex md:justify-center min-w-0 overflow-hidden'>
      
    <div className="container md:flex md:items-center md:justify-around md:h-[90vh] md:w-[75vw] md:mt-20 ">
    <div className="textcontainer md:flex md:flex-col md:w-[45%]">
      <div className="para text-3xl md:text-4xl  font-semibold text-gray-700 p-5 ">Trust with confidence</div>
      <div className="left ">
        <Para title="Customer-first always" desc="That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India." />
      </div>
      <div className="left">
        <Para title="No spam or gimmicks" desc="No gimmicks, spam, &quot;gamification&quot;, or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies." />
      </div>
      <div className="left">
        <Para title="The Zerodha universe" desc="Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs." />
      </div>
      <div className="left">
        <Para title="Do better with money" desc="With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money." />
      </div>
      
      
    </div>
    <div className='right p-5 md:w-[55%] md:h-[100%]'>
        <img src="media/ditto.png" alt="ditto" className='h-full w-full object-contain' />
        <div className='flex w-full space-x-6 items-center justify-center text-blue-400 mt-4  text-md font-medium'>
          <a className='hover:text-black'>Explore our products -&gt;</a>
          <a className='hover:text-black'>Try Kite demo -&gt;</a>
        </div>
      </div>
      </div>
    </div>
    <div className="press w-[100vw] h-[20vh] md:mt-6 flex items-center justify-center"><img src="media/press.png" alt="ditto" className='h-[100%] w-[90%] md:w-[45%] object-contain min-w-0 overflow-hidden' /></div>
    </>
  );
}

function Para({title, desc}){
  return(
      <div className='p-5 '>
        <h1 className='text-lg md:text-xl text-gray-600 font-medium mb-2'>{title}</h1>
        <h3 className='text-md md:text-lg text-gray-600 font-normal '>{desc}</h3>
    </div>
  );
}

export default Awards;