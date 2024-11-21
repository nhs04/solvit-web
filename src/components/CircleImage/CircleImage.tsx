import React from 'react';
import './CircleImage.css';

interface CircleImageProps {
  src: string;
  alt: string;
  className?: string;
}

const CircleImage: React.FC<CircleImageProps> = ({ src, alt, className = '' }) => {
  return (
    <div className={`circle-image-container ${className}`}>
      <img src={src} alt={alt} className="circle-image" />
    </div>
  );
};

export default CircleImage;

