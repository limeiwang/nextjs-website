'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

// 引入Swiper样式
import 'swiper/css';
import 'swiper/css/pagination';

const images = [
  {
    src: '/images/banner.jpeg',
    alt: 'Slide 1'
  },
  {
    src: '/images/banner.jpeg',
    alt: 'Slide 2'
  },
  {
    src: '/images/banner.jpeg',
    alt: 'Slide 3'
  }
];

export default function Carousel() {
  return (
    <div className="w-full mx-auto">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full aspect-[16/9] md:h-screen">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                style={{ objectFit: 'cover' }}
                priority={index === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
} 
