import React from 'react';
import javaLogo from '../images/java.png';
import pythonLogo from '../images/python.png';
import reactLogo from '../images/reactLogo.png';
import htmlLogo from '../images/htmlLogo.png';
import cssLogo from '../images/cssLogo.png';
import jsLogo from '../images/jsLogo.png';
import figmaLogo from '../images/figma logo.png';

const images = [
  javaLogo,
  pythonLogo,
  reactLogo,
  htmlLogo,
  cssLogo,
  jsLogo,
];

const Software = () => {
  return (
    <div className="flex flex-col">
       
    <div className="grid grid-cols-3 gap-10">
        
      {images.map((imgSrc, index) => (
        <img className="w-[38px]" key={index} src={imgSrc} alt={`Image ${index + 1}`} />
      ))}
    </div>
    </div>
  );
};

export default Software;
