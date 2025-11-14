import Header from '../components/header';
import Footer from '../components/footer';
import Lower from '../components/lower';
import MyBg from '../assets/bg.jpg';
import GiftHero from '../assets/gifthero.jpg';
import GiftLogo from '../assets/giftlogo.svg';
import BreakerGift from '../assets/giftbroker.svg';
import Gifts from '../components/gifts';
import Cup from '../assets/cup.svg';
import Pbag from '../assets/pbag.svg';
import Cbag from '../assets/cbag.svg';
import Beans from '../assets/beans.svg';

const GiftItemsData = [
    {
        id: 1,
        name: "Coffee Cup",
        price: "₹80",
        image: Cup,
    },
    {
        id: 2,
        name: "Paper Carry Bag",
        price: "₹50",
        image: Pbag,
    },
    {
        id: 3,
        name: "Clothed Bag",
        price: "₹100",
        image: Cbag,
    },
    {
        id: 4,
        name: "Coffee Beans Pack",
        price: "₹350",
        image: Beans,
    },
    {
        id: 5,
        name: "Clothed Bag",
        price: "₹100",
        image: Cbag,
    },
    {
        id: 6,
        name: "Coffee Cup",
        price: "₹80",
        image: Cup,
    }
];

function GiftShop() {
    return (
        <div style={{ backgroundImage: `url(${MyBg})` }} className='bg-cover bg-center bg-no-repeat text-white gap-20'>
            <div><Header /></div>
            <div className='bg-cover bg-center bg-no-repeat flex justify-center  w-full h-[40vh] sm:h-[80vh]' style={{ backgroundImage: `url(${GiftHero})` }}>
                <img src={GiftLogo} alt="" className='w-[30rem]' />
            </div>
            <div className='flex justify-center items-center'>
                <img src={BreakerGift} alt="ZEN Gifts" className='w-[50rem]' />
            </div>
            <div>
                <Gifts
                    items={GiftItemsData}
                />
            </div>
            <div><Lower /></div>
            <div><Footer /></div>
        </div>
    )
}
export default GiftShop;