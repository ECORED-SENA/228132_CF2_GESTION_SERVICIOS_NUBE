<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Riesgos
    .row
      .col-lg-7.mb-4(data-aos="fade-right")
        p En términos generales, el riesgo se asocia a una “Contingencia o proximidad de un daño”. RAE (2021). Cuando se realiza un análisis de riesgos de ciberseguridad, lo que se pretende es encontrar cuál es la proximidad o probabilidad de que los riesgos, amenazas y vulnerabilidades, afecten los activos de información y generen un impacto adverso en la organización.
      .col-lg-5.mb-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema6-imagen.jpg', alt='imagen decorativa') 
    p.mb-4(data-aos="fade-right") Se debe visualizar atentamente y con sentido crítico el vídeo que se comparte a continuación. En este se podrá ampliar los conocimientos en lo relacionado con los riesgos de la ciberseguridad:
    .row.justify-content-center.fondo-personalizado.py-5(data-aos="fade-left")
      .col-md-10
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/QLWc_y6HMuA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    // variables de vue
    modal1: false,
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

<style lang="sass" scoped></style>
