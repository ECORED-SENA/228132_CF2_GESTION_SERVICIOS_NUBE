<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Valoración
    .row
      .col-lg-7.mb-4(data-aos="fade-right")
        p La valoración de riesgos es un proceso que inicia con la valuación de los activos de información, luego pasa por la valoración de la probabilidad de ocurrencia de riesgos asociados a los activos y termina con la valoración del impacto.
        p.fondo-naranja.mb-0.p-4 En términos generales, el riesgo es igual a la probabilidad por impacto; 
          span.etiqueta #[i Riesgo = Probabilidad x Impacto]. 
          | Pero en ciberseguridad el impacto está determinado por el valor del activo de información por el impacto general de las dimensiones de impacto organizacionales. 
      .col-lg-5.mb-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema7-imagen.jpg', alt='imagen decorativa')   
    Separador
    #t_7_1
    .titulo-segundo.color-primario(data-aos="fade-right")
      .h2 7.1  Riesgo inherente
    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-md-10.fondo-rosado
        .row.align-items-center.justify-content-center.py-md-4.p-4
          .col-md-3.col-9.mb-md-0.mb-3
            img.px-md-3(src='@/assets/curso/tema7-1-imagen.svg', alt='imagen decorativa') 
          .col-md-8
            p.mb-0 Consiste en el riesgo valorado antes de que se le haya aplicado un tratamiento o controles para su mitigación. También es denominado riesgo potencial.
    p.mb-4(data-aos="fade") Sobre el riesgo inherente, se debe tener en cuenta:
    .row.justify-content-center.mb-4
      .col-md-10(data-aos="fade-left")
        .row.mb-5
          .col-md-6.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/tema7-1-tarjeta1.svg' alt='AvatarTop')
              .tarjeta.color-primario.fondo-morado1
                .text-white.p-4
                  h3.text-center Proceso temprano
                  p Es importante que se determine este tipo de riesgo inicialmente para poder luego aplicar los controles de ciberseguridad y determinar el riesgo residual, logrando entender que controles son necesarios de fortalecer, cambiar o implementar.
          .col-md-6.mb-lg-0(data-aos="fade-left")
            .tarjeta-avatar
              img(src='@/assets/curso/tema7-1-tarjeta2.svg' alt='AvatarTop')
              .tarjeta.color-acento-contenido.fondo-morado2
                .text-white.p-4
                  h3.text-center Escala de evaluación
                  p La escala de evaluación de riesgos puede ser determinada como cada organización crea conveniente, y es importante que determine los niveles de aceptación y tratamiento de riesgos.
    .row.justify-content-center
      .col-md-10.fondo-rosado(data-aos="fade-right")
        .row.align-items-center.justify-content-center.py-md-4.p-4
          .col-md-2.col-4.mb-md-0.mb-3
            img.px-md-4(src='@/assets/curso/tema7-1-cta.svg', alt='imagen decorativa') 
          .col-md-7.mb-md-0.mb-3
            h5.mb-0 Referencia de severidad del riesgo
          .col-md-2.mb-md-0.mb-3  
            a.boton.color-acento-botones.indicador__container.text-white.text-center.modal-centrado(@click="modal1 = true")
              span Ver más
              i.fas.fa-chevron-right
              .indicador--click(v-if="mostrarIndicador")  
            ModalA.modal-borde-tabla(:abrir-modal.sync="modal1")
              .row.justify-content-center
                p Analice, esta es una escala de referencia, aplicable a riesgo inherente o riesgo residual.
                .titulo-sexto.color-acento-botones
                  p.mb-0
                    strong Tabla 4. 
                    | Referencia de severidad del riesgo
                .tabla-b.tabla-2.color-primario.mb-2
                  table  
                    thead.tabla-b__header 
                      tr
                        th(colspan="6")  
                          h4.text-white.mb-0 Severidad del riesgo
                      tr
                        th.morado-2
                          h5.text-white.mb-0 N°
                        th.morado-2
                          h5.text-white.mb-0 VALOR
                        th.morado-2
                          h5.text-white.mb-0 Descripción
                        th.morado-2
                          h5.text-white.mb-0 Acción    
                        th.morado-2
                          h5.text-white.mb-0 Límite inferior 
                        th.morado-2
                          h5.text-white.mb-0 Límite superior     
                    tbody
                      tr.fila-amarillo2
                        td.text-center 1
                        td.text-center Severo
                        td El nivel del riesgo es inadmisible o severo, por lo que es necesario implementar controles en la organización para mitigar, evitar o compartir el riesgo y llevar el mismo a niveles aceptables.
                        td.text-center Evitar / Reducir / Transferir
                        td.text-center 70
                        td.text-center 125
                      tr.fila-amarillo1
                        td.text-center 2
                        td.text-center Moderado
                        td El nivel de riesgo es tolerable o moderado de acuerdo a los criterios de aceptación de la organización. Los riesgos en este nivel deben ser monitoreados para identificar oportunamente los cambios en su valoración.
                        td.text-center Aceptar / Monitorear
                        td.text-center 20
                        td.text-center 69  
                      tr.fila-amarillo2
                        td.text-center 3
                        td.text-center Leve
                        td El nivel de riesgo es aceptable y se encuentra controlado en la organización o el mismo es insignificante. Los riesgos en este nivel se deben revisar periódicamente.
                        td.text-center Aceptar
                        td.text-center 1
                        td.text-center 19  
    Separador
    #t_7_2
    .titulo-segundo.color-primario(data-aos="fade-right")
      .h2 7.2  Evaluación de controles de seguridad
    p.mb-4(data-aos="fade") La evaluación de controles es un aspecto importante dentro del análisis de riesgos, para ello se deben inventariar los controles existentes y realizar la evaluación, conforme a los detalles de referencia.
    .row.mb-4
      .col-lg-5.mb-4.mb-md-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema7-2-imagen.jpg', alt='imagen decorativa')  
      .col-lg-7.fondo-personalizado-2.px-md-5.py-md-3.p-4(data-aos="fade-left")
        p El inventario de controles se debe realizar siguiendo la siguiente estructura:
        ul.lista-ul--color.lista-acento-botones.mb-0
          li.mb-0.d-flex
            i.fas.fa-square
            | Número de control.
          li.mb-0.d-flex
            i.fas.fa-square
            | Nombre del control.
          li.mb-0.d-flex
            i.fas.fa-square
            | Descripción del control.
          li.mb-0.d-flex
            i.fas.fa-square
            | Asignación del control.
          li.mb-0.d-flex
            i.fas.fa-square
            | Tipo de control: preventivo, correctivo.
          li.mb-0.d-flex
            i.fas.fa-square
            | Naturaleza del control.
          li.mb-0.d-flex
            i.fas.fa-square
            | Frecuencia.
          li.mb-0.d-flex
            i.fas.fa-square
            | Evidencia/Documentación.
          li.mb-0.d-flex
            i.fas.fa-square
            | Funcionalidad.
    p.mb-4(data-aos="fade-right") Se debe conocer la referencia de evaluación de controles que el siguiente recurso tiene. Allí mismo, se debe ampliar el conocimiento en la determinación de diseños de control y ejecución de los controles. 
      strong ¡Adelante!
    .row.mb-4(data-aos="fade-left")
      .titulo-numero-acento-botones 
        .fondo-1-acento-botones
          h3.mb-0 1
      .row.bloque-borde-acento-botones.p-4.py-3
        p.mt-4 Para comenzar, analice y comprenda esta tabla de referencia para la evaluación de controles.
        .tabla-b.tabla-3.color-primario.mb-2
          table  
            thead.tabla-b__header 
              tr
                th(colspan="13")  
                  h4.text-white.mb-0 Elementos para la evaluación del diseño de controles
              tr
                th.morado-2
                  h5.text-white.mb-0 Asignación
                th.morado-2
                  h5.text-white.mb-0 Valor
                th.morado-2
                  h5.text-white.mb-0 Tipo
                th.morado-2
                  h5.text-white.mb-0 Valor    
                th.morado-2
                  h5.text-white.mb-0 Naturaleza 
                th.morado-2
                  h5.text-white.mb-0 Valor  
                th.morado-2
                  h5.text-white.mb-0 Frecuencia 
                th.morado-2
                  h5.text-white.mb-0 Valor 
                th.morado-2
                  h5.text-white.mb-0 Documentación 
                th.morado-2
                  h5.text-white.mb-0 Valor  
                th.morado-2
                  h5.text-white.mb-0 Evidencia / Soporte 
                th.morado-2
                  h5.text-white.mb-0 Funcionalidad 
                th.morado-2
                  h5.text-white.mb-0 Valor                 
            tbody
              tr.text-center.fila-amarillo2
                td Asignado
                td 30%
                td Preventivo
                td 10%
                td Automático
                td 10%
                td Adecuada
                td 20%
                td Documentado
                td 10%
                td Actas de comité o actas de reuniones
                td Adecuada
                td 20%
              tr.text-center.fila-amarillo1
                td No Asignado
                td 0%
                td Detectivo
                td 7%
                td Desarrollo de TI
                td 7%
                td Inadecuada
                td 0%
                td No documentado
                td 0%
                td Archivos digitales 
                td Inadecuada
                td 0%  
              tr.text-center.fila-amarillo2
                td - -
                td - -
                td Correctivo
                td 5%
                td Manual
                td 5%
                td - -
                td - -
                td - -
                td - -
                td Correos corporativos
                td - -
                td - -
              tr.text-center.fila-amarillo1
                td - -
                td - -
                td - -
                td 0%
                td - -
                td 0%
                td - -
                td - -
                td - -
                td - -
                td Check list
                td - -
                td - -  
              tr.text-center.fila-amarillo2
                td - -
                td - -
                td - -
                td - -
                td - -
                td - -
                td - -
                td - -
                td - -
                td - -
                td Formatos
                td - -
                td - -    
              tr.text-center.fila-amarillo1
                td - -
                td - -
                td - -
                td - -
                td - -
                td - -
                td - -
                td - -
                td - -
                td - -
                td Informes de gestión
                td - -
                td - -  
              tr.text-center.fila-amarillo2
                td - -
                td - -
                td - -
                td - -
                td - -
                td - -
                td - -
                td - -
                td - -
                td - -
                td Políticas organizacionales - procedimientos
                td - -
                td - -  
              tr.text-center.fila-amarillo1
                td - -
                td - -
                td - -
                td - -
                td - -
                td - -
                td - -
                td - -
                td - -
                td - -
                td Registros financieros
                td - -
                td - -  
              tr.text-center.fila-amarillo2
                td - -
                td - -
                td - -
                td - -
                td - -
                td - -
                td - -
                td - -
                td - -
                td - -
                td Registros administrativos
                td - -
                td - -
              tr.text-center.fila-amarillo1
                td - -
                td - -
                td - -
                td - -
                td - -
                td - -
                td - -
                td - -
                td - -
                td - -
                td Registros operativos
                td - -
                td - -
              tr.text-center.fila-amarillo2
                td - -
                td - -
                td - -
                td - -
                td - -
                td - -
                td - -
                td - -
                td - -
                td - -
                td Registros digitales
                td - -
                td - -            
        figcaption Nota. Tomado de Modelo MSPI. MinTic. (2016).
    .row.justify-content-between
      .col-md-6.cajas-numeros(data-aos="fade-right")
        .row.mb-4
          .titulo-numero-acento-contenido 
            .fondo-1-acento-contenido
              h3.mb-0 2
          .row.bloque-borde-acento-contenido.justify-content-center.align-items-center.py-3
            .col-md-4.col-6.mt-3
              img(src='@/assets/curso/tema7-2-ico1.svg', alt='imagen decorativa')  
            .col-md-8.mt-3
              p.mb-0 Una vez inventariados y evaluados los controles, se debe determinar el diseño del control, la ejecución, la solidez individual, la importancia del control y la solidez del conjunto del control.
      .col-md-6.cajas-numeros(data-aos="fade-left")
        .row.mb-4
          .titulo-numero-acento-botones 
            .fondo-1-acento-botones
              h3.mb-0 3
          .row.bloque-borde-acento-botones.justify-content-center.align-items-center.py-3
            .col-md-4.col-6.mt-3
              img(src='@/assets/curso/tema7-2-ico2.svg', alt='imagen decorativa')  
            .col-md-8.mt-3
              p.mb-0 El Diseño del control es la sumatoria de la 
                italic-strong Asignación del control con el Tipo de control (Preventivo, Correctivo) + la  Naturaleza del control, la Frecuencia y la Funcionalidad.
    .row.mb-4
      .titulo-numero-acento-contenido 
        .fondo-1-acento-contenido
          h3.mb-0 4
      .row.bloque-borde-acento-contenido.p-4.py-3(data-aos="fade-right")
        p.mt-4 Analice, ahora, esta tabla referencia para determinar la ejecución, solidez e importancia de controles.
        .tabla-b.tabla-3.color-primario.mb-2
          table  
            thead.tabla-b__header 
              tr
                th(colspan="11")  
                  h4.text-white.mb-0 Ejecución, solidez e importancia del control
              tr
                th.morado-2
                  h5.text-white.mb-0 N°
                th.morado-2
                  h5.text-white.mb-0 Ejecución
                th.morado-2
                  h5.text-white.mb-0 Descripción
                th.morado-2
                  h5.text-white.mb-0 Valor    
                th.morado-2
                  h5.text-white.mb-0 Solidez 
                th.morado-2
                  h5.text-white.mb-0 Valor  
                th.morado-2
                  h5.text-white.mb-0 Límite inferior 
                th.morado-2
                  h5.text-white.mb-0 Límite superior 
                th.morado-2
                  h5.text-white.mb-0 Importancia 
                th.morado-2
                  h5.text-white.mb-0 Descripción  
                th.morado-2
                  h5.text-white.mb-0 Valor                
            tbody
              tr.text-center.fila-amarillo2
                td.gris-3 1
                td Fuerte
                td Control que se ejecuta cada vez que se desarrolla la actividad.
                td 5
                td Fuerte
                td 5
                td 16
                td 25
                td Muy Importante
                td Si el control garantiza cero errores.
                td 5
              tr.text-center.fila-amarillo1
                td.gris-3 2
                td Moderado
                td Control que se aplica en momentos determinados.
                td 3
                td Moderado
                td 3
                td 9
                td 15
                td Importante
                td Si el control garantiza un buen desempeño.
                td 3  
              tr.text-center.fila-amarillo2
                td.gris-3 3
                td Débil
                td Control que se efectúa cuando se requiere.
                td 1
                td Débil
                td 1
                td 1
                td 5
                td Poco Importante
                td Si lo que aporta el control no es significativo.
                td 1
        figcaption Nota. Tomado de Modelo MSPI. MinTic. (2016).
    .row.justify-content-between
      .col-md-6.cajas-numeros(data-aos="fade-right")
        .row.mb-4
          .titulo-numero-acento-botones 
            .fondo-1-acento-botones
              h3.mb-0 5
          .row.bloque-borde-acento-botones.justify-content-center.align-items-center.py-3
            .col-md-4.col-6.mt-3
              img(src='@/assets/curso/tema7-2-ico3.svg', alt='imagen decorativa')  
            .col-md-8.mt-3
              p.mb-0 La #[i ejecución del control] se determina manualmente, mientras que la 
                strong #[i Solidez individual ]
                | será igual al 
                strong #[i diseño del control ] 
                | #[i por la ejecución del control].
      .col-md-6.cajas-numeros(data-aos="fade-left")
        .row.mb-4
          .titulo-numero-acento-contenido 
            .fondo-1-acento-contenido
              h3.mb-0 6
          .row.bloque-borde-acento-contenido.justify-content-center.align-items-center.py-3
            .col-md-4.col-6.mt-3
              img(src='@/assets/curso/tema7-2-ico4.svg', alt='imagen decorativa')  
            .col-md-8.mt-3
              p.mb-0 Así entonces: 
              p Solidez individual del control
              p.mb-0.resaltado-caja.py-2.px-4
                strong #[i Si = Diseño del control X Ejecución del control]
    Separador
    #t_7_3
    .titulo-segundo.color-primario(data-aos="fade-right")
      .h2 7.3  La importancia del control
    p.mb-4(data-aos="fade-right") La #[i Importancia del control] se determina manualmente; habiéndola determinado, es más sencillo determinar #[i la solidez del conjunto de control], que es el resultado que ayudará a determinar si el control puede, o no, disminuir un riesgo. La #[i solidez del conjunto de control] es igual a la #[i solidez individual del control más la Importancia, sobre tres (3)].
    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-md-10.fondo-rosado
        .row.align-items-center.justify-content-center.py-md-4.p-4
          .col-md-3.col-9.mb-md-0.mb-3
            img.px-md-3(src='@/assets/curso/tema7-3-imagen.svg', alt='imagen decorativa') 
          .col-md-8
            h5 #[i Solidez del conjunto de control, Sc = (solidez individual del control + Importancia) / 3]
    p.mb-4(data-aos="fade-right") Se debe tener muy presente los aspectos que se muestran en el siguiente recurso, sobre la importancia del control y la solidez del conjunto de controles; no olvidar la toma de nota sobre ellos:
    AcordeonB(tipo="b" clase-tarjeta="tarjeta border-bottom")(data-aos="fade-left")
      .row.px-lg-5(titulo="División sobre tres")
        .col-lg-9
          p Se divide sobre tres (3) teniendo en cuenta los valores de referencia que se han utilizado.
        .col-lg-3.col-8
          img.px-md-4(src="@/assets/curso/tema7-3-tab1.svg", alt="División sobre tres")
      .row.px-lg-5(titulo="Coherencia con la realidad")
        .col-lg-9
          p Es importante que en cada método de valoración o medición establecido en la organización se determine que, el mismo, sea coherente y pueda representar lo mejor posible la realidad.
        .col-lg-3.col-8
          img.px-md-4(src="@/assets/curso/tema7-3-tab2.svg", alt="Coherencia con la realidad")    
      .row.px-lg-5(titulo="Referencia")    
        p Esta es la referencia para determinar la solidez del conjunto de controles:
        .titulo-sexto.color-acento-botones
          p.mb-0
            strong Tabla 5. 
            | Referencia para determinar la solidez del conjunto de controles
        .tabla-b.tabla-2.color-primario.mb-2
          table  
            thead.tabla-b__header 
              tr
                th(colspan="7")  
                  h4.text-white.mb-0 Solidez del conjunto de controles
              tr
                th.morado-2
                  h5.text-white.mb-0 Calificación
                th.morado-2
                  h5.text-white.mb-0 ES
                th.morado-2(colspan="2")
                  h5.text-white.mb-0 Valor
                th.morado-2
                  h5.text-white.mb-0 Límite inferior    
                th.morado-2
                  h5.text-white.mb-0 Límite superior
                th.morado-2
                  h5.text-white.mb-0 Disminución de la probabilidad e/o impacto     
            tbody
              tr.gris-1.text-center
                td Fuerte
                td >=
                td(colspan="2") 3.3
                td 3.3
                td 5
                td 2
              tr.gris-2.text-center
                td Moderado
                td >= Y <
                td 2.5
                td 3.2
                td 2.5
                td 3.2
                td 1 
              tr.gris-1.text-center
                td Débil
                td <
                td(colspan="2") 2.5
                td 0
                td 2.4
                td 0  
        figcaption Nota. Tomado de Modelo MSPI. MinTic. (2016).        
      .row.px-lg-5(titulo="Solidez del conjunto de controles")
        .col-lg-9
          p Cuando se aplican varios controles en el tratamiento de un riesgo, el promedio de la #[i Solidez del conjunto de control] de los controles aplicados, determina la #[i Solidez del conjunto de controles] para la disminución de la probabilidad e/o impacto.
        .col-lg-3.col-8
          img.px-md-4(src="@/assets/curso/tema7-3-tab4.svg", alt="Solidez del conjunto de controles")  
      .row.px-lg-5(titulo="Aplicación de controles a riesgos")      
        .titulo-sexto.color-acento-botones
          p.mb-0
            strong Tabla 6. 
            | Referencia de aplicación de controles a riesgos
        .tabla-b.tabla-2.color-primario.mb-2
          table  
            thead.tabla-b__header 
              tr
                th.morado-2
                  h5.text-white.mb-0 Riesgo
                th.morado-2
                  h5.text-white.mb-0 Sc. Control 1
                th.morado-2
                  h5.text-white.mb-0 Sc. Control 2
                th.morado-2
                  h5.text-white.mb-0 Sc. Control 3    
                th.morado-2
                  h5.text-white.mb-0 Sc. Control n
                th.morado-2
                  h5.text-white.mb-0 Promedio Sc. controles  
                th.morado-2
                  h5.text-white.mb-0 Disminuye probabilidad
                th.morado-2
                  h5.text-white.mb-0 Disminuye impacto      
            tbody
              tr.gris-1.text-center
                td Riesgo 1
                td NA
                td 3.3
                td 2.7
                td ...
                td 3
                td 1
                td 1
              tr.gris-2.text-center
                td Riesgo 2
                td 1
                td 3.3
                td 2.7
                td ...
                td 2.33
                td 0
                td 0
    Separador
    #t_7_4
    .titulo-segundo.color-primario(data-aos="fade-right")
      .h2 7.4  Riesgo residual
    .row
      .col-lg-7.mb-4(data-aos="fade-right")
        p El riesgo residual consiste en el riesgo repercutido o resultante, después de que se aplican controles o medidas para la reducción de los mismos.
      .col-lg-5.mb-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema7-4-imagen.jpg', alt='imagen decorativa')    
    p.mb-4(data-aos="fade-right") Se debe prestar atención a los siguientes aspectos a tener en cuenta en lo referente al riesgo residual:
    .row.justify-content-center
      .col-12
        .row.justify-content-center
          .col-md-8.col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
            .tarjeta-avatar
              img(src='@/assets/curso/tema7-4-tarjeta1.svg' alt='AvatarTop')
              .tarjeta.color-primario.fondo-morado1
                .text-white.p-4
                  h3.text-center Su determinación
                  p.text-center La determinación del riesgo residual se realiza a partir de que un control disminuye la probabilidad o impacto de un riesgo.
          .col-md-8.col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
            .tarjeta-avatar
              img(src='@/assets/curso/tema7-4-tarjeta2.svg' alt='AvatarTop')
              .tarjeta.color-acento-contenido.fondo-morado2
                .text-white.p-4
                  h3.text-center ¿Qué debe haberse hecho?
                  p.text-center.mb-4 Para determinar riesgos, es importante que se haya realizado un adecuado inventario, evaluación de controles y aplicación de los mismos a los riesgos del catálogo de riesgos, según corresponda.
          .col-md-8.col-lg-4(data-aos="fade-right")
            .tarjeta-avatar
              img(src='@/assets/curso/tema7-4-tarjeta1.svg' alt='AvatarTop')
              .tarjeta.color-primario.fondo-morado1
                .text-white.p-4
                  h3.text-center Acciones de tratamiento
                  p.text-center Una vez que se tengan los riesgos residuales, se deben aplicar actividades de tratamiento para aquellos que como resultado, dieron críticos, altos o muy altos, según se considere.

</template>

<script>
import AcordeonB from '../components/AcordeonB'
export default {
  name: 'Tema7',
  components: {
    AcordeonB,
  },
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
