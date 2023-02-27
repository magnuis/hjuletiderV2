import { Dialog } from '@headlessui/react'
import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/image'
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { client } from '../../lib/sanity.client'

const builder = imageUrlBuilder(client)

interface ImageModalProps {
  setShowModal: (value: boolean) => void
  nextImage: () => void
  prevImage: () => void
  src: string
  alt: string
  showModal: boolean
}

export default function ImageModal({
  setShowModal,
  nextImage,
  prevImage,
  showModal,
  src,
  alt,
}: ImageModalProps) {
  return (
    <Dialog open={showModal} onClose={() => setShowModal(false)} className="relative z-50">
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-3xl rounded bg-white">
          <Dialog.Backdrop className="fixed inset-0 bg-black opacity-30 z-49" />
          <AiOutlineCloseCircle
            className="absolute mt-4 ml-4"
            onClick={() => setShowModal(false)}
          />
          <div className="relative mx-10 my-10 flex flex-col gap-y-4">
            <Image
              src={builder.image(src).url()}
              alt={alt}
              className="object-center object-cover top-0 opacity-100 mx-auto"
              width={300}
              height={300}
            />
            <hr />
            <p>{alt}</p>
            <div className="mx-auto flex flex-row gap-x-6 m-3">
              <BsArrowLeftCircle onClick={() => prevImage()} />
              <BsArrowRightCircle onClick={() => nextImage()} />
            </div>
          </div>
          <div className="relative"></div>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}
