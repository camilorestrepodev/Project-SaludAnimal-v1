import {useState} from "react";


const Footer = () => {
  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <footer className="bg-white text-gray-700">
      <div className="bg-[#0033a1] h-0.25 "></div>
      <div className="container mx-auto py-3 px-5 grid grid-cols-1 md:grid-cols-4 gap-">
        <div className="hidden md:block">
          <h3 className="font-bold mb-2 text-[#0033a1] text-xl">
            Sobre Nosotros
          </h3>
          <ul>
            <li
              className="cursor-pointer mt-2 text-[#487ff7]"
              onClick={() =>
                (window.location.href =
                  "https://www.sura.com/#resources-section")
              }
            >
              Acerca de SURA
            </li>
            <li
              className="cursor-pointer mt-2 text-[#487ff7]"
              onClick={() =>
                (window.location.href =
                  "https://www.segurossura.com.co/paginas/gobierno-corporativo.aspx")
              }
            >
              Gobierno corporativo
            </li>
            <li
              className="cursor-pointer mt-2 text-[#487ff7]"
              onClick={() =>
                (window.location.href = "https://suramericana.com/nosotros/")
              }
            >
              Gestión corporativa
            </li>
            <li
              className="cursor-pointer mt-2 text-[#487ff7]"
              onClick={() =>
                (window.location.href =
                  "https://www.sura.com/arteycultura/?utm_source=segurossura&utm_medium=menu&utm_campaign=footer-seguros&utm_content=footer-seguros")
              }
            >
              Vivimos la cultura
            </li>
            <li
              className="cursor-pointer mt-2 text-[#487ff7]"
              onClick={() =>
                (window.location.href =
                  "https://www.segurossura.com.co/landings/reconocimientos-sura/index.html")
              }
            >
              Reconocimientos SURA
            </li>
            <li
              className="cursor-pointer mt-2 text-[#487ff7]"
              onClick={() =>
                (window.location.href =
                  "https://segurossura.com/nosotros/sostenibilidad")
              }
            >
              Responsabilidad ambiental
            </li>
            <li
              className="cursor-pointer mt-2 text-[#487ff7]"
              onClick={() =>
                (window.location.href = "https://suramericana.com/nosotros/")
              }
            >
              Novedades
            </li>
            <li
              className="cursor-pointer mt-2 text-[#487ff7]"
              onClick={() =>
                (window.location.href =
                  "https://www.magneto365.com/co/empresas/seguros-sura?gclid=Cj0KCQjwvL-oBhCxARIsAHkOiu0MF0BF3JsXgnrWtbwvuyQ2XBY3nAAcNk2FXBoRjc4gnFDau0aREn4aAhqUEALw_wcB")
              }
            >
              Trabaja con nosotros
            </li>
          </ul>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/saludanimal-fadab.appspot.com/o/logoA.svg?alt=media&token=2e74d2ee-b3e3-4150-89e6-f47b7e093f8b"
            width="110"
            height="38"
            alt="logo_SURA"
            className="mt-20"
          />
        </div>
        <div className="hidden md:block">
          <h3 className="font-bold mb-2 text-[#0033a1] text-xl">
            Encuéntranos
          </h3>
          <ul>
            <li
              className="cursor-pointer mt-2 text-[#487ff7]"
              onClick={() =>
                (window.location.href =
                  "https://www.segurossura.com.co/paginas/oficinas-y-sucursales.aspx")
              }
            >
              Oficinas y sucursales
            </li>
            <li
              className="cursor-pointer mt-2 text-[#487ff7]"
              onClick={() =>
                (window.location.href =
                  "https://www.segurossura.com.co/paginas/salud/sedes/saludsura.aspx")
              }
            >
              Sedes Salud SURA
            </li>
            <li
              className="cursor-pointer mt-2 text-[#487ff7]"
              onClick={() =>
                (window.location.href =
                  "https://www.segurossura.com.co/paginas/movilidad/autos/centros-de-servicio/inicio.aspx")
              }
            >
              Centros de servicios Autos SURA
            </li>
            <li
              className="cursor-pointer mt-2 text-[#487ff7]"
              onClick={() =>
                (window.location.href =
                  "https://www.segurossura.com.co/paginas/movilidad/motos/centros-de-servicio/motos.aspx")
              }
            >
              Centros de servicios Motos SURA
            </li>
            <li
              className="cursor-pointer mt-2 text-[#487ff7]"
              onClick={() =>
                (window.location.href =
                  "https://directoriomedico.segurossura.com.co/#/home")
              }
            >
              Directorio médico
            </li>
          </ul>
        </div>
        <div className="hidden md:block">
          <h3 className="font-bold mb-2 text-[#0033a1] text-xl">
            Servicios al Usuario
          </h3>
          <ul>
            <li
              className="mt-2 cursor-pointer text-[#487ff7]"
              onClick={() =>
                (window.location.href =
                  "https://asesor.segurossura.com.co/Paginas/Inicio.aspx")
              }
            >
              Asesores
            </li>
            <li
              className="mt-2 cursor-pointer text-[#487ff7]"
              onClick={() =>
                (window.location.href =
                  "https://www.sura.co/centro-de-ayuda/pqrs/escribenos")
              }
            >
              Escríbenos
            </li>
            <li
              className="mt-2 cursor-pointer text-[#487ff7]"
              onClick={() =>
                (window.location.href =
                  "https://www.segurossura.com.co/paginas/glosario.aspx")
              }
            >
              Glosario
            </li>
            <li
              className="mt-2 cursor-pointer text-[#487ff7]"
              onClick={() =>
                (window.location.href =
                  "https://www.segurossura.com.co/paginas/preguntas-frecuentes.aspx")
              }
            >
              Preguntas frecuentes
            </li>
            <li
              className="mt-2 cursor-pointer text-[#487ff7]"
              onClick={() =>
                (window.location.href =
                  "https://www.segurossura.com.co/paginas/casos-eticos.aspx")
              }
            >
              Linea etica
            </li>
            <li
              className="mt-2 cursor-pointer text-[#487ff7]"
              onClick={() =>
                (window.location.href = "https://www.sura.co/legal/sac")
              }
            >
              Atención al consumidor financiero
            </li>
            <li
              className="mt-2 cursor-pointer text-[#487ff7]"
              onClick={() =>
                (window.location.href = "https://www.superfinanciera.gov.co/")
              }
            >
              Superintendencia Financiera
            </li>
            <li
              className="mt-2 cursor-pointer text-[#487ff7]"
              onClick={() =>
                (window.location.href = "https://www.superfinanciera.gov.co/")
              }
            >
              Defensor del consumidor financiero
            </li>
            <li
              className="mt-2 cursor-pointer text-[#487ff7]"
              onClick={() =>
                (window.location.href =
                  "https://www.segurossura.com.co/paginas/legal/informacion-financiera.aspx")
              }
            >
              Información financiera
            </li>
            <li
              className="mt-2 cursor-pointer text-[#487ff7]"
              onClick={() =>
                (window.location.href =
                  "https://www.segurossura.com.co/paginas/ley-de-transparencia.aspx")
              }
            >
              Ley de transparencia
            </li>
            <li
              className="mt-2 cursor-pointer text-[#487ff7]"
              onClick={() =>
                (window.location.href =
                  "https://provalidarpoliza.azurewebsites.net/890903407/verify")
              }
            >
              Certificación pólizas de Cumplimiento y Responsabilidad Civil
              Derivada
            </li>
            <li
              className="mt-2 cursor-pointer text-[#487ff7]"
              onClick={() =>
                (window.location.href =
                  "https://provalidarpoliza.azurewebsites.net/890903407/verify?utm_source=segurossura&utm_medium=menu&utm_campaign=certificacion-poliza-todo-riesgo-contratista&utm_content=footer-home")
              }
            >
              Certificación pólizas de Todo Riesgo
            </li>
          </ul>
        </div>
        <div className="hidden md:block">
          <h3 className="font-bold mb-2 text-[#0033a1] text-xl">
            Líneas de Atención
          </h3>
          <ul>
            <li className="mt-2 text-[#487ff7]">Llamanos sin costo</li>
            <li className="cursor-pointer mt-2 text-[#487ff7] font-bold text-xl">
              #888
            </li>
            <li className="mt-2 text-[#487ff7]">Bogotá</li>
            <li className="cursor-pointer mt-2 text-[#487ff7] font-bold text-xl">
              60143 78888
            </li>
            <li className="mt-2 text-[#487ff7]">Cali</li>
            <li className="cursor-pointer mt-2 text-[#487ff7] font-bold text-xl">
              6024378888
            </li>
            <li className="mt-2 text-[#487ff7]">Medellín</li>
            <li className="cursor-pointer mt-2 text-[#487ff7] font-bold text-xl">
              6044378888
            </li>
            <li className="mt-2 text-[#487ff7]">Resto del país</li>
            <li className="cursor-pointer mt-2 text-[#487ff7] font-bold text-xl">
              01 8000 51 8888
            </li>
            <li
              className="cursor-pointer mt-2 text-[#487ff7] mt-9"
              onClick={() =>
                (window.location.href =
                  "https://www.segurossura.com.co/paginas/legal/politicas-uso-y-seguridad.aspx")
              }
            >
              Políticas de uso y seguridad
            </li>
            <li
              className="cursor-pointer mt-2 text-[#487ff7]"
              onClick={() =>
                (window.location.href =
                  "https://www.segurossura.com.co/paginas/legal/politica-privacidad-datos.aspx")
              }
            >
              Políticas de privacidad y datos y Ley de datos personales
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-[#2c6cf5] text-white py-12 mx-4 md:hidden">
        <div className="container mx-4 text-left">
          <p className="text-lg cursor-pointer" onClick={toggleInfo}>
            LÍNEAS DE ATENCIÓN
          </p>
          {showInfo && (
            <div className="text-left p-3">
              <p>Llámanos sin costo</p>
              <p>#888</p>
              <p>Bogotá</p>
              <p>+57 601 437 8888</p>
              <p>Cali</p>
              <p>+57 602 437 8888</p>
              <p>Medellín</p>
              <p>+57 604 437 8888</p>
              <p>Resto del país</p>
              <p>+57 018000 518888</p>
            </div>
          )}
          <p
            className="cursor-pointer text-lg"
            onClick={() =>
              (window.location.href =
                "https://www.segurossura.com.co/paginas/legal/politica-privacidad-datos.aspx")
            }
          >
            POLÍTICA DE PRIVACIDAD
          </p>
          <p
            className="cursor-pointer text-lg"
            onClick={() =>
              (window.location.href =
                "https://www.segurossura.com.co/paginas/legal/politicas-uso-y-seguridad.aspx")
            }
          >
            POLÍTICA DE SEGURIDAD
          </p>
        </div>
      </div>

      <div className="bg-[#2c6cf5] text-white py-4 hidden md:block">
        <div className="container mx-auto text-center">
          <p
            className="cursor-pointer inline-block mx-3"
            onClick={() => (window.location.href = "https://www.gruposura.com/")}
          >
            GRUPO SURA
          </p>
          <p className="cursor-pointer inline-block mx-3" onClick={() => (window.location.href = "https://segurossura.com/")}>SURAMERICANA</p>
          <p className="cursor-pointer inline-block mx-3" onClick={() => (window.location.href = "https://www.arlsura.com/")}>ARL SURA</p>
          <p className="cursor-pointer inline-block mx-3" onClick={() => (window.location.href = "https://www.epssura.com/")}>EPS SURA</p>
          <p className="cursor-pointer inline-block mx-3" onClick={() => (window.location.href = "https://proveedor.sura.com/Paginas/Publicas/autogestion/soy-proveedor.aspx")}>PROVEEDORES</p>
          <p className="cursor-pointer inline-block mx-3" onClick={() => (window.location.href = "https://asesor.segurossura.com.co/Paginas/Inicio.aspx")}>ASESORES</p>
          <p className="cursor-pointer inline-block mx-3" onClick={() => (window.location.href = "https://geo.sura.com/principal/")}>GEOSURA</p>
          <p className="cursor-pointer inline-block mx-3" onClick={() => (window.location.href = "https://www.fundacionsura.com/")}>FUNDACION SURA</p>
          <p className="cursor-pointer inline-block mx-3" onClick={() => (window.location.href = "https://segurossura.com/como-lo-hacemos/geociencias/")}>GEOCIENCIAS</p>
        </div>
      </div>
      <div className="bg-white text-gray-700 py-5 flex justify-around flex-col md:flex-row items-center">
        <div className="text-left text-[#487ff7]">© Copyright SURA 2022</div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://www.facebook.com/SegurosSURAColombia"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/saludanimal-fadab.appspot.com/o/f.svg?alt=media&token=98eecbf5-6fbf-44c0-b66e-78a345bf1641"
              alt="icon1"
              className="w-8 h-8"
            />
          </a>
          <a
            href="https://www.instagram.com/segurossura/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/saludanimal-fadab.appspot.com/o/i.svg?alt=media&token=38c40b4b-517f-4356-828f-ed96b78efe5a"
              alt="icon2"
              className="w-8 h-8"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/sura-seguros/mycompany/verification/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/saludanimal-fadab.appspot.com/o/l.svg?alt=media&token=e670e7ca-d6b8-4d45-8e55-78ffc825431d"
              alt="icon3"
              className="w-8 h-8"
            />
          </a>
          <a
            href="https://x.com/SegurosSURAcol"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/saludanimal-fadab.appspot.com/o/x.svg?alt=media&token=0f318a89-01ef-4da3-93ec-84c041591a55"
              alt="icon4"
              className="w-8 h-8"
            />
          </a>
          <a
            href="https://www.youtube.com/channel/UC_voqvWCPExU_khvJHFbW_g?ybp=-gEOZm9vdGVyLXNlZ3Vyb3M%253D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/saludanimal-fadab.appspot.com/o/y.svg?alt=media&token=2da23b96-1169-46fd-a879-bf8a9015a9b5"
              alt="icon5"
              className="w-8 h-8"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
