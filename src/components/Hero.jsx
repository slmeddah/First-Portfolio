
import design from '../images/design.svg'

import expertise from '../images/my expertise.svg'
import vec1 from '../images/deco1.png'
import vec2 from '../images/deco2.png'

import '../style/Hero.css'


const Hero = () => {
    return (
      <div id="Hero" className="w-full h-[500px] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl sm:text-4xl font-bold text-fontwhite leading-[3.5]">
            I am <span className="text-fontPink">MEDDAH Soundouss</span> <br />
            UI/UX Web Designer and <br />
            Full Stack Developer
          </h2>
          <a href="/cv.pdf">
          <button className="mt-4 bg-fontWhite text-divColor px-4 py-2 rounded" Download>
            Download CV
          </button>
          </a>
        </div>
        <img src={design}  id="design" />
        <img src={vec1}  id="vec1" />
        
        <img src={expertise} id="expertise" />
        <img src={vec2}  id="vec2" />

      </div>
    );
  };
  
  export default Hero;
  