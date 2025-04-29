'use client'
import Image from 'next/image'
import React from 'react'
import { CgPushChevronRightR } from 'react-icons/cg'
import ThemeToggleButton from '../ui/ThemeToggleButton';
import { IoIosPower } from 'react-icons/io';
import { logout } from '@/app/login/actions';

type Props = {
  isOpenSidebar: boolean;
  setIsOpenSidebar: (val: boolean) => void;
}

const Header = ({
  isOpenSidebar,
  setIsOpenSidebar
}: Props) => {

  const onLogout = async() => {
    await logout();  
  };

  return (
    <header className='h-14 flex items-center'>
      <nav className='px-4 w-full'>
        <div className='flex justify-between items-center w-full'>
          <div className='flex items-center gap-5'>
            <button className='cursor-pointer md:hidden' onClick={() => setIsOpenSidebar(!isOpenSidebar)}>
              <CgPushChevronRightR size={20} className={`${isOpenSidebar ? 'rotate-180' : ''} transition-all duration-300`} />
            </button>
            <Image
              className="dark:invert w-32"
              src="/next.svg"
              alt="Next.js logo"
              width={180}
              height={38}
              priority
            />
          </div>
          <div className='flex gap-3'>
            <ThemeToggleButton />
            <button 
              className='text-red-600 text-sm font-semibold border border-red-600 px-2 py-1 rounded-md hover:text-white hover:bg-red-600 transition-colors duration-300 cursor-pointer flex items-center gap-1'
              onClick={onLogout}
            >
              Logout
              <IoIosPower size={18} />
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header