import React, { useState } from "react";

const PreguntasFrecuentes = () => {
  const [abierto, setAbierto] = useState({});
  const [terminoBusqueda, setTerminoBusqueda] = useState("");
  const [filtro, setFiltro] = useState("");

  const preguntas = [
    { id: 1, categoria: "Atención veterinaria, coberturas y mascotas asegurables", pregunta: "¿Cómo puedo acceder a la atención veterinaria?", respuesta: "En la sección 'directorio médico' de este sitio encontrarás la red de clínicas veterinarias adscritas y sus teléfonos para que puedas agendar la atención o dirigirte allí en caso de urgencias, accidente o enfermedad. Recuerda siempre identificarte con el carné de tu mascota." },
    { id: 2, categoria: "Atención veterinaria, coberturas y mascotas asegurables", pregunta: "¿Cuál es el límite de edad para asegurar una mascota?", respuesta: "Puedes ingresar tus perros o gatos al Plan de Salud para Mascotas desde los 4 meses hasta los 7 años. Luego de los 7 años tu mascota podrá continuar asegurada sin límite de edad." },
    { id: 3, categoria: "Atención veterinaria, coberturas y mascotas asegurables", pregunta: "¿Los planes incluyen medicamentos?", respuesta: "Aquellos aplicados dentro de la clínica si son cubiertos. Los medicamentos ambulatorios (por fuera de una atención de urgencias u hospitalización) no están incluidos." },
    { id: 4, categoria: "Atención veterinaria, coberturas y mascotas asegurables", pregunta: "¿Cuándo puedo comenzar a usar el plan de salud de mi mascota?", respuesta: "Tu póliza se activará 15 días después de la fecha de compra. Para algunas atenciones de alta complejidad (profilaxis dental, esterilización, tomografía y resonancia, cáncer, sida, leucemia, enfermedades neurológicas, renales y ortopédicas incluyendo displasias) debes esperar 3 meses y así podrás acceder a todos los servicios.​" },
    { id: 5, categoria: "Atención veterinaria, coberturas y mascotas asegurables", pregunta: "¿Cuál es el valor asegurado?", respuesta: "Para la atención veterinaria tendrás una bolsa de valor asegurado anual dependiendo del plan seleccionado (1.500.000 millones en el Esencial, 3.500.000 millones en el Clásico y 6.000.000 millones en el Global). Igualmente tendrás un valor asegurado para Auxilio Funerario que puede variar según el plan seleccionado. La cobertura opcional de Responsabilidad Civil en los planes de perros tiene un valor asegurado de 50 salarios mínimos." },
    { id: 6, categoria: "Atención veterinaria, coberturas y mascotas asegurables", pregunta: "¿En qué ciudades puedo asegurar a mi mascota?", respuesta: "Salud para Mascota es un plan de salud en red cerrada con cobertura en Bogotá (la Sabana), Medellín (Área Metropolitana y Rionegro) y Cali. Si vives en otra ciudad debes optar por otro tipo de seguro." },
    { id: 7, categoria: "Atención veterinaria, coberturas y mascotas asegurables", pregunta: "¿Cuándo debo tomar la cobertura de responsabilidad civil?", respuesta: "Esta es una cobertura opcional en los planes de perros que te protegerá por daños a terceros cuando tu mascota ataque a otro animal o a una persona. Esta cobertura es recomendable para cualquier perro mediano o grande que tenga la capacidad potencial de generar lesiones o muerte, así como para los perros de manejo especial (perros que ya han atacado a personas o perros, perros adiestrados para atacar o defender y perros de razas conocidas como potencialmente peligrosas)." },
    { id: 8, categoria: "Atención veterinaria, coberturas y mascotas asegurables", pregunta: "¿Qué son las preexistencias?", respuesta: "Son enfermedades diagnosticadas antes de comprar el seguro y por lo tanto no pueden ser cubiertas dentro del Plan de Salud para Mascotas. Al momento de ingresar a salud para mascotas debes responder con exactitud las preguntas sobre los antecedentes de tu mascota." },
    { id: 9, categoria: "Atención veterinaria, coberturas y mascotas asegurables", pregunta: "¿Salud para mascotas cubre displasia articular (cadera y codo), cáncer, enfermedad renal, VIF, leucemia y otras enfermedades crónicas?", respuesta: "Sí. A diferencia de muchos seguros de mascotas, protegemos a tu mascota en caso de presentar este tipo de enfermedades graves y crónicas luego de un periodo de carencia de 3 meses, siempre y cuando sean diagnosticadas durante la vigencia del seguro." },
    { id: 10, categoria: "Atención veterinaria, coberturas y mascotas asegurables", pregunta: "¿Cuál es el valor del copago?", respuesta: "Las atenciones preventivas son libres de copago. En caso de enfermedad o accidente deberás cancelar en la clínica un copago correspondiente al máximo valor entre el 10% del costo por cada servicio y la suma mínima establecida por SURA en la carátula de la póliza." },
    { id: 11, categoria: "Descuentos y beneficios", pregunta: "¿Puedo asegurar varias mascotas en un mismo plan?", respuesta: "En una misma póliza podrás asegurar hasta 5 perros o 5 gatos, sin combinar perros y gatos. Para cada mascota puedes elegir un plan diferente dentro de la misma póliza." },
    { id: 12, categoria: "Descuentos y beneficios", pregunta: "¿Ofrecen descuento al asegurar varias mascotas?", respuesta: "Puedes asegurar hasta 5 perros o 5 gatos en cada póliza con un descuento aplicable desde la segunda mascota en adelante. Se entenderá como la mascota número uno aquella cuyo plan de salud sea el de mayor valor." },
    { id: 13, categoria: "Descuentos y beneficios", pregunta: "¿Hay beneficios para perros criollos o mestizos adoptados?", respuesta: "En SURA promovemos la adopción y queremos desincentivar la reproducción indiscriminada. Por esto ofrecemos un descuento para los perros criollos, además nos vinculamos con algunas causas sociales o de salud." },
    { id: 14, categoria: "Pago del seguro y reembolsos", pregunta: "¿Cómo puedo pagar el plan de salud de mi mascota?", respuesta: "Ingresando a www.segurossura.com.co y a través del botón Pago Express. Digitas tu cédula y te aparecerá la factura con el valor a pagar. Podrás usar los distintos medios de pago que tiene habilitados SURA." },
    { id: 15, categoria: "Pago del seguro y reembolsos", pregunta: "¿Puedo fraccionar o pagar mensualmente la prima del plan de salud de mi mascota?", respuesta: "Al momento de la compra, puedes optar por pago mensual o anual. En el caso del pago anual recibirás un descuento." },
    { id: 16, categoria: "Pago del seguro y reembolsos", pregunta: "¿Cuándo puedo acceder a un reembolso?", respuesta: "Cuando tu mascota tenga una emergencia (atención inicial y estabilización) y estés en una ciudad sin red de atención por SURA. Igualmente, en caso de fallecimiento de tu mascota para el auxilio funerario y en caso de reclamación por responsabilidad civil, mediante solicitud al correo saludmascotas@sura.com.co adjuntando los soportes correspondientes según el clausulado.​" },
  ];

  const manejarToggle = (id) => {
    setAbierto((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const manejarFiltro = (categoria) => {
    setFiltro((prevFiltro) => (prevFiltro === categoria ? "" : categoria));
  };

  const preguntasFiltradas = preguntas.filter((pregunta) => {
    return (
      pregunta.pregunta.toLowerCase().includes(terminoBusqueda.toLowerCase()) &&
      (filtro ? pregunta.categoria === filtro : true)
    );
  });

  return (
    <div id="preguntas-frecuentes" className="p-6 bg-[#f9fae1]">
      <div className="w-full lg:w-3/4 mx-auto">
        <h1 className="text-3xl text-[#0033a1] font-bold mb-6 mt-3 tracking-wider">Preguntas Frecuentes</h1>
        <div className="flex flex-col justify-center items-center mb-4">
          <div className="w-full">
            <input
              type="text"
              placeholder="Buscar..."
              value={terminoBusqueda}
              onChange={(e) => setTerminoBusqueda(e.target.value)}
              className="w-full p-3 pr-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#3b82f5] mb-4"
              style={{ backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/saludanimal-fadab.appspot.com/o/lupa.svg?alt=media&token=b6682f70-85ed-4f73-808f-fe6f992d469d')`, backgroundPosition: 'right 10px center', backgroundRepeat: 'no-repeat' }}
            />
          </div>
          <div className="flex flex-col sm:flex-row space-x-4 w-full">
            {["Atención veterinaria, coberturas y mascotas asegurables", "Descuentos y beneficios", "Pago del seguro y reembolsos"].map((categoria) => (
              <button
                key={categoria}
                onClick={() => manejarFiltro(categoria)}
                className={`bg-blue-500 text-white mt-3 py-2 px-4 rounded-full flex-shrink-0 ${
                  filtro === categoria ? "bg-blue-700" : ""
                }`}
              >
                {categoria}
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          {preguntasFiltradas.map((pregunta) => (
            <div key={pregunta.id} className="bg-white p-4 rounded-xl shadow">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">{pregunta.pregunta}</h2>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/saludanimal-fadab.appspot.com/o/angle-up.svg?alt=media&token=ebec5c6d-1f88-4da8-9d7c-43794c742898"
                  alt="Expandir"
                  onClick={() => manejarToggle(pregunta.id)}
                  className="text-xl cursor-pointer"
                />
              </div>
              {abierto[pregunta.id] && <p className="mt-2">{pregunta.respuesta}</p>}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full lg:w-4/2 mt-10 p-10">
        <h3 className="text-4xl text-[#0020b0] text-center font-semibold">Si necesitas contactarnos</h3>
        <p className="mt-4 text-[#2c6cf5] text-2xl">
          Lláma al <strong>#888</strong> o escríbenos al correo:
          <br />
          <u className="font-bold">saludmascotas@sura.com.co</u>
        </p>
      </div>
    </div>
  );
};

export default PreguntasFrecuentes;


