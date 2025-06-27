import React from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';
function Navbar() {
    const [isOpen,setIsOpen] = useState(false);
    return ( 
    <div className='relative'>
    <div className="nav h-[10vh] w-[100%] flex justify-between  md:justify-around items-center p-4 sticky">
        <div className="left h-[2vh] md:h-[2.5vh] md:w-[9vw] "><Link to="/"><img src="media\Zerodha_logo.png " className='h-[100%] w-[100%]'></img>  </Link></div>
        <div className=" flex items-center p-4 space-x-10">
        <div className="right md:flex  md:space-x-10 md:list-none  text-gray-500 hidden">
            <Link to="/signup"><li className=' hover:text-blue-600'>Signup</li>  </Link>
            <Link to="/about"><li className=' hover:text-blue-600'>About</li>  </Link>
            <Link to="/products" ><li className=' hover:text-blue-600'>Products</li> </Link>
            <Link to="/pricing"><li className=' hover:text-blue-600'>Pricing</li>  </Link>
            <Link  to="/support"><li className=' hover:text-blue-600'>Support</li> </Link>
           
        </div> 
        <div>
            <li className='font-bold text-xl text-gray-700 list-none'><button onClick={()=>setIsOpen(!isOpen)}><i className="fa-solid fa-bars"></i></button></li>
        </div>
        </div>
    </div>
    <hr className='text-gray-200'></hr>

    {isOpen && (
        <div className="absolute flex flex-col justify-between p-2 mt-2 ml-4 h-[80vh] w-[90vw] md:w-[80vw] bg-white md:shadow-none md:bg-transparent shadow-lg ">
        <div className=" grid grid-cols-2 grid-rows-3 bg-white gap-3 gap-x-5 list-none ml-3 text-gray-600 font-normal md:hidden p-4 ">
            <Link to="/signup"><li className=' hover:text-blue-600'>Signup</li>  </Link>
            <Link to="/about"><li className=' hover:text-blue-600'>About</li>  </Link>
            <Link to="/products" ><li className=' hover:text-blue-600'>Products</li> </Link>
            <Link to="/pricing"><li className=' hover:text-blue-600'>Pricing</li>  </Link>
            <Link  to="/support"><li className=' hover:text-blue-600'>Support</li> </Link>
           
        </div>
        <hr className='text-gray-200 md:hidden'></hr>

        <div className="grid grid-cols-2 p-2 grid-rows-2 gap-5  ml-1 mt-0 md: bg-white md:shadow-lg md:w-[45vw] md:h-[60vh] md:p-4 md:grid  md:grid-cols-4 md:grid-rows-1  md:ml-150 ">
            <div className="flex space-x-2 md:flex-col items-center md:justify-center  hover:opacity-80 ">
                <img src="media\kite_logo.png" alt="kite" className='h-6 w-6 md:h-10 md:w-10 md:mb-4 ' />
                <a className='text-md text-gray-600  hover:text-blue-600'>Kite</a>
                <a className='text-gray-400 text-sm hidden  md:block'>Trading Platform</a>
            </div>
            <div className="flex space-x-2 md:flex md:flex-col  items-center md:justify-center hover:opacity-80">
                <img src="media\console.svg" alt="kite" className='h-6 w-6 md:h-10 md:w-10 md:mb-4' />
                <a className='font-normal hover:text-blue-600 text-md text-gray-700 '>Console</a>
                <a className='text-gray-400 text-sm hidden md:block'>Backoffice</a>
            </div>
            <div className="flex space-x-2 md:flex md:flex-col  items-center md:justify-center hover:opacity-80">
                <img src="media\kite_connect.svg" alt="kite" className=' h-6 w-6 md:h-10 md:w-10 md:mb-4' />
                <a className='font-normal hover:text-blue-600 text-md text-gray-700 '>Kite Connect</a>
                <a className='text-gray-400 text-sm hidden md:block'>Trading APIs</a>
            </div>
            <div className="flex space-x-2 md:flex md:flex-col items-center md:justify-center hover:opacity-80 ">
                <img src="media\coin.svg" alt="kite" className='h-6 w-6 md:h-10 md:w-10 md:mb-4' />
                <a className='font-normal hover:text-blue-600 text-md text-gray-700 '>Coin</a>
                <a className='text-gray-400 text-sm hidden md:block'>Mutual Funds</a>
            </div>
            <div className=" md:hidden flex space-x-2 items-center  hover:opacity-80 ">
                <img src="media\varsity.png" alt="kite" className='h-5 w-5 md:h-10 md:w-10 md:mb-4' />
                <a className='font-normal hover:text-blue-600 text-md text-gray-700 '>Varsity</a>
                
            </div>
            <div className=" md:hidden flex space-x-2  items-center  hover:opacity-80 ">
                <img src="media\qna.png" alt="kite" className='h-5 w-5 md:h-10 md:w-10 md:mb-4' />
                <a className='font-normal hover:text-blue-600 text-md text-gray-700 '>Trading Q&A</a>
                
            </div>
            

            {/* <hr className='text-gray-200  md:hidden'></hr> */}

            {/* Row2 */}

            
        <div className="flex justify-between  mt-8  w-[80vw]  md:w-[90vh] md:h-[25vh] md:space-x-6 md:p-2 ">
            <div className="flex flex-col  p-2 md:ml-3 hover:opacity-80 ">
            <h4 className="font-medium text-md mb-4 text-gray-700">Utilities</h4>
            <ul className="list-none space-y-1 text-gray-600 text-md">
              <li className=" hover:text-blue-600"><a>Calculators</a></li>
              <li className=" hover:text-blue-600"><a>Brokerage calculator</a></li>
              <li className=" hover:text-blue-600"><a>Margin calculator</a></li>
              <li className=" hover:text-blue-600"><a>SIP calculator</a></li>
            </ul>
          </div>
          <div  className="flex flex-col p-2 hover:opacity-80">
            <h4 className="font-medium text-md mb-4 text-gray-700">Updates</h4>
            <ul className="list-none space-y-1  text-gray-600">
              <li className=" hover:text-blue-600"><a>Z-Connect blog</a></li>
              <li className=" hover:text-blue-600"><a>Circulars / Bulletin</a></li>
              <li className=" hover:text-blue-600"><a>IPOs</a></li>
              <li className=" hover:text-blue-600"><a>Markets</a></li>
            </ul>
          </div>
          <div  className="md:flex md:flex-col  p-4 hidden ">
            <h4 className="font-medium text-md mb-6 text-gray-700">Education</h4>
            <div className="flex items-center space-x-10  text-gray-600 hover:opacity-80">
                <div className="flex flex-col items-center space-y-4 ">
                <img src="media/varsity.png" alt="Varsity" className="h-8 w-8" />
                <a className=" hover:text-blue-600">Varsity</a>
                 </div>
                 <div className="flex flex-col items-center space-y-4 hover:opacity-80">
                <img src="media/qna.png" alt="Varsity" className="h-8 w-9" />
                <a className=" hover:text-blue-600">Trading Q&A</a>
                 </div>
            </div>
          </div>
          </div>
          </div>
            
 </div>
    )}
    </div> 
    );
}

export default Navbar;