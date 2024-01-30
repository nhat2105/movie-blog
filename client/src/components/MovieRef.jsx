import React, { useRef, useEffect } from 'react';
import Swiper from 'swiper';

const MovieRef = ({ urls }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (urls.length > 0) {
      swiperRef.current = new Swiper('.swiper-container', {
        slidesPerView: '3',
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }
  }, [urls]);

  return (
    <div className='movie-ref'>
      <div className='movie-ref-container'>
        <h2 style={{ fontSize: '25px', fontStyle: 'italic', color: '#20DD33' }}>
          Recommended Media
        </h2>
        <div className='swiper-ref-container movie-ref-content'>
          <div className='swiper-ref-wrapper'>
            {urls.map((item, index) => (
              <div className='swiper-slide' key={index}>
                <a href={item.url} target='_blank' rel="noreferrer">
                  <img className='movie-ref-image' src={item.poster} alt='' />
                  <p style={{color: 'white', fontSize: '18px', marginLeft: '80px'}}>{item.rid}</p>
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

export default MovieRef;
