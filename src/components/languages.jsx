import React, { useEffect, useRef } from 'react';

const Languages = () => {
  const languages_data = [
    { language: "Arabic", width: "90%" },
    { language: "French", width: "65%" },
    { language: "English", width: "80%" },
    { language: "Turkish", width: "60%" }
  ];

  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const langs = section.querySelectorAll('.inter');

    const changeWidth = () => {
      if (window.scrollY + window.innerHeight >= section.offsetTop) {
        langs.forEach((lang) => {
          lang.style.width = lang.getAttribute('data-width');
        });
      }
    };

    window.addEventListener('scroll', changeWidth);
    return () => window.removeEventListener('scroll', changeWidth);
  }, []);

  return (
    <div id="languages" className="flex flex-col justify-start h-full" ref={sectionRef}>
     
      {languages_data.map((language, index) => (
        <div key={index} className="flex items-center mb-2">
          <p className="mr-2">{language.language}</p>
          <div className="outer w-[500px] border-[2px] border-fontPink rounded-[15px] h-[10px] overflow-hidden">
            <div
              className="inter w-0 h-full bg-fontPink transition-all duration-700 ease-out rounded-[15px]"
              data-width={language.width}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Languages;
