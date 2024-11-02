import '../style/Services.css';
import figmaLogo from '../images/figma logo.png';
import illustratorLogo from '../images/illustratorLogo.png';
import reactLogo from '../images/reactLogo.png';
import tailwindLogo from '../images/tailwindLogo.png';
import nodejsLogo from '../images/nodejsLogo.png';
import mongodbLogo from '../images/mongodbLogo.png';

const Services = () => {
  const Service = ({ title, description, pictures }) => {
    const renderImages = (pictures) => (
      <div className="flex items-center gap-4"> 
        {pictures.map((image, index) => (
          <img
            src={image}
            alt={`service-${index}`}
            key={index}
            className="h-10 w-10 object-contain" 
          />
        ))}
      </div>
    );

    return (
      <div className="service w-full md:w-[65%] p-4 shadow-2xl rounded-md flex items-center justify-between gap-4  transition-transform duration-300 ease-in-out hover:scale-105">
        <h2 className="text-[1.45rem] font-semibold w-[22%] text-left tracking-wider">{title}</h2>
        <p className="text-sm w-[63%] text-left">{description}</p>
        <div className="images-container w-[15%] flex justify-start">{renderImages(pictures)}</div>
      </div>
    );
  };

  return (

    
    <div id="Services" className="w-full h-[500px] flex flex-col items-center justify-center gap-8">
      <h2 className="text-center text-fontWhite font-semibold text-4xl " >Services</h2>
      <div className="w-[40%] text-left text-white font-medium">
  These are all the services I can provide based on my skill with some languages and software.
</div>

      <Service 
        title="UI/UX Design" 
        description="Experienced in mobile app and web design, specializing in UI/UX with Figma for creating intuitive, user-friendly interfaces." 
        pictures={[figmaLogo]} 
      />
      <Service 
        title="IDENTITY BRAND" 
        description="Specialized in brand identity design with a focus on creating unique and memorable logos that reflect a brand's personality and resonate with its target audience." 
        pictures={[figmaLogo, illustratorLogo]} 
      />
      <Service 
        title="FRONT-END" 
        description="Proficient in front-end development, building responsive and interactive websites with clean, efficient code." 
        pictures={[reactLogo, tailwindLogo]} 
      />
      <Service 
        title="BACK-END" 
        description="Skilled in back-end development, creating robust and scalable server-side applications." 
        pictures={[mongodbLogo, nodejsLogo]} 
      />
    </div>
  );
};

export default Services;
