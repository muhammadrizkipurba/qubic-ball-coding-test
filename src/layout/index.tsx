'use client';
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

import Sidebar from '@/components/common/Sidebar';
import SidebarItem from '@/components/common/SidebarItem';
import Header from '@/components/common/Header';

import { sidebarMenus } from '@/constants';

type Props = { children: ReactNode }

const MainLayout = ({ children }: Props) => {
  const pathname = usePathname();  
  const sidebarRef = useRef<HTMLDivElement>(null);

  const [isOpenSidebar, setisOpenSidebar] = useState<boolean>(false);

  const handleClickOutside = (event: MouseEvent) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
      setisOpenSidebar(false);
    };
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='flex flex-col h-screen'>
      <Header isOpenSidebar={isOpenSidebar} setIsOpenSidebar={setisOpenSidebar} />
      <div className='relative flex overflow-x-hidden flex-1'>
        <div ref={sidebarRef} className={`${isOpenSidebar ? 'left-0' : '-left-full md:left-0'} absolute md:relative transition-all delay-50 duration-300 z-10`}>
          <Sidebar>
            {sidebarMenus.map((item, idx) => {
              return (
                <SidebarItem
                  key={`sidebar-item-${idx}`}
                  text={item.text}
                  active={pathname.includes(item.slug)}
                  slug={item.slug}
                />
              )
            })}
          </Sidebar>
        </div>
        <div 
          className='flex-1 px-5 py-4 dark:bg-gray-900 overflow-y-auto'
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export default MainLayout