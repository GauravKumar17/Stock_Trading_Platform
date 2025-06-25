import React from 'react';
function Universe() {
    return ( 
        <div className="main md:mt-8 md:h-[110vh] h-[250vh] flex flex-col  items-center p-4">
            <div className="container flex flex-col items-center justify-center mt-8 text-center p-4 md:p-0">
                <div className="para1 mb-10 "><p className="text-lg md:text-xl font-normal text-gray-700 ">Want to know more about our technology stack? Check out the <a href="" className="text-blue-600 font-medium hover:text-gray-700"> Zerodha.tech </a>blog.</p></div>
                <div className="para2 flex flex-col items-center mt-15 ">
                    <p className="text-3xl md:text-4xl font-medium text-gray-700 mb-6">The Zerodha Universe</p>
                    <p className="text-md md:text-lg font-normal text-gray-700 ">Extend your trading and investment experience even further with our partner platforms</p>
                </div>
            </div>
            <div className="flex justify-center items-center  md:h-[] w-[100%]  ">
            <div className=" md:grid md:grid-cols-3 md:grid-rows-2  mt-10 md:w-[65%] w-[100vw] ">
                <Container image="media/zerodhafundhouse.png" desc="Our asset management venture that is creating simple and transparent index funds to help you save for your goals." />
                <Container image="media/sensible.svg" desc="Options trading platform that lets youcreate strategies, analyze positions, and examinedata points like open interest, FII/DII, and more.." />
                <Container image="media/tijori.svg" desc="Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.." />
                <Container image="media/streak.png" desc="Systematic trading platform that allows you to create and backtest strategies without coding.." />
                <Container image="media/smallcase.png" desc="Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs." />
                <Container image="media/dittoLogo.png" desc="Personalized advice on life and health insurance. No spam and no mis-selling. Sign up for free"/>
        </div>
        </div>
        <div className="flex flex-col justify-center items-center">
        <button className="text-lg border-0 md:p-3 p-1.5 pl-8 pr-8 md:pl-15 md:pr-15 bg-blue-500 text-white font-medium rounded-sm hover:bg-gray-800">Signup for free</button></div>
        </div>
     );
}

function Container({image,desc}){
    return(
        <div className="main flex flex-col items-center text-center justify-center space-y-3 md:h-[25vh] md:w-[22vw] p-4 md:p-2 mb-6">
            <div className="image h-[35%] w-[60%]"><a href=""><img src={image} alt="" className='h-full w-full object-contain' /></a></div>
            <div className="desc text-xs md:text-xs  text-gray-400 w-[70vw] md:w-[13vw] font-medium">{desc}</div>
        </div>

    );
}

export default Universe;