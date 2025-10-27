import { useState } from 'react';
import { X } from 'lucide-react';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';
import gallery5 from '@/assets/gallery-5.jpg';
import gallery6 from '@/assets/gallery-6.jpg';
import gallery7 from '@/assets/gallery-7.jpg';
import gallery8 from '@/assets/gallery-8.jpg';
import gallery9 from '@/assets/gallery-9.jpg';
import gallery10 from '@/assets/gallery-10.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    { src: gallery1, alt: 'Teacher and student working on crafts activity' },
    { src: gallery2, alt: 'Student in red uniform engaged in creative learning' },
    { src: gallery3, alt: 'Classroom activity with students and teacher' },
    { src: gallery4, alt: 'Student working on educational craft project' },
    { src: gallery5, alt: 'Students participating in hands-on learning' },
    { src: gallery6, alt: 'One-on-one teaching moment with student' },
    { src: gallery7, alt: 'Interactive classroom session with teacher guidance' },
    { src: gallery8, alt: 'Staff team during school excursion' },
    { src: gallery9, alt: 'Students and staff on educational field trip' },
    { src: gallery10, alt: 'School community outing to natural landmark' },
  ];

  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Gallery</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore moments of learning, growth, and joy at Jesus Generation Schools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="card-hover overflow-hidden rounded-xl cursor-pointer group"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-primary transition-colors p-2"
              onClick={() => setSelectedImage(null)}
              aria-label="Close gallery"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
