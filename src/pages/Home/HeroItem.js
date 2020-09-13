import React from 'react';
import './home.scss';

const Hero = (props) => {
  const mainStyle = {
    background: document.body.clientWidth > 991 ? props.data.bg : `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(${props.data.img})`
  }

  const imageStyle = {
    backgroundImage: `url(${props.data.img})`
  };
  return (
    <div className={props.cClass}>
      <div className='hero__main col-12 col-lg-6' style={mainStyle}>
        <div className='hero__main__text'>
          <em>{ props.data.em }</em>
          <h1 className='mb-3'>{ props.data.h1 }</h1>
          <p className='mt-4'>{ props.data.p }</p>
          <a href='#read-more'>Read More</a>
        </div>
      </div>
      <div className='hero__img col-lg-6' style={imageStyle}></div>
    </div>
  );
};

export default Hero;
