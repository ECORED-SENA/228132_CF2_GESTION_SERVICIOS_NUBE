<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    figure.mb-5(data-aos="fade-right")
      img(src="@/assets/curso/banner-intro.png", alt="Introducción")
    p(data-aos="fade-right") Una cordial bienvenida a este componente formativo, en el cual se podrán reconocer e identificar las acciones de análisis y valoración de riesgos y controles de ciberseguridad.
    p.mb-5(data-aos="fade-down") Para comenzar, se debe revisar el siguiente recurso:
    .row.justify-content-center.fondo-personalizado.p-5(data-aos="fade-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/P9B-XJhNhcs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
