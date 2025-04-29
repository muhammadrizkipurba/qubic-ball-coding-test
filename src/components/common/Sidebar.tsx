"use client"
import React, { ReactNode } from 'react'

const Sidebar = ({
  children
}: {
  children: ReactNode
}) => {
  return (
    <aside className='h-[calc(100vh-56px)] w-64'>
      <nav className='h-full flex flex-col bg-gray-50 dark:bg-slate-950 text-gray-900 dark:text-white shadow-sm'>
        <ul className='flex-1 px-3 py-5'>
          {children}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar