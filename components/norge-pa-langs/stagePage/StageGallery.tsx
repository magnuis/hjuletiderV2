'use client'
import { useState } from 'react'
import { Image } from 'sanity'
import ImageCard from '../../bilder/imageCard'
import ImageModal from '../../bilder/imageModal'

interface GalleryProps {
  images: Image[]
}
export default function StageGallery({ images }: GalleryProps) {
  const [currentImage, setCurrentImage] = useState(0)
  const [showModal, setShowModal] = useState(false)

  const nextImage = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1)
  }
  const prevImage = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1)
  }

  return (
    <div>
      <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 pb-24`}>
        {images.map((image: Image, index: number) => {
          return (
            <ImageCard
              key={index}
              url={image.asset ? image.asset._ref : ''}
              setShowModal={setShowModal}
              setCurrentImage={setCurrentImage}
              index={index}
            />
          )
        })}
      </div>

      <ImageModal
        setShowModal={setShowModal}
        nextImage={nextImage}
        prevImage={prevImage}
        showModal={showModal}
        src={images[currentImage].asset ? (images[currentImage].asset?._ref as string) : ''}
        alt={images[currentImage].description ? (images[currentImage].description as string) : ''}
      />
    </div>
  )
}
