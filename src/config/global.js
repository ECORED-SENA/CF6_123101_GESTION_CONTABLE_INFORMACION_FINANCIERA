export default {
  global: {
    Name: 'Manejo de efectivo y equivalente al efectivo',
    Description:
      'En el presente componente formativo, se desarrolla la temática de efectivo y equivalente al efectivo; para ello, se tendrán en cuenta los criterios de reconocimiento, medición, presentación y revelación. Recordemos que estos elementos son muy importantes en el ámbito empresarial, toda vez que, permiten dar cumplimiento a los compromisos adquiridos, teniendo en cuenta la capacidad de liquidez y, a su vez, la fomentación de un adecuado manejo que permita salvaguardar el activo de la organización.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Efectivo y equivalentes al efectivo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Política contable',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Reconocimiento, medición, presentación y revelación',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Arqueo de caja',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Conciliación Bancaria',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Ajuste por diferencia en cambio',
            hash: 't_1_5',
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/123101_CF06_DU.pdf',
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
      tema: 'Política contable',
      referencia:
        'International Accounting Standards Board (IASB). (2009). NIC 7: Estados de Flujos de Efectivo. En Normas Internacionales de Información Financiera (NIIF).',
      tipo: 'Página web',
      link:
        'https://www.ifrs.org/issued-standards/list-of-standards/ias-7-statement-of-cash-flows/',
    },
    {
      tema: 'Reconocimiento, medición, presentación y revelación',
      referencia:
        'International Accounting Standards Board (IASB). (2023). Enmiendas a la NIC 7 sobre acuerdos de financiación de proveedores.',
      tipo: 'Página web',
      link:
        'https://www.tendencias.kpmg.es/2023/07/cambios-desgloses-acuerdos-financiacion-de-proveedores/',
    },
  ],
  glosario: [
    {
      termino: 'Activo',
      significado:
        'Es un recurso controlado que viene de eventos pasados y, en un futuro, se espera obtener beneficios económicos.',
    },
    {
      termino: 'Banco',
      significado:
        'Es una cuenta contable que refleja los depósitos financieros, se puede presentar en moneda nacional o extranjera.',
    },
    {
      termino: 'Caja menor',
      significado:
        'Es una cuenta contable que maneja cuantías menores, dependiendo de las políticas empresariales. A este fondo se asigna un responsable para su administración y control.',
    },
    {
      termino: 'Conciliación bancaria',
      significado:
        'Es la confrontación y verificación de la información contable registrada en una cuenta de ahorros o corriente por la empresa, con la otorgada por la entidad financiera en el extracto bancario.',
    },
    {
      termino: 'Costo histórico',
      significado:
        'Hace referencia al valor que se registra en el momento de adquisición o compra de un bien o servicio.',
    },
    {
      termino: 'Efectivo',
      significado:
        'Hace referencia al dinero que se encuentra en caja general, caja menor y en las entidades financieras, que son de disponibilidad inmediata.',
    },
    {
      termino: 'Equivalentes de efectivo',
      significado:
        'Este concepto hace énfasis a las inversiones a corto plazo (menor a 90 días), que tienen gran liquidez y se encuentran sujetas a un riesgo insignificante.',
    },
    {
      termino: 'Extracto bancario',
      significado:
        'Es el documento que expide la entidad financiera, donde se refleja el saldo y los diferentes movimientos (entradas y salidas) de una cuenta de ahorros o corriente.',
    },
    {
      termino: 'Políticas contables',
      significado:
        'Son las bases, normas y procedimientos que debe de tener en cuenta una entidad para la medición, presentación y revelación de los elementos de los estados financieros.',
    },
    {
      termino: 'Valor razonable',
      significado: 'Hace referencia a las mediciones basadas en el mercado.',
    },
  ],
  referencias: [
    {
      referencia: 'Amador, A. (2011). Conciliación bancaría.',
      link: '',
    },
    {
      referencia:
        'Angulo, U. (2018). Contabilidad financiera, correlacionado con NIIF. (2a. ed.) Ediciones de la U.',
      link: '',
    },
    {
      referencia:
        'Consejo Técnico de la Contaduría Pública - CTCP- (2020a, 01 de noviembre). Norma Internacional de Contabilidad 7: estado de flujos de efectivo. Normas Internacionales de Información Financiera. ',
      link:
        'http://www.ctcp.gov.co/proyectos/contabilidad-e-informacion-financiera/documentos-organismos-internacionales/compilacion-marcos-tecnicos-de-informacion-financi/1534368973-9784',
    },
    {
      referencia:
        'Consejo Técnico de la Contaduría Pública - CTCP- (2020a, 01 de noviembre). Norma Internacional de Información Financiera 9: Instrumentos financieros. ',
      link:
        'https://www.ctcp.gov.co/proyectos/contabilidad-e-informacion-financiera/documentos-discusion-publica/enmienda-a-la-niif-9-instrumentos/doc-ctcp-xl8w9-141',
    },
    {
      referencia:
        'Consejo Técnico de la Contaduría Pública - CTCP- (2020a, 01 de noviembre). Decreto 2270 de 2019. ',
      link:
        'http://www.ctcp.gov.co/noticias/2019/presidencia-de-la-republica-expidio-el-decreto-227',
    },
    {
      referencia:
        'Fierro Martínez, Ángel María (2011). Contabilidad General (4ª ed.). Ecoe Ediciones. ',
      link:
        'https://normasinternacionalesdecontabilidad.es/normas-internacionales/',
    },
    {
      referencia:
        'Fierro Martínez, Ángel María (2015). Contabilidad de activos con enfoque NIIF para pymes (3ª ed.). Ecoe Ediciones.',
      link: '',
    },
    {
      referencia:
        'Instituto nacional de contadores públicos. (2020, 01 de noviembre).  ',
      link: 'https://www.incp.org.co/',
    },
    {
      referencia: 'Junta central de contadores. (2020, 01 de noviembre). ',
      link: 'http://www.jcc.gov.co/',
    },
    {
      referencia:
        'Moncayo, C. Definición de activos y pasivos en las normas internacionales de información financiera (NIIF). Instituto Nacional de Contadores Públicos de Colombia. ',
      link: '',
    },
    {
      referencia: 'Normas Internacionales de Contabilidad. ',
      link:
        'https://normasinternacionalesdecontabilidad.es/normas-internacionales/',
    },
    {
      referencia:
        'Sinisterra V., Polanco L., y Henao H. (2011). Contabilidad: sistema de información para las organizaciones. Mc. Graw Hill.  ',
      link: '',
    },
    {
      referencia:
        'Varón, L. (2018). Efectivo y equivalentes al efectivo (Nic). ',
      link: 'https://www.gerencie.com/efectivo-y-equivalentes-al-efectivo.html',
    },
    {
      referencia: 'IFRS.  (2014). NIIF 9 Instrumentos Financieros.',
      link:
        'https://www.ctcp.gov.co/proyectos/contabilidad-e-informacion-financiera/documentos-discusion-publica/enmienda-a-la-niif-9-instrumentos/doc-ctcp-xl8w9-141',
    },
    {
      referencia:
        'Instituto Nacional de Contadores Públicos de Colombia. (2020). Norma Internacional de Contabilidad 7: estado de flujos de efectivo. Normas Internacionales de Información Financiera. ',
      link:
        'http://www.ctcp.gov.co/proyectos/contabilidad-e-informacion-financiera/documentos-organismos-internacionales/compilacion-marcos-tecnicos-de-informacion-financi/1534368973-9784  ',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2019). Decreto 2270 de 2019: Por el cual se modifican los marcos técnicos normativos que conforman el régimen de contabilidad aplicable en Colombia. Diario Oficial 51107.',
      link:
        'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=89496',
    },
    {
      referencia:
        'Normas Internacionales de Contabilidad. (s.f.). Normas Internacionales de Contabilidad vigentes.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Líder del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermudez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Patricia Mantilla Galvis',
          cargo: 'Experto temático',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Maryuri Agudelo Franco',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Blanca Flor Tinoco Torres ',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Robinson Javier Ordoñez Barreiro',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Ángela María Maldonado Jaime',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Víctor Raúl Cárdenas Cáceres',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Zuleidy Maria Ruiz Torres',
          cargo: 'Producción audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Raúl Mosquera Serrano',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
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
}
