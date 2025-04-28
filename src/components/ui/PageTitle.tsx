import React from 'react'

type Props = {
  title: string;
};

const PageTitle = ({
  title
}: Props) => {
  return (
    <div className='w-full flex items-center justify-between'>
      <h1 className='text-2xl font-bold'>{title}</h1>
    </div>
  )
}

export default PageTitle