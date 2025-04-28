import Image from 'next/image'
import React, { ReactNode } from 'react'
import { MdMoreVert } from 'react-icons/md'

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

        <div className='border-t border-gray-300 dark:border-gray-800 flex p-3'>
          <Image
            src="https://ui-avatars.com/api/?name=Test+User&background=1c1c1c&color=ffffff&bold=true"
            alt="avatar"
            width={50}
            height={50}
            priority
            className='w-10 h-10 rounded-lg'
          />
          <div className='flex justify-between items-center w-full ml-3'>
            <div className='leading-4'>
              <h4 className='font-semibold'>Test User</h4>
              <span className='text-xs'>testuser@email.com</span>
            </div>
            <MdMoreVert size={20} />
          </div>
        </div>
      </nav>
    </aside>
  )
}

export default Sidebar