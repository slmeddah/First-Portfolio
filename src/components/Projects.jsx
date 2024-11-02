import React, { useState } from 'react';
import flora from '../images/flora.png';
import euvora from '../images/euvora.png';
import portfolio from '../images/portfolio.png'

// Sample project data
const codingProjects = [
  { id: 1, title: 'Flora', description: 'Online flower boutique (full stack developer)', picture: flora , link:"#" },
  { id: 2, title: 'Euvora', description: 'Event website (backend developer)', picture: euvora },
];

const designWorks = [
  { id: 1, title: 'Flora', description: 'Online boutique with a feminine touch' , picture: flora , link:"https://www.behance.net/gallery/211466775/flora-flower-boutique-website" },
  { id: 2, title: 'Portfolio Design', description: 'Simple one page portfolio/CV page', picture:portfolio , link:"https://www.behance.net/gallery/204051677/portfolio-design-template" },
];

const Projects = () => {
  // State to manage active tab
  const [activeTab, setActiveTab] = useState('coding');

  // Function to render projects or designs based on active tab
  const renderContent = () => {
    if (activeTab === 'coding') {
      return (
        <div className="mt-4 flex flex-wrap items-center justify-between lg:w-[60%] sm:w-[90%]">
          {codingProjects.map(project => (
            <div key={project.id} className="p-4 mb-2 flex flex-col items-center w-[300px] h-[400px] bg-divColor gap-2">
              <a href={project.link} target="_blank" rel="noopener noreferrer"  ><img src={project.picture} alt={project.title} className="w-full h-64 object-cover rounded-sm shadow-lg" /></a>
              <h3 className="font-semibold text-left text-xl tracking-wider">{project.title}</h3>
              <p className="text-left">{project.description}</p>
            </div>
          ))}
        </div>
      );
    } else if (activeTab === 'design') {
      return (
        <div className="mt-4 flex flex-wrap items-center justify-between lg:w-[60%] sm:w-[90%] ms:w-[90%]">
          {designWorks.map(work => (
            <div key={work.id} className="p-4 mb-2 flex flex-col items-center w-[300px] h-[400px] bg-divColor gap-2">
               <a href={work.link}  target="_blank" rel="noopener noreferrer" ><img src={work.picture} alt={work.title} className="w-full h-64 object-cover" /></a>
              <h3 className="font-semibold text-left text-xl tracking-wider">{work.title}</h3>
              <p className="text-left" >{work.description}</p>
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <div className="p-6 flex flex-col items-center w-full">
      <h1 className="text-2xl font-bold mb-4 ">Projects</h1>
      <div className="relative flex space-x-4 bg-divColor rounded-3xl w-[250px]">
        {/* Moving background */}
        <div
          className={`absolute inset-0 bg-fontPink rounded-3xl transition-transform duration-300 w-[50%] ${
            activeTab === 'coding' ? 'translate-x-0' : 'translate-x-full'
          }`}
        />
        <button
          className={`relative z-10 py-2  text-xl text-center h-[90%] w-[50%] transition-colors duration-300 rounded-3xl font-semibold tracking-wide ${
            activeTab === 'coding' ? 'text-white' : 'text-fontPink'
          }`}
          onClick={() => setActiveTab('coding')}
        >
          Coding 
        </button>
        <button
          className={`relative z-10 py-2 text-center  text-xl h-[90%]  w-[50%] transition-colors duration-300 rounded-3xl font-semibold tracking-wide ${
            activeTab === 'design' ? 'text-white' : 'text-fontPink'
          }`}
          onClick={() => setActiveTab('design')}
        >
          Design 
        </button>
      </div>
      {renderContent()}
    </div>
  );
};

export default Projects;
