<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-11
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-4.mb-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/texto_destacado/img1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p Apreciado aprendiz, bienvenido a este componente formativo, donde estudiará los conceptos de dato, base de datos, tipos de datos y, adicionalmente, cómo son utilizados en la actualidad para generar valor a las empresas, a todas las relaciones organizacionales y, en términos generales, a la sociedad.
           
    p.mb-4 En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.

    figure
      .video
        <iframe width="560" height="315" src="https://www.youtube.com/embed/jASywqOHrQM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
    
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
