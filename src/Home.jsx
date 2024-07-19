import React from 'react';


import './Home.css';
import FooterNavbar from './FooterNav';



const technologies = [
    { title: 'React', description: 'Librería para construir interfaces de usuario.' },
    { title: 'HTML', description: 'Lenguaje de marcado para crear estructuras web.' },
    { title: 'JavaScript', description: 'Lenguaje de programación para desarrollo web.' },
    { title: 'SQL', description: 'Lenguaje de consulta estructurado para bases de datos.' },
    { title: 'MongoDB', description: 'Base de datos NoSQL orientada a documentos.' },
    { title: 'Express', description: 'Framework para construir aplicaciones web en Node.js.' },
    { title: 'Node.js', description: 'Entorno de ejecución para JavaScript en el servidor.' },
    { title: 'JWT Token', description: 'JSON Web Token para autenticación segura.' },
    { title: 'AJAX', description: 'Técnica para hacer solicitudes HTTP asincrónicas.' },
    { title: 'JSON', description: 'Formato de intercambio de datos ligero y legible.' },
    { title: 'CSS', description: 'Hojas de estilo en cascada para diseño de páginas web.' },
    { title: 'Soporte Tecnico', description: 'Soporte Tecnico a equipo de Computacional.' }
  ];


  const contactInfo = {
    email: 'ingmauriciocastanedavelarde@gmail.com',
    phone: '+52 3314876363',
    linkedin: 'https://www.linkedin.com/in/mauricio-alejandro-casta%C3%B1eda-velarde-02b075264/',
    github: 'https://github.com/MCASTV',
    ciudad: 'Guadalajara,Jalisco.'

  };
  
  const experiences = [
    
    {
        Tipo:'Experencia como Ingeniero',  
    title: 'Dinamica Computacional (Punto Zero)',
      role: 'Ingeniero en Soporte Técnico',
      duration: 'Sep 2023 - Dic 2023',
      description: 'Soporte Técnico a equipo técnico de Computacional. Apoyo remoto y presencial en un sistema administrativo de punto de venta.'
    },
    {
      title: 'Universidad Enrique Diaz de Leon (Unedl)',
      role: 'Analista de Infraestructura de Tecnología y Telecomunicaciones',
      duration: 'Feb 2023 - Sep 2023',
      description: 'Soporte Técnico a equipo técnico de Computacional, proyectores y equipos de audio. Apoyo en instalaciones universitarias.'
    },
    {
     Tipo:'Experiencia en Practicas profecional y servicio social',
        title: 'Grupo Lipsi',
      role: 'Desarrollador Web Frontend y Backend',
      duration: 'May 2023 - Dic 2023',
      description: 'Desarrollo de página web con base de datos completa usando tecnologías como React, Node.js, Express, y AJAX. Implementación de CRUD para un sistema de usuarios.'
    },
    {
      title: 'Astros de Jalisco',
      role: 'Desarrollador Web Wordpress',
      duration: 'May 2022 - Sep 2022',
      description: 'Desarrollo de página web con base de datos para un sitio con WordPress. Creación de una página web para un equipo deportivo del estado de Jalisco.'
    },
    {
      Tipo:'Experiencia Laboral',
        title: 'Volunt Industrial',
      role: 'Auxiliar Administrativo',
      duration: 'Feb 2022 - Agosto 2023',
      description: 'Soporte en áreas administrativas dentro de la empresa.'
    },
    {
      title: 'Coorporativo Dalton',
      role: 'Auxiliar de Refacciones (Prácticas Escolares)',
      duration: '6 meses en cada agencia',
      description: 'Apoyo para el área de refacciones, entrega de mercancía a clientes y proveedores. Trabajé en varias ubicaciones, incluyendo Dalton Honda Excelencia Motors, Dalton Toyota Lopez Mateos, Dalton Honda Colomos Country, Dalton Honda Dimofi, Dalton Honda Excelencia Motors Colomos Country, y Dalton Kia Lopez Mateos.'
    }
  ];
  const education = [
    {
      institution: 'Universidad de Enrique Díaz de León',
      degree: 'Licenciatura en Ingeniería en Software',
      duration: 'Sep 2019 - Sep 2023'
    }
    // Agrega más datos de educación si es necesario
  ];
  
  const certifications = [
    {
      title: 'Certificación en Frontend',
      institution: 'Alura Latam',
      year: '2023'
    },
    {
      title: 'Certificación en Scrum Fundamental ',
      institution: 'Scrum Study',
      year: '2022'
    }
    // Agrega más certificaciones si es necesar
  ];
  const exptipo =[

    {title1:'Experencia como ingeniero'},
    {title2:"Experencia Practicas profecional y servicio social"},
    
  ]

const Home = () => {
  return (
   

    

    <div className="portfolio-section">
    {/* Sección de Experiencia */}

    <div className="section-title">
       
        <h2>Mauricio Alejandro <br/> Castañeda Velarde<br/>
            <br/>Ingeniero en Software</h2></div>
           
           
            <div className="block">
        <h2>Sobre mi</h2>
        <p>Soy egresado de la carrera de ingenieria en Software, de la universidad enrique diaz, duramte mi tiempo estudiantial aprendi 
            a programar en diferentes lenguajes de programacion, como Java, JavaScript, Html, C, Python pero en una parte de la carrera me gusto la programacion en diseño web , me especialice en los Framework de React, Nodejs los cuales son framewords de JavaScript
            para el diseño web y con ellos aprendi herramientas como jsonWeb Token, Express, Ajax para hacer buenos resultados entra la parte conexion entre el Frontend y Backend y ademas he aprendido a trabajar en el soporte tecnico de equipos de Computacionales, Impresoras. proyectores, equipo de audio. tarjetas de video y servidores.
        </p>
            </div>
            <div className="block exerience-section">
        <h2>Experiencia Laboral</h2>
        <ul className="timeline">
          {experiences.map((exp, idx) => (
            <li key={idx}>
          <h3>{exp.Tipo}</h3>
          <h4>{exp.title}</h4>
              <h5>{exp.role}</h5>
              <h6>Duración: {exp.duration}</h6>
              <p>{exp.description}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Sección de Tecnologías */}
      <div className="block">
        <h2>Tecnologías</h2>
        <div className="technologies-grid">
          {technologies.map((tech, idx) => (
            <div className="custom-card" key={idx}>
              <div className="card-body">
                <h5 className="card-title">{tech.title}</h5>
                <p className="card-text">{tech.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sección de Educación */}
      <div className="block">
        <h2>Educación</h2>
        {education.map((edu, idx) => (
          <div className="education-item" key={idx}>
            <h3>{edu.institution}</h3>
            <h5>{edu.degree}</h5>
            <h6>{edu.duration}</h6>
          </div>
        ))}
      </div>

      {/* Sección de Certificaciones */}
      <div className="block">
        <h2>Certificaciones</h2>
        <ul className="certifications">
          {certifications.map((cert, idx) => (
            <li key={idx}>
              <h4>{cert.title}</h4>
              <p>{cert.institution} - {cert.year}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Sección de Contacto */}
      <div className="block contact-info">
        <h2>Contacto</h2>
        <p>Email: <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></p>
        <p>Teléfono: <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a></p>
        <p>LinkedIn: <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer">{contactInfo.linkedin}</a></p>
        <p>GitHub: <a href={contactInfo.github} target="_blank" rel="noopener noreferrer">{contactInfo.github}</a></p>
        <p>Ubicacion {contactInfo.ciudad}</p>
      </div>


      
    </div>
    
  );
};
    


export default Home;
