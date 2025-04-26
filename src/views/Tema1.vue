<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Efectivo y equivalentes al efectivo

    <!-- BLOQUE 0 -->
    .row.mb-5
      .col-xl
        p.mb-0.caja-text-tema1.mb-3(data-aos="fade-right") Las empresas en el desarrollo normal de sus operaciones deben aplicar criterios y lineamientos para el adecuado manejo del efectivo y sus equivalentes. El objetivo es tener la habilidad para tomar decisiones que aumenten la capacidad de generar liquidez y, de esta manera, atender las necesidades de la organización o, en su defecto, realizar inversiones que generen rentabilidad. El efectivo y equivalentes al efectivo pertenecen al activo corriente del estado de la situación financiera.
        p.mb-0 Teniendo en cuenta lo anterior, es importante conocer su clasificación; por ende, se analizarán los conceptos necesarios que permitan continuar con los lineamientos para el diseño de políticas contables que le conciernen:
      .col-xl-auto
        figure(data-aos="fade-left").d-none.d-xl-block
          img(src="@/assets/curso/tema1/img1.png", alt="" style="max-width: 400px").m-auto
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img2.svg" style="max-width: 70px").m-auto
      .col
        h3 Efectivo
    
    p.mb-5.ajuste-espacios-movil Hace referencia al dinero que se encuentra en caja general, caja menor y en las entidades financieras, que son de disponibilidad inmediata. A continuación, se presentan las definiciones de cada una de estas:

    .row.mb-5.ajuste-espacios-movil
      .col-xl(data-aos="fade-right")
        TabsA.color-acento-botones.mb-4
          .tarjeta.color-acento-botones--borde.p-4(titulo="Caja general")
            h4 Caja general
            p.m-0 Se refiere al dinero en efectivo con un valor monetario significativo, que cubre el pago de gastos operacionales, compra de inventarios, etc., registrando la transacción como una disminución del efectivo (crédito). De igual forma, se perciben ingresos ordinarios por la actividad que desarrolla la empresa, lo que constituye un aumento en el efectivo (débito).
          .tarjeta.color-acento-botones--borde.p-4(titulo="Caja menor")
            h4 Caja menor
            p.m-0 Las empresas constituyen el fondo de caja menor, de acuerdo con la política establecida y su cuantía depende del tipo de empresa. Es un fondo fijo que se contabiliza en el momento de su creación, aumento, disminución o eliminación. Su objetivo es manejar gastos de menor cuantía, por ende, siempre se maneja en efectivo para cubrir gastos menos representativos.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Bancos")
            h4 Bancos
            p.m-0 Están constituidos por los depósitos en las cuentas de ahorros y corrientes, las cuales son administradas por las entidades financieras. Se presentan en moneda nacional o extranjera.
      .col-xl-auto
        figure(data-aos="fade-left").d-none.d-xl-block
          img(src="@/assets/curso/tema1/img3.svg", alt="" style="max-width: 320px").m-auto

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right").ajuste-espacios-movil
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img2.svg" style="max-width: 70px").m-auto
      .col
        h3 Equivalentes al efectivo
    
    p.mb-5.ajuste-espacios-movil Este concepto hace énfasis a las inversiones a corto plazo (menor a 90 días), que tienen gran liquidez y se encuentran sujetas a un riesgo insignificante. Entre los equivalentes al efectivo encontramos las siguientes inversiones: Certificado de depósito a término (CDT), bonos y fiducia.

    .row.mb-5.align-items-center.ajuste-espacios-movil
      .col-xl-auto
        figure(data-aos="fade-right").d-none.d-xl-block
          img(src="@/assets/curso/tema1/img4.png", alt="" style="max-width: 450px").m-auto
      .col-xl
        p De acuerdo con la Norma Internacional de Contabilidad (NIC) 7 “Estados de flujos de efectivo”, expresa lo siguiente sobre los equivalentes al efectivo:
        .row
          .col-xl
            ol.lista-ol--cuadro.lista-ol--separador(data-aos="fade-left")
              li 
                .lista-ol--cuadro__vineta
                  span a
                | Un equivalente al efectivo no se tiene para propósitos de inversión, sino que su propósito es para cumplir los compromisos de pago a corto plazo.
              li 
                .lista-ol--cuadro__vineta
                  span b
                | Debe poder ser fácilmente convertible a una cantidad determinada de efectivo.
              li 
                .lista-ol--cuadro__vineta
                  span c
                | Debe estar sujeta a un riesgo insignificante de cambios en su valor.
              li 
                .lista-ol--cuadro__vineta
                  span d
                | En el caso de inversiones, deben tener un vencimiento próximo de, al menos, tres meses o menos desde la fecha de adquisición.
              li.mb-0
                .lista-ol--cuadro__vineta
                  span e
                | Los sobregiros bancarios, forman parte de la gestión del efectivo de la entidad (Varón, 2018, párr.5).

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right").ajuste-espacios-movil
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img2.svg" style="max-width: 70px").m-auto
      .col
        h3 Clasificación inversiones
    
    p.mb-5.ajuste-espacios-movil Las inversiones pueden clasificarse según diversos criterios. A continuación, se presentan las principales categorías:

    .bg--img_03.ajuste-espacios-movil
      .row.h-100.align-items-center
        .col-xl(data-aos="fade-right")
          AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")
            .row(titulo="De acuerdo con la intención de realización").ajuste-cajaAcordion
              <ul class="fa-ul">
                <li class="mb-3"><span class="fa-li"><i class="fas fa-chevron-right"></i></span><strong>Inversiones Temporales</strong>: son inversiones que se hacen efectivas en un periodo inferior a un año.</li>
                <li><span class="fa-li"><i class="fas fa-chevron-right"></i></span><strong>Inversiones Permanentes</strong>: su objetivo es mantenerlas hasta su vencimiento; es decir, no se espera convertirlas en efectivo antes un año.</li>
              </ul>
            .row(titulo="De acuerdo con los rendimientos que generen").ajuste-cajaAcordion
              <ul class="fa-ul">
                <li class="mb-3"><span class="fa-li"><i class="fas fa-chevron-right"></i></span><strong>Inversiones de renta fija</strong>: son inversiones que su rendimiento no cambia durante su vigencia, es decir, siempre produce los mismos rendimientos.</li>
                <li><span class="fa-li"><i class="fas fa-chevron-right"></i></span><strong>Inversiones de renta variable</strong>: son inversiones cuyos rendimientos dependen del mercado, es decir, que se encuentra asociado al comportamiento de la oferta y la demanda.</li>
              </ul>      
            .row(titulo="De acuerdo con el control que ejerzan sobre el ente emisor").ajuste-cajaAcordion
              <ul class="fa-ul">
                <li class="mb-3"><span class="fa-li"><i class="fas fa-chevron-right"></i></span><strong>Inversiones de controlantes</strong>: son aquellas que se realizan a fin de ejercer un control sobre el ente emisor.</li>
                <li><span class="fa-li"><i class="fas fa-chevron-right"></i></span><strong>Inversiones no controlantes</strong>: no existe control de un ente, es decir, se poseen menos del 50 % de participación.</li>
              </ul>
        .col-xl-auto
          figure(data-aos="fade-up").d-none.d-xl-block
            img(src="@/assets/curso/tema1/img5.png", alt="" style="width: 300px").m-auto
                   
    Separador
    <!-- BLOQUE 1 -->
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Política contable

    p.mb-5 Las políticas contables son las bases, normas y procedimientos que debe tener en cuenta una entidad para la medición, presentación y revelación de los elementos de los Estados Financieros.

    .row.mb-5.align-items-center.ajuste-espacios-movil
      .col-xl-auto
        figure(data-aos="fade-right").d-none.d-xl-block
          img(src="@/assets/curso/tema1/img6.svg", alt="" style="max-width: 400px").m-auto
      .col-xl
        p Así mismo, es importante definir las directrices para dar cumplimiento a dichos criterios, los cuales varían de acuerdo con el tipo de negocio y al entorno en el cual se desenvuelve.
        .row.caja-text-img-tema1.align-items-center.m-0(data-aos="fade-left")
          .col-xl-auto
            figure(data-aos="fade-up").d-none.d-xl-block
              img(src="@/assets/curso/tema1/img7.svg", alt="" style="max-width: 100px").m-auto
          .col-xl
            p.mb-0 En unidades anteriores, se abordó la temática de políticas contables, donde se hizo hincapié en el marco conceptual y el direccionamiento estratégico de la organización, con el fin de conocer la entidad y, de esta manera, continuar con las políticas de acuerdo con los elementos de los estados financieros.
        p.mb-0 Por lo anterior, para el diseño de políticas contables, del efectivo y sus equivalentes, es importante tener en cuenta, que estos hacen parte del activo; por ende, debe incluir como mínimo:
              
    .row.fondo-slider.mb-5.ajuste-espacios-movil
      .ajuste-slider(data-aos="fade-up")
        SlyderA(tipo="b")
          .row.h-100.justify-content-center.align-items-center
            .col-lg-6.mb-4.col-xs-12
              h4.mb-4 Reconocimiento de los activos
              p Debe dar cumplimiento al concepto de activo, de acuerdo con los elementos que lo componen para el proceso de incorporación en el Estado de situación financiera.
              p Recordemos que un <strong>activo</strong> es “un recurso controlado por la entidad como resultado de sucesos pasados, del que la entidad espera obtener, en el futuro, beneficios económicos” (Moncayo, 2016, párr.1).
              p.mb-0 Los activos se reconocen en el momento que se presenta la transacción en efectivo o es transferido a una entidad financiera.
            .col-lg-6
              figure
                img(src='@/assets/curso/tema1/img8.png', alt='')

          .row.h-100.justify-content-center.align-items-center
            .col-lg-6.mb-4.col-xs-12
              h4.mb-4 Medición
              p Es el proceso mediante el cual se reconocen y registran contablemente los hechos económicos. Aquí se establece si la entidad, en el reconocimiento, medirá los activos a costo histórico o valor razonable teniendo en cuenta la moneda funcional y el hecho económico que se esté presentando, además de analizar las normas internacionales aplicables para seleccionar la base de medición más idónea para la empresa.
            .col-lg-6
              figure
                img(src='@/assets/curso/tema1/img9.png', alt='')

          .row.h-100.justify-content-center.align-items-center
            .col-lg-6.mb-4.col-xs-12
              h4.mb-4 Presentación
              p Se define como el proceso mediante el cual se incorpora la información financiera y se presenta en los estados financieros para ser analizados por los usuarios de la información contable.
            .col-lg-6
              figure
                img(src='@/assets/curso/tema1/img12.png', alt='')

          .row.h-100.justify-content-center.align-items-center
            .col-lg-6.mb-4.col-xs-12
              h4.mb-4 Revelación
              p Este proceso se realiza a través de la presentación de los estados financieros, teniendo en cuenta las notas que reflejan, de forma detallada y desagregada, la información contable y financiera, para la adecuada toma de decisiones por parte de la administración.
            .col-lg-6
              figure
                img(src='@/assets/curso/tema1/img10.png', alt='')

          .row.h-100.justify-content-center.align-items-center
            .col-lg-6.mb-4.col-xs-12
              h4.mb-4 Definir el objetivo de las políticas
              p Se debe establecer en verbo infinitivo, el fin que persigue el diseño de las políticas contables, que es dar aplicabilidad a la Norma Internacional de Información Financiera.
            .col-lg-6
              figure
                img(src='@/assets/curso/tema1/img13.png', alt='')

          .row.h-100.justify-content-center.align-items-center
            .col-lg-6.mb-4.col-xs-12
              h4.mb-4 Relacionar el alcance
              p Expresar los elementos o partidas monetarias que se aplicarán a dicha política, en este sentido, dará aplicación al efectivo y sus equivalentes.
            .col-lg-6
              figure
                img(src='@/assets/curso/tema1/img11.png', alt='')

    p.mb-4.ajuste-espacios-movil De igual manera, se deben definir los criterios de reconocimiento, medición y presentación del efectivo y equivalentes.

    .row.mb-5.align-items-center
      .col-xl-auto
        figure(data-aos="fade-right").d-none.d-xl-block
          img(src="@/assets/curso/tema1/img14.svg", alt="" style="max-width: 400px").m-auto
      .col-xl
        p.mb-0 Recordemos que, los activos (efectivo y equivalentes al efectivo), son considerados instrumentos financieros bajo la norma internacional; por ello, es indispensable analizar las siguientes normas, con el fin de tener en cuenta las bases de medición, como son costo histórico, valor razonable y costo amortizado, de acuerdo con la clasificación del instrumento:

    .row.align-items-center
      .col-xl-auto
        figure.d-none.d-xl-block(data-aos="fade-right")
          img(src="@/assets/curso/tema1/img15.png", alt='', style="max-width: 300px" ).m-auto
      .col-xl
        LineaTiempoD.color-primario(data-aos="fade-up")
          .row(numero="1" titulo="Norma Internacional de contabilidad (NIC) 32 - Instrumentos financieros: presentación, que expresa lo siguiente:")
            .col-lg.mb-md-0.ajuste-margen-lineatiempo
              p <strong>Objetivo</strong>: el objetivo de esta norma es establecer principios para presentar los instrumentos financieros como pasivos o patrimonio y para compensar activos y pasivos financieros.
              p Aplica a la clasificación de los instrumentos financieros (desde la perspectiva del emisor) en activos y pasivos financieros, e instrumentos de patrimonio; en la clasificación de los intereses, dividendos, pérdidas y ganancias relacionadas con ellos, y en las circunstancias que obligan a la compensación de activos y pasivos financieros.
              p.mb-0 Los principios de esta norma complementan los principios de reconocimiento y medición de los activos y pasivos financieros de la NIIF 9- Instrumentos financieros y a la información a revelar sobre ellos en la NIIF 7- Instrumentos financieros: información a revelar. Consejo Técnico de la contaduría pública (CTCP, 2019a, p.229).

          .row(numero="2" titulo="Norma Internacional de Información Financiera (NIIF) 7- Instrumentos financieros: información a revelar")
            .col-lg.mb-md-0.ajuste-margen-lineatiempo
              h5.mb-4 Objetivo:
              ol.lista-ol--cuadro-bloque1.mb-0
                li.mb-3 
                  .lista-ol--cuadro__vineta
                    span 1
                  | El objetivo de esta NIIF es requerir a las entidades que, en sus estados financieros, revelen información que permita a los usuarios evaluar:
                li.ajustar-linea.mb-3
                  .lista-ol--cuadro__vineta
                    span a
                  | la relevancia de los instrumentos financieros en la situación financiera y en el rendimiento de la entidad; y 
                li.ajustar-linea.mb-3
                  .lista-ol--cuadro__vineta
                    span b
                  | la naturaleza y alcance de los riesgos procedentes de los instrumentos financieros a los que la entidad se haya expuesto durante el periodo y lo esté al final del periodo sobre el que se informa; así como la forma de gestionar dichos riesgos.
                li
                  .lista-ol--cuadro__vineta
                    span 2
                  | Los principios contenidos en esta NIIF complementan a los de reconocimiento, medición y presentación de los activos financieros y los financieros de la NIC 32 Instrumentos Financieros: Presentación y de la NIIF 9 Instrumentos Financieros. (CTCP, 2019a, p.229).

          .row(numero="3" titulo="Norma Internacional de Información Financiera (NIIF) 9- Instrumentos financieros")
            .col-lg.mb-md-0.ajuste-margen-lineatiempo
              p <strong>Objetivo</strong>: el objetivo de esta Norma es establecer los principios para la información financiera, sobre activos y pasivos financieros, de tal manera que se presente información útil y relevante para los usuarios de los estados financieros, para la evaluación de los importes, calendario e incertidumbre de los flujos de efectivo futuros de la entidad (CTCP, 2019b, p.340).
              p Para ampliar el alcance y lineamientos aplicables, es importante revisar la norma internacional vigente; para ello, explore los siguientes enlaces:
              a.anexo.mb-4.mb-lg-0(href="https://www.ctcp.gov.co/proyectos/contabilidad-e-informacion-financiera/documentos-discusion-publica/enmienda-a-la-niif-9-instrumentos/doc-ctcp-xl8w9-141" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p <strong>Enlace web</strong>. NIIF 9 Instrumentos Financieros

    Separador
    <!-- BLOQUE 2 -->
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Reconocimiento, medición, presentación y revelación
    
    p.mb-5  Una vez se ha realizado el proceso de reconocimiento de la definición de activos, es importante aplicar los criterios al efectivo y sus equivalentes, teniendo en cuenta lo siguiente:

    .row.ajuste-espacios-movil
      .col-xl
        TabsA.color-acento-botones.mb-4(data-aos="fade-up")
          .tarjeta.color-acento-botones--borde.p-4(titulo="Reconocimiento de efectivo")
            .row.align-items-center
              .col-xl.mb-3
                h4 Reconocimiento de efectivo y equivalente de efectivo
                p La entidad define las partidas que hacen parte del efectivo y sus equivalentes, siendo muy detallada su descripción. Cabe resaltar, que el efectivo hace parte el dinero que se encuentra en caja y las entidades financieras, sea de moneda nacional o extranjera.
                p.mb-0 Dentro de los equivalentes al efectivo, es fundamental definir qué inversiones hacen parte de este, conforme al tiempo de duración, disponibilidad inmediata y el riesgo de la negociación.
              .col-xl-auto
                figure(data-aos="fade-left").d-none.d-xl-block
                  img(src="@/assets/curso/tema1/img16.svg", alt="" style="max-width: 300px").m-auto
          .tarjeta.color-acento-botones--borde.p-4(titulo="Medición")
            .row.align-items-center
              .col-xl.mb-3
                h4 Medición
                p La entidad debe registrar la base de medición inicial y posterior del efectivo y equivalentes al efectivo, teniendo en cuenta la normatividad legal vigente. Cabe resaltar, que debe especificarse el manejo, control características y directrices de caja general, caja menor y bancos, haciendo referencia al efectivo.
                p.mb-0 De igual forma, se establecen los elementos que pertenecen a equivalente al efectivo, directrices, clasificación y manejo. Recuerda que debe definirse lo que corresponde a equivalentes al efectivo y a inversiones, con el fin de dar aplicabilidad a la norma internacional, de acuerdo con las bases establecidas.
              .col-xl-auto
                figure(data-aos="fade-left").d-none.d-xl-block
                  img(src="@/assets/curso/tema1/img17.svg", alt="" style="max-width: 300px").m-auto
          .tarjeta.color-acento-botones--borde.p-4(titulo="Presentación")
            .row.align-items-center
              .col-xl.mb-3
                h4 Presentación
                p.m-0 Se realiza a través de los estados financieros, teniendo en cuenta las políticas contables y normativa vigente.
              .col-xl-auto
                figure(data-aos="fade-left").d-none.d-xl-block
                  img(src="@/assets/curso/tema1/img18.svg", alt="" style="max-width: 300px").m-auto
          .tarjeta.color-acento-botones--borde.p-4(titulo="Revelación")
            .row.align-items-center
              .col-xl.mb-3
                h4 Revelación
                p.m-0 La revelación se presenta a través de las notas a los estados financieros, con el fin de proporcionar información clara, comprensible y oportuna para la toma de decisiones.
              .col-xl-auto
                figure(data-aos="fade-left").d-none.d-xl-block
                  img(src="@/assets/curso/tema1/img19.svg", alt="" style="max-width: 300px").m-auto

    Separador.ajuste-espacios-movil
    <!-- BLOQUE 3 -->
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Arqueo de caja

    p.mb-4 El <strong>arqueo de caja</strong> es un procedimiento contable que permite verificar la existencia física del dinero en efectivo, comparándola con los registros contables. Este control es fundamental para prevenir errores o irregularidades en el manejo de fondos, tanto en caja general como en caja menor. 

    .row.mb-5.align-items-center
      .col-xl-auto
        figure(data-aos="fade-right").d-none.d-xl-block
          img(src="@/assets/curso/tema1/img20.svg", alt="" style="max-width: 400px").m-auto
      .col-xl
        p.mb-0 El siguiente video complementa este tema al presentar recomendaciones prácticas para el control de caja, destacando aspectos como el uso de software contable, la consignación oportuna de recursos y la elaboración de soportes contables:
    
    .video.mb-5.ajuste-espacios-movil(data-aos="fade-up")
      <iframe width="560" height="315" src="https://www.youtube.com/embed/jinh7tuUY2s" title="Arqueo de caja" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img21.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Por lo anterior, es fundamental realizar arqueos de caja, lo cual consiste en analizar y comprobar que la información contable coincida con el efectivo que se encuentra de forma física (billetes, monedas, cheques).  Se debe verificar que no presenten faltantes o sobrantes de caja, de llegar a suceder, se realiza el respectivo ajuste mediante una nota contable. El faltante resulta cuando se realiza el arqueo y se observa que el valor en la caja es menor que el saldo que se refleja en los libros.
    
    p.mb-5 La entidad elabora el formato para registrar la información obtenida en el arqueo de caja. A continuación, observa el formato guía para su análisis:

    .row.mb-5.align-items-center.fondo-color-1
      .col-xl-3
      .col-xl-8
        .titulo-sexto.color-acento-contenido.mb-2
          h5 Figura 1.
          span Arqueo de caja menor.
        figure(data-aos="fade-up").ajuste-image__bloque3
          img(src='@/assets/curso/tema1/img23.svg', alt='Formulario de arqueo de caja menor que incluye campos para datos de la empresa, responsable del arqueo, fecha, saldo en libro, y desglose de efectivo en billetes, monedas, otros fondos, vales y facturas.' style="max-width: 650px")
        figcaption.mb-5.ajuste-fuente Fuente: <a href="http://media.actualicese.com/Arqueo-caja-menor.xls" target="_blank">http://media.actualicese.com/Arqueo-caja-menor.xls </a>
              
      .row.align-items-center.h-100.m-0.ajuste-espacios-movil
        .col-xl.caja-text-tema1-bloque3(data-aos="fade-right")
          h4 Ejemplo:
          p.mb-0 La empresa Gestión contable SAS tiene como política contable la constitución del fondo de caja menor por valor de $500.000; por lo tanto, se debe registrar la transacción.  La encargada del fondo de caja menor es Ligia Carvajal.
        .col-xl-auto
          figure(data-aos="fade-left").d-none.d-xl-block
            img(src="@/assets/curso/tema1/img24.svg", alt="" style="max-width: 400px").m-auto
          
    p.mb-5.ajuste-espacios-movil La empresa presenta la siguiente información para realizar el reconocimiento y medición de las transacciones, de igual forma, se solicita realizar el reembolso y arqueo de caja menor.

    .row.mb-3.align-items-center.ajuste-espacios-movil
      .col-xl-1
      .col-xl-4
        figure(data-aos="fade-right").d-none.d-xl-block
          img(src="@/assets/curso/tema1/img25.svg" style="max-width: 400px").m-auto
      .col-xl-6
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 1. 
          span Relación de gastos de caja menor
        .tabla-a.mb-4(data-aos="fade-up")
          table
            thead
              tr
                th.ajuste-border-tabla Concepto
                th Valor
            tbody
              tr
                td.ajuste-border-tabla.texto-left Elementos de aseo
                td.texto-right $ 120.000
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Papelería
                td.texto-right $ 80.000
              tr  
                td.ajuste-border-tabla.texto-left Transporte
                td.texto-right $ 150.000
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Almuerzos 
                td.texto-right $ 80.000 
              tr  
                td.ajuste-border-tabla.texto-left Gasolina
                td.texto-right $ 50.000
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left <strong>TOTAL</strong>
                td.texto-right <strong>$ 480.000</strong>
    
    .row.mb-3.align-items-center
      .col-xl-1
      .col-xl-4
        ol
          li 
            .lista-ol--cuadro__vineta
              span 1
            | <strong>Constitución fondo de caja menor</strong>
    
    .row.mb-3.align-items-center
      .col-xl-1
      .col-xl-10
        p.mb-4 Esta tabla presenta el registro contable correspondiente a la constitución del fondo de caja menor por un valor de $500.000. En ella se detalla el movimiento de la cuenta “Caja menor” en el debe y “Bancos” en el haber, reflejando la disposición inicial de efectivo para cubrir gastos menores.
    
    .row.mb-3.align-items-center
      .col-xl-1
      .col-xl-6
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 2. 
          span Constitución fondo de caja menor
        .tabla-a.mb-4(data-aos="fade-up")
          table
            thead
              tr
                th.ajuste-border-tabla Cuenta
                th.ajuste-border-tabla Debe
                th Haber
            tbody
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Caja Menor
                td.ajuste-border-tabla $ 500.000
                td -
              tr
                td.ajuste-border-tabla.texto-left Bancos
                td.ajuste-border-tabla -
                td $ 500.000
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left <strong>TOTAL</strong>
                td.ajuste-border-tabla <strong>$ 500.000</strong>
                td <strong>$ 500.000</strong>
      .col-xl-4
        figure(data-aos="fade-right").d-none.d-xl-block
          img(src="@/assets/curso/tema1/img26.svg" style="max-width: 400px").m-auto
    
    .row.mb-3.align-items-center
      .col-xl-1
      .col-xl-4
        ol
          li 
            .lista-ol--cuadro__vineta
              span 2
            | <strong>Reembolso de caja menor</strong>
    
    .row.mb-3.align-items-center
      .col-xl-1
      .col-xl-10
        p.mb-4 El desglose del reembolso realizado por la caja menor de la empresa Gestión Contable SAS con corte al 30 de julio de 2020. Se especifica el valor del fondo, el efectivo disponible, el monto a reintegrar y el detalle de los pagos efectuados, organizados por proveedor, concepto y valor.
    
    .row.fondo-color-2
      .col-xl-3
      .col-xl
        .titulo-sexto.color-acento-contenido.mb-1
          h5 Figura 2.
          span Reembolso de caja menor
        figure(data-aos="fade-up").ajuste-image__bloque3-1.mb-4
          img(src='@/assets/curso/tema1/img27.svg', alt=' Imagen de reembolso de caja menor con fecha, valor del fondo, efectivo disponible y monto a reembolsar, acompañada de un listado de pagos realizados a diferentes proveedores por conceptos como elementos de aseo, papelería, transporte, almuerzos y gasolina, con sus respectivos valores.' style="max-width: 600px")
        
      .row.align-items-center
        .col-xl-1
        .col-xl-4
          ol
            li 
              .lista-ol--cuadro__vineta
                span 3
              | <strong>Reintegro de caja menor</strong>
    
    .row.mb-3.align-items-center
      .col-xl-1
      .col-xl-10
        p.mb-4 La siguiente tabla presenta el registro contable del reintegro de caja menor. En ella se detallan los conceptos por los cuales se efectuaron desembolsos, clasificados por tipo de gasto, con sus respectivos valores en el debe. La cuenta “Bancos” figura en el haber, reflejando el reembolso total por $480.000.
    
    .row.mb-3.align-items-center
      .col-xl-1
      .col-xl-6
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 3.  
          span Reintegro de caja menor
        .tabla-a.mb-4(data-aos="fade-up").ajuste___tabla
          table
            thead
              tr
                th.ajuste-border-tabla Cuenta
                th.ajuste-border-tabla Debe
                th Haber
            tbody
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Combustibles y lubricantes
                td.ajuste-border-tabla.texto-right $ 50.000
                td.texto-right -
              tr
                td.ajuste-border-tabla.texto-left Elementos de aseo
                td.ajuste-border-tabla.texto-right $ 120.000
                td.texto-right -
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Transporte y fletes
                td.ajuste-border-tabla.texto-right $ 150.000
                td.texto-right -
              tr
                td.ajuste-border-tabla.texto-left Útiles, papelería y fotocopias
                td.ajuste-border-tabla.texto-right $ 80.000
                td.texto-right -
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Casino y restaurante
                td.ajuste-border-tabla.texto-right $ 80.000
                td.texto-right -
              tr
                td.ajuste-border-tabla.texto-left Bancos
                td.ajuste-border-tabla.texto-right -
                td.texto-right $ 480.000
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left <strong>TOTAL</strong>
                td.ajuste-border-tabla.texto-right <strong>$ 480.000</strong>
                td.texto-right <strong>$ 480.000</strong>
      .col-xl-4
        figure(data-aos="fade-right").d-none.d-xl-block
          img(src="@/assets/curso/tema1/img29.svg" style="max-width: 400px").m-auto
    
    .row.mb-5
      .col-xl-1
      .col-xl-10
        .row.align-items-center
          .col-xl-auto
            figure(data-aos="fade-right").d-none.d-xl-block
              img(src="@/assets/curso/tema1/img30.svg" style="max-width: 300px").m-auto
          .col-xl
            p.mb-0 La siguiente figura corresponde al acta de arqueo de caja menor elaborada el 28 de julio de 2020 por la empresa Gestión Contable SAS. Se registra el conteo físico del dinero en efectivo, discriminado por denominación y unidades, así como el saldo según el libro de caja. También se incluyen los valores correspondientes a facturas y otros fondos presentes en caja, lo cual permite verificar la correspondencia entre el efectivo disponible y los registros contables.
    
    .row.fondo-color-3.ajuste-espacios-movil
      .col-xl-3
      .col-xl
        .titulo-sexto.color-acento-contenido.mb-1
          h5 Figura 3. 
          span Arqueo de caja menor
        figure(data-aos="fade-up").ajuste-image__bloque3-1
          img(src='@/assets/curso/tema1/img32.svg', alt='Formato de arqueo de caja menor con datos de la empresa, responsable del arqueo, fecha, saldo en libro y total en efectivo. Incluye desglose por denominación de billetes, sin monedas ni vales registrados, y un valor total en facturas por $480.000.' style="max-width: 600px")
    
      Separador
      <!-- BLOQUE 4 -->
      #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.4 Conciliación Bancaria
      
      p.mb-4 La <strong>conciliación bancaria</strong> es un procedimiento que permite comparar los registros contables de una empresa con el extracto emitido por la entidad financiera. Su objetivo es identificar y analizar las diferencias entre ambos saldos, asegurando la veracidad de la información registrada. Este proceso facilita el control interno, la detección de errores u omisiones, y la toma de decisiones contables oportunas.
    
    .video.mb-5(data-aos="fade-up")
      <iframe width="560" height="315" src="https://www.youtube.com/embed/L3WN5YPuX_w" title="Conciliación bancaria" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    
    .row.fondo-img
      .col-xl
        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/tema1/img2.svg" style="max-width: 70px").m-auto
          .col
            h3 Causa de las diferencias entre los libros auxiliares y el extracto bancario
      
      p.mb-5.ajuste-espacios-movil Las diferencias entre los libros auxiliares de una empresa y el extracto bancario pueden originarse por distintos factores. Identificarlas permite efectuar los ajustes necesarios para asegurar la consistencia contable. A continuación, se presentan las causas más comunes de estas discrepancias:

      .row.mb-5.m-0.ajuste-espacios-movil
        .col-xl-4.espacio__cajas_movil
          .ajuste-caja-text-bloque4.h-100(data-aos="flip-left")
            .col
              figure.mb-3
                img(src='@/assets/curso/tema1/img34.svg', alt='' style="max-width: 95px").m-auto
              p.mb-0 Transacciones contabilizadas por la empresa y no registradas por el banco.
        .col-xl-4.espacio__cajas_movil
          .ajuste-caja-text-bloque4.h-100(data-aos="flip-left")
            .col
              figure.mb-3
                img(src='@/assets/curso/tema1/img34.svg', alt='' style="max-width: 95px").m-auto
              p.mb-0 Valores que aparecen en el extracto y no han sido contabilizadas por la empresa. En este caso requiere ajustes.
        .col-xl-4
          .ajuste-caja-text-bloque4.h-100(data-aos="flip-left")
            .col
              figure.mb-3
                img(src='@/assets/curso/tema1/img34.svg', alt='' style="max-width: 95px").m-auto
              p.mb-0 Errores y omisiones de la empresa y/o del banco. Errores en los libros (Amador, A., 2013, p.2).

      .row.mb-4.align-items-center
        .col-xl
          p.mb-4 Las siguientes, son las etapas que deben seguirse para preparar una conciliación bancaria:
          ol.lista-ol--cuadro.lista-ol--separador(data-aos="fade-right")
            li 
              .lista-ol--cuadro__vineta
                span a
              | Comparar los recibos de las consignaciones efectuadas y las notas crédito recibidas con las consignaciones y las notas crédito que aparezcan en el extracto bancario. Si hay diferencia, debe precisarse el error y corregirlo.
            li 
              .lista-ol--cuadro__vineta
                span b
              | Confrontar la lista de cheques registrados en los libros auxiliares y las notas débito recibidas con la columna cheques y notas débito del extracto. Las diferencias deben eliminarse.
            li 
              .lista-ol--cuadro__vineta
                span c
              | Totalizar las correcciones de las consignaciones en los libros auxiliares.
            li.mb-0
              .lista-ol--cuadro__vineta
                span d
              | Totalizar las correcciones de cheques girados en los libros auxiliares.
        .col-xl-auto
          figure(data-aos="fade-left").d-none.d-xl-block
            img(src="@/assets/curso/tema1/img37.png", alt="" style="max-width: 450px").m-auto

    p.mb-4 A continuación, observa la estructura básica de elaboración de la conciliación bancaria (Conciliación bancaria, s.f., párr.14):

    .row.mb-5
      .col-xl-2
      .col-xl-8
        .row.align-items-center
          .col-xl-4
            figure(data-aos="fade-right").d-none.d-xl-block
              img(src='@/assets/curso/tema1/img38.png', alt='' style="max-width: 300px").m-auto
          .col-xl-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Tabla 4.  
              span Conciliación entre el extracto bancario y el saldo en libros
            .tabla-a(data-aos="fade-up").ajuste___tabla_4
              table
                caption Fuente:  Sinisterra V., Polanco L., y Henao H. (2011)
                tbody
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Saldo del extracto bancario
                    td XXX
                  tr
                    td.ajuste-border-tabla.texto-left (-) Cheques pendientes de cobro
                    td XXX
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left (-) Notas crédito no registradas
                    td XXX
                  tr
                    td.ajuste-border-tabla.texto-left (+) Consignaciones pendientes
                    td XXX
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left (+) Notas debito no registradas
                    td XXX
                  tr
                    td.ajuste-border-tabla.texto-left (±) Errores en el auxiliar
                    td XXX
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left = Saldo en libros
                    td XXX

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img2.svg" style="max-width: 70px").m-auto
      .col
        h3 Métodos de la conciliación bancaria
      
    p.mb-5.ajuste-espacios-movil <strong>Método saldos encontrados</strong>: este método se basa en la elaboración de la conciliación, empezando con alguno de los dos saldos, (el de banco o el de la empresa), para luego reflejar en una sola columna las diferencias, depósitos o cheques que compensen las discrepancias entre ambos para que, al final, se encuentre en saldo contrario, lo cual resulta ser la finalidad de este método (Palmera, 2015, p. 3).
    
    .row.fondo-color-4.ajuste-espacios-movil
      .col-xl-2
      .col-xl-8
        .titulo-sexto.color-acento-contenido.mb-1
          h5 Figura 4. 
          span Formato de conciliación bancaria
        figure(data-aos="fade-up").ajuste-image__bloque3-1
          img(src='@/assets/curso/tema1/img40.svg', alt='Tabla de conciliación bancaria con campos para datos de empresa, cuenta y fecha de corte. Incluye secciones para consignaciones y cheques pendientes, notas crédito y débito bancarias con columnas para concepto, fecha y valor, así como el total del saldo según libros a febrero de 2020.' style="max-width: 800px")

      .row.mb-4
        .col-xl-1
        .col-xl-10
          p.mb-4 Esta tabla permite realizar una conciliación bancaria estructurada entre los registros contables de la empresa y el extracto emitido por el banco. Se divide en cuatro secciones principales: consignaciones y notas crédito no conciliadas, y cheques y notas débito pendientes de conciliación, tanto desde el punto de vista de los libros como del extracto. Al final, se realiza el cálculo del saldo ajustado en libros y según el extracto, lo que permite identificar posibles diferencias y garantizar la confiabilidad de la información financiera.
        
        .row
          .col-xl-1
          .col-xl-11
            .titulo-sexto.color-acento-contenido.mb-1
              h5 Figura 5. 
              span Formato de conciliación bancaria comparativa
            figure(data-aos="fade-up").ajuste-image__bloque3-1
              img(src='@/assets/curso/tema1/img41.svg', alt='Tabla de conciliación bancaria con columnas divididas para consignaciones, notas crédito, cheques y notas débito no conciliadas con extracto y con libros. Incluye secciones para registrar fecha, concepto y valor, además de totales parciales y finales para libros y extracto, con campos para calcular diferencias.' style="max-width: 1050px")

    .row.mb-3.ajuste-espacios-movil
      .col-xl-1
      .col-xl-10
        p.mb-4 Ejemplo
        ol
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Realice la conciliación bancaria teniendo en cuenta utilizar el formato básico y aplicar el método “Saldos encontrados” y “Saldos correctos”, con la siguiente información suministrada por la empresa Gestión contable SAS:

    .row.fondo-color-5
      .col-xl-3
      .col-xl-6
        .titulo-sexto.color-acento-contenido.mb-1
          h5 Figura 6. 
          span Comparativo de saldos y partidas conciliatorias
        figure(data-aos="fade-up").ajuste-image__bloque3-1
          img.mb-4(src='@/assets/curso/tema1/img43.svg', alt='Tabla con comparación entre saldo del libro auxiliar y saldo del extracto bancario, seguida de valores no registrados en libros como notas débito y crédito, y valores no registrados en el extracto como consignaciones en tránsito y cheques pendientes de cobro, cada uno con su valor correspondiente.' style="max-width: 650px")
    
      .row.mb-4
        .col-xl-auto
          figure(data-aos="fade-right").d-none.d-xl-block
            img(src="@/assets/curso/tema1/img44.svg", alt="" style="max-width: 95px").m-auto
        .col-xl
          p.mb-0 La siguiente tabla presenta un formato simplificado para realizar la conciliación bancaria, en el cual se ajusta el saldo contable y el saldo del extracto bancario hasta hacerlos coincidir. Se detallan las notas débito y crédito que afectan el saldo en libros, así como las consignaciones en tránsito y cheques pendientes que inciden sobre el extracto. Esta comparación permite verificar la concordancia entre ambos registros y garantizar la exactitud de la información financiera.
      
      .row.mb-4
        .col-xl-1
        .col-xl-11
          .row.align-items-center
            .col-xl-7
              .titulo-sexto.color-acento-contenido.mb-1
                h5 Tabla 5. 
                span Formato básico - Conciliación bancaria
              .tabla-a.mb-4(data-aos="fade-up").ajuste___tabla
                table
                  thead
                    tr
                      th.ajuste-border-tabla Concepto
                      th Valor
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left Saldo en libros
                      td.texto-right $ 1.170.122 
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left Menos: Notas débito
                      td.texto-right $ 579.666 
                    tr
                      td.ajuste-border-tabla.texto-left Más: Notas crédito
                      td.texto-right $ 12.566 
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left Saldo ajustado en libros
                      td.texto-right $ 603.022 
                    tr
                      td.ajuste-border-tabla.texto-left Saldo en extracto bancario a 31 marzo
                      td.texto-right $ 8.955.336 
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left Más: consignaciones en tránsito
                      td.texto-right $ 1.955.336 
                    tr
                      td.ajuste-border-tabla.texto-left Menos: cheques girados y no cobrados
                      td.texto-right $ 10.307.650 
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left Saldo ajustado al extracto
                      td.texto-right $ 603.022 
            .col-xl-4
              figure(data-aos="fade-left").d-none.d-xl-block
                img(src='@/assets/curso/tema1/img45.svg', alt='' style="max-width: 400px")

      .row.mb-4
        .col-xl-1
        .col-xl-10
          p.m-0 La siguiente figura corresponde al método de conciliación por saldos correctos, aplicado por la empresa Gestión Contable SAS en julio de 2020. Este formato permite ajustar tanto el saldo en libros como el saldo del extracto bancario, incorporando las transacciones no registradas en uno u otro. Se detallan las consignaciones y notas crédito no conciliadas, así como los cheques y notas débito pendientes. Al final, se comprueba que ambos saldos coinciden tras los ajustes, lo cual valida la exactitud de la información contable y bancaria.
      
      .row.mb-4
        .col-xl-1
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-1
            h5 Figura 7. 
            span Conciliación bancaria con método de saldos correctos - Julio 2020
          figure(data-aos="fade-up").ajuste-image__bloque3-1
            img.mb-4(src='@/assets/curso/tema1/img46.svg', alt='Formato de conciliación bancaria que compara partidas no conciliadas con extracto y con libros, separadas en consignaciones, notas crédito, cheques y notas débito, con sus respectivas fechas, conceptos y valores. Incluye totales parciales, saldos finales según libros y extracto, sumatoria de partidas conciliatorias y cálculo final de diferencia igual a cero.' style="max-width: 1050px")
      
      .row.mb-4.ajuste-espacios-movil
        .col-xl-1
        .col-xl-10
          p.m-0 Esta figura corresponde a la conciliación bancaria de la empresa Gestión Contable SAS al 30 de julio de 2020, utilizando el método de saldos encontrados. En ella se parte del saldo según extracto bancario y se detallan las partidas que afectan dicho saldo pero que aún no han sido registradas en la contabilidad, como consignaciones en tránsito, cheques pendientes de cobro, notas crédito y notas débito. La conciliación incluye fechas, conceptos y valores, hasta llegar al saldo final en libros, garantizando que la diferencia sea igual a cero.

      .row.mb-4
        .col-xl-1
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-1
            h5 Figura 8. 
            span Conciliación bancaria con método de saldos encontrados - Julio 2020
          figure(data-aos="fade-up").ajuste-image__bloque3-1
            img.mb-4(src='@/assets/curso/tema1/img47.svg', alt='Formato de conciliación bancaria que presenta el saldo del extracto, valores pendientes por registrar en libros como consignaciones y cheques, y valores no registrados en el extracto como notas débito. Incluye fechas, conceptos, valores y cálculo del saldo final según libros, con diferencia contable igual a cero.' style="max-width: 1050px")
      
      .row.ajuste-espacios-movil
        .col-xl-1
        .col-xl-10
          .row.align-items-center
            .col-xl
              p Con el fin de profundizar en el proceso de elaboración de la conciliación bancaria, es importante explorar la Biblioteca SENA y los siguientes enlaces:
              .row.caja-text-img-tema1-4.align-items-center.m-0(data-aos="fade-up")
                .col-xl-auto
                  figure(data-aos="fade-right").d-none.d-xl-block
                    img(src='@/assets/curso/tema1/img48.svg', alt='' style="max-width: 300px").m-auto
                .col-xl
                  p.m-0 Angulo, U. (2018). Contabilidad financiera, correlacionado con NIIF. (2a. ed.) Ediciones de la U.
                    
                        
            .col-xl-auto
              figure(data-aos="fade-left").d-none.d-xl-block
                img(src='@/assets/curso/tema1/img49.svg', alt='' style="max-width: 300px").m-auto

    Separador
    <!-- BLOQUE 5 -->
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.5 Ajuste por diferencia en cambio
    
    p.mb-5 Las empresas se encuentran expuestas al riesgo cambiario, teniendo en cuenta que realizan operaciones en moneda extranjera; con base en ello, es importante aplicar las normas internacionales en el registro de los hechos económicos.

    .caja-titulos-tercer-nivel-1.mb-5(data-aos="fade-right").ajuste-espacios-movil
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img2.svg" style="max-width: 70px").m-auto
      .col
        h3 Norma Internacional de Contabilidad 21. Efectos de las variaciones en las tasas de cambio de la moneda extranjera
    
    .row.mb-4.ajuste-espacios-movil
      .col.ajuste-h4
        h4.mb-0 Objetivo
    
    .row.fondo-color-6
      .row.mb-4.align-items-center.mb-5
        .col-xl
          p Una entidad puede llevar a cabo actividades en el extranjero de dos maneras diferentes. Puede realizar transacciones en moneda extranjera o bien puede tener negocios en el extranjero. Además, una entidad puede presentar sus estados financieros en una moneda extranjera. El objetivo de esta norma es prescribir cómo se incorporan, en los estados financieros de una entidad, las transacciones en moneda extranjera y los negocios en el extranjero, y cómo convertir los estados financieros a la moneda de presentación elegida. 
          p.mb-0 Los principales problemas que se presentan son la tasa o tasas de cambio a utilizar, así como la manera de informar sobre los efectos de las variaciones en las tasas de cambio dentro de los estados financieros. Consejo Técnico de la contaduría pública (CTCP, 2019c, p.503).
        .col-xl-auto
          figure(data-aos="fade-left").d-none.d-xl-block
            img(src='@/assets/curso/tema1/img51.svg', alt='' style="max-width: 400px").m-auto
      
      .row.mb-4.ajuste-espacios-movil
        .col.ajuste-h4
          h4.mb-0 Alcance

      p.mb-4 Esta norma se aplicará:

      .row.mb-4.align-items-center
        .col-xl-auto
          figure(data-aos="fade-right").d-none.d-xl-block
            img(src='@/assets/curso/tema1/img52.svg', alt='' style="max-width: 400px").m-auto
        .col-xl(data-aos="fade-left")
          ol.caja-text-img-tema1-5
            li 
              .lista-ol--cuadro__vineta
                span a
              | Al contabilizar las transacciones y saldos en moneda extranjera, excepto las transacciones y saldos con derivados que estén dentro del alcance de la NIIF 9- Instrumentos financieros; 
          ol.caja-text-img-tema1-5
            li 
              .lista-ol--cuadro__vineta
                span b
              | al convertir los resultados y la situación financiera de los negocios en el extranjero que se incluyan en los estados financieros de la entidad, ya sea por consolidación o por el método de la participación; y 
          ol.caja-text-img-tema1-5
            li 
              .lista-ol--cuadro__vineta
                span c
              | al convertir los resultados y la situación financiera de la entidad en una moneda de presentación. (CTCP, 2019c, p.503).
      
      p.mb-4 Para ampliar el alcance y lineamientos aplicables es importante revisar la Norma Internacional vigente; para ello, explore los siguientes enlaces:

      .row
        .col-xl
          a.anexo.ajuste__movil_anexo.mb-4.mb-lg-0.anexo__ajuste(href="http://www.ctcp.gov.co/noticias/2019/presidencia-de-la-republica-expidio-el-decreto-227" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-link.svg")
            .anexo__texto
              p <strong>Enlace web.</strong> Decreto 2270 de 2019
        .col-xl
          a.anexo.ajuste__movil_anexo.mb-4.anexo__ajuste(:href="('http://www.ctcp.gov.co/proyectos/contabilidad-e-informacion-financiera/documentos-organismos-internacionales/enmiendas-niif-16-y-segundo-semestre-2016/1514470523-2378')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              p <strong>Anexo.</strong> Norma Internacional de Contabilidad 21
 
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
