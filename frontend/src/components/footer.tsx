import CopyImgae from '../assets/copy.svg'
import InstaImgae from '../assets/Instagram.svg'
import FaceImgae from '../assets/Facebook.svg'
import GmailImgae from '../assets/Gmail.svg'


function Footer() { 
    return (
        <footer className='w-full flex flex-col md:flex-row items-center md:justify-between py-4 px-4 md:px-8 bg-black text-white'>
            <div className="mb-4 md:mb-0">
                <img
                    src={CopyImgae} 
                    alt="2023-ZEN COFFEE HOUSE-ALL RIGHTS RESERVED"
                    className="w-80 h-auto"
                />
            </div>
            
            <div className='flex flex-row gap-4 md:gap-6'>
                <img src={InstaImgae} alt="Instagram" className="w-14 h-14 rounded-full"/>
                <img src={FaceImgae} alt="Facebook" className="w-14 h-14 rounded-full"/>
                <img src={GmailImgae} alt="Gmail" className="w-14 h-14 rounded-full"/> 
            </div>
        </footer>
    )
}

export default Footer;