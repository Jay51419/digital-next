import Image from 'next/image'

export default function Gallery() {
  const images = [
    '/gallery-1.jpg',
    '/gallery-2.jpg',
    '/gallery-3.jpg',
    '/gallery-4.jpg',
  ]

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <h2 className="text-[#FF5B12] text-2xl font-medium text-center mb-6">Gallery</h2>
      
      <div className="grid grid-cols-2 gap-4">
        {images.map((src, index) => (
          <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  )
} 