'use client'
import { useState } from 'react'
import ImageCard from './imageCard'
import ImageModal from './imageModal'

interface GalleryProps {
  images: any
}
export default function Gallery({ images }: GalleryProps) {
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
      <div className={`grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 pb-24`}>
        {images.map((image: any) => (
          <ImageCard image={image} setShowModal={setShowModal} setCurrentImage={setCurrentImage} />
        ))}
      </div>

      <ImageModal
        setShowModal={setShowModal}
        nextImage={nextImage}
        prevImage={prevImage}
        showModal={showModal}
        src={images[currentImage].url}
        alt={images[currentImage].description}
      />
    </div>
  )
}
