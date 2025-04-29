import Link from 'next/link';
import React from 'react';
import { FiUsers } from 'react-icons/fi';
import { RxDashboard } from 'react-icons/rx';

type Props = {
  slug: string;
  text: string;
  active: boolean;
};

const SidebarItem = ({
  text,
  slug,
  active,
}: Props) => {
  return (
    <li>
      <Link href={`/${slug}`} className={`
      w-full relative py-2 px-3 gap-3 flex items-center my-1 font-medium rounded-md cursor-pointer transition-colors
      ${active ? "bg-gradient-to-tr from-slate-900 to-slate-600 text-white dark:invert" : "hover:bg-slate-100 text-gray-900 dark:invert"}
    `}>
        {slug === "users" ? <FiUsers /> : <RxDashboard />}
        <span>{text}</span>
      </Link>
    </li>
  )
}

export default SidebarItem