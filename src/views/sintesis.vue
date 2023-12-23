<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 En resumen, el componente formativo ofrece una visión integral y práctica de la ciberseguridad, desde la recolección de datos hasta la valoración y gestión de riesgos, proporcionando herramientas y técnicas esenciales para garantizar la seguridad digital en las organizaciones. A continuación, se presenta un mapa conceptual que resume la información de este proceso.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Muestra síntesis del componente formativo Análisis,  valoración de riesgos y controles de ciberseguridad; por esta razón desde la recolección de datos hasta la valoración y gestión de riesgos, proporcionando herramientas y técnicas esenciales para garantizar la seguridad digital en las organizaciones.")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
