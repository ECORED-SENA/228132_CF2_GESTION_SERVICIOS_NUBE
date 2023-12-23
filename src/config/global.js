export default {
  global: {
    componenteFormativo:
      'Análisis, valoración de riesgos y controles de ciberseguridad',
    descripcionCurso:
      'A partir del estudio de este componente formativo, el aprendiz estará en capacidad de describir y aplicar las acciones de análisis y valoración de riesgos y controles de ciberseguridad; todo ello con base en métodos específicos de análisis de riesgos de seguridad. Adicionalmente, podrá establecer como resultado, el plan de tratamiento adecuado.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/candado.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/iconos.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Técnicas de recolección de información',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Técnicas de recolección más usuales',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Características de las técnicas de recolección',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Vulnerabilidades y amenazas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Valoración de amenazas y vulnerabilidades',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Tratamiento de riesgos',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Seguridad e infraestructura de <em>hardware</em> y <em>software</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Infraestructura de <em>hardware</em> y <em>software</em>',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Componentes de infraestructura y seguridad',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Interconexiones de redes y seguridad perimetral',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Herramientas de análisis de seguridad digital',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Inventario de activos y evaluación de impacto de riesgos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Riesgos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Valoración',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '7.1',
            titulo: 'Riesgo inherente',
            hash: 't_7_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.2',
            titulo: 'Evaluación de controles de seguridad',
            hash: 't_7_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.3',
            titulo: 'La importancia del control',
            hash: 't_7_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.4',
            titulo: 'Riesgo residual',
            hash: 't_7_4',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'Matriz de riesgos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '8.1',
            titulo: 'Diligenciamiento de la matriz de riesgos',
            hash: 't_8_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '8.2',
            titulo: 'Plan de tratamiento de riesgos',
            hash: 't_8_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema:
        '3. Seguridad e Infraestructura de <i>hardware</i> y <i>software</i>',
      referencia:
        'Tenable. (2021). <i>Tenable for education, Instructor / Student guide</i>.',
      tipo: 'Página web',
      link:
        'https://static.tenable.com/marketing/whitepapers/Guide-Tenable-for-Education.pdf',
    },
    {
      tema: '3.3. Interconexiones de redes y seguridad perimetral',
      referencia: 'Owasp. (2021). OWASP ZAP 2.9. <i>Getting Started Guide</i>.',
      tipo: 'Página web',
      link: 'https://www.zaproxy.org/pdf/ZAPGettingStartedGuide-2.9.pdf',
    },
    {
      tema: '4. Herramientas de análisis de seguridad digital',
      referencia: 'SUBGRAPH. (2021). <i>About Vega</i>.',
      tipo: 'Página web',
      link: 'https://subgraph.com/vega/documentation/about-vega/index.en.html',
    },
  ],
  glosario: [
    {
      termino: 'Activo de información',
      significado:
        'Componente el cual almacena, trata, muestra o transporta datos e información, pudiendo ser físicos o digitales, por ejemplo, una base de datos, <i>software</i>, sistemas de información, papel, discos duros, personas, procesos, etc.',
    },
    {
      termino: 'Amenaza',
      significado:
        'Se define como toda aquella acción o serie de acciones que aprovechan las vulnerabilidades para romper la seguridad de los sistemas.',
    },
    {
      termino: 'Autenticidad',
      significado:
        'Propiedad o característica consistente en que una entidad es quien dice ser o bien que garantiza la fuente de la que proceden los datos [UNE 71504:2008].',
    },
    {
      termino: 'Cloud Computing',
      terminoHtml: '<em>Cloud Computing</em>',
      significado:
        'La computación en la nube se refiere a la utilización de soluciones <em>hardware</em> y <em>software</em> dispuestos a través de internet para la implementación de soluciones informáticas.',
    },
    {
      termino: 'Confidencialidad de la información',
      significado:
        'Propiedad o característica consistente en que la información ni se pone a disposición, ni se revela a individuos, entidades o procesos no autorizados [UNE 71504:2008].',
    },
    {
      termino: 'Control o salvaguarda',
      significado:
        'Medida de protección o control para contrarrestar amenazas.',
    },
    {
      termino: 'Disponibilidad',
      significado:
        'Propiedad o característica de los activos consistente en que las entidades o procesos autorizados tienen acceso a los mismos cuando lo requieren.',
    },
    {
      termino: 'Hardware',
      terminoHtml: '<em>Hardware</em>',
      significado:
        'Componentes tecnológicos de carácter físico que soportan el <em>software</em>.',
    },
    {
      termino: 'Infraestructura TI',
      significado:
        'La infraestructura tecnológica consiste en los componentes de <em>hardware</em> y <em>software</em> requeridos para gestionar y operar entornos tecnológicos que pueden ser implementados en instalaciones de la organización o en sistemas en la nube, <em>Cloud Computing</em>.',
    },
    {
      termino: 'Integridad de los datos',
      significado:
        'Propiedad o característica consistente en que el activo de información no ha sido alterado de manera no autorizada [ISO/IEC 13335-1:2004].',
    },
    {
      termino: 'Riesgo',
      significado: 'Contingencia o proximidad de un daño. RAE (2021).',
    },
    {
      termino: 'Software',
      terminoHtml: '<em>Software</em>',
      significado:
        'Componente intangible compuesto por un sistema, servicios, programas y/o aplicaciones. Es un mecanismo para realizar instrucciones a los componentes de <em>hardware</em> en un sistema informático, como a los microprocesadores.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'Propiedad o característica consistente en que las actuaciones de una entidad pueden ser imputadas exclusivamente a dicha entidad [UNE 71504:2008].',
    },
    {
      termino: 'Vulnerabilidad',
      significado:
        'En informática, se define como una debilidad o fallo de seguridad que se presenta en un sistema de información, que puede estar compuesto por <em>software</em>, <em>hardware</em> y otros componentes y servicios tecnológicos, generando riesgos de seguridad de la información.',
    },
  ],
  referencias: [
    {
      referencia:
        'Chaves, E. (2009). <i>Manual metodológico para la recolección de Información</i>. ',
      link: 'http://funes.uniandes.edu.co/21233/1/Chaves2009Manual.pdf ',
    },
    {
      referencia:
        'Gallardo, Y. & Moreno A. (1999). <i>Serie aprender a investigar. Módulo recolección de la información</i>. ',
      link:
        'http://www.unilibrebaq.edu.co/unilibrebaq/images/CEUL/mod3recoleccioninform.pdf ',
    },

    {
      referencia:
        'International Business Machines Corporation. (2021). <i>¿Qué es infraestructura de TI? IBM</i>. ',
      link: 'https://www.ibm.com/co-es/topics/infrastructure ',
    },

    {
      referencia:
        'Ministerio de Hacienda y Administraciones Públicas. (2012). MAGERIT – Versión 3.0. <i>Metodología de Análisis y Gestión de Riesgos de los Sistemas de Información. Catálogo de Elementos</i>. ',
      link:
        'https://administracionelectronica.gob.es/pae_Home/dam/jcr:5fbe15c3-c797-46a6-acd8-51311f4c2d29/2012_Magerit_v3_libro2_catalogo-de-elementos_es_NIPO_630-12-171-8.pdf ',
    },
    {
      referencia:
        'Ministerio de Tecnologías de la Información y Comunicaciones. (2012). <i>Guía de gestión de riesgos. Seguridad y privacidad de la información</i>.',
      link:
        'https://www.mintic.gov.co/gestionti/615/articles-5482_G7_Gestion_Riesgos.pdf ',
    },
    {
      referencia:
        'Nmap Security. (2021). <i>Guía de referencia de Nmap</i>. NMAP. ',
      link: 'https://nmap.org/man/es/index.html#man-description ',
    },
    {
      referencia:
        'OpenVas by Greenbone. (2021). <i>OpenVAS: escáner de evaluación de vulnerabilidades abiertas</i>. OPENVAS. ',
      link: 'https://www.openvas.org/ ',
    },
    {
      referencia:
        'Peña, O. (2020). <i>¿Para qué sirven las técnicas de recolección de información?</i> POLIVERSO. ',
      link:
        'https://www.poli.edu.co/blog/poliverso/tecnicas-de-recoleccion-de-informacion ',
    },
    {
      referencia: 'Real Academia Española. (2021). <i>Riesgo</i>. RAE ',
      link: 'https://dle.rae.es/riesgo ',
    },
    {
      referencia:
        'WireShark.org. (2021). <i>Analizador de protocolos de red</i>. WIRESHARK. ',
      link: 'https://www.wireshark.org/ ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Fabio Alberto Ramírez Ayala',
          cargo: 'Experto temático',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Diseñador instruccional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Luisa Fernanda Posada Hincapié',
          cargo: 'Experto temático',
          centro: 'Regional Quindío - Centro de Comercio, Industria y Turismo',
        },
        {
          nombre: 'Gloria Alexandra Orejarena Barrios',
          cargo: 'Diseño instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'María Inés Machado López',
          cargo: 'Diseño instruccional',
          centro:
            'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesoría metodológica y pedagógica',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Gloria Amparo López Escudero',
          cargo: 'Adecuación instruccional - 2023',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Asesoría metodológica y pedagógica - 2023',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Responsable del equipo',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Leyson Fabian Castaño Perez',
          cargo: 'Soporte organizacional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Fabián Zarate',
          cargo: 'Diseño web',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Sergio Mauricio Valencia Martínez',
          cargo: 'Desarrollo front-End',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Andrea Botello',
          cargo: 'Soporte front-end',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Zuleidy María Ruíz Torres',
          cargo: 'Producción audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Producción audiovisual',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Producción audiovisual',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'María Carolina Tamayo López',
          cargo: 'Locución',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Ilustración',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Yeimmy Bibiana Barrera Maldonado',
          cargo: 'Ilustración',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Estefani Daniela Gallo Cortés',
          cargo: 'Ilustración',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Miguel Guerrero Gutiérrez',
          cargo: 'Producción audiovisual',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Pedro Nel Calao Zabala',
          cargo: 'Producción audiovisual',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Producción audiovisual',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Lady Adriana Ariza Luque',
          cargo: 'Producción audiovisual',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'María Eugenia Mejía López',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseño web - 2023',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Diego Fernando Velasco Guiza',
          cargo: 'Desarrollo fullstack - 2023',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Leyson Fabián Castaño Pérez',
          cargo:
            'Validación de recursos educativos digitales y vinculación LMS',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
