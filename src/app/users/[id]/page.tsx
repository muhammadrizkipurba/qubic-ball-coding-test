import { fetchUserDetails } from '@/actions/users';
import PageTitle from '@/components/ui/PageTitle';
import React, { ReactNode } from 'react';
import { PostData } from '../../../../types';
import Link from 'next/link';
import { FaChevronLeft } from 'react-icons/fa6';
import { BiEdit } from 'react-icons/bi';

const DisplayText = ({ title, text }: { title: string; text: string }) => {
  return (
    <div>
      <label className='text-sm'>{title}</label>
      <p className='font-bold text-sm'>{text}</p>
    </div>
  )
};

const Card = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <div className='mt-8 border border-slate-800 rounded-md overflow-hidden'>
      <h2 className='transition-colors bg-gradient-to-tr from-slate-900 to-slate-600 text-white dark:invert font-semibold text-lg py-2 px-4'>
        {title}
      </h2>
      {children}
    </div>
  )
}

const UserDetails = async ({
  params
}: {
  params: Promise<{ id: string }>
}) => {
  const { id } = await params;
  const userDetails = await fetchUserDetails(Number(id));

  return (
    <div>
      <div className='flex flex-col md:flex-row md:items-center justify-between gap-5'>
        <Link href={"/users"} >
          <FaChevronLeft size={15} />
        </Link>
        <PageTitle title='User Details' />
        <div className='mt-2 md:mt-0 flex items-center gap-4'>
          <h3
            className='w-[100px] flex items-center justify-center py-2 rounded-md font-bold'
          >
            User ID : {userDetails.id}
          </h3>
          <button className='flex items-center gap-1 py-2 px-4 transition-colors bg-gradient-to-tr from-slate-900 to-slate-600 text-white dark:invert rounded-md cursor-pointer'>
            <BiEdit />
            Edit
          </button>
        </div>
      </div>
      <Card title="Personal Information">
        <div className='p-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5'>
          <DisplayText title='Name' text={userDetails.name} />
          <DisplayText title='Email' text={userDetails.email} />
          <DisplayText title='Username' text={userDetails.username} />
          <DisplayText title='Phone' text={userDetails.phone} />
          <DisplayText title='Website' text={userDetails.website} />
        </div>
      </Card>

      <Card title="Company Information">
        <div className='p-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
          <DisplayText title='Company Name' text={userDetails.company.name} />
          <DisplayText title='Catch Phrase' text={userDetails.company.catchPhrase} />
          <DisplayText title='BS' text={userDetails.company.bs} />
        </div>
      </Card>

      <Card title="Address">
        <div className='p-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
          <DisplayText title='Street' text={userDetails.address.street} />
          <DisplayText title='Suite' text={userDetails.address.suite} />
          <DisplayText title='City' text={userDetails.address.city} />
          <DisplayText title='ZIP Code' text={userDetails.address.zipcode} />
        </div>
      </Card>

      <Card title="Posts">
        <ul className='list-disc'>
          {userDetails.posts.map((post: PostData, idx: number) => {
            return (
              <li key={`post-${post.id}`} className='flex items-start md:items-center gap-4 py-5 px-4 border-b border-slate-800 hover:bg-slate-700 cursor-pointer transition-colors duration-300 group'>
                <div className='w-7 flex items-center justify-center transition-colors bg-gradient-to-tr from-slate-900 to-slate-600 text-white dark:invert rounded-md mt-2 md:mt-0 group-hover:invert'>
                  <label className='font-semibold cursor-pointer'>{idx+1}</label>
                </div>
                <div className='flex-1 group-hover:text-white'>
                  <label className='text-sm'>Post ID : <strong>{post.id}</strong></label>
                  <h4 className='font-semibold cursor-pointer'>{post.title}</h4>
                  <p className='text-sm cursor-pointer'>{post.body}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </Card>
    </div>
  )
}

export default UserDetails