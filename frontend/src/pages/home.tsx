import Header from '../components/header';
import Footer from '../components/footer';
import Lower from '../components/lower';
import { Link } from 'react-router-dom';
import BreakerHome from '../assets/breaker.svg';
import HeroVideo from '../assets/hero.mp4';
import HeroLogo from '../assets/herologo.svg';
import LocationD from '../assets/Vector.png';
import LocationB from '../assets/Vector-1.png';
import LocationA from '../assets/Vector-2.png';
import Coffee from '../assets/coffee.png';
import Hours from '../assets/OPENING HOURS.svg';
import MyBg from '../assets/bg.jpg';
import ChromaGrid from '../components/chroma';
import Best1 from '../assets/bestseller/1.jpg';
import Best2 from '../assets/bestseller/2.jpg';
import Best3 from '../assets/bestseller/3.jpg';
import Best4 from '../assets/bestseller/4.jpg';

const items = [
    {
        image: Best1,
        title: "Flat white",
        subtitle: "Vanilla Latte",
        borderColor: "#3B82F6",
        gradient: "linear-gradient(145deg, #3B82F6, #000)",
    },
    {
        image: Best2,
        title: "Cappuccino",
        subtitle: "Iced Cappuccino",
        borderColor: "#3B82F6",
        gradient: "linear-gradient(145deg, #3B82F6, #000)",
    },
    {
        image: Best3,
        title: "Espresso",
        subtitle: "Caramel Macchiato",
        borderColor: "#10B981",
        gradient: "linear-gradient(180deg, #10B981, #000)",
    },
    {
        image: Best4,
        title: "Mocha",
        subtitle: "Dark Chocolate Mocha",
        borderColor: "#10B981",
        gradient: "linear-gradient(180deg, #10B981, #000)",
    }
];

function Home() {
    return (
        <div style={{ backgroundImage: `url(${MyBg})` }} className='bg-cover bg-center bg-no-repeat text-white gap-20'>
            <div><Header /></div>

            <div className='relative w-full h-[40vh] sm:h-[80vh] overflow-hidden'>
                <video src={HeroVideo} className='w-full h-[80vh] object-cover' autoPlay loop muted>
                </video>

                <div className="absolute inset-0 w-80rem  z-10 flex items-center justify-center flex-col md:flex-col">
                    <img src={HeroLogo} alt="" />
                    <div className='flex items-center justify-center flex-col md:flex-row'>
                        <button className="bg-white/20 border-4 hover:border-white hover:text-white text-black font-bold py-3 px-6 rounded-[5px] text-lg m-2 transition duration-300 transform hover:scale-105">
                            <Link to="/menu" className="my-custom-robotocondensed-text text-lg text-2xl">SEE OUR MENU</Link>
                        </button>
                        <button className="bg-black hover:bg-white hover:text-black text-white font-bold py-3 px-6 rounded-[5px] text-lg m-2 transition duration-300 transform hover:scale-105">
                            <Link to="/" className="my-custom-robotocondensed-text text-lg text-2xl">CHECK LOCATIONS</Link>
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <img src={BreakerHome} alt="ZEN COFFEE HOUSE" className='w-[60rem]' />
            </div>

            <div className='flex flex-wrap items-start justify-around py-10 px-20 text-white'>
                <div className='flex sm:flex-col sm:flex-row items-center h-full justify-start gap-2 sm:gap-10 '>
                    <div className=' flex flex-col items-start h-full justify-start w-full sm:w-135 gap-12'>

                        <div className='z-10 flex flex-col items-start justify-center gap-4 w-full'>
                            <h1 className='my-custom-robotocondensed-text text-2xl font-semibold  w-full'>RELAX AND WORK</h1>
                            <p className='text-1xl'>At Zen coffee house people come from all around to rest, relax and work with good coffee ,good company, and great food!</p>
                        </div>
                        <div className='z-10 flex flex-col items-start justify-center gap-4 w-full'>
                            <h1 className='my-custom-robotocondensed-text text-2xl font-semibold w-full '>WANT A BOOST OF ENERGY!</h1>
                            <p className='text-1xl'>We offer some of the best locally roasted coffee beans. Enjoy Dark, Blonde, Jamaican, Italian & Decaf roasts. Also available are our specialty Lattes, Frappes, Mochas, Cappuccinos, Americanos & more …</p>
                            <br />
                            <p>To see more of our coffee, specialty drinks & food menus, please click the link below</p>
                        </div>
                        <div className='z-10 flex flex-col items-start py-5 justify-center w-full'>
                            <h1 className='my-custom-robotocondensed-text text-2xl font-semibold w-full '>CLICK TO LEARN MORE ➜</h1>
                        </div>
                        <div className="absolute justify-center align-center h-full left-40 z-0 sm:left-200 sm:top-300">
                            <img src={Coffee} alt="" className="w-72 h-auto opacity-50 sm:opacity-100 " />
                        </div>
                    </div>

                </div>
                <img src={Hours} alt="" className='w-[30rem]' />

            </div>

            <div className='flex flex-col items-center justify-center text-white py-10 gap-12'>
                <h2 className='text-5xl'>BEST SELLERS</h2>
                <div style={{ height: 'auto', position: 'relative' }}>
                    <ChromaGrid
                        items={items}
                        radius={300}
                        damping={0.45}
                        fadeOut={0.6}
                        ease="power3.out"
                    />
                </div>
            </div>
            <div className='flex flex-col items-center justify-center py-10 text-white gap-12'>
                <h2 className='text-5xl'>LOCATIONS</h2>
                <div className='bg-white/10 backdrop-blur-md border border-white/30 shadow-lg flex flex-wrap align-center justify-center gap-10 sm:40 py-10 px-12 rounded-4xl'>
                    <div className='flex flex-col items-center justify-center gap-2'>
                        <img src={LocationD} alt="Delhi" />
                        <h2 className='text-2xl '>DELHI</h2>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-2'>
                        <img src={LocationB} alt="Bengluru" />
                        <h2 className='text-2xl '>BENGLURU</h2>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-2'>
                        <img src={LocationA} alt="Assam" />
                        <h2 className='text-2xl'>ASSAM</h2>
                    </div>
                </div>
            </div>
            <div><Lower /></div>
            <div><Footer /></div>
        </div>
    )
}
export default Home;
