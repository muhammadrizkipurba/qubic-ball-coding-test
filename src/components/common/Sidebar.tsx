import Image from 'next/image'
import React, { ReactNode } from 'react'
import { CgPushChevronLeftR } from 'react-icons/cg'
import { MdMoreVert } from 'react-icons/md'

const Sidebar = ({
  children
}: {
  children: ReactNode
}) => {
  return (
    <aside className='h-screen w-64'>
      <nav className='h-full flex flex-col bg-gray-50 dark:bg-slate-950 text-gray-900 dark:text-white shadow-sm'>
        <div className='p-4 pb-2 flex justify-between items-center'>
          <Image
            className="dark:invert w-32"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <button className='cursor-pointer'>
            <CgPushChevronLeftR size={20} />
          </button>
        </div>

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