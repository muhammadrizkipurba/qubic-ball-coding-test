'use client'

import SearchBar from '@/components/ui/SearchBar'
import React, { useEffect, useState } from 'react'
import { UserData } from '../../../types'

type Props = {
  users: UserData[]
};

const UsersTable = ({
  users
}: Props) => {

  const [tableData, setTableData] = useState<UserData[] | []>([]);
  const [totalData, setTotalData]= useState(0);
  const [activePage, setActivePage]= useState(1)
  const [pages, setPages]= useState<number[]>([1]);
  const [dataPerPage]= useState(5);

  useEffect(() => {
    const currentPageNumber = (activePage * dataPerPage) - dataPerPage;

    if(users && users.length > 0) {
      const totalUsers = users.length;
      setTotalData(totalUsers);
      
      const pages_arr = [];
      const totalPage = Math.ceil(totalUsers/dataPerPage);
      for (let index=1; index <= totalPage; index++) {
        pages_arr.push(index);
      };
      setPages(pages_arr);
      
      const paginatedData = users.splice(currentPageNumber, dataPerPage);
      setTableData(paginatedData);
    };

    return () => {}
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activePage]);

  const onClickPageNumber = (pageNumber: number) => {
    setActivePage(pageNumber);
  };

  const handlePrev =()=>{
    if(activePage === 1) return;
    setActivePage(activePage - 1);
  };

  const handleNext =()=>{
    setActivePage(activePage + 1)
  };

  return (
    <>
      <SearchBar />

      <div className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
        <table className="w-full text-left table-auto min-w-max">
          <thead>
            <tr>
              <th className="p-4 border-b border-slate-200 bg-slate-50 dark:bg-gray-700">
                <p className="text-sm font-normal leading-none text-slate-500 dark:text-white">
                  ID
                </p>
              </th>
              <th className="p-4 border-b border-slate-200 bg-slate-50 dark:bg-gray-700">
                <p className="text-sm font-normal leading-none text-slate-500 dark:text-white">
                  Name
                </p>
              </th>
              <th className="p-4 border-b border-slate-200 bg-slate-50 dark:bg-gray-700">
                <p className="text-sm font-normal leading-none text-slate-500 dark:text-white">
                  Email
                </p>
              </th>
              <th className="p-4 border-b border-slate-200 bg-slate-50 dark:bg-gray-700">
                <p className="text-sm font-normal leading-none text-slate-500 dark:text-white">
                  Username
                </p>
              </th>
              <th className="p-4 border-b border-slate-200 bg-slate-50 dark:bg-gray-700">
                <p className="text-sm font-normal leading-none text-slate-500 dark:text-white">
                  Phone
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((user) => {
              return (
                <tr key={`user-${user.id}`} className="hover:bg-slate-50 border-b border-slate-200 dark:bg-gray-300 dark:hover:bg-gray-200 transition-colors duration-300">
                  <td className="p-4 py-5">
                    <p className="block font-semibold text-sm text-slate-800">{user.id}</p>
                  </td>
                  <td className="p-4 py-5">
                    <p className="text-sm text-slate-700">{user.name}</p>
                  </td>
                  <td className="p-4 py-5">
                    <p className="text-sm text-slate-700">{user.email}</p>
                  </td>
                  <td className="p-4 py-5">
                    <p className="text-sm text-slate-700">{user.username}</p>
                  </td>
                  <td className="p-4 py-5">
                    <p className="text-sm text-slate-700">{user.phone}</p>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>

        <div className="flex justify-between items-center px-4 py-3 dark:bg-gray-600">
          <div className="text-sm text-slate-700 dark:text-white">
            Showing <b>1-{dataPerPage}</b> of {totalData} users
          </div>
          <div className="flex space-x-1">
            <button className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-700 bg-gray-300 cursor-pointer border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease"
            onClick={handlePrev}>
              Prev
            </button>
            {pages.map((pageNumber) => {
              let classname = "px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-700 bg-gray-300 cursor-pointer border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease"

              if(pageNumber === activePage) classname = "px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-white bg-slate-800 border border-slate-800 rounded transition duration-200 ease";
              
              return (
                <button 
                  key={`page_${pageNumber}`} 
                  className={classname}
                  onClick={() => onClickPageNumber(pageNumber)}
                >
                  {pageNumber}
                </button>
              )
            })}
            <button className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-700 bg-gray-300 cursor-pointer border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease"
            onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default UsersTable