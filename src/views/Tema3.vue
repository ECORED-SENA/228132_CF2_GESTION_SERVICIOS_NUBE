<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Seguridad e infraestructura de <em>hardware</em> y <em>software</em>
    .row
      .col-lg-7.mb-4.mb-md-0(data-aos="fade-right")
        p La infraestructura tecnológica es parte esencial para las operaciones de las organizaciones, las mismas pueden soportar herramientas para la gestión, planificación, ejecución y monitoreo de productos o servicios. Desde aplicaciones y servicios para la comunicación, hasta complejos sistemas para la toma de decisiones, como los 
          italic Enterprise Resource Planning ERP 
          | o los aplicativos de inteligencia de negocios (
          italic business intelligence - BI).
        .cajon.color-secundario.p-4.mb-4.mb-md-0
          p.mb-0 La infraestructura tecnológica principalmente está compuesta por 
            italic hardware 
            | y 
            italic software
            | , y es importante mencionar que para la misma es necesario aplicar una serie de buenas prácticas y/o controles de seguridad digital que permitan lograr que la misma sea segura y confiable.  
      .col-lg-5.mb-4.mb-md-0(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3-imagen.jpg', alt='imagen decorativa') 
    Separador
    #t_3_1
    .titulo-segundo.color-primario(data-aos="fade-right")
      .h2 3.1  Infraestructura de <em>hardware</em> y <em>software</em>
    .row
      .col-lg-7.mb-4(data-aos="fade-right")
        p La infraestructura tecnológica consiste en los componentes de 
          italic hardware 
          | y 
          italic software 
          | requeridos para gestionar y operar entornos tecnológicos, que pueden ser implementados en instalaciones de la organización o en sistemas en la nube, 
          italic Cloud Computing.
      .col-lg-5.mb-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3-1-imagen.jpg', alt='imagen decorativa')
    p.mb-4(data-aos="fade-right") Se presentan a continuación, aspectos claves de la infraestructura de 
      italic hardware 
      | y 
      italic software
      | ; se deben estudiar atentamente y llevar registro de ello en la libreta personal de apuntes. ¡Adelante!
    AcordeonB(tipo="b" clase-tarjeta="tarjeta border-bottom")(data-aos="fade-down")
      .row.px-lg-5(titulo="Infraestructura tradicional")
        .col-lg-7
          p “Una infraestructura de TI tradicional incluye los componentes de 
            italic hardware 
            | y 
            italic software 
            | habituales: instalaciones, centros de datos, servidores, computadores de escritorio de 
            italic hardware 
            | de red y soluciones empresariales de 
            italic software 
            | de aplicaciones. 
          p Normalmente, esta infraestructura requiere más energía, espacio físico y dinero que otros tipos de infraestructura. Se instala localmente para uso exclusivo, o privado, de la empresa” (IBM, 2021).
        .col-lg-5
          img(src="@/assets/curso/tema3-1-tab1.png", alt="Infraestructura tradicional")
      .row.px-lg-5(titulo="Infraestructura de la nube")
        .col-lg-7
          p “Una infraestructura de TI en la nube es similar a la infraestructura tradicional. Sin embargo, los usuarios finales pueden accederla a través de Internet y tienen la capacidad de usar la virtualización para ocupar recursos informáticos sin realizar instalaciones locales. 
          p La virtualización conecta los servidores físicos de un proveedor de servicios en cualquier ubicación geográfica. Luego, divide y extrae los recursos, como el almacenamiento, para ponerlos a disposición de los usuarios, prácticamente en cualquier lugar donde haya conexión a Internet. Debido a que la infraestructura en la nube es a menudo pública, normalmente se conoce como una nube pública” (IBM, 2021).
        .col-lg-5
          img(src="@/assets/curso/tema3-1-tab2.png", alt="Infraestructura de la nube")  
      .row.px-lg-5(titulo="Principales características de las infraestructuras")
        .col-lg-7
          ul.lista-ul--color.lista-acento-botones.mb-0
            li.mb-0.d-flex
              i.fas.fa-square
              p.mb-0 Composición por elementos de 
                italic hardware 
                | y 
                italic software.
            li.mb-0.d-flex
              i.fas.fa-square
              p.mb-0 Comunicación por servicios de red basados en 
                italic hardware 
                | y 
                italic software. 
            li.mb-0.d-flex
              i.fas.fa-square
              p.mb-0 Segmentación de zonas, que pueden ser campus o red de usuarios e invitados, 
                italic Demilitarized Zone - DMZ; 
                | bases de datos, servidores.
            li.mb-0.d-flex
              i.fas.fa-square
              p.mb-0 Alta disponibilidad en componentes, principalmente en los componentes de red, servidores de aplicación, 
                italic storage 
                | y energía.
            li.mb-0.d-flex
              i.fas.fa-square
              p.mb-0 Virtualización; Implementación de múltiples servidores virtuales en hipervisores tales como; 
                italic VMware, Proxmox, XenServer, Citrix, Hyper-v, ESX.
            li.mb-0.d-flex
              i.fas.fa-square
              p.mb-0 Implementación de Servidores de aplicación web y servicios; 
                italic File.
            li.mb-0.d-flex
              i.fas.fa-square
              p.mb-0 
                italic Transfer Protocol - FTP, 
                | Sistema de Nombres de Dominio 
                italic DNS.
            li.mb-0.d-flex
              i.fas.fa-square
              p.mb-0 Sistemas 
                italic ERP, BI, 
                | entre otros.            
        .col-lg-5
          img(src="@/assets/curso/tema3-1-tab3.png", alt="Principales características de las  infraestructuras")       
      .row.px-lg-5(titulo="Infraestructura y seguridad")
        .col-lg-7
          p La seguridad juega un papel muy importante en la infraestructura tecnológica y es parte de la misma, pues esta se integra en componentes que permiten la protección de los datos en la red, servidores, aplicaciones y servicios tecnológicos.
        .col-lg-5
          img(src="@/assets/curso/tema3-1-tab4.png", alt="Infraestructura y seguridad")  
      .row.px-lg-5(titulo="Controles de seguridad")
        .col-lg-7
          p La seguridad permite la protección de las infraestructuras, a través de algunos controles como los siguientes:
          ul.lista-ul--color.lista-acento-botones.mb-0
            li.mb-0.d-flex
              i.fas.fa-square
              | Establecimiento de políticas y procedimientos de seguridad digital.
            li.mb-0.d-flex
              i.fas.fa-square
              | Direccionamiento para el cumplimiento de la legislación aplicable en relación con las operaciones de la infraestructura tecnológica.
            li.mb-0.d-flex
              i.fas.fa-square
              p.mb-0 Protección de dispositivos finales, 
                italic hosts.
            li.mb-0.d-flex
              i.fas.fa-square
              | Protección criptográfica.  
            li.mb-0.d-flex
              i.fas.fa-square
              | Seguridad física y del entorno.
            li.mb-0.d-flex
              i.fas.fa-square
              | Copias de respaldo.
            li.mb-0.d-flex
              i.fas.fa-square
              | Gestión de incidentes de seguridad digital; vulnerabilidades, eventos e incidentes.       
            li.mb-0.d-flex
              i.fas.fa-square
              | Entrenamiento y concienciación en ciberseguridad. 
        .col-lg-5
          img(src="@/assets/curso/tema3-1-tab5.png", alt="Controles de seguridad")  
    Separador  
    #t_3_2
    .titulo-segundo.color-primario(data-aos="fade-right")
      .h2 3.2  Componentes de infraestructura y seguridad
    .row.justify-content-center
      .col-md-10(data-aos="fade-left")
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-4.mb-5
          .bloque-texto-g__img(:style="{'background-image': `url(${require('@/assets/curso/tema3-2-imagen.jpg')})`}")
          .bloque-texto-g__texto.py-5.px-4
            .linea-personalizada-1
              img(src="@/assets/curso/linea-fuscia-2.png", alt="Linea decoración fuscia")
            p.mb-0 La infraestructura y seguridad cuentan con diversos componentes que interactúan entre sí y que son finalmente, los que constituyen la infraestructura tecnológica. Los componentes de seguridad a su vez son componentes de infraestructura, pero se convierten en elementos muy importantes que salvaguardan otros componentes de infraestructura y por eso toman una mayor relevancia.
            .linea-personalizada-2
              img(src="@/assets/curso/linea-amarillo-2.png", alt="Linea decoración amarillo")
    p.mb-4(data-aos="fade-right") Se debe explorar el recurso que se muestra a continuación y conocer las listas de componentes relacionados con infraestructura y seguridad:
    .row
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        AcordeonD(tipo="a" clase-tarjeta="tarjeta rosado-acordion")
          .row.px-lg-5(titulo="Componentes de infraestructura, más comunes")
            ul.lista-ul--color.lista-acento-botones.mb-0
              li.mb-0.d-flex
                i.fas.fa-square
                p.mb-0 
                  strong Servidores: 
                  | red, aplicación, servicios, bases de datos.
              li.mb-0.d-flex
                i.fas.fa-square
                p.mb-0 
                  italic-strong Router: 
                  | enrutadores de red.
              li.mb-0.d-flex
                i.fas.fa-square
                p.mb-0 
                  italic-strong Switch:  
                  | #[em switches] conectores de diversas capas de red.  
              li.mb-0.d-flex
                i.fas.fa-square
                p.mb-0 
                  strong Sistema de refrigeración. 
              li.mb-0.d-flex
                i.fas.fa-square
                p.mb-0 
                  italic-strong Storage:   
                  | sistemas de almacenamiento en red, 
                  italic network attached storage - nas. 
              li.mb-0.d-flex
                i.fas.fa-square
                p.mb-0 
                  strong Cableado estructurado. 
          .row.px-lg-5(titulo="Otros componentes importantes de infraestructura")
            ul.lista-ul--color.lista-acento-botones.mb-0
              li.mb-0.d-flex
                i.fas.fa-square
                p.mb-0 
                  strong Potencia y energía: 
                  | sistemas de regulación de la energía, plantas eléctricas para redundancia.
              li.mb-0.d-flex
                i.fas.fa-square
                p.mb-0 
                  strong Equipos, computadores.
              li.mb-0.d-flex
                i.fas.fa-square
                p.mb-0 
                  strong Periféricos:   
                  | impresoras, escáneres, lectores láser, entre otros.  
              li.mb-0.d-flex
                i.fas.fa-square
                p.mb-0 
                  strong #[i Software] de virtualización: 
                  italic VMware, Proxmox, XenServer, Citrix, Hyper-v, ESX.
              li.mb-0.d-flex
                i.fas.fa-square
                p.mb-0 
                  strong #[i Software] de monitoreo:    
                  | monitoreo de red, capacidades y temperaturas.   
          .row.px-lg-5(titulo="Componentes de seguridad más usuales")
            ul.lista-ul--color.lista-acento-botones.mb-0
              li.mb-0.d-flex
                i.fas.fa-square
                p.mb-0 
                  italic-strong Firewall 
                  strong de Red: 
                  | asegura el entorno de conexión.
              li.mb-0.d-flex
                i.fas.fa-square
                p.mb-0 
                  strong Antimalware.
              li.mb-0.d-flex
                i.fas.fa-square
                p.mb-0 
                  strong Firewall 
                  strong de aplicación.  
              li.mb-0.d-flex
                i.fas.fa-square
                p.mb-0 
                  strong Iptables:  
                  | reglas de acceso en red.
              li.mb-0.d-flex
                i.fas.fa-square
                p.mb-0 
                  strong Sistemas de correlación de eventos o 
                  italic-strong Logs, Security Information and Event Management - SIEM.  
              li.mb-0.d-flex
                i.fas.fa-square
                p.mb-0 
                  italic-strong Cifrad: 
                  | conectividad y datos. 
          .row.px-lg-5(titulo="Otros componentes importantes de la seguridad")
            ul.lista-ul--color.lista-acento-botones.mb-0
              li.mb-0.d-flex
                i.fas.fa-square
                p.mb-0  
                  strong VPN: 
                  | conexiones remotas seguras.
              li.mb-0.d-flex
                i.fas.fa-square
                p.mb-0  
                  strong IDS/IPS:  
                  | sistema de detección y prevención de intrusiones.
              li.mb-0.d-flex
                i.fas.fa-square
                p.mb-0  
                  strong NIDS -  
                  italic-strong Network Intrusion Detection System, 
                  strong Sistemas de detección de intrusos en red.
              li.mb-0.d-flex
                i.fas.fa-square
                p.mb-0  
                  strong Herramientas de análisis de vulnerabilidades:  
                  italic OpenVas, Nessus.
              li.mb-0.d-flex
                i.fas.fa-square
                p.mb-0  
                  strong WAF -   
                  italic-strong Web Aplication Firewall, Firewall  
                  strong de aplicación.    
              li.mb-0.d-flex
                i.fas.fa-square
                p.mb-0  
                  strong DLP –    
                  italic-strong Data Loss Prevention:  
                  | sistema de prevención de pérdida de datos o fuga de información.                                    
      .col-lg-5.mb-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3-2-tabs.jpg', alt='imagen decorativa') 
    Separador  
    #t_3_3
    .titulo-segundo.color-primario(data-aos="fade-right")
      .h2 3.3  Interconexiones de redes y seguridad perimetral
    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-md-10
        .cajon.color-secundario.p-4.mb-4.mb-md-0
          p.mb-0 Hablar de interconexiones de redes y seguridad perimetral, es referirse a las conexiones de red entre los diferentes dispositivos, de acuerdo con los fundamentos de red o 
            italic networking, 
            | incluyendo los dispositivos de seguridad perimetral.
    p.mb-4(data-aos="fade-right") Para una mejor comprensión de este punto, se debe estudiar atentamente la imagen animada que se muestra en pantalla (ver figura 1) y tomar nota de los aspectos que ella explica:
    .row.justify-content-center(data-aos="fade-left")
      .col-md-10
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-5.col-sm-3.col-lg-2.px-4
              img.px-md-2(src="@/assets/curso/tema3-3-cta.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 Afiance los aspectos más importantes de este punto, explorando conscientemente el recurso que aquí le presentamos; recuerde llevar registro en su libreta personal de apuntes. 
                    strong ¡Adelante! 
                .col-sm-auto
                  a.boton.color-secundario(:href="obtenerLink('/downloads/Infografa_Interconexion_redes_seguridad_perimetral.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

</template>

<script>
import AcordeonB from '../components/AcordeonB'
import AcordeonD from '../components/AcordeonD'
export default {
  name: 'Tema3',
  components: {
    AcordeonB,
    AcordeonD,
  },
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
