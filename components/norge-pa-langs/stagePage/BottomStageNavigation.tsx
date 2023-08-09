import Link from 'next/link'
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from 'react-icons/hi'
import { useScrollToTop } from '../../../hooks/UseScrollToTop'

import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/20/solid'

interface BottomStageNavigationProps {
  dayNo: number
}
export default function BottomStageNavigation({ dayNo }: BottomStageNavigationProps) {
  return (
    // <div className="flex flex-row space-x-7 cursor-default">
    //   {dayNo == 1 && (
    //     <span className="flex flex-row space-x-1 items-center text-gray-400">
    //       <HiOutlineArrowSmLeft className="h-8 w-8" />
    //       <p className="text-lg">Dagen før</p>
    //     </span>
    //   )}
    //   {dayNo > 1 && (
    //     <Link href={`norge-pa-langs/dag-${dayNo - 1}`}>
    //       <span className="flex flex-row space-x-1 items-center">
    //         <HiOutlineArrowSmLeft className="h-8 w-8" />
    //         <p className="text-lg">Dagen før</p>
    //       </span>
    //     </Link>
    //   )}
    //   {dayNo == 25 && (
    //     <span className="flex flex-row space-x-1 items-center text-gray-400">
    //       <p className="text-lg">Dagen etter</p>
    //       <HiOutlineArrowSmRight className="h-8 w-8" />
    //     </span>
    //   )}
    //   {dayNo < 25 && (
    //     <Link href={`norge-pa-langs/dag-${dayNo + 1}`}>
    //       <span className="flex flex-row space-x-1 items-center">
    //         <p className="text-lg">Dagen etter</p>
    //         <HiOutlineArrowSmRight className="h-8 w-8" />
    //       </span>
    //     </Link>
    //   )}
    // </div>

    <nav className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0 mx-10">
      <div className="-mt-px flex w-0 flex-1">
        {dayNo == 1 && (
          <div className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 cursor-default">
            <ArrowLongLeftIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
            Dagen før
          </div>
        )}
        {dayNo > 1 && (
          <Link href={`norge-pa-langs/dag-${dayNo - 1}`}>
            <div className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
              <ArrowLongLeftIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
              Dagen før
            </div>
          </Link>
        )}
      </div>
      <div className="hidden md:-mt-px md:flex">
        <a
          href="#"
          className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          1
        </a>
        {/* Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" */}
        <a
          href="#"
          className="inline-flex items-center border-t-2 border-indigo-500 px-4 pt-4 text-sm font-medium text-indigo-600"
          aria-current="page"
        >
          2
        </a>
        <a
          href="#"
          className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          3
        </a>
        <span className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500">
          ...
        </span>
        <a
          href="#"
          className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          8
        </a>
        <a
          href="#"
          className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          9
        </a>
        <a
          href="#"
          className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          10
        </a>
      </div>
      <div className="-mt-px flex w-0 flex-1 justify-end">
        {dayNo == 25 && (
          <div className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 cursor-default">
            Dagen etter
            <ArrowLongRightIcon className="ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
        )}
        {dayNo < 25 && (
          <Link href={`norge-pa-langs/dag-${dayNo + 1}`}>
            <div className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
              Dagen etter
              <ArrowLongRightIcon className="ml-3 h-5 w-5" aria-hidden="true" />
            </div>
          </Link>
        )}
      </div>
    </nav>
  )
}
