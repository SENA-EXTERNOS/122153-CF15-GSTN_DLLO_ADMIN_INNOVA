<template lang="pug">
.curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Indicadores de sistemas de información

      .row.justify-content-center.mb-4
        .col-md-5
          figure.mw-sm-350px
            img(src='@/assets/curso/temas/texto_destacado/img13.png', alt='imagen relacionada')
        .col-md-7      
          p.mb-4 En términos generales, la creación de indicadores va encaminada a ejercer el control, en primera instancia, y a la detección de “no conformidades”, en términos de calidad que, en otras palabras, se traducen en reprocesos, gestión no definida o finalizada exitosamente sobre alguna situación particular o, simplemente, los costos excesivos en tareas o procedimientos específicos.
          .cajon.color-acento-botones.color-fondo-secundario.p-4
            p.mb-0 En ese orden de ideas, la sumatoria de la eficiencia y la eficacia son de gran importancia porque denotan el máximo alcance de logro de objetivos y la optimización de recursos de la organización. Los indicadores dan la pauta para las posteriores acciones de mejora que se puedan implementar, como respuesta, precisamente al dato alcanzado por un indicador.

      p.mb-4 En los sistemas de información, los indicadores sirven, entre otras cosas, para:

      .row.mb-4.justify-content-center
        .col-lg.col-sm-6.mb-4
          .tarjeta.h-100.p-4(style='background-color: #CFE5B6')
            .row.justify-content-center.mb-3
              .col-xl-7.col-lg-8.col-6
                figure
                  img(src='@/assets/curso/temas/tarjetas/avatar25.svg', alt='Texto que describa la imagen')

            p.text-center Evaluar la efectividad de la implementación de los controles de seguridad.

        .col-lg.col-sm-6.mb-4
          .tarjeta.h-100.p-4(style='background-color: #CFE5B6')
            .row.justify-content-center.mb-3
              .col-xl-7.col-lg-8.col-6
                figure
                  img(src='@/assets/curso/temas/tarjetas/avatar26.svg', alt='Texto que describa la imagen')

            p.text-center Evaluar la eficiencia del Modelo de Seguridad y Privacidad de la Información (MSPI), al interior de la entidad. 

        .col-lg.col-sm-6.mb-4
          .tarjeta.h-100.p-4(style='background-color: #CFE5B6')
            .row.justify-content-center.mb-3
              .col-xl-7.col-lg-8.col-6
                figure
                  img(src='@/assets/curso/temas/tarjetas/avatar27.svg', alt='Texto que describa la imagen')
            p.text-center Proveer estados de seguridad que sirvan de guía para las mejoras en seguridad de la información y nuevas entradas a auditar. 

        .col-lg.col-sm-6.mb-4
          .tarjeta.h-100.p-4(style='background-color: #CFE5B6')
            .row.justify-content-center.mb-3
              .col-xl-7.col-lg-8.col-6
                figure
                  img(src='@/assets/curso/temas/tarjetas/avatar28.svg', alt='Texto que describa la imagen')

            p.text-center Comunicar valores de seguridad al interior de la entidad. 

        .col-lg.col-sm-6.mb-4
          .tarjeta.h-100.p-4(style='background-color: #CFE5B6')
            .row.justify-content-center.mb-3
              .col-xl-7.col-lg-8.col-6
                figure
                  img(src='@/assets/curso/temas/tarjetas/avatar29.svg', alt='Texto que describa la imagen')
            p.text-center Servir como insumos al plan de análisis y tratamiento de riesgos.

      p.mb-4 Existen diferentes modelos de caracterización de un indicador.

      p.mb-4 A continuación, se presenta un ejemplo:

      .mx-auto.col-md-10.mb-4
        .tarjeta
          .imgCont.m-auto
            .row.justify-content-center.mb-4
              ImagenInfografica.color-acento-botones.mb-5
                template(v-slot:imagen)
                  figure
                    img(data-aos="fade-left" src='@/assets/curso/temas/texto_destacado/img14.svg', alt='diagrama')

                .tarjeta.color-puntoC.p-4(x="56%" y="14%" numero="+" style='border-radius: 10px')
                  p Aquí se describe brevemente el para qué y el qué hace el indicador.

                .tarjeta.color-puntoC.p-4(x="56%" y="25%" numero="+" style='border-radius: 10px')
                  p En este espacio se describe de manera sencilla, la meta a cumplir del indicador.
                  
                .tarjeta.color-puntoC.p-4(x="41%" y="37%" numero="+" style='border-radius: 10px')
                  p Se escribe el tipo de indicador: gestión, productividad, efectividad, rentabilidad, etc.
                    
                .tarjeta.color-puntoC.p-4(x="5%" y="48%" numero="+" style='border-radius: 10px')
                  p Se realiza una breve descripción de las variables involucradas en el análisis del indicador.
                
                .tarjeta.color-puntoC.p-4(x="44%" y="48%" numero="+" style='border-radius: 10px')
                  p Se escribe la fórmula matemática.

                .tarjeta.color-puntoC.p-4(x="72%" y="48%" numero="+" style='border-radius: 10px')
                  p Se escribe el origen de la información: nombre del archivo, número, página, enlace, etc.
                
                .tarjeta.color-puntoC.p-4(x="58%" y="84%" numero="+" style='border-radius: 10px')
                  p.text-center Se describen brevemente las sugerencias, alcances y situaciones que se puedan presentar, como consecuencia de la aplicación o no, de las variables que componen el indicador (u otros indicadores, para el caso de los indicadores sintéticos).

      h3
        .fas.fa-square.me-3.cuadrado.mb-4
        |  Medidas correctivas

      .row.justify-content-center.mb-4
        .col-md-7 
          p.mb-4 Por otra parte, se cataloga como acción correctiva, todo acto que genere acciones de mejora como consecuencia de la presencia de una no conformidad en todo sistema de gestión. En el caso del SGBD es igual, aquí el sistema debe procurar entablar las acciones de mejora propias que resulten, como cuellos de botella, reprocesos en términos de estructura de datos gestionados, o gestión de datos no estructurados y la ruta para que se les genere estructura a través de las herramientas propias de las bases de datos. 
          .cajon.color-primario.color-fondo.p-4
            p.mb-0 Se busca eliminar la causa o las causas de la no conformidad, realizando una trazabilidad hasta llegar a ellas, se selecciona la herramienta de control y se inicia el proceso de acción de mejora.
        .col-md-5
          figure.mw-sm-350px(style="margin-top: 25px;")
            img(src='@/assets/curso/temas/texto_destacado/img15.png', alt='imagen relacionada') 

      p.mb-4 En caso que no haya aparecido una “no conformidad”, pero se detecta un punto débil dentro de los procesos, que puede llevar a que resulte una “no conformidad”, se genera una acción para eliminar, o aminorar esa situación, estableciendo una mejora y entonces se está implementando una acción preventiva. 

      p.mb-4 Al tener establecida una acción correctiva, se debe comprobar la eficacia de esta acción, de tal manera, que no vuelva a aparecer la “no conformidad”.

      h3
        .fas.fa-square.me-3.cuadrado.mb-4
        |  Acciones de mejora en sistemas de información

      .row.justify-content-center.mb-4
        .col-md-5
          figure.mw-sm-350px
            img(src='@/assets/curso/temas/texto_destacado/img16.png', alt='imagen relacionada')
        .col-md-7      
          p.mb-4 Es así como, en todo sistema de gestión, se deben contemplar acciones que procuren ir mejorando los procesos y buscando llegar al mayor óptimo posible, e indicadores que den cuenta del progreso de la organización, para el logro de objetivos y de las metas misionales. Las grandes organizaciones y empresas se encuentran, en la actualidad, operando indicadores que analicen variables que den información sobre qué acciones de mejoras se deben implementar en todas las tareas y con especial énfasis en obtener, al menos, un indicador que dé lectura del accionar y la importancia de las bases de datos. La informática es una dependencia neurálgica y de cambios rápidos y bruscos en la empresa, y así mismo deben ser las acciones de mejora, rápidas y dinámicas, en constante cambio y progreso.
      
      p.mb-4 Desde el aspecto del sistema informático se debe proteger la información, utilizando variadas herramientas y técnicas; a continuación, se presentan algunas:

      .tarjeta.tarjeta--secundario.p-4.mb-5
        SlyderA(tipo="b")
          .row.justify-content-center.align-items-center.my-lg-4
            .col-md-6.mb-4.mb-md-0
              h3.mb-4 Sentido común
              p El cuidado debe ser el primer ítem en cuanto a la seguridad; cuando se descarguen aplicaciones, verificar que sean seguros los sitios de su procedencia, igualmente verificar en qué páginas se está consultando o navegando en busca de información, correos de dudosa procedencia y archivos adjuntos a estos. 

            .col-md-5
              figure
                img(src='@/assets/curso/temas/tarjetas/placeholder6.svg', alt='imagen ilustrativa')
          
          .row.justify-content-center.align-items-center.my-lg-4            
            .col-md-6.mb-4.mb-md-0
              h3.mb-4 Utilizar soluciones de seguridad
              p Intentar utilizar soluciones de seguridad de proveedores profesionales, que garanticen buenos resultados en temas de seguridad y protección de la información. Algunos sistemas operativos tienen aplicaciones de seguridad, totalmente gratuitas y confiables.

            .col-md-5
              figure
                img(src='@/assets/curso/temas/tarjetas/placeholder7.svg', alt='imagen ilustrativa')
          
          .row.justify-content-center.align-items-center.my-lg-4
            .col-md-6.mb-4.mb-md-0
              h3.mb-4 Actualizar el sistema operativo y aplicaciones
              p Todos los sistemas operativos cuentan con herramientas para mantener actualizados sus equipos, y son de uso obligado, porque incluyen actualizaciones de seguridad contra amenazas conocidas. Tan importante o más que lo anterior, es la actualización de aplicaciones instaladas a las últimas versiones, debido a que suelen incluir parches de seguridad. Cuando las versiones son más antiguas, tienen mayor riesgo de ser atacadas por ciberdelincuentes que encuentran vulnerabilidades en el programa.

            .col-md-5
              figure
                img(src='@/assets/curso/temas/tarjetas/placeholder8.svg', alt='imagen ilustrativa')
          
          .row.justify-content-center.align-items-center.my-lg-4            
            .col-md-6.mb-4.mb-md-0
              h3.mb-4 Proteger los navegadores
              p Utilizar las características de seguridad que tienen los navegadores web, es una buena práctica, porque se actualizan constantemente y están a la vanguardia en estos casos.
              
              p Los avisos que tienen los navegadores, alertando sobre sitios no seguros, advierten al usuario para que tome la decisión de consultar o no, en esa página.

            .col-md-5
              figure
                img(src='@/assets/curso/temas/tarjetas/placeholder9.svg', alt='imagen ilustrativa')

          .row.justify-content-center.align-items-center.my-lg-4
            .col-md-6.mb-4.mb-md-0
              h3.mb-4 Cuidar las contraseñas
              p El uso de contraseñas combinadas y largas, es una buena práctica para blindar contra ataques informáticos al sistema de información organizacional; de igual forma, el uso de contraseñas biométricas, es también una buena práctica. Se sugiere estar cambiando las contraseñas con frecuencia.

            .col-md-5
              figure
                img(src='@/assets/curso/temas/tarjetas/placeholder10.svg', alt='imagen ilustrativa')
          
          .row.justify-content-center.align-items-center.my-lg-4            
            .col-md-6.mb-4.mb-md-0
              h3.mb-4 Usar autenticación de dos factores
              p La autenticación de dos factores proporciona un nivel adicional de seguridad en las cuentas, diferente a las típicas contraseñas, porque no basta con vulnerar el nombre de usuario y contraseña. El servicio está disponible en la mayoría de servicios importantes de Internet y conviene utilizarlo siempre que podamos. Generalmente, se utiliza un código de verificación servido, mediante una aplicación móvil o SMS, para aplicar además del nombre de usuario y la contraseña al iniciar sesión.

            .col-md-5
              figure
                img(src='@/assets/curso/temas/tarjetas/placeholder11.svg', alt='imagen ilustrativa')
          
          .row.justify-content-center.align-items-center.my-lg-4
            .col-md-6.mb-4.mb-md-0
              h3.mb-4 Realizar copias de seguridad
              p No se sabe en qué momento se pueda presentar un fallo en el sistema informático, o en qué momento quede expuesto a un ataque y se pierda o dañe la información. Los sistemas siempre están en riesgo, la seguridad total no existe, se recomienda realizar copias de soporte que se puedan guardar en dispositivos de almacenamiento externos, o en sitios seguros, de entidades que presten este servicio en la nube.

            .col-md-5
              figure
                img(src='@/assets/curso/temas/tarjetas/placeholder12.svg', alt='imagen ilustrativa')
          
          .row.justify-content-center.align-items-center.my-lg-4            
            .col-md-6.mb-4.mb-md-0
              h3.mb-4 Precaución con las redes Wi-Fi públicas
              p Los puntos inalámbricos y gratuitos de acceso a Internet, se han extendido por múltiples zonas en poblaciones y de restauración, en aeropuertos, estaciones de tren o metro, hoteles y en todo tipo de negocios. Demostradas altamente inseguras, se pueden utilizar para una navegación intrascendente, guardando las debidas precauciones, pero no para accesos que requieran mostrar sus datos y contraseñas. Un usuario de negocio móvil, no debería confiar en ellos su actividad profesional, optando por redes móviles dedicadas, de banda ancha, que ofrecen mayor seguridad.

            .col-md-5
              figure
                img(src='@/assets/curso/temas/tarjetas/placeholder13.svg', alt='imagen ilustrativa')
          
          .row.justify-content-center.align-items-center.my-lg-4
            .col-md-6.mb-4.mb-md-0
              h3.mb-4 Activar la restauración del sistema
              p La restauración de los sistemas operativos es una herramienta que puede “salvarnos la vida” ante un error del <i>software</i>, instalación de <i>drivers</i> o de alguna aplicación que no funciona correctamente y también ante la entrada de un virus en nuestro equipo. Las herramientas de recuperación del sistema, permiten revertir los cambios realizados en los archivos del sistema operativo, configuración, ajustes, controladores, claves de registro o programas instalados y que, en ocasiones, desestabilizan el sistema operativo.

            .col-md-5
              figure
                img(src='@/assets/curso/temas/tarjetas/placeholder14.svg', alt='imagen ilustrativa')
          
          .row.justify-content-center.align-items-center.my-lg-4
            .col-md-6.mb-4.mb-md-0
              h3.mb-4 Valorar el cifrado de datos
              p Cifrar o “codificar” los datos de su equipo para mantenerlos protegidos, haciendo frente a amenazas como el robo de datos o la exposición en caso de pérdida, el robo o la retirada inapropiada de equipos, es una medida interesante, especialmente en el segmento profesional y corporativo. Los proveedores de <i>software</i> ofrecen múltiples soluciones para hacerlo y algunos sistemas operativos cuentan con herramientas nativas. 

            .col-md-5
              figure
                img(src='@/assets/curso/temas/tarjetas/placeholder15.svg', alt='imagen ilustrativa')

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
