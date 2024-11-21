import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../customCarousel.css";

function Directorio() {
  const imagenesBogota = [
    "https://firebasestorage.googleapis.com/v0/b/saludanimal-fadab.appspot.com/o/movet.svg?alt=media&token=d72037fe-4475-4b6a-8d9f-6a8a01b0b797",
    "https://firebasestorage.googleapis.com/v0/b/saludanimal-fadab.appspot.com/o/petplus.svg?alt=media&token=c6ab830c-945f-4b07-864d-0bb3a1f1e455",
    "https://firebasestorage.googleapis.com/v0/b/saludanimal-fadab.appspot.com/o/vetas.svg?alt=media&token=54f4f53d-4b57-4b95-9c28-58cfc423413b",
    "https://firebasestorage.googleapis.com/v0/b/saludanimal-fadab.appspot.com/o/clinica.svg?alt=media&token=1d746ba3-e647-4a86-a7ef-65cc4995474e"
  ];

  const imagenesMedellin = [
    "https://firebasestorage.googleapis.com/v0/b/saludanimal-fadab.appspot.com/o/bivet.svg?alt=media&token=983d5036-26fb-4b9d-817d-c92eb7c4af1c",
    "https://firebasestorage.googleapis.com/v0/b/saludanimal-fadab.appspot.com/o/caninos.svg?alt=media&token=1d10062a-b221-4455-b62a-409a22362e05",
    "https://firebasestorage.googleapis.com/v0/b/saludanimal-fadab.appspot.com/o/sanlucas.svg?alt=media&token=19128617-24ec-4dd2-8835-aee93747dae2",
    "https://firebasestorage.googleapis.com/v0/b/saludanimal-fadab.appspot.com/o/mevet.svg?alt=media&token=7a013e26-c412-4554-9597-4711677e7baf",
    "https://firebasestorage.googleapis.com/v0/b/saludanimal-fadab.appspot.com/o/cvz.svg?alt=media&token=697998ca-6f56-4e67-9f72-299aa617aec1",
    "https://firebasestorage.googleapis.com/v0/b/saludanimal-fadab.appspot.com/o/LOGO%20CANIS%20VET%202020.png?alt=media&token=eb4cc6e6-2965-434c-8555-b80cf5dd08a3",
    "https://firebasestorage.googleapis.com/v0/b/saludanimal-fadab.appspot.com/o/Logo%20safari.png?alt=media&token=92fecb40-0e79-4f8d-af80-171059278d87",
    "https://firebasestorage.googleapis.com/v0/b/saludanimal-fadab.appspot.com/o/logo%20luxury.png?alt=media&token=f509ee00-fc39-49f7-8777-da5541dfc681"
  ];

  const imagenesCali = [
    "https://firebasestorage.googleapis.com/v0/b/saludanimal-fadab.appspot.com/o/super.svg?alt=media&token=df55daec-5d7b-490d-9995-46a7c01cb87a",
    "https://firebasestorage.googleapis.com/v0/b/saludanimal-fadab.appspot.com/o/logo%20royipets_page-0002.jpg?alt=media&token=778fbc0a-d7c4-485c-b6bf-b80237528a77",
  ];

  const pdfsBogota = [
    "https://comunicaciones.segurossura.com.co/MercadeoPersonas/recursos/Salud_para_Mascotas/Directorio-Mascotas_Bogota.pdf",
    "https://comunicaciones.segurossura.com.co/MercadeoPersonas/recursos/Salud_para_Mascotas/Directorio-Mascotas_Bogota.pdf",
    "https://comunicaciones.segurossura.com.co/MercadeoPersonas/recursos/Salud_para_Mascotas/Directorio-Mascotas_Bogota.pdf",
    "https://comunicaciones.segurossura.com.co/MercadeoPersonas/recursos/Salud_para_Mascotas/Directorio-Mascotas_Bogota.pdf"
  ];

  const pdfsMedellin = [
    "https://comunicaciones.segurossura.com.co/MercadeoPersonas/recursos/Salud_para_Mascotas/Directorio-Mascotas_Medellin.pdf",
    "https://comunicaciones.segurossura.com.co/MercadeoPersonas/recursos/Salud_para_Mascotas/Directorio-Mascotas_Medellin.pdf",
    "https://comunicaciones.segurossura.com.co/MercadeoPersonas/recursos/Salud_para_Mascotas/Directorio-Mascotas_Medellin.pdf",
    "https://comunicaciones.segurossura.com.co/MercadeoPersonas/recursos/Salud_para_Mascotas/Directorio-Mascotas_Medellin.pdf",
    "https://comunicaciones.segurossura.com.co/MercadeoPersonas/recursos/Salud_para_Mascotas/Directorio-Mascotas_Medellin.pdf",
    "https://comunicaciones.segurossura.com.co/MercadeoPersonas/recursos/Salud_para_Mascotas/Directorio-Mascotas_Medellin.pdf",
    "https://comunicaciones.segurossura.com.co/MercadeoPersonas/recursos/Salud_para_Mascotas/Directorio-Mascotas_Medellin.pdf",
    "https://comunicaciones.segurossura.com.co/MercadeoPersonas/recursos/Salud_para_Mascotas/Directorio-Mascotas_Medellin.pdf"
  ];

  const pdfsCali = [
    "https://comunicaciones.segurossura.com.co/MercadeoPersonas/recursos/Salud_para_Mascotas/Directorio-Mascotas_Cali.pdf",
    "https://comunicaciones.segurossura.com.co/MercadeoPersonas/recursos/Salud_para_Mascotas/Directorio-Mascotas_Cali.pdf",
    
  ];

  const arrowStyles = {
    position: "absolute",
    zIndex: 2,
    top: "calc(50% - 15px)",
    width: 30,
    height: 30,
    cursor: "pointer",
    color: "black",
  };
  
  
  

  const CarruselPersonalizado = ({ imagenes, pdfs }) => (
    <div className="relative">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={false} 
        useKeyboardArrows
        autoPlay
        interval={3000}
        centerMode
        centerSlidePercentage={window.innerWidth < 768 ? 50 : 20}
        dynamicHeight={false}
        swipeable
        emulateTouch
        renderArrowPrev={(onClickHandler, hasPrev, label) => 
          hasPrev && (
            <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, left: 15 }}>
              {"<"}
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) => 
          hasNext && (
            <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, right: 15 }}>
              {">"}
            </button>
          )
        }
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          if (isSelected) {
            return;
          }
          return (
            <li
              style={{  background: "#aec8fc" }}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              role="button"
              tabIndex={0}
              title={`${label} ${index + 1}`}
              aria-label={`${label} ${index + 1}`}
            />
          );
        }}
      >
        {imagenes.map((imagen, index) => (
  <div key={index} className="p-4 bg-white rounded-lg shadow-lg m-5 w-3/4 h-3/4 flex justify-center">
    <img 
      src={imagen} 
      className="cursor-pointer" 
      alt="imagen carrusel" 
      onClick={() => window.open(pdfs[index], "_blank")} 
      style={{ 
        width: imagenes.length <= 3 ? '100px' : '100%', 
        height: 'auto' 
      }} 
    />
  </div>
))}

      </Carousel>
    </div>
  );
  

  const Boton = ({ texto, pdfUrl }) => (
    <div className="flex justify-center">
      <button
        className="flex items-center justify-center mt-10 px-6 py-3 bg-[#dee9ff] text-[#0033a1] font-semibold rounded-full shadow-md border-2 border-[#0033a1] text-sm md:text-base"
        onClick={() => window.open(pdfUrl, "_blank")}
      >
        {texto}
        <img
          src="https://firebasestorage.googleapis.com/v0/b/saludanimal-fadab.appspot.com/o/flecha.svg?alt=media&token=4ba00e46-d5bc-4533-a55f-f10d057738fc"
          width="15"
          height="15"
          alt="flecha"
          className="ms-[10px]"
        />
      </button>
    </div>
  );

  const TextoConLink = ({ texto, pdfUrl }) => (
    <div
      className="cursor-pointer text-left mt-8 text-xl text-[#2c6cf5] mb-10 font-semibold text-center md:text-left"
      onClick={() => window.open(pdfUrl, "_blank")}
    >
      {texto}
    </div>
  );

  return (
    <div  className="bg-[#dee9ff] h-auto p-8">
            <div id="directorio" className="cursor-default flex justify-center mt-4 text-2xl lg:text-4xl text-[#001fab] font-bold text-center">
        Directorio de clínicas veterinarias
      </div>
      <TextoConLink texto="Ver red en Bogotá y la Sabana" pdfUrl="https://comunicaciones.segurossura.com.co/MercadeoPersonas/recursos/Salud_para_Mascotas/Directorio-Mascotas_Bogota.pdf" />
      <CarruselPersonalizado imagenes={imagenesBogota} pdfs={pdfsBogota} />
      <TextoConLink texto="Ver red en Medellín, Área Metropolitana y Rionegro" pdfUrl="https://comunicaciones.segurossura.com.co/MercadeoPersonas/recursos/Salud_para_Mascotas/Directorio-Mascotas_Medellin.pdf" />
      <CarruselPersonalizado imagenes={imagenesMedellin} pdfs={pdfsMedellin} />
      <TextoConLink texto="Ver red en Cali y Jamundí" pdfUrl="https://comunicaciones.segurossura.com.co/MercadeoPersonas/recursos/Salud_para_Mascotas/Directorio-Mascotas_Cali.pdf" />
      <CarruselPersonalizado imagenes={imagenesCali} pdfs={pdfsCali} />
      <Boton texto="Ver directorio completo" pdfUrl="https://comunicaciones.segurossura.com.co/MercadeoPersonas/recursos/Directorio.pdf" />
    </div>
  );
}

export default Directorio;










