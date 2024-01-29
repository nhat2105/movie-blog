import React, { useRef, useEffect } from 'react';
import Swiper from 'swiper';

const MovieGallery = ({ urls }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (urls.length > 0) {
      swiperRef.current = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: -150,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }

    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy();
      }
    };
  }, [urls]);

  return (
    <div className='movie-gallery'>
      <div className='movie-gallery-container'>
        <h2 style={{ fontSize: '25px', fontStyle: 'italic', color: '#20DD33' }}>
          Gallery
        </h2>
        <div className='swiper-container movie-gallery-content'>
          <div className='swiper-wrapper'>
            {urls.map((item, index) => (
              <div className='swiper-slide' key={index}>
                <a href={item.url}>
                  <img className='movie-gallery-image' src={item.url} alt='' />
                </a>
              </div>
            ))}
          </div>
          <div className='swiper-button-next'></div>
          <div className='swiper-button-prev'></div>
        </div>
      </div>
    </div>
  );
};

export default MovieGallery;
