import React, { useState } from "react";
import classNames from "classnames";

const Teleorientacion = () => {
  const [activeButton, setActiveButton] = useState("Teleorientación");

  return (
    <div className="bg-[#dee9ff] w-full flex justify-center">
      <div className="bg-white p-4 w-full lg:w-3/4 my-5 lg:my-2">
        <Header />
        <ButtonGroup
          activeButton={activeButton}
          setActiveButton={setActiveButton}
        />
        <Content activeButton={activeButton} />
      </div>
    </div>
  );
};

const Header = () => (
  <span id="teleorientacion" className="flex justify-center items-center tracking-wider text-2xl font-bold text-[#2c6cf5] mt-5 mb-5 lg:mt-3 lg:mb-3">
    Teleorientación y consulta domiciliaria
  </span>
);

const ButtonGroup = ({ activeButton, setActiveButton }) => (
  <div className="flex justify-center items-center pb-2 mb-2">
    <div className="flex space-x-2">
      <Button
        label="Teleorientación"
        isActive={activeButton === "Teleorientación"}
        onClick={() => setActiveButton("Teleorientación")}
      />
      <Button
        label="Consulta domiciliaria"
        isActive={activeButton === "Consulta domiciliaria"}
        onClick={() => setActiveButton("Consulta domiciliaria")}
      />
    </div>
  </div>
);

const Button = ({ label, isActive, onClick }) => (
  <button
    className={classNames("font-semibold", {
      "text-blue-600 border-b-2 border-blue-600": isActive,
      "text-gray-600": !isActive,
    })}
    onClick={onClick}
  >
    {label}
  </button>
);

const Content = ({ activeButton }) => {
  if (activeButton === "Teleorientación") {
    return (
      <div className="flex flex-col lg:flex-row items-center bg-[#e6faef] w-full lg:w-auto h-auto m-0 lg:m-5 rounded-lg">
        <div className="w-full lg:w-2/3 flex justify-center items-center order-1 lg:order-2">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/saludanimal-fadab.appspot.com/o/teleorientacion.svg?alt=media&token=a7874255-8daa-4cc9-a389-e5999cd7635b"
            alt="Persona con mascota"
            className="w-1/3 h-auto lg:w-2/3"
          />
        </div>
        <div className="w-full p-7 lg:w-2/3 order-2 lg:order-1">
          <div className="flex items-center flex-col lg:flex-row text-2xl font-bold text-black mb-3 ml-5">
            <span>Teleorientación veterinaria</span>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/saludanimal-fadab.appspot.com/o/wakypet.svg?alt=media&token=c5744f6e-bbf7-4373-a89d-a48299cabca5"
              alt="wakypet"
              className="ml-3 mt-2 lg:mt-0 w-12 h-8 lg:w-16 lg:h-10"
            />
          </div>
          <p className="text-gray-700 mb-3 ml-5">
            Puedes acceder a este servicio en el WhatsApp <a className="underline text-[#2c6cf5]" href="https://wa.me/<3136019548>" target="_blank" rel="noopener noreferrer">3136019548</a> durante las 24
            horas del día para resolver dudas sobre la salud de tu mascota, recibir
            orientaciones preventivas, medidas de cuidado y signos de alarma.
          </p>
          <ul className="list-disc list-inside text-gray-700 bg-[#cef5df] ml-5 rounded-lg gap-3">
            <li className="px-3 py-2">
              Te podrán direccionar a una clínica cuando la situación de salud de tu
              mascota lo amerite.
            </li>
            <li className="px-3 py-2">Esta atención es libre de copago.</li>
            <li className="px-3 py-2">Aplica para todos los planes.</li>
          </ul>
        </div>
      </div>
    );
  } else if (activeButton === "Consulta domiciliaria") {
    return (
      <div className="bg-white w-full p-7 rounded-lg">
        <div className="flex justify-between items-center text-2xl font-bold text-blue-600 mb-3">
          Consulta domiciliaria
          <img src="https://firebasestorage.googleapis.com/v0/b/saludanimal-fadab.appspot.com/o/wakypet.svg?alt=media&token=c5744f6e-bbf7-4373-a89d-a48299cabca5" alt="Imagen de consulta domiciliaria"/>
        </div>
        <p className="text-blue-600 mb-3">
          Puedes acceder al servicio mediante WhatsApp <a className="underline text-[#2c6cf5]" href="https://wa.me/<3136019548>" target="_blank" rel="noopener noreferrer">3136019548</a> de lunes a sábado desde las 7 am hasta las 7 pm para todos los planes de gatos y en el plan global de perros para enfermedades o lesiones no urgentes.
        </p>
        <ul className="list-disc list-inside text-blue-600 bg-white rounded-lg gap-3">
          <li className="px-3 py-2">
            Durante la atención deberás cancelar el copago de la consulta y de los servicios adicionales que se realicen.
          </li>
          <li className="px-3 py-2">
            Solo para enfermedades o lesiones no urgentes que puedan ser manejadas en casa.
          </li>
          <li className="px-3 py-2">
            Aplica para las ciudades de cobertura de Salud para Mascotas: Medellín y Área Metropolitana (desde la Estrella hasta Copacabana), Rionegro, Bogotá, Cajicá, Chía, Cali y Jamundí.
          </li>
        </ul>
      </div>
    );
  }
};

export default Teleorientacion;
