import React from 'react';
import './LinkButton.css';

interface LinkButtonProps {
  text: string;
  href: string;
  className?: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ text, href, className }) => {
  return (
    <a href={href} className={`link-button ${className}`}>
      {text}
    </a>
  );
};

export default LinkButton;
