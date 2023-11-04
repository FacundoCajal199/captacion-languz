export const data = [
    {
        imageSrc: "https://i.ibb.co/jwfDNQw/1.png",
        imageAlt: "Imagen 1",
        lista: [ "Profesionales que buscan ascender en sus carreras y o empresas y saben que el inglés es esencial para alcanzar sus metas",  "Personas que buscan mejores oportunidades de empleo y/o buscan mejores oportunidades de negocio", "Estudiantes universitarios latinos que necesitan mejorar su inglés para obtener mejores calificaciones y su título profesional."]
    },
    {
        imageSrc: "https://i.ibb.co/WvHQFZv/2.png",
        imageAlt: "Imagen 1 viajeros",
        lista: [ "Personas que desean viajar a los estados unidos o al extranjero", "Inmigrantes de habla Hispana en busca de mejores oportunidades laborales que requieren hablar inglés con fluidez",]
    },
    {
        imageSrc: "https://i.ibb.co/Vt1h4K7/3.png",
        imageAlt: "Imagen Intentos fallidos",
        lista: ["Personas que han intentado aprender inglés de diferentes maneras, pero por alguna razón no han logrado la fluidez del idioma","Personas que se sienten desanimadas por no haber logrado aprender inglés con los métodos tradicionales y buscan nuevas técnicas de estudio." , "Personas que se sienten excluidas socialmente debido a su falta de habilidades en este idioma"]
    },
    {
        imageSrc: "https://i.ibb.co/f9QhZ9n/relog.png",
        imageAlt: "Imagen 3 tiempo",
        lista: [ "Personas que requieren con urgencia aprender ingles por alguna razon","Personas que saben o sienten que el método tradicional de aprendizaje no funciona"]
    },
    
  ];
  import { GoChevronRight } from "react-icons/go";
  const Tarjeta = ({ items }) => {
    return (
      <>
      <div className='bg'>
      <h2 className="text-center pb-4 style-titulos-dos mt-3">PARA QUIEN ES ESTE EVENTO</h2>

<section className="container grid-container">
 {items.map((item, index) => (
   <article key={index} className="tarjeta">
     <div className="d-flex justify-content-center">
       <img src={item.imageSrc} alt={item.imageAlt} width={200} />
     </div>

     <div className="py-3 container">
       {item.lista.map((element, i) => (
         <p className="h5 py-3" key={i}>
           <GoChevronRight className="h3" />
           {element}
         </p>
       ))}
     </div>
   </article>
 ))}


</section>
      </div>

      </>
    );
  };
  




  export default Tarjeta;
  