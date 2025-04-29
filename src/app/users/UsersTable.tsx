'use client'
import SearchBar from '@/components/ui/SearchBar'
import React, { useEffect, useState } from 'react'
import { UserData } from '../../../types'
import Link from 'next/link';
import Pagination from '@/components/common/Pagination';

const COLUMNS  = [
  { key: "id", label: "ID" },
  { key: "name", label: "Name" },
  { key: "email", label: "Email" },
  { key: "username", label: "Username" },
  { key: "phone", label: "Phone" },
  { key: "action", label: "" },
];

type Props = {
  users: UserData[]
};

const UsersTable = ({
  users
}: Props) => {

  const [searchInput, setSearchInput] = useState<string>('');

  const [tableData, setTableData] = useState<UserData[] | []>([]);
  const [totalData, setTotalData]= useState(0);
  const [activePage, setActivePage]= useState(1)
  const [pages, setPages]= useState<number[]>([1]);
  const [dataPerPage]= useState(10);

  useEffect(() => {
    if(users && users.length > 0) {
      let filteredUsers = users;
      
      if(searchInput) {
        filteredUsers = users.filter(user => {
          if(user.name.toLowerCase().includes(searchInput)) return user;
          if(user.email.toLowerCase().includes(searchInput)) return user;
          if(user.username.toLowerCase().includes(searchInput)) return user;
        });
      };

      const totalUsers = users.length;
      setTotalData(totalUsers);
      
      const pages_arr = [];
      const totalPage = Math.ceil(totalUsers/dataPerPage);
      for (let index=1; index <= totalPage; index++) {
        pages_arr.push(index);
      };
      setPages(pages_arr);
      
      const paginatedData = filteredUsers.slice((activePage - 1) * dataPerPage, activePage * dataPerPage);
      setTableData(paginatedData);
    };

    return () => {}
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activePage, searchInput]);

  const onClickPageNumber = (pageNumber: number) => {
    setActivePage(pageNumber);
  };

  const handlePrev =()=>{
    if(activePage === 1) return;
    setActivePage(activePage - 1);
  };

  const handleNext =()=>{
    if(activePage === pages.length) return;
    setActivePage(activePage + 1)
  };

  return (
    <>
      <SearchBar 
        onChange={({target}) => setSearchInput(target.value)}
        value={searchInput}
        placeholder='Search by name, email or username...'
      />

      <div className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
        <table className="w-full text-left table-auto min-w-max">
          <thead>
            <tr>
              {COLUMNS.map((column, idx) => {
                return (
                  <th key={`table_col_header-${idx}`} className="p-4 border-b border-slate-200 bg-slate-50 dark:bg-gray-700">
                    <p className="text-sm font-normal leading-none text-slate-500 dark:text-white">
                      {column.label}
                    </p>
                  </th>
                )
              })}
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
                  <td className="p-4 py-5">
                    <Link 
                      href={`/users/${user.id}`}
                      className="text-xs text-slate-100 cursor-pointer px-4 py-2 bg-slate-800 rounded-md hover:cursor-pointer"
                    >
                      Details
                    </Link>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>

        <Pagination 
          activePage={activePage}
          dataPerPage={dataPerPage}
          totalData={totalData}
          handlePrev={handlePrev}
          handleNext={handleNext}
          pagesArr={pages}
          onClickPageNumber={onClickPageNumber}
        />
      </div>
    </>
  )
}

export default UsersTable