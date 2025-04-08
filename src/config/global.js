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
        download: 'downloads/dist.pdf',
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
      link:
        'http://files.sena-contable.webnode.es/200000504-9a9dd9b934/Conciliaci%C3%B2n%20Bancaria.pdf ',
    },
    {
      referencia:
        'Angulo, U. (2018). Contabilidad financiera, correlacionado con NIIF. (2a. ed.) Ediciones de la U.',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=8047',
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
        'http://www.digitaliapublishing.com.bdigital.sena.edu.co/visor/29895#',
    },
    {
      referencia:
        'Fierro Martínez, Ángel María (2015). Contabilidad de activos con enfoque NIIF para pymes (3ª ed.). Ecoe Ediciones.',
      link:
        'http://www.digitaliapublishing.com.bdigital.sena.edu.co/visor/39427',
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
      link:
        'https://www.incp.org.co/definicion-de-activos-y-pasivos-en-las-normas-internacionales-de-informacion-financiera-niif/',
    },
    {
      referencia: 'Normas Internacionales de Contabilidad. ',
      link:
        'https://normasinternacionalesdecontabilidad.es/normas-internacionales/',
    },
    {
      referencia:
        'Sinisterra V., Polanco L., y Henao H. (2011). Contabilidad: sistema de información para las organizaciones. <em>Mc. Graw Hill.</em>  ',
      link: '',
    },
    {
      referencia:
        'Varón, L. (2018). Efectivo y equivalentes al efectivo (Nic). ',
      link: 'https://www.gerencie.com/efectivo-y-equivalentes-al-efectivo.html',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
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
