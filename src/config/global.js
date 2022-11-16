export default {
  global: {
    componenteFormativo: 'Gestión de bases de datos',
    descripcionCurso:
      'La gestión de bases de datos ha tomado una nueva dimensión; la información que antes reposaba solo en un equipo informático y de manera aislada, ha evolucionado tanto, que hoy en día se puede decir que es dinámica, de interacción constante, una nueva información que ingresa para alimentar a un sistema informático moderno y a reemplazar una información obsoleta saliente. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Bases de datos',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Gestión de la información de bases de datos - Gráficas y tablas dinámicas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Gráficas y tablas dinámicas',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Instrumentos de evaluación y seguimiento',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Indicadores de sistemas de información empresarial',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Medidas correctivas',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Acciones de mejora en sistemas de información',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Planes de contingencia en el manejo de la información',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Calidad y divulgación de la información',
            hash: 't_5_1',
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
      tema: 'Bases de datos',
      referencia:
        'EDteam. (2020). <em>¿Qué son las BASES DE DATOS y cómo funcionan?</em> (video). YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=knVwokXITGI ',
    },
    {
      tema: 'Bases de datos',
      referencia:
        'iTunes U – UAEH. (2020).<em> Características de las Bases de Datos</em> (video). YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=hiNzLvSO3kQ ',
    },
    {
      tema: 'Bases de datos',
      referencia:
        'Betania, V. (2020). <em>Qué es un SGBD: Guía completa sobre los sistemas de gestión de bases de datos.</em>',
      tipo: 'Artículo',
      link: 'https://www.hostinger.co/tutoriales/sgbd',
    },
    {
      tema: 'Tablas dinámicas',
      referencia:
        'El Tío Tech. (2021). <em>Curso Excel – Tablas Dinámicas (básico – intermedio – avanzado)</em> (video). YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=L8poMIC84bE ',
    },
    {
      tema: 'Gráficos dinámicos',
      referencia:
        'Saber Programas. (2018).<em> Excel – Cómo hacer gráficos dinámicos y crear un Dashboard con segmentación de datos</em> (video). YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ghyGNJKjPsQ ',
    },
    {
      tema: 'Indicadores de sistemas de información',
      referencia:
        'MinTIC. (s.f.).<em> Guía de indicadores de gestión para la seguridad de la información. </em>',
      tipo: 'PDF',
      link:
        'https://www.mintic.gov.co/gestionti/615/articles-5482_G9_Indicadores_Gestion_Seguridad.pdf ',
    },
  ],
  glosario: [
    {
      termino: 'Acción correctiva',
      significado:
        'toda acción que genere acciones de mejora, como consecuencia de la presencia de una no conformidad en todo sistema de gestión.',
    },
    {
      termino: 'Base de datos',
      significado:
        'Almacena, de una manera estructurada y organizada datos, siguiendo una secuencia lógica o cierta forma de almacenar (modelo); esta debe ser la más cercana posible al modelo real. ',
    },
    {
      termino: 'Consulta de datos',
      significado:
        'se está realizando una consulta cada vez que algún tipo de usuario busca información de cualquier tipo, en cualquiera de las diferentes tablas de una o varias bases de datos',
    },
    {
      termino: 'Gráfico dinámico',
      significado: 'presentación gráfica de los datos de las tablas dinámicas.',
    },
    {
      termino: 'Instrumentos de evaluación',
      significado:
        'son las herramientas fundamentales que tiene el SGBD como elementos rápidos y sencillos para evaluar la gestión y análisis de bases de datos.',
    },
    {
      termino: 'Mensajes envío masivo',
      significado:
        'cuando se quiere generar como respuesta una conducta incentivada, se deben emitir gran cantidad de mensajes que, por los medios tradicionales, serán muy difíciles de tramitar.',
    },
    {
      termino: 'Tabla dinámica',
      significado:
        'resume, realiza análisis, explora y genera informes relacionales, concisos y rápidos. ',
    },
    {
      termino: 'Texto corto',
      significado: 'datos alfanuméricos, de máximo 255 caracteres.',
    },
    {
      termino: 'Texto largo',
      significado:
        'grandes cantidades de datos (alfanuméricos, oraciones, párrafos) 1 Gb (muestra los primeros 64.000 caracteres).',
    },
    {
      termino: 'Sistema de Gestión de Base de Datos',
      significado:
        '(SGBD o DBMS por las siglas en inglés). Mientras la base de datos solo almacena, el SGDB gestiona y administra los datos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Benítez, M. Á. (2016). <em>Manual de supervivencia del administrador de bases de datos.</em> IT Campus Academy.',
    },
    {
      referencia:
        'Burrueco, D. (2016). <em>Tablas dinámicas con Excel 2016.</em> Ra-Ma S.A. Editorial y Publicaciones.',
    },
    {
      referencia:
        'Capacho, J. R. y Nieto, W. (2017).<em> Diseño de base de datos.</em> Editorial Universidad del Norte. ',
      link: 'https://docplayer.es/227418128-Diseno-de-base-de-datos.html ',
    },
    {
      referencia:
        'Postigo, A. (2022).<em> Gestión de Bases de Datos.</em> Ediciones Paraninfo, SA.',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Innovative Education',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Innovative Education',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Innovative Education',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Innovative Education',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
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
