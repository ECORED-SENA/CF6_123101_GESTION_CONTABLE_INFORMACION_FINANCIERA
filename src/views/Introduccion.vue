<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.mb-5.m-0
      .col-xl-auto
        figure(data-aos="fade-right").d-none.d-xl-block
          img(src="@/assets/curso/intro/img1.png", alt="" style="max-width: 500px").m-auto
      .col-xl
        .row.align-items-center.caja-text-intro
          .col-xl-2
            figure(data-aos="fade-up").d-none.d-xl-block
              img(src="@/assets/curso/intro/img2.svg", alt="" style="max-width: 95px").m-auto
          .col-xl-10
            p El manejo adecuado del efectivo y sus equivalentes es esencial para la sostenibilidad financiera de cualquier organización. Estos recursos, al formar parte del activo corriente, permiten responder a las obligaciones inmediatas y facilitan la toma de decisiones relacionadas con la inversión y la liquidez empresarial. Por ello, su correcta clasificación y administración resulta clave dentro del proceso contable.
        p.mb-0.caja-text-intro-1 Este componente formativo ofrece las herramientas necesarias para comprender los criterios de reconocimiento, medición, presentación y revelación del efectivo y sus equivalentes, conforme a los estándares establecidos por la Norma Internacional de Contabilidad 7. Además, se abordan conceptos como la caja general, caja menor, depósitos bancarios e inversiones a corto plazo, los cuales son fundamentales para el desarrollo de políticas contables efectivas.

    .row.m-0.align-items-center.caja-text-intro-2
      .col-xl
        .row.align-items-center
          .col-xl-3.m-0
            figure(data-aos="fade-right").d-none.d-xl-block              
              img(src="@/assets/curso/intro/img3.svg", alt="" style="max-width: 95px").m-auto
          .col-xl-9
            p.mb-0 Finalmente, se profundiza en procedimientos clave como el arqueo de caja y la conciliación bancaria, indispensables para garantizar la veracidad de la información financiera. Estas prácticas fortalecen el control interno y permiten que los registros contables reflejen de forma clara y precisa la realidad económica de la entidad.
      .col-xl-auto.ajuste-img-intro
        figure(data-aos="fade-left").d-none.d-xl-block
          img(src="@/assets/curso/intro/img4.png", alt="" style="max-width: 500px").m-auto

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
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
