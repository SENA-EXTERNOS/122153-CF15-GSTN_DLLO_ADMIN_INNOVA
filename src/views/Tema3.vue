<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Instrumentos de evaluación y seguimiento
    
    .row.justify-content-center.mb-4
      .col-md-5
        figure.mw-sm-350px
          img(src='@/assets/curso/temas/texto_destacado/img10.png', alt='imagen relacionada')
      .col-md-7      
        p.mb-4 Hablemos primero sobre el instrumento, el cual es un objeto, medio material o relación simbólica, que involucra variables claras y precisas con el fin de definir y seguir el comportamiento de un proceso o acción que puede ser neurálgica para una organización. Los instrumentos pueden ser sencillos o complejos y la relación de variables serán las guías para evaluar, posteriormente, el comportamiento del proceso en cuestión.
        .cajon.color-primario.color-fondo.p-4.mb-0
          p.mb-0 Ahora, los instrumentos de evaluación de seguimiento de bases de datos, son las herramientas fundamentales que tiene el SGBD como elementos rápidos y sencillos para evaluar la gestión y análisis de bases de datos. Los instrumentos deben ser herramientas claras, sencillas y que además, se puedan medir fácilmente. 

    p.mb-44 Dentro de las principales características de un instrumento para evaluación de la gestión de bases de datos, encontramos las siguientes:  

    .mx-auto.col-md-10.mb-5
      .tarjeta
        .imgCont.m-auto
          .row.justify-content-center.mb-4
            ImagenInfografica.color-acento-botones.mb-5
              template(v-slot:imagen)
                figure
                  img(data-aos="fade-left" src='@/assets/curso/temas/texto_destacado/img11.svg', alt='diagrama')

              .tarjeta.color-puntoC.p-4(x="17%" y="44%" numero="+" style='border-radius: 10px')
               p El SGBD debe procurar encontrar las variables que midan lo que se pretende evaluar en una base de datos; con ese fin es importante tratar de mantener datos de tipo estructurado, permitiendo más claridad en el lenguaje de los datos y la información.

              .tarjeta.color-puntoC.p-4(x="36%" y="44%" numero="+" style='border-radius: 10px')
                p En el caso específico de la evaluación de la información, es quizás una de las características más importantes, porque denota la confiabilidad (veracidad) de la información.
                
              .tarjeta.color-puntoC.p-4(x="56%" y="44%" numero="+" style='border-radius: 10px')
                p El diseño de un instrumento debe darse desde un colectivo y con filtros, relacionando diferentes aspectos, para estar libre de opiniones de tipo autocrático o subjetivo, que distorsionen el verdadero objeto del instrumento y genere sesgos en la medición.
                  
              .tarjeta.color-puntoC.p-4(x="75%" y="44%" numero="+" style='border-radius: 10px')
                p La precisión de un instrumento no debe ser limitante para que así sea flexible y adaptable a diferentes circunstancias de evaluación, sin perder sus otras características.
              
              .tarjeta.color-puntoC.p-4(x="94%" y="44%" numero="+" style='border-radius: 10px')
                p Cuando se habla de práctico, se refiere precisamente a esto, que sea fácil de administrar, de caracterizar y sobre todo de medir.

    p.mb-4 Los tipos y usos de los instrumentos de evaluación de bases de datos, pasan por el análisis de los SGBD, los <i>software</i> que administran las bases de datos y el fin u objeto que buscan.

    p.mb-4 Existen cuatro tipos de instrumentos, los cuales se describen a continuación:

    .row.justify-content-center.mb-4
      .col-md-7
        LineaTiempoD.color-secundario
          .row(numero="1" titulo="Jerárquico")
            .col-md-12.mb-4.mb-md-0
              p El almacenamiento de datos se da de manera lineal, por nodos; un nodo principal tiene relacionados subordinadamente uno o varios nodos y cada subnodo, solo tiene un nodo “padre” o superior.
          
          .row(numero="2" titulo="Red")
            .col-md-12.mb-4.mb-md-0
              p El modelo de red difiere del jerárquico, puede relacionar un nodo, varios nodos con uno o varios nodos entre sí, creando redes similares a telarañas, con interacciones múltiples. Son más flexibles, generando diferentes rutas de acceso y flujo de información.

          .row(numero="3" titulo="Relacional")
            .col-md-12.mb-4.mb-md-0
              p Este modelo se basa en las relaciones entre datos precisos de campos específicos, más flexible aún que el modelo de red, permitiendo relaciones sencillas y veraces, siendo los más comunes en la actualidad.

          .row(numero="4" titulo="Orientado a objetos")
            .col-md-12.mb-4.mb-md-0
              p Como su nombre lo dice, su relación se base en objetos, igualmente son datos no estructurados que requieren más depuración en su análisis y validación.
      .col-md-5
        img(src='@/assets/curso/temas/texto_destacado/img12.png', alt='imagen relacionada')  














</template>

<script>
export default {
  name: 'Tema3',
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
