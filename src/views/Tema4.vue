<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Herramientas de análisis de seguridad digital
    .row.justify-content-center(data-aos="fade-down")
      .col-md-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-4.mb-4
          .bloque-texto-g__img(:style="{'background-image': `url(${require('@/assets/curso/tema4-cajon.jpg')})`}")
          .bloque-texto-g__texto.py-5.px-4
            .linea-personalizada-1
              img(src="@/assets/curso/linea-fuscia-2.png", alt="Linea decoración fuscia")
            p.mb-0 Dentro de los controles de seguridad digital existen diversas herramientas para el análisis de la seguridad digital, las mismas permiten realizar diagnósticos del estado de la seguridad en los componentes de infraestructura de <em>hardware</em> y <em>software</em>.
            .linea-personalizada-2
              img(src="@/assets/curso/linea-amarillo-2.png", alt="Linea decoración amarillo")
    .row.justify-content-center.mb-5
      .col-md-10.fondo-personalizado-2.p-md-5.p-4
        .row.align-items-end
          .col-lg-6.mb-4.mb-md-0.px-md-4(data-aos="fade-right")
            ul.mb-2.lista-ul--color
              li.mb-0.d-flex
                i.fas.fa-play
                | Algunas herramientas básicas, muy comunes, para realizar análisis de seguridad digital son:
            ul.px-md-3.lista-ul--color.lista-acento-botones
              li.mb-0.d-flex
                i.fas.fa-square
                | Nmap (“mapeador de redes”).
              li.mb-0.d-flex
                i.fas.fa-square
                | Wireshark.
              li.mb-0.d-flex
                i.fas.fa-square
                | OpenVAS.
              li.mb-0.d-flex
                i.fas.fa-square
                | OWA SP Zen Attack Proxy – ZAP. 
              li.mb-0.d-flex
                i.fas.fa-square
                | Nessus.
              li.mb-0.d-flex
                i.fas.fa-square
                | Vega.
              li.mb-0.d-flex
                i.fas.fa-square
                | Metasploit Framework.   
            ul.mb-2.lista-ul--color
              li.mb-0.d-flex
                i.fas.fa-play
                | También existen sistemas operativos enfocados a seguridad de digital:
            ul.mb-0.px-md-3.lista-ul--color.lista-acento-botones
              li.mb-0.d-flex
                i.fas.fa-square
                | Kali Linux OS.
              li.mb-0.d-flex
                i.fas.fa-square
                | Parrot OS.                     
          .col-lg-6.mb-4.mb-md-0(data-aos="fade-left")
            figure
              img(src='@/assets/curso/tema4-imagen.svg', alt='imagen decorativa')
    p.mb-4(data-aos="fade-right") Para profundizar en este punto se debe explorar el siguiente recurso didáctico:
    AcordeonC.mb-5(tipo="a" clase-tarjeta="tarjeta morado-acordion")(data-aos="fade-left")
      .row.px-lg-5(titulo="Nmap (“mapeador de redes”)")
        .col-md-6.mb-md-0.mb-4
          figure
            img(src='@/assets/curso/tema4-tab1.png', alt='Nmap (“mapeador de redes”)')
          figcaption.naranja Nota. Tomado de #[a.txt-c1(href="https://nmap.org/" target="_blank") https://nmap.org/]
        .col-md-6
          p “Es una herramienta de código abierto para exploración de red y auditoría de seguridad. Se diseñó para analizar rápidamente grandes redes, aunque funciona muy bien contra equipos individuales. 
            strong Nmap 
            | utiliza paquetes IP “crudos” («raw», N. del T.) en formas originales para determinar qué equipos se encuentran disponibles en una red, qué servicios (nombre y versión de la aplicación) ofrecen, qué sistemas operativos (y sus versiones) ejecutan, qué tipo de filtros de paquetes o cortafuegos se están utilizando, así como docenas de otras características. Aunque generalmente se utiliza 
            strong Nmap 
            | en auditorías de seguridad, muchos administradores de redes y sistemas lo encuentran útil para realizar tareas rutinarias, como puede ser el inventariado de la red, la planificación de actualización de servicios y la monitorización del tiempo que los equipos o servicios se mantiene activos” Nmap.org (2021).
      .row.px-lg-5(titulo="Wireshark")
        .col-md-6.mb-md-0.mb-4
          figure
            img(src='@/assets/curso/tema4-tab2.png', alt='WireShark')
          figcaption.naranja Nota. Tomado de #[a.txt-c1(href="https://www.wireshark.org/" target="_blank") https://www.wireshark.org/]
        .col-md-6
          p “Analizador de protocolos de red más importante y más utilizado del mundo. Le permite ver lo que está sucediendo en su red a un nivel microscópico y es el estándar de facto (y a menudo de jure) en muchas empresas comerciales y sin fines de lucro, agencias gubernamentales e instituciones educativas. El desarrollo de 
            strong Wireshark 
            | prospera gracias a las contribuciones voluntarias de expertos en redes de todo el mundo y es la continuación de un proyecto iniciado por Gerald Combs en 1998” WireShark.org (2021).
      .row.px-lg-5(titulo="OpenVAS")
        .col-md-6.mb-md-0.mb-4
          figure
            img(src='@/assets/curso/tema4-tab3.png', alt='OpenVAS')
          figcaption.naranja Nota. Tomado de #[a.txt-c1(href="https://en.wikipedia.org/wiki/OpenVAS" target="_blank") https://en.wikipedia.org/wiki/OpenVAS]
        .col-md-6
          p “Es un escáner de vulnerabilidades con todas las funciones. Sus capacidades incluyen pruebas autenticadas y no autenticadas, varios protocolos industriales y de Internet de alto y bajo nivel, ajuste del rendimiento para escaneos a gran escala y un poderoso lenguaje de programación interno para implementar cualquier tipo de prueba de vulnerabilidad.
          p El escáner obtiene las pruebas para detectar vulnerabilidades de un #[em feed] que tiene un largo historial y actualizaciones diarias” OpenVas.org (2021).
      .row.px-lg-5(titulo="OWASP Zen Attack Proxy – ZAP")
        .col-md-6.mb-md-0.mb-4
          figure
            img(src='@/assets/curso/tema4-tab4.png', alt='OWASP Zen Attack Proxy – ZAP')
          figcaption.naranja Nota. Tomado de #[a.txt-c1(href="https://www.zaproxy.org/" target="_blank") https://www.zaproxy.org/]
        .col-md-6
          p  Es un escáner de seguridad que permite descubrir vulnerabilidades en las aplicaciones web. “La Fundación OWASP ® trabaja para mejorar la seguridad del 
            italic software 
            | a través de sus proyectos de 
            italic software 
            | de código abierto, liderados por la comunidad, cientos de capítulos en todo el mundo, decenas de miles de miembros y organizando conferencias locales y globales” Owasp.org (2021).
      .row.px-lg-5(titulo="Nessus")
        .col-md-6.mb-md-0.mb-4
          figure
            img(src='@/assets/curso/tema4-tab5.png', alt='Nessus')
          figcaption.naranja Nota. Tomado de #[a.txt-c1(href="https://es.wikipedia.org/wiki/Nessus" target="_blank") https://es.wikipedia.org/wiki/Nessus]
        .col-md-6
          p “Es un escáner de vulnerabilidades con el cual se pueden realizar evaluaciones de seguridad profundas y de alta velocidad, tiene soporte a través de 
            italic Tenable Community, 
            | y es ideal para educadores, estudiantes e individuos que inician sus carreras en ciberseguridad” Basado en tenable.com (2021).
      .row.px-lg-5(titulo="Vega")
        .col-md-6.mb-md-0.mb-4
          figure
            img(src='@/assets/curso/tema4-tab6.png', alt='Vega')
          figcaption.naranja Nota. Tomado de #[a.txt-c1(href="https://subgraph.com/vega/" target="_blank") https://subgraph.com/vega/]
        .col-md-6
          p "Es un escáner de seguridad web gratuito y de código abierto y una plataforma de prueba de seguridad web para probar la seguridad de las aplicaciones web. 
            italic-strong Vega 
            | puede ayudarlo a encontrar y validar SQL 
            italic Injection, Cross-Site Scripting 
            | (XSS), información confidencial divulgada inadvertidamente y otras vulnerabilidades. Está escrito en Java, basado en GUI y se ejecuta en Linux, OS X y Windows" Subgraph.com/vega (2021).
      .row.px-lg-5(titulo="Metasploit Framework")
        .col-md-6.mb-md-0.mb-4
          figure
            img(src='@/assets/curso/tema4-tab7.png', alt='Metasploit Framework')
          figcaption.naranja Nota. Tomado de #[a.txt-c1(href="https://www.metasploit.com/" target="_blank") https://www.metasploit.com/]
        .col-md-6
          p “El Metasploit Framework (MSF) es mucho más que una simple colección de 
            italic exploits
            | , sino que también es una base sólida que se puede aprovechar y personalizar fácilmente para satisfacer sus necesidades. Esto le permite concentrarse en su entorno objetivo único y no tener que reinventar la rueda. Consideramos que MSF es una de las herramientas de auditoría de seguridad más útiles disponibles gratuitamente para los profesionales de la seguridad en la actualidad. Desde una amplia gama de 
            italic exploits 
            | de grado comercial y un amplio entorno de desarrollo de 
            italic exploits
            | , hasta herramientas de recopilación de información de red y complementos de vulnerabilidad web. Metasploit Framework proporciona un entorno de trabajo realmente impresionante” Offensive-Security.com (2021).
    p.mb-4(data-aos="fade-right") También existen sistemas operativos enfocados a seguridad digital, los cuales contienen una serie de herramientas de seguridad informática para las revisiones de ciberseguridad, entre los más populares están:
    .row(data-aos="fade-left")
      .col-lg.bg-c1.p-md-5.p-4
        .row.justify-content-center.mb-4
          .col-8
            figure
              img.px-md-1(src='@/assets/curso/tema4-tarjeta1.svg', alt='Kali Linux OS')
        h3.text-center Kali Linux OS
        p.text-center Es un sistema operativo GNU/Linux basado en Debian. Contiene preconfiguradas, diversas herramientas 
          italic software 
          | para realizar pruebas de seguridad. “La plataforma de pruebas de penetración de Kali Linux contiene una amplia gama de herramientas y utilidades. Desde la recopilación de información hasta los informes finales, Kali Linux permite a los profesionales de la seguridad y de TI evaluar la seguridad de sus sistemas” Kali.org (2021).
      .col-lg.bg-c2.p-md-5.p-4
        .row.justify-content-center.text-white.mb-4
          .col-10
            figure
              img(src='@/assets/curso/tema4-tarjeta2.svg', alt='Parrot OS')
        h3.text-white.text-center Parrot OS
        p.text-white.text-center Es una distribución GNU / Linux basada en Debian y diseñada pensando en la seguridad y la privacidad. Incluye un laboratorio portátil completo para todo tipo de operaciones de seguridad cibernética, desde #[em pentesting] hasta análisis forense digital e ingeniería inversa, pero también incluye todo lo necesario para desarrollar su propio 
          italic software 
          | o mantener sus datos seguros - Parrotsec.org (2021).

</template>

<script>
import AcordeonC from '../components/AcordeonC'
export default {
  name: 'Tema4',
  components: {
    AcordeonC,
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

<style lang="sass" scoped></style>
