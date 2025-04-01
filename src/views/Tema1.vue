<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Efectivo y equivalentes al efectivo

    Separador
    <!-- BLOQUE  -->
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Política contable

    
    Separador
    <!-- BLOQUE  -->
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Reconocimiento, medición, presentación y revelación


    Separador
    <!-- BLOQUE  -->
    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3 Arqueo de caja


    Separador
    <!-- BLOQUE  -->
    #t_1_4.titulo-segundo.color-acento-contenido
      h2 1.4 Conciliación Bancaria


    Separador
    <!-- BLOQUE  -->
    #t_1_5.titulo-segundo.color-acento-contenido
      h2 1.5 Ajuste por diferencia en cambio
 
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
