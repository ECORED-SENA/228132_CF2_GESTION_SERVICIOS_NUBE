<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Técnicas de recolección de información
    .row.justify-content-center
      .col-md-10(data-aos="fade-right")
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(:style="{'background-image': `url(${require('@/assets/curso/tema1-cajon.jpg')})`}")
          .bloque-texto-g__texto.py-5.px-4
            .linea-personalizada-1
              img(src="@/assets/curso/linea-fuscia-2.png", alt="Linea decoración fuscia")
            p.mb-0 Las técnicas de recolección de información involucran los métodos para la captura o toma de datos que se pueden aplicar en las investigaciones o procesos de una organización, los mismos se pueden dar en forma cualitativa o cuantitativa. Es importante resaltar que en la recolección de la información se debe validar la calidad de la información y sus fuentes.
            .linea-personalizada-2
              img(src="@/assets/curso/linea-amarillo-2.png", alt="Linea decoración amarillo")
    p.mb-4(data-aos="fade-right") En la recolección de información es importante tener claridad en algunos conceptos que orientan dicho proceso. A continuación, se presentan los más destacados, para asimilarlos mejor se recomienda llevar registro de ellos en la libreta de apuntes personal:
    .row.justify-content-center(data-aos="fade-left")
      .col-md-10.fondo-personalizado.p-md-5.py-5.px-3
        .row
          .col-md-6.mb-4
            .content  
              .content-overlay
              img(src="@/assets/curso/tema1-hover1.svg", alt="Información primaria") 
              .tarjeta-details.fadeIn-top.text-center.text-white.p-1
                h4 Información primaria
                p Es la información que se recolecta directamente, por medio de un sujeto directo con su objeto de investigación.
          .col-md-6.mb-4
            .content(@mouseover="mostrarIndicador = false")
              .indicador--click(v-if="mostrarIndicador")  
              .content-overlay
              img(src="@/assets/curso/tema1-hover2.svg", alt="Información secundaria") 
              .tarjeta-details.fadeIn-top.text-center.text-white.p-1
                h4 Información secundaria
                p Es aquella que se recopila con base en investigaciones realizadas o fuentes de información con propósitos diferentes. La información secundaria es recolectada sin tener contacto directo con el objeto de análisis.
          .col-md-6.mb-4
            .content  
              .content-overlay
              img(src="@/assets/curso/tema1-hover3.svg", alt="Objeto") 
              .tarjeta-details.fadeIn-top.text-center.text-white.p-1
                h4 Objeto
                p Elemento, proceso, área que puede ser objeto de interacción, análisis e investigación por uno o más individuos.
          .col-md-6.mb-4
            .content  
              .content-overlay
              img(src="@/assets/curso/tema1-hover4.svg", alt="Sujeto") 
              .tarjeta-details.fadeIn-top.text-center.text-white.p-1
                h4 Sujeto
                p Actor o individuo que interactúa o participa con un objeto.
    Separador
    #t_1_1
    .titulo-segundo.color-primario(data-aos="fade-right")
      .h2 1.1  Técnicas de recolección más usuales
    .row
      .col-lg-7.mb-4(data-aos="fade-right")
        p Para el proceso de recolección de la información, con fines de análisis y valoración de riesgos en ciberseguridad, existen distintas técnicas. Estas técnicas de recolección de información pueden ser aplicadas en diversos ámbitos y contextos. Tener un conocimiento suficiente de las mismas es importante para levantar los datos e información necesarios, que aseguren un proceso de análisis de riesgos de ciberseguridad más efectivo y cierto.
      .col-lg-5.mb-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1-1-imagen.jpg', alt='imagen decorativa')  
    p.mb-4(data-aos="fade-right") Para profundizar en las técnicas de recolección más usuales, se encontrará una explicación con detalle en el siguiente recurso:
    .row.justify-content-center
      .col-md-10(data-aos="fade-down")
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-5.col-sm-3.col-lg-2.px-4
              img.px-md-2(src="@/assets/curso/tema1-1-cta.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 Afiance los aspectos más importantes de este punto, explorando conscientemente el recurso que aquí le presentamos; recuerde llevar registro en su libreta personal de apuntes. ¡Adelante! 
                .col-sm-auto
                  a.boton.color-secundario(:href="obtenerLink('/downloads/Infografia_Tecnicas_Recoleccion_mas_usuales.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
    Separador
    #t_1_2
    .titulo-segundo.color-primario(data-aos="fade-right")
      .h2 1.2  Características de las técnicas de recolección
    .row.justify-content-center(data-aos="fade-down")
      .col-md-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(:style="{'background-image': `url(${require('@/assets/curso/tema1-2-cajon.jpg')})`}")
          .bloque-texto-g__texto.py-5.px-4
            .linea-personalizada-1
              img(src="@/assets/curso/linea-fuscia-2.png", alt="Linea decoración fuscia")
            p.mb-0 Las técnicas de recolección de información, en el proceso de análisis, valoración de riesgos y controles de ciberseguridad, tienen ciertas características o particularidades que, no solo las diferencias de las técnicas de recolección de otros procesos, sino que, además, favorecen la operación de quienes están a cargo de dicha tarea.
            .linea-personalizada-2
              img(src="@/assets/curso/linea-amarillo-2.png", alt="Linea decoración amarillo")
    p.mb-4(data-aos="fade-right") Las técnicas de recolección de información pueden apropiar las características que se descubrirán en el recurso que se muestra a continuación. 
      strong ¡Adelante!
    SlyderA.fondo-personalizado-2.p-md-5.py-5.px-4(data-aos="fade-left")
      .row
        .col-md-6.mb-4.mb-md-0.px-md-5
          h4 Técnicas cualitativas
          p Pueden presentar alto nivel de entendimiento de los datos e información. La relevancia está dada en las respuestas individuales y su nivel de profundidad. Tienen un alto nivel de subjetividad y dependen del conocimiento, experiencia y percepción que un sujeto tiene sobre el objeto de estudio. 
        .col-md-6
          figure
            img(src='@/assets/curso/tema1-2-slider1.png', alt='Técnicas cualitativas')
      .row
        .col-md-6.mb-4.mb-md-0.px-md-5
          h4 Técnicas cuantitativas
          p Su base fundamental son los datos numéricos, que representan características o detalles particulares de un objeto de estudio. Una gran cantidad de datos sobre uno o más atributos, de un objeto de estudio, que permita generalizar en los resultados obtenidos, facilitando la comprensión y la toma de decisiones.
        .col-md-6
          figure
            img(src='@/assets/curso/tema1-2-slider2.png', alt='Técnicas cuantitativas')      
      .row
        .col-md-6.mb-4.mb-md-0.px-md-5
          h4 Registro de datos
          p Consiste en el proceso de recopilar los datos o información obtenida, cuando se aplican las técnicas de recolección de información. Este es un elemento importante que puede ser aplicado tanto en papel y archivos físicos, como en medios digitales, tales como: documentos de procesadores de texto, registros multimedia (imagen, audio, video), aplicaciones de 
            italic software 
            | y bases de datos digitales.
        .col-md-6
          figure
            img(src='@/assets/curso/tema1-2-slider3.png', alt='Registro de datos')
      
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicador: true,
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
