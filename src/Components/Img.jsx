import React from 'react';
import { Image } from 'react-bootstrap';

const IllustratedImage = ({ src, alt, styleClass }) => {
  return (
    <Image src={src} alt={alt} className={`${styleClass} d-flex mx-auto w-100 p-2`} fluid />
  );
};

export default IllustratedImage;
