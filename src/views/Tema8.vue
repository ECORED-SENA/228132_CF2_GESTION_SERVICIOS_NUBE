<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 8
      h1 Matriz de riesgos
    p.mb-4(data-aos="fade-right") La matriz de riesgos se construye a partir de las evaluaciones de activos, probabilidad de riesgos, el impacto, controles y el riesgo residual. La matriz de riesgos permite tener la trazabilidad necesaria del resultado de análisis de un riesgo o de un activo de información.
    .row
      .col-lg-5.mb-4.mb-md-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema8-imagen.jpg', alt='imagen decorativa')  
      .col-lg-7.fondo-personalizado-2.px-md-5.py-md-3.p-4(data-aos="fade-left")
        p La matriz debe contener un registro y valoración de:
        ul.lista-ul--color.lista-acento-botones.mb-0
          li.mb-0.d-flex
            i.fas.fa-square
            | Activos de información.
          li.mb-0.d-flex
            i.fas.fa-square
            | Riesgos; (amenazas, principios afectados por amenazas, elementos vulnerables).
          li.mb-0.d-flex
            i.fas.fa-square
            | Probabilidad de riesgos.
          li.mb-0.d-flex
            i.fas.fa-square
            | Dimensiones de impactos organizacionales.
          li.mb-0.d-flex
            i.fas.fa-square
            | Cálculo del riesgo inherente.
          li.mb-0.d-flex
            i.fas.fa-square
            | Controles y aplicación de controles al catálogo de riesgos.
          li.mb-0.d-flex
            i.fas.fa-square
            | Cálculo del riesgo residual.          
    Separador
    #t_8_1
    .titulo-segundo.color-primario(data-aos="fade-right")
      .h2 8.1  Diligenciamiento de la matriz de riesgos
    .row.justify-content-center(data-aos="fade-down")
      .col-md-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-4.mb-5
          .bloque-texto-g__img(:style="{'background-image': `url(${require('@/assets/curso/tema8-1-cajon.jpg')})`}")
          .bloque-texto-g__texto.py-5.px-4
            .linea-personalizada-1
              img(src="@/assets/curso/linea-fuscia-2.png", alt="Linea decoración fuscia")
            p.mb-0 La matriz de riesgos se convierte en instrumento clave para lograr que la organización gestiones y determinar con la mayor objetividad, todos y cada uno de los riesgos relevantes y no relevantes, que afectarían o no, y en qué medida, la ciberseguridad y la seguridad de la información, así como también la seguridad general de la infraestructura, el talento humano, las redes de servicios, los procesos, etc.
            .linea-personalizada-2
              img(src="@/assets/curso/linea-amarillo-2.png", alt="Linea decoración amarillo")
    p.mb-4(data-aos="fade-right") Diligenciar la matriz de riesgos, es una acción sencilla que implica analizar los procesos, funciones y tareas que, en la organización, desarrollan tanto sus colaboradores como, incluso, los activos mismos de información. Visualice y analice la referencia de matriz de riesgos que le presentamos, ver tabla 7.
    .row.justify-content-center(data-aos="fade-left")
      .col-md-10
        .titulo-sexto.color-acento-botones
          p.mb-0
            strong Tabla 7. 
            | Referencia matriz de riesgos
        .tabla-b.tabla-2.color-primario.mb-2
          table  
            thead.tabla-b__header 
              tr
                th(rowspan="2") 
                  h4.text-white.mb-0 Activo
                th(colspan="4")  
                  h4.text-white.mb-0 Activo y riesgo inherente
                th(colspan="5") 
                  h4.text-white.mb-0 Elementos vulnerables asociados 
              tr
                th.morado-2
                  p.text-white.mb-0 Valor activo
                th.morado-2
                  p.text-white.mb-0 Probabilidad total
                th.morado-2
                  p.text-white.mb-0 Impacto general
                th.morado-2
                  h5.text-white.mb-0 Riesgo inherente
                th.morado-3
                  p.text-white.mb-0 Controles      
                th.morado-3
                  p.text-white.mb-0 Nueva probabilidad
                th.morado-3
                  p.text-white.mb-0 Nuevo impacto
                th.morado-3
                  h5.text-white.mb-0 Riesgo residual      
                th.morado-3
                  h5.text-white.mb-0 Nivel de severidad      
            tbody.text-center
              tr
                td.morado-1.text-white Servidor Web
                td.fila-amarillo2 5
                td.fila-amarillo2 4   
                td.fila-amarillo2 5  
                td.fila-amarillo2 
                  strong 100  
                td.fila-amarillo1 X 
                td.fila-amarillo1 3 
                td.fila-amarillo1 4 
                td.fila-amarillo1 
                  strong 60
                td.fila-amarillo1 
                  strong Moderado
              tr
                td.morado-1.text-white Información Documental
                td.fila-amarillo2 5
                td.fila-amarillo2 4   
                td.fila-amarillo2 3  
                td.fila-amarillo2 
                  strong 60  
                td.fila-amarillo1 X 
                td.fila-amarillo1 4 
                td.fila-amarillo1 2 
                td.fila-amarillo1 
                  strong 40
                td.fila-amarillo1 
                  strong Moderado 
              tr
                td.morado-1.text-white ...
                td.fila-amarillo2 ...
                td.fila-amarillo2 ...   
                td.fila-amarillo2 ...  
                td.fila-amarillo2 
                  strong ...  
                td.fila-amarillo1 ... 
                td.fila-amarillo1 ...
                td.fila-amarillo1 ... 
                td.fila-amarillo1 
                  strong ...
                td.fila-amarillo1 
                  strong ...
    Separador
    #t_8_2
    .titulo-segundo.color-primario(data-aos="fade-right")
      .h2 8.2  Plan de tratamiento de riesgos
    .row
      .col-lg-7.mb-4(data-aos="fade-right")
        p Una vez se tenga la matriz de riesgos se debe desarrollar un Plan de Tratamiento de Riesgos 
          strong (PTR)
          | . En ciberseguridad, consiste en una serie de actividades a desarrollar, en función de riesgos de ciberseguridad no aceptables, severos o críticos, resultantes del proceso de análisis de riesgos; tales actividades buscan fortalecer, corregir o implementar controles de ciberseguridad para la reducción de riesgos asociados a los activos de información.
      .col-lg-5.mb-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema8-2-imagen.jpg', alt='imagen decorativa')
    .row.justify-content-center
      .col-md-10.fondo-personalizado-2.p-md-5.p-4
        .row
          .col-lg-7.mb-0.px-md-4.py-md-0.px-3.py-5(data-aos="fade-right")
            p El plan de tratamiento de riesgos se debe construir considerando los siguientes aspectos:
            ul.lista-ul--color.lista-acento-botones
              li.mb-0.d-flex
                i.fas.fa-square
                | Activo de información con riesgos críticos.
              li.mb-0.d-flex
                i.fas.fa-square
                | Riesgos residuales asociados.
              li.mb-0.d-flex
                i.fas.fa-square
                | Causas de riesgo asociadas.
              li.mb-0.d-flex
                i.fas.fa-square
                | Controles asociados a los riesgos. 
              li.mb-0.d-flex
                i.fas.fa-square
                | Tipo de tratamiento; mitigar o reducir el riesgo, evitar el riesgo, compartir o transferir el riesgo.
              li.mb-0.d-flex
                i.fas.fa-square
                | Actividades a realizar. 
              li.mb-0.d-flex
                i.fas.fa-square
                | Responsable. 
              li.mb-0.d-flex
                i.fas.fa-square
                | Prioridad.  
              li.mb-0.d-flex
                i.fas.fa-square
                | Fecha de implementación de las actividades.
              li.mb-0.d-flex
                i.fas.fa-square
                | Observaciones.                    
          .col-lg-5.mb-4.mb-md-0.px-md-4(data-aos="fade-left")
            figure.mb-4
              img(src='@/assets/curso/tema8-2-imagen2.svg', alt='imagen decorativa')  
            .row
              .col-6
                a.boton.color-acento-botones.indicador__container.text-white.text-center.modal-centrado(@click="modal1 = true")
                  span Ver más
                  i.fas.fa-chevron-right
                  .indicador--click(v-if="mostrarIndicador")  
                .row.justify-content-center
                    .col-md-5
                      ModalA.modal-borde(:abrir-modal.sync="modal1")
                        .row.justify-content-center
                          .col-md-3.col-7.mb-4.mb-md-0
                            figure
                              img(src='@/assets/curso/tema8-2-modal1.svg', alt='imagen decorativa')
                          .col-md-8
                            p.mb-0 Una vez se haya realizado el Plan de Tratamiento de Riesgos, se debe comunicar a las partes interesadas, principalmente a los responsables de los activos de información y se debe dejar un registro de aceptación del plan de tratamiento de riesgos.
              .col-6
                a.boton.color-acento-botones.indicador__container.text-white.text-center.modal-centrado(@click="modal2 = true")
                  span Ver más
                  i.fas.fa-chevron-right
                  .indicador--click(v-if="mostrarIndicador")  
                ModalA.modal-borde(:abrir-modal.sync="modal2")
                  .row.justify-content-center
                    .col-md-3.col-8.mb-4.mb-md-0
                      figure
                        img(src='@/assets/curso/tema8-2-modal2.svg', alt='imagen decorativa')
                    .col-md-8
                      p.mb-0 El 
                        strong PTR
                        | , plan de tratamiento de riesgos, debe ser revisado periódicamente para determinar la conformidad, según las fechas de implementación de las actividades.

</template>

<script>
export default {
  name: 'Tema8',
  data: () => ({
    // variables de vue
    modal1: false,
    modal2: false,
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
