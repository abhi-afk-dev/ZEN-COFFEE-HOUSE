import { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/LOGO.svg';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className='z-100 w-full flex items-center justify-between py-4 px-4 md:px-8 bg-black text-white relative'>
            <Link to="/" className="my-custom-robotocondensed-text text-lg text-2xl">
                <img src={logoImage} alt="ZEN COFFEE HOUSE" className="w-40 sm:w-48 md:w-[20rem] h-auto"/>
            </Link>

            <div className="md:hidden">
                <button onClick={toggleMenu} className="text-white focus:outline-none focus:ring-2 focus:ring-white rounded-md p-2 transition duration-300 ease-in-out transform hover:scale-110" aria-label="Toggle menu">
                    {isMenuOpen ? (
                        <svg
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg>
                    ) : (
                        <svg
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    )}
                </button>
            </div>


            <div
                className={`  ${isMenuOpen ? 'flex' : 'hidden'}  md:flex md:flex-row  absolute md:relative  top-full left-0  w-full md:w-auto  bg-black md:bg-transparent  flex-col  items-center  py-4 md:py-0  gap-4 md:gap-8 lg:gap-16  z-10  rounded-b-lg md:rounded-none  shadow-lg md:shadow-none`}
            >
                <button className="hover:bg-white hover:text-black text-white font-bold h-10 px-6 rounded-md text-lg transition duration-300 transform hover:scale-105 my-1 md:my-0">
                    <Link to="/" className="my-custom-robotocondensed-text text-lg">Home</Link>
                </button>
                <button className="hover:bg-white hover:text-black text-white font-bold h-10 px-6 rounded-md text-lg transition duration-300 transform hover:scale-105 my-1 md:my-0">
                    <Link to="/menu" className="my-custom-robotocondensed-text text-lg">Menu</Link>
                </button>
                <button className="hover:bg-white hover:text-black text-white font-bold h-10 px-6 rounded-md text-lg transition duration-300 transform hover:scale-105 my-1 md:my-0">
                    <Link to="/giftshop" className="my-custom-robotocondensed-text text-lg">Gift Shop</Link>
                </button>
            </div>
        </nav>
    );
}

export default Header;