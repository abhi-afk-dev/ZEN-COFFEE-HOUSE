import { Link } from 'react-router-dom';
import logoImage from '../assets/LOGO.svg';

function Lower() { 
    return (
        <section className='w-full flex flex-col items-center justify-between py-8 md:py-12 bg-[#191919] text-white'>
            <div className='w-full flex flex-col items-center md:flex-row md:items-start md:justify-around px-4 md:px-20 py-4 gap-8 md:gap-0'>

                <div className='flex flex-col items-center md:items-start justify-start px-0 md:px-8 gap-3 text-center md:text-left'>
                    <h1 className='my-custom-robotocondensed-text font-bold text-xl md:text-2xl mb-2'>CONTACT US</h1> 
                    <p>ZEN COFFEE HOUSE</p>
                    <p>ADDRESS</p>
                    <p>PHONE</p>
                    <p>EMAIL: zencoffeehouse@gmail.com</p>
                    <p>ABOUT US</p>
                </div>

                <div className='flex flex-col items-center md:items-start justify-start px-0 md:px-8 gap-3 text-center md:text-left'>
                    <h3 className='my-custom-robotocondensed-text font-bold text-xl md:text-2xl mb-2'>OPENING HOURS</h3>
                    <p>Monday _________ 7:00am-5:00pm</p> 
                    <p>Tuesday _________ 7:00am-5:00pm</p>
                    <p>Wednesday _________ Closed</p>
                    <p>Thursday _________ 7:00am-5:00pm</p>
                    <p>Friday _________ 7:00am-5:00pm</p>
                    <p>Saturday _________ 7:00am-5:00pm</p>
                    <p>Sunday _________ 7:00am-5:00pm</p>
                </div>

                <div className='flex flex-col items-center md:items-start justify-start px-0 md:px-8 gap-3 text-center md:text-left'> 
                    <h1 className='my-custom-robotocondensed-text font-bold text-xl md:text-2xl mb-2'>LOCATIONS</h1>
                    <p>Delhi</p> 
                    <p>Bengaluru</p> 
                    <p>Assam</p>
                </div>

                <div className='flex flex-col items-center md:items-start justify-start px-0 md:px-8 gap-3 text-center md:text-left'> 
                    <h1 className='my-custom-robotocondensed-text font-bold text-xl md:text-2xl mb-2'>SITE LINKS</h1> 
                    <Link to="/" className="my-custom-robotocondensed-text text-base md:text-lg">Home</Link> 
                    <Link to="/menu" className="my-custom-robotocondensed-text text-base md:text-lg">Our Menu</Link>
                    <Link to="/giftshop" className="my-custom-robotocondensed-text text-base md:text-lg">Gift Shop</Link>
                </div>
            </div>

            <div className='w-full flex justify-center md:justify-start px-4 md:px-46 mt-8 md:mt-0'> 
                <Link to="/" className="my-custom-robotocondensed-text text-lg text-2xl">
                    <img src={logoImage} alt="ZEN COFFEE HOUSE" className="w-48 sm:w-64 md:w-80 lg:w-[85%] h-auto" />
                </Link>
            </div>
        </section>
    );
}

export default Lower;