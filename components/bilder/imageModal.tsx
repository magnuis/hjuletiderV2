import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/image'
import { client } from '../../lib/sanity.client'

const builder = imageUrlBuilder(client)

interface ImageModalProps {
  setShowModal: (value: boolean) => void
  nextImage: () => void
  prevImage: () => void
  src: string
  alt: string
}

export default function ImageModal({ setShowModal, src, alt }: ImageModalProps) {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none w-96">
        <div className="w-96 my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="w-96 border-0 rounded-lg shadow-lg relative flex flex-col  bg-white outline-none focus:outline-none">
            {/*body*/}
            <Image src={builder.image(src).url()} alt={alt} className="absolute w-48 h-48" />
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}
