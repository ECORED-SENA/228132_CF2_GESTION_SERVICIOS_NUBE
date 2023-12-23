<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Inventario de activos y evaluación de impacto de riesgos
    .row
      .col-lg-7.mb-4(data-aos="fade-right")
        p El inicio del análisis de riesgos en ciberseguridad, una vez que se haya apropiado una metodología de riesgos, es empezar por el inventario de activos de información y, a partir de allí, valorar la importancia de los mismos, los riesgos asociados, controles y determinación del riesgo inherente y residual, concluyendo con el establecimiento de un plan de tratamiento de riesgos.
      .col-lg-5.mb-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema5-imagen.jpg', alt='imagen decorativa')
    .row.justify-content-center.pt-5
      .col-md-10.fondo-personalizado-2(data-aos="fade-left")
        .row.align-items-center.p-md-5.p-4
          .col-lg-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema5-cta.svg', alt='imagen decorativa')
          .col-lg-7.mb-4.mb-md-0
            .titulo-segundo.mb-4
              .h3 Inventario de activos y evaluación de impacto de riesgos
            p.mb-4 Estudie este punto, a profundidad, en el Anexo. Analice, uno a uno, los elementos conceptuales y operativos que allí se muestran y, de ser posible, tome nota en su libreta personal de apuntes.
            a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Infografia_Inventario_activos_evaluacion_impacto_riesgos.pdf')" target="_blank" type="application/pdf")
              span Descargar
              i.fas.fa-file-download

</template>

<script>
export default {
  name: 'Tema5',
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
