import React from 'react';
function Footer() {
    return ( 
        <>
        <div className="container h-[270vh]  md:h-[60vh] w-[100%] p-4 mt-8 md:w-[100vw] md:flex md:justify-center bg-gray-100 overflow-hidden">
            <div className="sub md:flex md:justify-between md:w-[70vw] md:h-[100%] h-[100%]">
            <div className="md:flex md:flex-col md:w-[30%] p-2">
            <div className="img h-[8vh] w-[40vw] md:w-[10vw]  "><img src="media/Zerodha_logo.png" alt="" className='h-full w-full object-contain'/></div>
            <div className="para mb-4">
                <p className="text-sm text-gray-500">© 2010 - 2025, Zerodha Broking Ltd.</p>
                <p className="text-sm text-gray-500">All rights reserved.</p>
            </div>
            <div className="scocial space-x-6  h-[5vh] text-gray-500 mb-4">
                <a href="" className='hover:text-blue-600 md:text:xl text-lg'><i className="fa-brands fa-x-twitter "></i></a>
                <a href="" className='hover:text-blue-600 md:text:xl text-lg'><i className="fa-brands fa-square-facebook"></i></a>
                <a href="" className='hover:text-blue-600 md:text:xl text-lg'><i className="fa-brands fa-instagram"></i></a>
                <a href="" className='hover:text-blue-600 md:text:xl text-lg'><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
            <hr className="p mb-4 text-gray-200" />
            <div className="scocial space-x-6 text-gray-500 ">
                <a href="" className='hover:text-blue-600 md:text:xl text-lg'><i className="fa-brands fa-youtube"></i></a>
                <a href="" className='hover:text-blue-600 md:text:xl text-lg'><i className="fa-brands fa-whatsapp"></i></a>
                <a href="" className='hover:text-blue-600 md:text:xl text-lg'><i className="fa-brands fa-telegram"></i></a>
            </div>
            </div>
            <div className="maincontainer md:flex md:justify-around md:w-[70%]">
                <FooterComp heading="Account" a="Open demat account" b="Minor demat account" c="NRI demat account" d="Commodity" e="Dematerialisation" f="Fund transfer" g="MTF" h="Referral program" />
                <FooterComp heading="Support" a="Contact us" b="Support portal" c="How to file a complaint?" d="Status of your complaints" e="Bulletin" f="Circular" g="Z-Connect blog" h="Downloads" />
                <FooterComp heading="Company" a="About" b="Philosophy" c="Press & media" d="Careers" e="Zerodha Cares (CSR)" f="Zerodha.tech" g="Open source" h="" />
                <FooterComp heading="Quick links" a="Upcoming IPOst" b="Brokerage charges" c="Market holidays" d="Economic calendar" e="Calculators" f="Markets" g="Sectors" h="" />
            </div>
            </div>
            
           
        </div>
        <div className="container h-[100vh] md:h-[60vh] w-[100%] p-4  md:w-[100vw] md:flex md:flex-col md:justify-center md:items-center bg-gray-100">
            <div className="para text-xs space-y-4 text-gray-400 md:w-[70vw] w-[90vw]">
            <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
            <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
            <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
            <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
            <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>
        </div>
        
         <div className="exchanges space-x-5 text-xs  md:flex md:justify-center text-gray-500 mt-5 md:h-[5vh] h-[15vh] w-[91vw] p-0.5 ">
                <a href="">NSE</a>
                <a href="">BSE</a>
                <a href="">MCX</a>
                <a href="">Terms & conditions</a>
                <a href="">Policies & procedures</a>
                <a href="">Privacy policy</a>
                <a href="">Disclosure</a>
                <a href="">For Investors attention</a>
                <a href="">Investor</a>
                <a href="">Charter</a>
            </div>
        </div>
        </>
     );
}

function FooterComp({heading,a,b,c,d,e,f,g,h}){
    return (
        <>
        <div className="container flex flex-col justify-center md:justify-start space-y-4 mb-10 mt-6">
            <h1 className='text-md md:text-lg font-medium text-gray-700'>{heading}</h1>
            <a href="" className='text-sm md:text-md hover:text-blue-600  font-medium text-gray-500'>{a}</a>
            <a href="" className='text-sm md:text-md hover:text-blue-600 font-medium text-gray-500'>{b}</a>
            <a href="" className='text-sm md:text-md hover:text-blue-600 font-medium text-gray-500'>{c}</a>
            <a href="" className='text-sm md:text-md hover:text-blue-600 font-medium text-gray-500'>{d}</a>
            <a href="" className='text-sm md:text-md hover:text-blue-600 font-medium text-gray-500'>{e}</a>
            <a href="" className='text-sm md:text-md hover:text-blue-600 font-medium text-gray-500'>{f}</a>
            <a href="" className='text-sm md:text-md hover:text-blue-600 font-medium text-gray-500'>{g}</a>
            <a href="" className='text-sm md:text-md hover:text-blue-600 font-medium text-gray-500'>{h}</a>
        </div>
        
        
        </>
    );
}

export default Footer;

