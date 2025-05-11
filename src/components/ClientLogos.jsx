import Image from 'next/image';

const ClientLogos = ({ logos, title = "Our Trusted Clients" }) => {
  return (
    <div className="w-full py-10 overflow-hidden">
      <div className="container mx-auto px-4 mb-6">
        <h2 className="text-4xl text-white font-bold text-center mb-8">{title}</h2>
      </div>
      
      
      {/* Continuous scrolling container */}
      <div className="relative flex overflow-x-hidden">
        {/* First set of logos */}
        <div className="flex logos-scroll">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center mx-8">
              <div className="relative h-16 w-32 md:h-20 md:w-40 logo-item">
                <Image
                  src={logo.src}
                  alt={logo.alt || `Client ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 128px, 160px"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
        
        {/* Second set of logos (duplicate) for seamless looping */}
        <div className="flex logos-scroll2">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center mx-8">
              <div className="relative h-16 w-32 md:h-20 md:w-40 logo-item">
                <Image
                  src={logo.src}
                  alt={logo.alt || `Client ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 128px, 160px"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientLogos;