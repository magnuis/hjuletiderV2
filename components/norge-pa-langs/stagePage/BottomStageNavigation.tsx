import Link from 'next/link'
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from 'react-icons/hi'
import { useScrollToTop } from '../../../hooks/UseScrollToTop'

interface BottomStageNavigationProps {
  dayNo: number
}
export default function BottomStageNavigation({ dayNo }: BottomStageNavigationProps) {
  return (
    <div className="flex flex-row space-x-7 cursor-default">
      {dayNo == 1 && (
        <span className="flex flex-row space-x-1 items-center text-gray-400">
          <HiOutlineArrowSmLeft className="h-8 w-8" />
          <p className="text-lg">Dagen før</p>
        </span>
      )}
      {dayNo > 1 && (
        <Link href={`norge-pa-langs/dag-${dayNo - 1}`}>
          <span className="flex flex-row space-x-1 items-center">
            <HiOutlineArrowSmLeft className="h-8 w-8" />
            <p className="text-lg">Dagen før</p>
          </span>
        </Link>
      )}
      {dayNo == 25 && (
        <span className="flex flex-row space-x-1 items-center text-gray-400">
          <p className="text-lg">Dagen etter</p>
          <HiOutlineArrowSmRight className="h-8 w-8" />
        </span>
      )}
      {dayNo < 25 && (
        <Link href={`norge-pa-langs/dag-${dayNo + 1}`}>
          <span className="flex flex-row space-x-1 items-center">
            <p className="text-lg">Dagen etter</p>
            <HiOutlineArrowSmRight className="h-8 w-8" />
          </span>
        </Link>
      )}
    </div>
  )
}
