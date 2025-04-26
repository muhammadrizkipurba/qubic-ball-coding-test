'use client';
import React, { ReactNode } from 'react';
import Sidebar from '@/components/common/Sidebar';
import SidebarItem from '@/components/common/SidebarItem';
import { sidebarMenus } from '@/constants';
import { usePathname } from 'next/navigation';

type Props = { children: ReactNode }

const MainLayout = ({ children }: Props) => {
  const pathname = usePathname();
  return (
    <div className='flex'>
      <Sidebar>
        {sidebarMenus.map((item, idx) => {
          return (
            <SidebarItem key={`sidebar-item-${idx}`} text={item.text} active={pathname === `/${item.slug}`} slug={item.slug} />
          )
        })}
      </Sidebar>
      <div className='flex-1 px-5 py-4 dark:bg-gray-900'>
        {children}
      </div>
    </div>
  )
}

export default MainLayout