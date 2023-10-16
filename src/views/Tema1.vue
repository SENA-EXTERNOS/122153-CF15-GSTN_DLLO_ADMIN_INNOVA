<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Bases de datos
    
    .row.justify-content-center.mb-4
      .col-md-5
        figure.mw-sm-350px
          img(src='@/assets/curso/temas/texto_destacado/img2.png', alt='imagen relacionada')
      .col-md-7      
        p.mb-4 Para dar inicio a esta temática, es importante conocer que una base de datos almacena información de manera estructurada y organizada, siguiendo una secuencia lógica o cierta forma de almacenar (modelo), la cual debe acercarse lo más posible, al modelo real. La independencia, calidad y seguridad de los datos, deben ser algunas de las prioridades de la base de datos (BD).
        .cajon.color-acento-botones.color-fondo-secundario.p-4
          p.mb-0 Por consiguiente, la gestión, la administración y la manipulación de los datos, utilizando herramientas digitales y humanas, operaciones y procesos, se llama Sistema de Gestión de Base de Datos (SGBD o DBMS por las siglas en inglés). Mientras la base de datos solo almacena, el SGDB gestiona y administra los datos.  
    
    p.mb-4 Es así como nos adentramos en el conocimiento del modelo de datos, un conjunto de reglas, definiciones y normas que reflejan la estructura de los datos, y que opera sobre estos en un sistema informático a través de la ofimática; es el modelo relacional más utilizado y versátil, porque es ahí donde se localizan los “interesados” en los procesos, como son: proveedores, producción, clientes, entorno, en fin, todo el contexto de mercado, producción, administración, legislación y clientes.
    
    .row.justify-content-center.mb-4
      .col-md-10
        .cajon.color-primario.color-fondo.p-4
          p.mb-0 El concepto de base de datos ha evolucionado de forma acelerada; anteriormente, cada dato se diseñaba para ser manipulado por un programa o aplicación específica, perdiendo velocidad la aplicación, para la consulta de información o para el desarrollo de procesos específicos que administra en determinado momento. En la actualidad, las BD están diseñadas con estructuras propias capaces de “correr” en diversas aplicaciones, generando mayores eficiencias en sus tareas, (evitando modificaciones o costosos e ineficientes reprocesos). 
    
    p.mb-0 El SGBD pretende, mediante algunas técnicas, obtener:
    
    .row.justify-content-center
      .col-lg-4.my-5
        .tarjeta.h-100.p-4(style='background-color: #CFE5B6')
          .row.justify-content-center
            .col-md-7.col-5.mb-3
              img(data-aos="flip-up" src='@/assets/curso/temas/tarjetas/avatar1.svg' alt='dibujo relacionado')      
          h4.text-center Independencia de los datos
          p.text-center Los cambios en la estructura de la BD no modifican las aplicaciones.

      .col-lg-4.my-5
        .tarjeta.h-100.p-4(style='background-color: #CFE5B6')
          .row.justify-content-center
            .col-md-7.col-5.mb-3
              img(data-aos="zoom-in-up" src='@/assets/curso/temas/tarjetas/avatar2.svg' alt='dibujo relacionado')    
          h4.text-center Integridad de los datos
          p.text-center Los datos han de ser siempre correctos. Se establecen una serie de restricciones (reglas de validación) sobre los datos. 
      .col-lg-4.my-5          
        .tarjeta.h-100.p-4(style='background-color: #CFE5B6')
          .row.justify-content-center
            .col-md-7.col-5.mb-3
              img(data-aos="zoom-out-up" src='@/assets/curso/temas/tarjetas/avatar3.svg' alt='dibujo relacionado')
          h4.text-center Seguridad de los datos
          p.text-center Control de acceso a los datos, para evitar manipulaciones no deseadas.

    p.mb-4 Las bases de datos también tienen algunas características que las identifican.

    p.mb-4 Entre las principales características de los sistemas de base de datos podemos mencionar:

    .row.justify-content-center.mb-4
      .col-md-3.col-lg-4(style="margin-top: 10px; ")
        img(src='@/assets/curso/temas/texto_destacado/img3.png', alt='imagen relacionada') 
      .col-md-8.col-lg-8
        TabsC.color-acento-contenido.mb-4
          .tarjeta.color-acento-contenido-borde.p-4(titulo="Recuperación")
            .row
              .col-md-12.p-4.color-fondo
                p Las BD deben permitir la protección de los datos ante cualquier probabilidad de fallo o error en los programas o aplicaciones, realizando copias de seguridad, para recuperar y rescatar los datos sin mayores problemas.
              
          .tarjeta.color-acento-contenido-borde.p-4(titulo="Seguridad")
            .row
              .col-md-12.p-4.color-fondo
                p La consulta constante por múltiples usuarios, aumenta los riesgos de fraude o manipulación insegura de la información, generando vulnerabilidad en las bases de datos. Es prioritario generar procesos y procedimientos, así como también herramientas y protocolos para seguridad de la información.
              
          .tarjeta.color-acento-contenido-borde.p-4(titulo="Integridad")
            .row
              .col-md-12.p-4.color-fondo
                p Asegurar que la BD sea válida y tenga consistencia con la información que alberga. La integralidad se obtiene mediante normas y políticas que restrinjan el uso y/o abuso de la información y los datos allí almacenados (importancia de SGBD).
         
          .tarjeta.color-acento-contenido-borde.p-4(titulo="Concurrencia")
            .row
              .col-md-12.p-4.color-fondo
                p Con la alta probabilidad de consultas simultáneas, que aumentan el riesgo de pérdida, mala manipulación o integridad de los datos e información, el SGBD garantiza el eficaz funcionamiento del sistema o aplicación.
          
          .tarjeta.color-acento-contenido-borde.p-4(titulo="Volumen de almacenamiento")
            .row
              .col-md-12.p-4.color-fondo
                p Organizar y recopilar miles de datos de una misma estructura.
    
    p.mb-4 La importancia del manejo de las bases de datos, no solamente es preocupante para las grandes industrias, sino que también hace parte del desarrollo cotidiano de la pequeña y mediana empresa. El siguiente video muestra la faceta cotidiana de un emprendedor y cómo, con un buen manejo de la base de datos, hace que muchas cosas cambien en su negocio exponiendo la importancia y la utilidad de saber gestionar los datos y la información de manera clara y sencilla, con una base de datos bien administrada.

    figure.mb-5
      .video
        <iframe width="560" height="315" src="https://www.youtube.com/embed/V0i8emKQYhM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    .row.justify-content-center.mb-6
      .col-md-10.mb-4
        .cajon.color-acento-botones.color-fondo-secundario.p-4
          p.mb-0 Y llegamos así a la construcción de la base de datos. Para una buena elaboración de esta, es importante conocer de dónde vienen los datos y la información, y su diferenciación: estructurados, no estructurados o semiestructurados, qué tan fiables y viables son para ser utilizados, el objetivo de su obtención y uso, además de cómo y a quién se le van a presentar. 
       
    p.mb-4 Después de tener estas consideraciones básicas, se sugiere tener en cuenta los siguientes elementos, para la normalización de la base de datos:

    .row.justify-content-around.align-items-center
      .col-lg-9
        PasosA.color-acento-contenido.mb-5(tipo="n")
          .row
            .col-md-6.mb-4.mb-md-0(style=" margin-top: 105px;")
              p Análisis de los requisitos.
            .col-md-6.col-sm-7.mt-4
              figure(style="width: 400px; margin-top: 5px;")
                img(src='@/assets/curso/temas/tarjetas/placeholder1.svg', alt='imagen ilustrativa')
          .row
            .col-md-6.col-sm-7.mb-4.mb-md-0
              figure(style="width: 400px;")
                img(src='@/assets/curso/temas/tarjetas/placeholder2.svg', alt='imagen ilustrativa') 
            .col-md-6(style=" margin-top: 20px;")
              p(style="text-align: right") Identificación de las entidades del modelo de relación.
            
          .row 
            .col-md-6.mb-4.mb-md-0(style=" margin-top: 70px;")
              p Organización de los datos en tablas.
            .col-md-6.col-sm-7
              figure(style="width: 400px;")
                img(src='@/assets/curso/temas/tarjetas/placeholder3.svg', alt='imagen ilustrativa')
          .row
            .col-md-6.col-sm-7.mb-4.mb-md-0
              figure(style="width: 400px;")
                img(src='@/assets/curso/temas/tarjetas/placeholder4.svg', alt='imagen ilustrativa')
          
            .col-md-6(style=" margin-top: 60px;")
              p(style="text-align: right") Especificación de las claves primarias y análisis de las relaciones.
            
          .row
            .col-md-6.mb-4.mb-md-0(style=" margin-top: 70px;")
              p Normalización para estandarizar las tablas.
            .col-md-6.col-sm-7
              figure(style="width: 400px;")
                img(src='@/assets/curso/temas/tarjetas/placeholder5.svg', alt='imagen ilustrativa')
    
    p.mb-4 Es importante tener en cuenta que los datos tienen una particularidad intrínseca de brindar información indiferentemente del valor agregado que aportan, al ser relacionados con otra información y en el contexto en que se lleven a cabo estas relaciones. La Tabla 1 nos presenta los diferentes tipos de datos, su utilidad y tamaño.

    .mx-auto.col-md-12.mb-4
      .titulo-sexto.color-acento-contenido
        p
          b Tabla 1 
          | Tipos, utilidad y tamaño de datos
    
    .tabla-a.color-primario.mb-5 
      table.tableT
        thead.color-fondo
          tr(style="border: 10px #ACD382;")
            th Tipo de dato
            th Utilidad
            th Tamaño
            
        tbody.text-center
          tr
            td Texto corto
            td Datos alfanuméricos
            td Máximo 255 caracteres
          tr
            td Texto largo
            td Grandes cantidades de datos <br> (alfanuméricos, oraciones, párrafos).
            td 1 GB (muestra los primeros 64.000 caracteres)
          tr
            td Número
            td Datos numéricos
            td 1,2,4,8 o 16 bytes
          tr
            td Número grande
            td Datos numéricos
            td Número tiene un rango de -2^31 a 2^31-1 
          tr
            td Fecha y hora
            td Fechas y horas
            td 8 bytes
          tr
            td Fecha y hora extendidas
            td Fechas y horas
            td Cadena codificada de 24 bytes
          tr
            td Moneda
            td Datos monetarios, almacenados con 4 decimales de precisión.
            td 8 bytes
          tr
            td Sí/No
            td Dato booleano (0 falso, 1 verdadero)
            td 1 byte
          tr
            td Objeto Ole
            td Gráficos u otros objetos de ActiveX
            td Hasta 2 GB
          tr
            td Hipervínculo
            td Redireccionamiento a un documento o archivo en la web o equipo local.
            td 2048 caracteres máximo
          tr
            td Datos adjuntos
            td Puede adjuntar archivos como imágenes, documentos, hojas de cálculo o gráficos; cada campo de datos adjuntos, puede contener una cantidad ilimitada de datos anexos por registro, hasta el límite de almacenamiento del tamaño de un archivo de base de datos.
            td Hasta 2 GB
          tr
            td Calculado
            td Puede crear una expresión que use datos de uno o varios campos. Puede designar tipos de datos de resultados diferentes de la expresión.
            td Depende del tipo de datos de la propiedad y tipo de resultado. El resultado de datos de texto corto puede tener hasta 243 caracteres. Texto largo, número, Sí/No y la fecha y hora debe coincidir con sus respectivos tipos de datos.
    
    .row.justify-content-center.mb-4
      .col-md-7 
        p.mb-4 Concluimos el tema con la operación de base de datos, las cuales son todas las actividades o tareas que nos permiten modificar o alterar algún dato existente y también permiten el cálculo de un nuevo dato. En términos generales, se opera una base de datos cuando se elimina o se cambia el tipo de campo, se especifica o cambia la caracterización, se hacen cálculos para obtener otros datos, etc. 
        .cajon.color-acento-botones.color-fondo-secundario.p-4.mb-4
          p.mb-0 Las bases de datos operan de acuerdo con las combinaciones que se hagan para obtener los resultados objeto del usuario. Estas combinaciones obedecen a una lógica, y de acuerdo con esa lógica, funcionan los lenguajes computacionales, desarrollando bajo ciertos parámetros, programas que realizaban y solucionan tareas básicas como sumar números enteros, llamados subprogramas, que anidados a otros que realizan tareas más elaboradas, aumentan en complejidad. 
      .col-md-5
        figure.mw-sm-350px(style="margin-top: 25px;")
          img(src='@/assets/curso/temas/texto_destacado/img4.png', alt='imagen relacionada')   
    
    p Las necesidades específicas de ciertos clientes y la habilidad de los programadores, han evolucionado esas BD para llegar a las “aplicaciones”, cumpliendo cabalmente estas pequeñas tareas mediante segmentos específicos, supliendo necesidades, operando y programándolas con lenguajes sencillos, predicativos y efectivos para los intereses de los usuarios.

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
