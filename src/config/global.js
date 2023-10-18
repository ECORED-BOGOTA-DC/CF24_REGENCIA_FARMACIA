export default {
  global: {
    componenteFormativo:
      'Administración de medicamentos vía IM en servicios farmacéuticos',
    descripcionCurso:
      'El uso seguro de los medicamentos envuelve a los pacientes, cuidadores, personal de salud calificado, instituciones prestadoras de servicios de salud y demás actores del Sistema General de Seguridad Social en Salud; ya que comprende las acciones de detección, prevención y tratamiento oportuno de los eventos adversos relacionados con la administración de medicamentos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
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
        numero: '1',
        titulo:
          'Normativa para la administración de medicamentos en farmacias y droguerías',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Proceso de dispensación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Seguridad del paciente',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Generalidades de microbiología',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Bacterias, virus, hongos, protozoos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Flora humana',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Cadena de transmisión',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Bioseguridad',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Técnica aséptica',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Precauciones durante la preparación y envasado',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Protocolos para la administración de medicamentos',
        desarrolloContenidos: true,
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/331502_CF24_DU.pdf',
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
        'Normativa para la administración de medicamentos en farmacias y droguerías',
      referencia:
        'Resolución 1403 - 2007. Por la cual se determina el Modelo de Gestión del Servicio Farmacéutico, se adopta el Manual de Condiciones Esenciales y Procedimientos y se dictan otras disposiciones. Ministerio de la Protección Social.',
      tipo: 'PDF',
      descarga: '/downloads/Anexo1_CF024_Resolucion_1403_de_2007.pdf',
    },
    {
      tema:
        'Normativa para la administración de medicamentos en farmacias y droguerías',
      referencia:
        'Decreto 2330 - 2006 Por el cual se modifica el Decreto 2200 de 2005 y se dictan otras disposiciones.',
      tipo: 'PDF',
      descarga: '/downloads/Anexo2_CF024_Decret_2330_de_2006.pdf',
    },
    {
      tema:
        'Normativa para la administración de medicamentos en farmacias y droguerías',
      referencia:
        'Decreto 2200 - 2005. Por el cual se reglamenta el servicio farmacéutico y se dictan otras disposiciones. Ministerio de la Protección Social.',
      tipo: 'PDF',
      descarga: '/downloads/Anexo3_CF024_Decreto_2200_de_2005.pdf',
    },
    {
      tema: 'Bacterias, virus, hongos, protozoos',
      referencia:
        'BBC News Mundo. [BBC News Mundo]. (2020, 23 de mayo). <em>Cómo mutan los virus y cómo podría evolucionar el coronavirus | BBC Mundo</em> [vídeo].Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ARrMFeZEfmU',
    },
    {
      tema: 'Bioseguridad',
      referencia:
        'De Salud, S. D. [Monitor fantasma]. (2020, 31 de marzo). <em>Recomendaciones al momento de usar el tapabocas</em> [vídeo]. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=zCnOxRfbQHs',
    },
  ],
  glosario: [
    {
      termino: 'ADN',
      significado:
        'Ácido desoxirribonucleico, molécula que contiene la información genética de todos los seres vivos, incluso algunos virus.',
    },
    {
      termino: 'Aerobio',
      significado: 'microorganismos que requieren oxígeno para vivir.',
    },
    {
      termino: 'Anaerobio',
      significado: 'microorganismos que no requieren oxígeno para vivir.',
    },
    {
      termino: 'ARN',
      significado:
        'Ácido ribonucleico que permite la síntesis de proteínas haciendo que la célula comprenda toda la información genética.',
    },
    {
      termino: 'Autótrofo',
      significado:
        'organismos capaces de gestionar la producción de su propia energía, sacando provecho a los elementos ambientales.',
    },
    {
      termino: 'Diseminación',
      significado:
        'esparcimiento, dispersión de algo por distintos lugares, áreas o secciones.',
    },
    {
      termino: 'EAM',
      significado: 'Eventos adversos a medicamentos.',
    },
    {
      termino: 'EM',
      significado: 'error de medicación.',
    },
    {
      termino: 'EPP',
      significado: 'Elementos de protección personal.',
    },
    {
      termino: 'Eucariota',
      significado: 'células que tienen un núcleo y una membrana celular.',
    },
    {
      termino: 'Heterótrofo',
      significado:
        'organismos que deben consumir materia orgánica proveniente de otros seres vivos, para obtener energía.',
    },
    {
      termino: 'IM',
      significado: 'intramuscular.',
    },
    {
      termino: 'Inmunogenicidad',
      significado:
        'capacidad para inducir una respuesta inmunitaria específica y duradera en el huésped.',
    },
    {
      termino: 'Patogenicidad',
      significado:
        'capacidad para producir enfermedad. También llamada virulencia.',
    },
    {
      termino: 'PPS',
      significado: 'Prueba de sensibilidad.',
    },
    {
      termino: 'Procariota',
      significado: 'célula que no posee núcleo',
    },
    {
      termino: 'Proliferación',
      significado:
        'incremento de la cantidad o el número de algo de forma rápida. Reproducción o multiplicación de algún organismo vivo, especialmente de las células',
    },
    {
      termino: 'Putrefacción',
      significado: 'degradación de las proteínas en anaerobiosis.',
    },
    {
      termino: 'RAM',
      significado: 'Reacción adversa médica.',
    },
    {
      termino: 'Resistencia',
      significado:
        'conjunto de mecanismos del cuerpo, para la defensa contra la invasión o multiplicación del microorganismo, o de efectos nocivos producidos por productos tóxicos.',
    },
    {
      termino: 'Susceptible',
      significado:
        'persona o animal que no tiene resistencia contra un agente patógeno que le proteja contra la enfermedad si entra en contacto con ese germen.',
    },
    {
      termino: 'Transmisibilidad',
      significado:
        'capacidad del microorganismo para propagarse de un huésped a otro.',
    },
  ],
  referencias: [
    {
      referencia:
        'Protozoos. (2021) Equipo editorial, Etecé. Argentina. Concepto.',
      link:
        'https://concepto.de/protozoos/#:~:text=Se%20denomina%20protozoos%20o%20protozoarios,podr%C3%ADan%20considerarse%20como%20animales%20microsc%C3%B3picos',
    },
    {
      referencia:
        'Decreto 780 de 2016 “Por medio del cual se expide el Decreto Único Reglamentario del Sector Salud y Protección Social” Ministerio de Salud y Protección Social. 6 de mayo de 2016. Capítulo 10 Droguerías y servicio farmacéutico. Artículo 2.5.3.10.21 Procedimiento de inyectología en farmacias y droguerías. (p. 294).',
      link: '',
    },
    {
      referencia:
        'Módulo de Principios de Epidemiología para el Control de Enfermedades (MOPECE) Segunda Edición Revisada Salud y enfermedad en la población. OPS.',
      link:
        'https://www3.paho.org/hq/index.php?option=com_content&view=article&id=9161:2013-mopece-training-modules-epidemiology&Itemid=0&lang=es#gsc.tab=0',
    },
    {
      referencia:
        'Nociones de Salud Pública. Juan Martínez Hernández. Editorial: Diaz de Santos. 2013. Ciencias médicas, Medicina PDF. Capítulo VI pág. 263.',
    },
    {
      referencia:
        'Salud Pública y Medicina Preventiva. Rafael Álvarez Alva. Editorial: Manual Moderno. 2018. PDF capítulo p. 31.',
      link: 'https://www-ebooks7-24com.bdigital.sena.edu.co/?il=5873&pg=29',
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
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Emilia Sarmiento Mora',
          cargo: 'Experta temática',
          centro: 'Regional Antioquia – Centro de Servicios de Salud',
        },
        {
          nombre: 'Gustavo Santis Mancipe',
          cargo: 'Diseñador instruccional',
          centro: 'Regional Distrito Capital – Centro de Diseño y Metrología',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Revisora metodológica y pedagógica',
          centro:
            'Regional Distrito Capital – Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura – Regional Santander',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Corrección de estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Gloria Amparo López Escudero',
          cargo: 'Adecuación instruccional - 2023',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Metodología para la formación virtual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Adriana Marcela Suárez Eljure',
          cargo: 'Diseño web',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Luis Jesús Pérez Madariaga',
          cargo: 'Desarrollo Fullstack',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lady Adriana Ariza Luque',
          cargo: 'Animación y Producción audiovisual',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animación y Producción audiovisual',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animación y Producción audiovisual',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
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
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo:
            'Validación de recursos educativos digitales y vinculación al LMS',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Leyson Fabian Castaño Pérez',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
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
