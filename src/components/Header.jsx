import { Link } from 'react-scroll';

import '../style/Header.css'

const Header = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div id="Welcome" className="w-full h-16 ">
      
      <nav className="flex justify-between items-center p-4 font-poppins">
        <div className="name">
          <Link
            to="#Header"
            className="text-3xl font-bold text-fontWhite"
            smooth={true}
            duration={500}
          >
            Soundouss Leila
          </Link>
        </div>

        {/* Links Section */}
        <div className="flex space-x-12 text-xl font-bold">
          <Link
            to="Home"
            smooth={true}
            duration={500}
            className="text-fontWhite hover:text-fontPink"
          >
            Home
          </Link>
          <Link
            to="Services"
            smooth={true}
            duration={500}
            className="text-fontWhite hover:text-fontPink  "
          >
            Services
          </Link>


          <Link
            to="Skills"
            smooth={true}
            duration={500}
            className="text-fontWhite hover:text-fontPink"
          >
            Projects
          </Link>

          <Link
            to="Skills"
            smooth={true}
            duration={500}
            className="text-fontWhite hover:text-fontPink"
          >
            Skills
          </Link>
        </div>

        {/* Contact Button */}
        <div>
          <button onClick={scrollToContact} className="px-4 py-2 bg-fontPink rounded-lg text-divColor font-semibold">
            Get in Touch
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
