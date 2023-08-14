import '../app/globals.css'
import Link from 'next/link'
import Image from 'next/image';
import Styles from '../common.module.css';
import { useState } from 'react';
export default function TopBar() {
    const [show, setShow] = useState(false);
    const toggleMenu = () => {
        setShow(!show)
    }
    return (
        <div className={`bg-[#132031] h-[50px] w-full flex justify-between items-center px-3 ${Styles.topNav}`}>
            <div className={`${Styles.mobileMenu}`}>
                <button onClick={toggleMenu}>
                    <Image
                        src="/img/svg/menu-white.svg"
                        alt="menu"
                        height={34}
                        width={34}
                    />
                </button>
            </div>
            {
                show ?

                    <div className={`${Styles.desktopMenu}`}>
                        <div className={`relative ${Styles.logo}`}>
                            <span className='bg-[#B22136] h-[30px] w-[30px] inline-flex justify-center items-center text-white text-2xl font-bold mr-[2px]'>F</span>
                            <span className='bg-[#EC904A] h-[30px] w-[30px] inline-flex justify-center items-center text-black text-2xl font-bold mr-[2px]'>O</span>
                            <span className='bg-[#F2BE11] h-[30px] w-[30px] inline-flex justify-center items-center text-black text-2xl font-bold mr-[2px]'>R</span>
                            <span className='bg-[#418A6B] h-[30px] w-[30px] inline-flex justify-center items-center text-black text-2xl font-bold mr-[2px]'>U</span>
                            <span className='bg-[#17279B] h-[30px] w-[30px] inline-flex justify-center items-center text-white text-2xl font-bold'>M</span>
                        </div>
                        <div className={` ${Styles.menuWrap}`}>
                            <ul className={`text-white flex ${Styles.navigation}`}>
                                <li className='mr-6'><Link href="#">Journey</Link></li>
                                <li className='mr-6'><Link href="#">Spectrum</Link></li>
                                <li className='mr-6'><Link href="#">Edibles</Link></li>
                                <li className='mr-6'><Link href="#">Extracts</Link></li>
                                <li className='mr-6'><Link href="#">Experiences</Link></li>
                                <li className='mr-6'><Link href="#">Fort</Link></li>
                                <li className='mr-6'><Link href="#">Team</Link></li>
                                <li className='mr-6'><Link href="#">Forests</Link></li>
                                <li className='mr-6'><Link href="#">Spas</Link></li>
                                <li className='mr-6'><Link href="#">Sponsors</Link></li>
                                <li className='mr-6'><Link href="#">Downloads</Link></li>
                                <li className='mr-0'><Link href="#">Communications</Link></li>
                            </ul>
                        </div>
                    </div>
                    : null
            }

            <div className={`${Styles.desktopMenu1}`}>
                <div className={`relative ${Styles.logo}`}>
                    <span className='bg-[#B22136] h-[30px] w-[30px] inline-flex justify-center items-center text-white text-2xl font-bold mr-[2px]'>F</span>
                    <span className='bg-[#EC904A] h-[30px] w-[30px] inline-flex justify-center items-center text-black text-2xl font-bold mr-[2px]'>O</span>
                    <span className='bg-[#F2BE11] h-[30px] w-[30px] inline-flex justify-center items-center text-black text-2xl font-bold mr-[2px]'>R</span>
                    <span className='bg-[#418A6B] h-[30px] w-[30px] inline-flex justify-center items-center text-black text-2xl font-bold mr-[2px]'>U</span>
                    <span className='bg-[#17279B] h-[30px] w-[30px] inline-flex justify-center items-center text-white text-2xl font-bold'>M</span>
                </div>
                <div className={` ${Styles.menuWrap}`}>
                    <ul className={`text-white flex ${Styles.navigation}`}>
                        <li className='mr-6'><Link href="#">Journey</Link></li>
                        <li className='mr-6'><Link href="#">Spectrum</Link></li>
                        <li className='mr-6'><Link href="#">Edibles</Link></li>
                        <li className='mr-6'><Link href="#">Extracts</Link></li>
                        <li className='mr-6'><Link href="#">Experiences</Link></li>
                        <li className='mr-6'><Link href="#">Fort</Link></li>
                        <li className='mr-6'><Link href="#">Team</Link></li>
                        <li className='mr-6'><Link href="#">Forests</Link></li>
                        <li className='mr-6'><Link href="#">Spas</Link></li>
                        <li className='mr-6'><Link href="#">Sponsors</Link></li>
                        <li className='mr-6'><Link href="#">Downloads</Link></li>
                        <li className='mr-0'><Link href="#">Communications</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}