import React from "react";

const Descuentos = () => {
  const openPDF = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="flex flex-col items-center justify-center bg-[#dbebff] p-6">
      <h2 className="font-bold text-center mb-4">
        <span className="text-[#2c6cf5] text-4xl">Descuentos y beneficios</span>
        <br />
        <span className="text-[#0033a1] text-3xl tracking-wider">
          en salud y bienestar para tu compañero
        </span>
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center w-full">
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
          <img
            src="https://image.comunicaciones.sura.com/lib/fe3911727564047d771277/m/1/bf14bb5e-7e15-4b9a-88ed-102bf9f9583b.png"
            alt="Descuentos"
            className="w-full h-auto mb-4"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center md:items-start mt-4 md:mt-0">
          <h3 className="text-3xl text-[#1b49ab] mb-8">
            Conoce tus beneficios según tu ciudad
          </h3>
          <button
            onClick={() => openPDF("https://comunicaciones.segurossura.com.co/MercadeoPersonas/recursos/Salud_para_Mascotas/Directorio-Mascotas-Descuentos-Bogota.pdf")}
            className="text-lg font-bold bg-[#f9fae1] text-[#0033a1] py-2 px-4 rounded-lg w-2/3 mb-5 flex items-center justify-center"
          >
            <div className="flex-grow text-center">Bogotá y la Sabana</div>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/saludanimal-fadab.appspot.com/o/flecha.svg?alt=media&token=4ba00e46-d5bc-4533-a55f-f10d057738fc"
              width="20"
              height="20"
              alt="logo_SURA"
            />
          </button>
          <button
            onClick={() => openPDF("https://comunicaciones.segurossura.com.co/MercadeoPersonas/recursos/Salud_para_Mascotas/Directorio-Mascotas-Descuentos-Medellin.pdf")}
            className="text-lg font-bold bg-white text-[#0033a1] py-2 px-4 rounded-lg w-2/3 mb-5 flex items-center justify-center"
          >
            <div className="flex-grow text-center">
              Medellín, Área Metropolitana y Rionegro
            </div>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/saludanimal-fadab.appspot.com/o/flecha.svg?alt=media&token=4ba00e46-d5bc-4533-a55f-f10d057738fc"
              width="20"
              height="20"
              alt="logo_SURA"
            />
          </button>
          <button
            onClick={() => openPDF("https://comunicaciones.segurossura.com.co/MercadeoPersonas/recursos/Salud_para_Mascotas/Directorio-Mascotas-Descuentos-Cali.pdf")}
            className="text-lg font-bold bg-[#e6faef] text-[#0033a1] py-2 px-4 rounded-lg w-2/3 flex items-center justify-center"
          >
            <div className="flex-grow text-center">Cali</div>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/saludanimal-fadab.appspot.com/o/flecha.svg?alt=media&token=4ba00e46-d5bc-4533-a55f-f10d057738fc"
              width="20"
              height="20"
              alt="logo_SURA"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Descuentos;
