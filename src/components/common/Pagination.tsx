import React from 'react'

type Props = {
  activePage: number;
  dataPerPage: number;
  totalData: number;
  pagesArr: number[];
  handlePrev: () => void;
  handleNext: () => void;
  onClickPageNumber: (value: number) => void;
}

const Pagination = ({
  activePage,
  dataPerPage,
  totalData,
  handlePrev,
  handleNext,
  pagesArr,
  onClickPageNumber,
}: Props) => {
  return (
    <div className="flex justify-between items-center px-4 py-3 dark:bg-gray-600">
      <div className="text-sm text-slate-700 dark:text-white">
        Showing <b>1-{dataPerPage}</b> of {totalData} users
      </div>
      <div className="flex space-x-1">
        <button className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-700 bg-gray-300 cursor-pointer border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease"
          onClick={handlePrev}>
          Prev
        </button>
        {pagesArr.map((pageNumber) => {
          let classname = "px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-700 bg-gray-300 cursor-pointer border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease"

          if (pageNumber === activePage) classname = "px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-white bg-slate-800 border border-slate-800 rounded transition duration-200 ease";

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
  )
}

export default Pagination