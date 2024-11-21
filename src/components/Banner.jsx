import React, { useState, useEffect } from "react";

export default function Banner() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col-reverse md:flex-row bg-[#e6faef]">
        <div className="w-full md:w-2/3 flex flex-col justify-center items-start p-4 md:pl-0 md:pr-8 md:ml-20">
          <h1 className="font-bold w-full mb-4 text-center text-[#0033a1] text-4xl md:mb-6 md:text-5xl md:text-left">
            Nuevo Plan de Salud
            <br /> para Perros y Gatos
          </h1>
          <p className="text-[#2c6cf5] mb-4 w-full text-center leading-[20px] text-lg md:text-3xl  md:leading-[40px] md:text-left">
            Porque hace parte de tu familia y se <br />
            merece estar siempre protegido en la <br />
            mejor red de clínicas veterinarias.
          </p>
          <div className="flex justify-center items-center w-full md:justify-start">
            <button
              className={`fixed z-50 ${isScrolled ? 'bottom-4 left-1/2 transform -translate-x-1/2 scale-150' : 'relative mt-2'} bg-[#e2e82a] mb-5 hover:bg-[#bfc415] text-[#0033a1] font-semibold py-2 px-4 rounded-full inline-flex items-center md:mb-0 md:w-auto transition-all duration-300`}
              onClick={() =>
                (window.location.href =
                  "https://surapet.com.co/alianza/sura")
              }
            >
              <span>Quiero cotizar</span>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/saludanimal-fadab.appspot.com/o/flecha.svg?alt=media&token=4ba00e46-d5bc-4533-a55f-f10d057738fc"
                width="20"
                height="20"
                alt="flecha"
                className="ms-[10px]"
              />
            </button>
          </div>
        </div>

        <div className="w-full md:w-3/4 md:pl-0 flex justify-center">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/saludanimal-fadab.appspot.com/o/banner.svg?alt=media&token=28d1f0fa-363c-4130-a351-d3bc9422d1d8"
            alt="banner"
            className="w-full h-auto mt-4 md:mt-0 object-cover p-5"
          />
        </div>
      </div>
    </>
  );
}
