<template lang="pug">
.curso-main-container.pb-3
      BannerInterno
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
        .titulo-principal.color-acento-contenido
          .titulo-principal__numero
            span 5
          h1 Planes de contingencia en el manejo de la información
      
        .row.justify-content-center.mb-4
          .col-md-5
            figure.mw-sm-350px
              img(src='@/assets/curso/temas/texto_destacado/img17.png', alt='imagen relacionada')
          .col-md-7      
            p.mb-4 Cuando se interrumpe abruptamente el sistema de información o colapsan la mayor parte de los recursos que hacen sostenible el sistema informático, se obtiene un desastre de tipo informático. 
            .cajon.color-acento-botones.color-fondo-secundario.p-4
              p.mb-0 Se considera una contingencia a la posibilidad que algo suceda o no, muy parecido al término probabilidad, pero con la diferencia que la contingencia es un concepto más pragmático en el sentido que está asociado con la logística y los procesos que se deben desplegar, para responder, o no hacerlo ante el suceso; a veces, la mejor contingencia es precisamente no responder.
        
        p.mb-4 Se tiene un plan cuando se documentan todos los procesos y procedimientos a seguir de manera documentada y secuencial, previendo que, en algún momento, sucedieran dados unos cálculos de probabilidad asociados a los posibles eventos. El plan puede ser tan minucioso que discrimina todos los recursos, el momento, quién o quiénes intervienen en caso de eventos de desastre y se practican simulacros con el fin de asociar todas las acciones y tareas documentadas con las acciones en la realidad.

        .row.justify-content-center.mb-4
          .col-md-10
            .cajon.color-primario.color-fondo.p-4
              p.mb-0 En resumen, el plan de contingencia se refiere al conjunto de procedimientos y estrategias definidos para asegurar la reanudación oportuna y ordenada de los procesos, generando un impacto mínimo a los procesos neurálgicos de la empresa.
        
        p.mb-4 Todo sistema de gestión tiene uno o varios planes de contingencia, bien sea por la ubicación geográfica, por algún tipo de proceso o actividad económica que requiere atención; para las organizaciones actuales no es desconocido, ni genera problemas en su activación, por la obligatoriedad de implementación requerido en cualquier proceso específico.    

        p.mb-4 El plan de contingencia informática tiene diferentes momentos:

        .row.justify-content-center.mb-4
          .col-md-3.col-lg-4(style="margin-top: 20px; ")
            img(src='@/assets/curso/temas/texto_destacado/img18.png', alt='imagen relacionada') 
          .col-md-8.col-lg-8
            TabsA.color-acento-contenido.mb-4
                .tarjeta.color-acento-contenido-borde.p-4(titulo="Antes")
                  .row
                    .col-md-12.p-4.color-fondo
                      p Cómo hacer un plan de respaldo o de prevención para mitigar los incidentes. Es toda planificación, compra de recursos, capacitación, entrenamiento y coordinación del talento humano en procura de mitigar el evento, en caso de presentarse. 
                    
                .tarjeta.color-acento-contenido-borde.p-4(titulo="Durante")
                  .row
                    .col-md-12.p-4.color-fondo
                      p Son todas las acciones y tareas planeadas para realizar al momento de presentarse el desastre, ocupa desde la hora 00.00 hasta que se determine su finalización en esta segunda etapa, cuando se haya evacuado primero todo recurso que se pudiera salvaguardar.    
                    
                .tarjeta.color-acento-contenido-borde.p-4(titulo="Después")
                  .row
                    .col-md-12.p-4.color-fondo
                      p Es un plan de recuperación, una vez superado el incidente, para regresar al estado previo a la contingencia. El plan de contingencia permite minimizar las consecuencias en caso de incidente, con el fin de reanudar las operaciones en el menor tiempo posible.

                .tarjeta.color-acento-contenido-borde.p-4(titulo="Finalmente")
                  .row
                    .col-md-12.p-4.color-fondo
                      p Posteriormente, se deben implementar varios planes con el objeto de llevar el sistema tal y como estaba antes de la ocurrencia del desastre o evento; estos planes tienen varias fases que generan tiempo, costos y movimiento de recursos; en algunas organizaciones se tratan como proyectos, aplicando algunas de las metodología o protocolos existentes para el desarrollo y ejecución de un proyecto.
                .tarjeta.color-acento-contenido-borde.p-4(titulo="Plan de <br> recuperación")
                  .row
                    .col-md-12.p-4.color-fondo
                      p Se refiere al conjunto de acciones que tienen por objetivo restablecer oportunamente la capacidad de las operaciones, procesos y recursos del servicio que fue afectado por un evento de contingencia.

        h3
          .fas.fa-square.me-3.cuadrado.mb-4
          |  Calidad y divulgación de la información
        
        p.mb-5 Gran parte de la información debe ser divulgada con el objeto de promocionar, o simplemente informar, sobre algo y este proceso debe contener unas etapas:
        
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-1.col-md-2.col-7
             img(src='@/assets/curso/temas/texto_destacado/img19.png', alt='imagen relacionada') 
          .col-lg-9.col-md-8
            p.mb-0 En la primera etapa, se hace una evaluación del ciclo de la información que permita identificar oportunidades de mejoramiento relacionadas con los procesos, procedimientos, o nuevos requerimientos de información. Una vez definidas las mejoras, se procede a los ajustes técnicos, tecnológicos y jurídicos pertinentes, con el fin de cumplir con los nuevos requerimientos.
        hr
        .row.justify-content-center.align-items-center
          .col-lg-1.col-md-2.col-7
             img(src='@/assets/curso/temas/texto_destacado/img20.png', alt='imagen relacionada') 
          .col-lg-9.col-md-8
            p.mb-0 Para la consolidación de la información, es necesario garantizar que tanto el recurso tecnológico, como las personas que participan en la recolección y suministro de la información al interior de las instituciones, posean las condiciones aptas para cumplir oportunamente con el reporte, según las fechas establecidas. 
        hr
        .row.justify-content-center.align-items-center
          .col-lg-1.col-md-2.col-7
             img(src='@/assets/curso/temas/texto_destacado/img21.png', alt='imagen relacionada') 
          .col-lg-9.col-md-8
            p.mb-0 La etapa de validación inicia una vez se ha consolidado la información, con el fin de revisar su coherencia, llevando a cabo análisis lógicos y estadísticos de la información. Cuando se encuentra alguna inconsistencia susceptible de corrección, inmediatamente se establece comunicación directa, con los responsables, para que realicen los ajustes correspondientes o confirmen la información.
        hr
        .row.justify-content-center.align-items-center
          .col-lg-1.col-md-2.col-7
             img(src='@/assets/curso/temas/texto_destacado/img22.png', alt='imagen relacionada') 
          .col-lg-9.col-md-8
            p.mb-0 La etapa de auditoría realiza el seguimiento y control de la información y los procesos que administran y gestionan esta administración, con la finalidad de realizar acciones correctivas o acciones de mejora, si es necesario.
        hr

        .row.justify-content-center.mb-4
          .col-md-10
            .cajon.color-primario.color-fondo.p-4
              p.mb-0 Ha finalizado el estudio de este recurso educativo. Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, material complementario, entre otros. Adicional, lo invitamos a resolver la actividad didáctica para reforzar los conceptos estudiados.
        


    
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
