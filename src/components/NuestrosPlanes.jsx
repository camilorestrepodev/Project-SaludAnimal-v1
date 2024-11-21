import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../App.css";

function NuestrosPlanes() {
  const planesPerros = [
    {
      title: "PLAN ESENCIAL",
      price: "Desde $44.300",
      features: [
        {
          subtitle: "Atención preventiva sin copago",
          details: ["Teleorientación 24/7", "1 Desparasitación por año", "Información y actividades de bienestar SURA"]
        },
        {
          subtitle: "Atención con copago por accidente y enfermedad",
          details: ["Urgencias, hospitalización, cirugía, consulta por enfermedad o accidente, endoscopia digestiva (terapéutica) y eutanasia.", "Atención de emergencias a nivel nacional en caso de viaje a una ciudad sin cobertura (por reembolso)", "Valor asegurado de atención veterinaria $1.500.000"]
        },
        {
          subtitle: "Responsabilidad civil opcional",
          details: ["Hasta 50 SMMLV"]
        }
      ],
    },
    {
      title: "PLAN CLÁSICO",
      price: "Desde $84.700",
      features: [
        {
          subtitle: "Atención preventiva sin copago",
          details: ["Teleorientación 24/7", "1 Desparasitación por año", "Consulta preventiva anual", "Vacuna anual (penta + rabia)", "Información y actividades de bienestar SURA"]
        },
        {
          subtitle: "Atención con copago por accidente y enfermedad ",
          details: ["Urgencias, hospitalización, cirugía, consulta por enfermedad o accidente, endoscopia digestiva (terapéutica) y eutanasia. ​", "Atención de emergencias a nivel nacional en caso de viaje a una ciudad sin cobertura (por reembolso)", "Consulta por especialista", "Ayudas diagnósticas ambulatorias (laboratorio, rayos X y ecografía)", "Valor asegurado de atención veterinaria $3.500.000"]
        },
        {
          subtitle: "Auxilio funerario",
          details: ["Hasta $300.000"]
        },
        {
          subtitle: "Responsabilidad civil opcional",
          details: ["Hasta 50 SMMLV"]
        }
      ],
    },
    {
      title: "PLAN GLOBAL",
      price: "Desde $133.800",
      features: [
        {
          subtitle: "Atención preventiva sin copago",
          details: ["Teleorientación 24/7", "2 Desparasitaciones por año ", "Consulta preventiva anual", "Vacuna anual (penta + rabia)", "Información y actividades de bienestar SURA"]
        },
        {
          subtitle: "Atención con copago por accidente y enfermedad",
          details: ["Urgencias, hospitalización, cirugía, consulta por enfermedad o accidente, endoscopia digestiva (terapéutica) y eutanasia. ​", "Atención de emergencias a nivel nacional en caso de viaje a una ciudad sin cobertura (por reembolso)", "Consulta por especialista", "Ayudas diagnósticas ambulatorias (laboratorio, rayos X y ecografía)", "Consulta domiciliaria","Profilaxis dental anual","Esterilización","Resonancia y tomografía","Valor asegurado de atención veterinaria $6.000.000"]
        },
        {
          subtitle: "Auxilio funerario",
          details: ["Hasta $600.000"]
        },
        {
          subtitle: "Responsabilidad civil opcional",
          details: ["Hasta 50 SMMLV"]
        }
      ],
    },
  ];

  const planesGatos = [
    {
      title: "PLAN ESENCIAL",
      price: "Desde $42.100",
      features: [
        {
          subtitle: "Atención preventiva sin copago",
          details: ["Teleorientación 24/7", "1 Desparasitación por año ", "Información y actividades de bienestar SURA"]
        },
        {
          subtitle: "Atención con copago por accidente y enfermedad",
          details: ["Urgencias, hospitalización, cirugía, consulta por enfermedad o accidente, endoscopia digestiva (terapéutica) y eutanasia. ​", "Atención de emergencias a nivel nacional en caso de viaje a una ciudad sin cobertura (por reembolso)", "Consulta domiciliaria"]
        },
        {
          details: ["Valor asegurado de atención veterinaria $1.500.000"]
        },
      ],
    },
    {
      title: "PLAN CLÁSICO",
      price: "Desde $79.700",
      features: [
        {
          subtitle: "Atención preventiva sin copago",
          details: ["Teleorientación 24/7", "1 Desparasitación por año", "Consulta preventiva anual", "Vacuna anual (triple + rabia)", "Información y actividades de bienestar SURA"]
        },
        {
          subtitle: "Atención con copago por accidente y enfermedad ",
          details: ["Urgencias, hospitalización, cirugía, consulta por enfermedad o accidente, endoscopia digestiva (terapéutica) y eutanasia. ​ ", "Atención de emergencias a nivel nacional en caso de viaje a una ciudad sin cobertura (por reembolso)", "Consulta domiciliaria","Consulta por especialista", "Ayudas diagnósticas ambulatorias (laboratorio, rayos X y ecografía)", "Valor asegurado de atención veterinaria $3.500.000"]
        },
        {
          subtitle: "Auxilio funerario",
          details: ["Hasta $240.000"]
        },
      ],
    },
    {
      title: "PLAN GLOBAL",
      price: "Desde $125.500",
      features: [
        {
          subtitle: "Atención preventiva sin copago",
          details: ["Teleorientación 24/7", "2 Desparasitaciones por año ", "Consulta preventiva anual", "Vacuna anual (triple + rabia)", "Información y actividades de bienestar SURA"]
        },
        {
          subtitle: "Atención con copago por accidente y enfermedad",
          details: ["Urgencias, hospitalización, cirugía, consulta por enfermedad o accidente, endoscopia digestiva (terapéutica) y eutanasia. ​", "Atención de emergencias a nivel nacional en caso de viaje a una ciudad sin cobertura (por reembolso)", "Consulta por especialista", "Ayudas diagnósticas ambulatorias (laboratorio, rayos X y ecografía)", "Consulta domiciliaria","Profilaxis dental anual","Esterilización","Resonancia y tomografía","Valor asegurado de atención veterinaria $6.000.000"]
        },
        {
          subtitle: "Auxilio funerario",
          details: ["Hasta $480.000"]
        },
      ],
    },
  ];

  const [selected, setSelected] = useState("Perros");
  const [showFeatures, setShowFeatures] = useState(
    Array(planesPerros.length).fill(false)
  );
  const [data, setData] = useState(planesPerros);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = (newData) => {
    setData(newData);
    setShowFeatures(Array(newData.length).fill(false));
  };

  const toggleFeatures = (index) => {
    const newShowFeatures = [...showFeatures];
    newShowFeatures[index] = !newShowFeatures[index];
    setShowFeatures(newShowFeatures);
  };

  const Planes = data.map((card, index) => (
    <div
    key={index}
    className={`tarjeta shadow rounded-3xl px-4 pt-4 pb-6 mb-10 mt-10 transition-all duration-500 ${
      showFeatures[index] ? "max-h-[1100px]" : "max-h-[300px]"
    } md:max-h-[930px] ${
      index === 1 ? "bg-[#2c6cf5] text-white" : "bg-white text-black"
    } relative`}
  >
    <div className="mb-2 mt-5 text-center md:text-center">
      <div className="flex justify-center items-center w-auto relative z-10">
        <h2
          className={`text-xl mt-5 md:mt-0 md:text-2xl font-bold mb-2 ${
            index !== 1 ? "text-[#2c6cf5]" : ""
          }`}
        >
          {card.title}
        </h2>
      </div>
      <p
        className={`text-2xl font-bold mb-2 ${
          index !== 1 ? "text-[#2c6cf5]" : ""
        }`}
      >
        <span className="text-xl md:text-2xl">
          {card.price.split("/")[0]}
          <br></br>
        </span>
        <span>Mensual</span>
      </p>
      <div className={`gap-4 p-3 max-w-60 ${showFeatures[index] ? "block" : "hidden"} md:block`}>
        {card.features.map((feature, featureIndex) => (
          <div key={featureIndex} className="mb-4">
            <h3 className="flex flex-col justify-start text-left text-lg font-bold">{feature.subtitle}</h3>
            <ul>
              {feature.details.map((detail, detailIndex) => (
                <li key={detailIndex} className="list-disc text-left text-sm">
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <img
      src={
        index === 1
          ? "https://firebasestorage.googleapis.com/v0/b/saludanimal-fadab.appspot.com/o/Vector.svg?alt=media&token=92089bf7-2807-4ca9-bccf-035a8c20fcf0"
          : "https://firebasestorage.googleapis.com/v0/b/saludanimal-fadab.appspot.com/o/angle-up.svg?alt=media&token=ebec5c6d-1f88-4da8-9d7c-43794c742898"
      }
      alt={index === 1 ? "imagen-diferente" : "angulo-arriba"}
      onClick={() => toggleFeatures(index)}
      className="cursor-pointer mt-5 md:hidden absolute right-4 top-4 z-20"
      style={{ width: "25px", height: "25px" }}
    />
  </div>
  
));

  

  return (
    <div id="nuestros-planes" className="planes flex flex-col items-center">
      <div className="text-center mt-5">
        <div>
          <span className="text-[#0020b0] text-2xl sm:text-2xl md:text-4xl lg:text-[65px] font-bold">
            Conoce aquí nuestros
          </span>
        </div>
        <div className="lg:mt-5">
          <span className="text-[#006fff] text-3xl sm:text-2xl md:text-4xl lg:text-[65px] font-bold">
            Planes
          </span>
        </div>
      </div>

      <div className="flex justify-center items-center w-full mt-2">
        <button
          onClick={() => {
            setSelected("Perros");
            handleClick(planesPerros);
          }}
          className={`bg-white text-[#2c6cf5] font-bold py-2 px-4 rounded text-center w-[400px] ${
            selected === "Perros" ? "border-b-2 border-[#2c6cf5]" : ""
          }`}
        >
          <div className="flex justify-center items-center">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/saludanimal-fadab.appspot.com/o/Capa_1.svg?alt=media&token=d3a9ce49-7593-4560-b783-78961d46733d"
              width="20"
              height="20"
              alt="Perro"
              className="me-3"
            />
            <span>Perros</span>
          </div>
        </button>
        <button
          onClick={() => {
            setSelected("Gatos");
            handleClick(planesGatos);
          }}
          className={`bg-white text-[#2c6cf5] font-bold py-2 px-4 rounded text-center w-[400px] ${
            selected === "Gatos" ? "border-b-2 border-[#2c6cf5]" : ""
          }`}
        >
          <div className="flex justify-center items-center">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/saludanimal-fadab.appspot.com/o/Capa_2.svg?alt=media&token=1342fdf1-c0a6-4b88-b5c4-addd8b33df7e"
              width="20"
              height="20"
              alt="Gato"
              className="me-3"
            />
            <span>Gatos</span>
          </div>
        </button>
      </div>

      <div className="bg-[#f5f5f5] h-full flex flex-wrap justify-center p-5 w-full mt-2 gap-6">
        {isMobile ? (
          <Carousel showThumbs={false} className="w-full flex justify-center">
            {Planes.map((plan, index) => (
              <div key={index} className="p-2 w-[70%] mx-auto relative">
                {plan}
              </div>
            ))}
          </Carousel>
        ) : (
          Planes
        )}
      </div>
    </div>
  );
}

export default NuestrosPlanes;
