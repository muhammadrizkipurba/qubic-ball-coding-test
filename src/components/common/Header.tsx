import Image from 'next/image'
import React from 'react'
import { CgPushChevronRightR } from 'react-icons/cg'
import ThemeToggleButton from '../ui/ThemeToggleButton';

type Props = {
  isOpenSidebar: boolean;
  setIsOpenSidebar: (val: boolean) => void;
}

const Header = ({
  isOpenSidebar,
  setIsOpenSidebar
}: Props) => {
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
          <ThemeToggleButton />
        </div>
      </nav>
    </header>
  )
}

export default Header