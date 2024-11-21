import  { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="header flex items-center justify-between bg-[#2D6DF6] h-[96px] px-[45px] md:px-8">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/saludanimal-fadab.appspot.com/o/Logo_Sura.svg?alt=media&token=329a9a1f-495a-4124-bb9c-73c6deff6fe6"
          width="110"
          height="38"
          alt="logo_SURA"
          className="md:ml-20"
        />
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <XIcon className="h-6 w-6 text-white" />
            ) : (
              <MenuIcon className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
        <div className="hidden md:flex md:items-center md:space-x-8">
          <a href="#nuestros-planes" className="cursor-pointer text-white">
            Planes
          </a>
          <a href="#directorio" className="cursor-pointer text-white">
            Red de prestadores
          </a>
          <a href="#teleorientacion" className="cursor-pointer text-white">
            Teleorientacion y consulta domiciliaria
          </a>
          <a href="#preguntas-frecuentes" className="cursor-pointer text-white">
            Preguntas frecuentes
          </a>
          <button
            className="bg-[#e2e82a] hover:bg-[#bfc415] text-[#0033a1] font-semibold py-2 px-4 rounded-full"
            onClick={() =>
              (window.location.href =
                "https://surapet.com.co/alianza/sura")
            }
          >
            Quiero cotizar
          </button>
        </div>
      </div>
      <div className="bg-white h-0.25 "></div>
      <div className="bg-[#0033A0] h-10 flex items-center px-[45px] md:px-8">
        <p className="cursor-default font-semibold md:ml-20 text-white">
          SEGUROS
        </p>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white flex flex-col p-4 space-y-4">
          <a href="#nuestros-planes" className="cursor-pointer text-[#2c6cf5]">
            Planes
          </a>
          <a href="#directorio" className="cursor-pointer text-[#2c6cf5]">
            Red de prestadores
          </a>
          <a href="#teleorientacion" className="cursor-pointer text-[#2c6cf5]">
            Teleorientacion y consulta domiciliaria
          </a>
          <a
            href="#preguntas-frecuentes"
            className="cursor-pointer text-[#2c6cf5]"
          >
            Preguntas frecuentes
          </a>
          <button
            className="bg-[#e2e82a] hover:bg-[#bfc415] text-[#0033a1] font-semibold py-2 px-4 rounded-full"
            onClick={() =>
              (window.location.href =
                "https://surapet.com.co/alianza/sura")
            }
          >
            Quiero cotizar
          </button>
        </div>
      )}
    </>
  );
};

export default Header;
