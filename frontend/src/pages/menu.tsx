import Header from '../components/header';
import Footer from '../components/footer';
import Lower from '../components/lower';
import MenuHero from '../assets/menuhero.jpg';
import MenuLogo from '../assets/menulogo.svg';
import Menu1 from '../assets/menu1.png';
import Menu2 from '../assets/menu2.png';
import Menu3 from '../assets/menu3.png';
import Menu4 from '../assets/menu4.png';
import MyBg from '../assets/bg.jpg';
import BreakerMenu from '../assets/menubroker.svg';
function Menu() {
    return (
        <div style={{ backgroundImage: `url(${MyBg})` }} className='bg-cover bg-center bg-no-repeat text-white gap-20'>
            <div><Header /></div>
            <div className='flex justify-center  w-full h-[40vh] sm:h-[80vh] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${MenuHero})` }}>
                <img src={MenuLogo} alt="" className='w-[40rem]' />
            </div>
            <div className='flex justify-center items-center py-2'>
                <img src={BreakerMenu} alt="OUR MENU" className='w-[50rem]' />
            </div>
            <div className='flex flex-col h-full items-center justify-center py-10 px-20'>
                <div className='flex flex-wrap h-full items-center justify-center gap-20'>
                    <img src={Menu1} alt="" className='w-[40rem]' />
                    <img src={Menu2} alt="" className='w-[40rem]' />
                    <img src={Menu3} alt="" className='w-[40rem]' />
                    <img src={Menu4} alt="" className='w-[40rem]' />
                </div>
            </div>
            <div><Lower /></div>
            <div><Footer /></div>
        </div>
    )
}
export default Menu;