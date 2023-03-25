<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Gestión de la información de bases de datos - Gráficas y tablas dinámicas
    
    .row.justify-content-center.mb-4
      .col-md-5
        figure.mw-sm-350px
          img(src='@/assets/curso/temas/texto_destacado/img5.png', alt='imagen relacionada')
      .col-md-7      
        p.mb-0 Teniendo claros los conceptos de datos y bases de datos, llegamos al Sistema de Gestión de Bases de Datos (SGBD), el cual se refiere a un <i>software</i> que administra y facilita a los usuarios para disponer, manipular y trabajar con la información de forma segura y con estándares de calidad. Para que un SGBD pueda operar adecuadamente, es necesario que exista una relación o conexión entre los datos (estructura), para crear relaciones funcionales y que faciliten la gestión de estas bases de datos, factor importante para la eficacia en su funcionamiento. El SGBD además, debe brindar herramientas funcionales y afines al objeto de la organización y utilidad de la información, para brindar asimismo una estructura de datos adecuada.
    
    p.mb-4 La integralidad mínima del SGBD está conformada de la siguiente manera:

    SlyderF.mb-5(columnas="col-lg-12 col-xl-4")
      .tarjeta.color-acento-contenido.p-4(style='height:400px')
        .row.justify-content-center.mb-6
          .col-7.mb-3
            img(data-aos="flip-up" src='@/assets/curso/temas/tarjetas/avatar4.svg' alt='dibujo relacionado')
        h4.text-center Motor de almacenamiento
        p.text-center Es el elemento central de un SGBD, interactúa con el sistema de archivos a nivel del sistema operativo.

      .tarjeta.color-acento-contenido.p-4(style='height:400px')
        .row.justify-content-center.mb-6
          .col-7.mb-3
            img(data-aos="zoom-in-up" src='@/assets/curso/temas/tarjetas/avatar5.svg' alt='dibujo relacionado')    
        h4.text-center Lenguaje de consulta
        p.text-center El lenguaje de consulta estructurado (SQL) y el lenguaje de consulta MongoDB (MQL), ambos utilizados para interactuar con las bases de datos.

      .tarjeta.color-acento-contenido.p-4(style='height:400px')
        .row.justify-content-center.mb-6
          .col-7.mb-3
            img(data-aos="zoom-out-up" src='@/assets/curso/temas/tarjetas/avatar6.svg' alt='dibujo relacionado')
        h4.text-center Procesador de consultas
        p.text-center Interpreta las consultas del usuario y hace que los comandos sean comprensibles para la base de datos.

      .tarjeta.color-acento-contenido.p-4(style='height:400px')
        .row.justify-content-center.mb-6
          .col-7.mb-3
            img(data-aos="zoom-out-up" src='@/assets/curso/temas/tarjetas/avatar11.svg' alt='dibujo relacionado')
        h4.text-center Optimizador de consultas
        p.text-center Proporciona ideas para mejorar el rendimiento de la base de datos y las consultas.

      .tarjeta.color-acento-contenido.p-4(style='height:400px')
        .row.justify-content-center.mb-6
          .col-7.mb-3
            img(data-aos="zoom-out-up" src='@/assets/curso/temas/tarjetas/avatar7.svg' alt='dibujo relacionado')
        h4.text-center Catálogo de metadatos
        p.text-center Actúa como repositorio de los objetos de la base de datos. Cada vez que se crea un objeto, se registra aquí. El catálogo se utiliza para verificar las solicitudes de los usuarios y proporcionar detalles sobre la estructura de la base de datos.

      .tarjeta.color-acento-contenido.p-4(style='height:400px')
        .row.justify-content-center.mb-6
          .col-7.mb-3
            img(data-aos="zoom-out-up" src='@/assets/curso/temas/tarjetas/avatar8.svg' alt='dibujo relacionado')
        h4.text-center Administrador de registros
        p.text-center Este componente registra la actividad de los usuarios, los inicios de sesión, las copias de seguridad y otras acciones realizadas con el SGBD.

      .tarjeta.color-acento-contenido.p-4(style='height:400px')
        .row.justify-content-center.mb-6
          .col-7.mb-3
            img(data-aos="zoom-out-up" src='@/assets/curso/temas/tarjetas/avatar9.svg' alt='dibujo relacionado')
        h4.text-center Herramientas de informes y monitorización
        p.text-center Estas utilidades generan informes y supervisan el uso de los recursos del SGBD.

      .tarjeta.color-acento-contenido.p-4(style='height:400px')
        .row.justify-content-center.mb-6
          .col-7.mb-3
            img(data-aos="zoom-out-up" src='@/assets/curso/temas/tarjetas/avatar10.svg' alt='dibujo relacionado')
        h4.text-center Utilidades de dato
        p.text-center Herramientas adicionales que realizan tareas de copia de seguridad y recuperación, validación de datos, reparación de bases de datos y comprobación de la integridad de los datos en el servidor privado compartido.

    p.mb-4 En otro orden de ideas, la principal característica de una base de datos es su capacidad de almacenar información para ser gestionada por los usuarios aleatorios y los no aleatorios que lleguen al sistema, para obtener algún tipo de información y disposición particular de datos que allí reposan.

    p.mb-4 Conozcamos otras características importantes a tener en cuenta: 

    .row.justify-content-center.mb-4
      .col-md-7
        AcordionA(tipo="a" clase-tarjeta="tarjeta color-secundario")
          .row(titulo="Informes")
            .col-md-12.mb-4.mb-md-0
              p Los sistemas de gestión, por naturaleza, basan su actividad en informes para la toma de decisiones y la base de datos actúa rápidamente en función de esta necesidad de información; el SGBD, la administra, proporcionando herramientas propias para esta gestión, enriqueciendo la presentación de informes generales y particulares, o una mezcla de estos.
        
          .row(titulo="Integración")
            .col-md-12.mb-4.mb-md-0
              p La integración de los sistemas de gestión y su articulación con todos los procesos internos y externos de la organización, hacen parte del valor agregado que puede dar un SGBD, permitiendo a la arquitectura del sistema, cumplir con los requisitos legales y regulaciones propias de la empresa, bajando costos de mantenimiento y operación. 

          .row(titulo="Acceso abierto")
            .col-md-12.mb-4.mb-md-0
              p Un SGBD debe interactuar con los agentes externos a la organización, así como lo hace con los procesos internos de la empresa; es el agente mediador entre estos procesos y el medio ambiente, además sirve de filtro seguro, con protocolos de seguridad que restringen y direccionan accesos a usuarios (internos y externos), facilitando el cuidado y conservación de la fidelidad de los datos.

          .row(titulo="Adaptabilidad")
            .col-md-12.mb-4.mb-md-0
              p Este sistema de gestión debe ser flexible y adecuado con los requisitos propios de cada organización, y que el sistema pueda ir creciendo y adaptándose a los nuevos requerimientos que se vayan presentando, de acuerdo con la interacción propia con el medio.
          
          .row(titulo="Requisitos de implementación")
            .col-md-12.mb-4.mb-md-0
              p Tener un <i>software</i> especializado, contratación de profesionales especializados en TIC, formación y capacitación constante en temas y manejos de equipos relacionados.
      .col-md-5
        img(src='@/assets/curso/temas/texto_destacado/img6.png', alt='imagen relacionada')  

    p.mb-4 Cada vez que algún usuario busca información de cualquier tipo en las diferentes tablas de una o varias bases de datos, se está realizando una consulta.

    .row.justify-content-center.mb-4
      .col-md-10
        .cajon.color-primario.color-fondo.p-4
          p.mb-0 Hablando detalladamente, una consulta permite cambiar, agregar, eliminar, en otras palabras, manipular los datos de acuerdo con las necesidades específicas del momento, para generar la información consecuente a una gestión determinada. Cada programa tiene una codificación y protocolos propios para las consultas y es imprescindible tener un <i>software</i>.

    p.mb-4 Generalmente, los <i>software</i> son inteligentes y no necesitan que se escriba todo lo que se requiere para que haga la consulta. Si se requiere realizar una consulta sobre análisis de datos, por ejemplo en Google, simplemente se escribe “Análisis de…”, el motor de búsqueda hará el resto y enviará sugerencias como se presenta en la Figura 1.

    .mx-auto.col-md-8.mb-4
      .titulo-sexto.color-acento-contenido
        h5 Figura 1
        br
        span.fst-italic Ejemplo de búsqueda en un navegador

      figure.mb-5
          img(data-aos="flip-left" src='@/assets/curso/temas/figuras/figura1.svg', alt='diagrama')  

    .row.justify-content-center.mb-4
      .col-md-5
        figure.mw-sm-350px
          img(src='@/assets/curso/temas/texto_destacado/img7.png', alt='imagen relacionada')
      .col-md-7      
        p.mb-4 Desde cualquier <i>software</i>, con el código correcto, llamará al campo solicitado en la tabla o tablas requeridas, lo importante es que hablen el mismo idioma. 
        .cajon.color-primario.color-fondo.p-4.mb-4
          p.mb-0 De igual forma, una base de datos bien diseñada almacena los datos en varias tablas. Las mismas están formadas por columnas que contienen los atributos de los datos, junto con filas o registros de información. Una consulta ayuda a recuperar los datos de las distintas tablas, ordenarlos y mostrarlos según los comandos. 
        p.mb-0 Una consulta puede ser una selección, una acción o una combinación de ambas. Las consultas de selección pueden recuperar información de las fuentes de datos, y las de acción sirven para manipular los datos, por ejemplo, para añadirlos, modificarlos o eliminarlos.

    p.mb-4 Los usuarios avanzados también pueden utilizar los comandos de consulta para realizar diversas tareas de programación, desde la creación de usuarios de MySQL, la concesión de permisos y hasta la modificación de las URL de WordPress en las bases de datos de MySQL.

    p.mb-4 Algunos comandos para la consulta de bases de datos son:

    SlyderF.mb-5(columnas="col-lg-12 col-xl-4")
      .tarjeta.color-acento-contenido.p-4(style='height:280px')
        .row.justify-content-center.mb-6
          .col-7.mb-3
            img(data-aos="flip-up" src='@/assets/curso/temas/tarjetas/avatar12.svg' alt='dibujo relacionado')
        p.text-center Se usa para especificar los nombres de los campos que contienen los datos que quiere usar en una consulta.

      .tarjeta.color-acento-contenido.p-4(style='height:280px')
        .row.justify-content-center.mb-6
          .col-7.mb-3
            img(data-aos="zoom-in-up" src='@/assets/curso/temas/tarjetas/avatar13.svg' alt='dibujo relacionado')    
        p.text-center Sirve para combinar datos entre tablas de datos.

      .tarjeta.color-acento-contenido.p-4(style='height:280px')
        .row.justify-content-center.mb-6
          .col-7.mb-3
            img(data-aos="zoom-out-up" src='@/assets/curso/temas/tarjetas/avatar14.svg' alt='dibujo relacionado')
        p.text-center Crea/construye diferentes tablas, especificando los campos que estas contienen.

      .tarjeta.color-acento-contenido.p-4(style='height:280px')
        .row.justify-content-center.mb-6
          .col-7.mb-3
            img(data-aos="zoom-out-up" src='@/assets/curso/temas/tarjetas/avatar15.svg' alt='dibujo relacionado')
        p.text-center Sirve para ordenar los resultados de los datos tanto numérica como alfabéticamente.

      .tarjeta.color-acento-contenido.p-4(style='height:280px')
        .row.justify-content-center.mb-6
          .col-7.mb-3
            img(data-aos="zoom-out-up" src='@/assets/curso/temas/tarjetas/avatar16.svg' alt='dibujo relacionado')
        p.text-center Devuelve la suma de un conjunto de valores contenidos en un campo especificado, en una consulta.

      .tarjeta.color-acento-contenido.p-4(style='height:280px')
        .row.justify-content-center.mb-6
          .col-7.mb-3
            img(data-aos="zoom-out-up" src='@/assets/curso/temas/tarjetas/avatar17.svg' alt='dibujo relacionado')
        p.text-center Actualiza los registros existentes en una base de datos.

      .tarjeta.color-acento-contenido.p-4(style='height:280px')
        .row.justify-content-center.mb-6
          .col-7.mb-3
            img(data-aos="zoom-out-up" src='@/assets/curso/temas/tarjetas/avatar18.svg' alt='dibujo relacionado')
        p.text-center Añade datos o registros nuevos a la base de datos.

    p.mb-4 Existe otro tipo de consultas para usuarios no tan técnicos o profesionales, utilizando métodos gráficos y predictivos, que ayudan, al usuario, a realizar consultas exitosas en las bases de datos.

    h3
      .fas.fa-square.me-3.cuadrado.mb-4.mt-4 
      |  Gráficas y tablas dinámicas

    .row.justify-content-center.mb-4
      .col-md-7      
        p.mb-0 Una tabla dinámica resume, analiza, explora y genera informes relacionales concisos y rápidos. Si adicionalmente se utilizan los gráficos, también dinámicos, se agrega versatilidad a las visualizaciones, permitiendo obtener comparaciones, tendencias y patrones que aporten los informes. Las decisiones tomadas con estas ayudas, son más seguras y útiles a los objetivos misionales. Para alimentar las tablas y gráficos dinámicos, se pueden importar datos de otros tipos de bases de datos, externos a la aplicación que se está utilizando.
    
      .col-md-5
        figure.mw-sm-350px
          img(src='@/assets/curso/temas/texto_destacado/img8.png', alt='imagen relacionada')

    p.mb-4 Una tabla dinámica es útil para:  

    SlyderF.mb-5(columnas="col-lg-12 col-xl-4")
      .tarjeta.color-acento-contenido.p-4(style='height:350px')
        .row.justify-content-center.mb-6
          .col-7.mb-3
            img(data-aos="flip-up" src='@/assets/curso/temas/tarjetas/avatar19.svg' alt='dibujo relacionado')
        p.text-center Consultar grandes cantidades de datos de forma sencilla.

      .tarjeta.color-acento-contenido.p-4(style='height:350px')
        .row.justify-content-center.mb-6
          .col-7.mb-3
            img(data-aos="zoom-in-up" src='@/assets/curso/temas/tarjetas/avatar20.svg' alt='dibujo relacionado')    
        p.text-center Obtener subtotales y sumas de datos numéricos, resumir datos por categorías y subcategorías, y crear cálculos y fórmulas personalizadas.

      .tarjeta.color-acento-contenido.p-4(style='height:350px')
        .row.justify-content-center.mb-6
          .col-7.mb-3
            img(data-aos="zoom-out-up" src='@/assets/curso/temas/tarjetas/avatar21.svg' alt='dibujo relacionado')
        p.text-center Expandir y contraer los niveles de datos para destacar los resultados y profundizar en los detalles de los datos de las áreas de interés.

      .tarjeta.color-acento-contenido.p-4(style='height:350px')
        .row.justify-content-center.mb-6
          .col-7.mb-3
            img(data-aos="zoom-out-up" src='@/assets/curso/temas/tarjetas/avatar22.svg' alt='dibujo relacionado')
        p.text-center Trasladar filas a columnas o columnas a filas (o "pivotar") para ver diferentes resúmenes de los datos de origen.

      .tarjeta.color-acento-contenido.p-4(style='height:350px')
        .row.justify-content-center.mb-6
          .col-7.mb-3
            img(data-aos="zoom-out-up" src='@/assets/curso/temas/tarjetas/avatar23.svg' alt='dibujo relacionado')
        p.text-center Filtrar, ordenar y agrupar los subconjuntos de datos más útiles e interesantes, así como darles formato de forma condicional, para poder centrarse en la información que se desea.

      .tarjeta.color-acento-contenido.p-4(style='height:350px')
        .row.justify-content-center.mb-6
          .col-7.mb-3
            img(data-aos="zoom-out-up" src='@/assets/curso/temas/tarjetas/avatar24.svg' alt='dibujo relacionado')
        p.text-center Presentar informes en línea o impresos concisos, atractivos y anotados.
    
    p.mb-4 Generalmente, las aplicaciones que tienen como herramienta la creación y posterior análisis de datos y gráficos dinámicos, poseen herramientas de aprendizaje, fáciles de manipular y entender.   

    .row.justify-content-center.mb-4
      .col-md-10
        .cajon.color-primario.color-fondo.p-4
          p.mb-0 Los datos de las tablas dinámicas se representan gráficamente, teniendo varias alternativas de acuerdo al tipo de dato o cómo se quiera presentar la información. Los cambios realizados en la tabla dinámica, tendrán efecto inmediato en el gráfico dinámico.

    p.mb-4 Si está familiarizado con los gráficos estándar, observará que la mayoría de las operaciones son idénticas en los gráficos dinámicos.

    p.mb-4 Sin embargo, existen algunas diferencias:

    .row.justify-content-center.mb-4
      .col-md-7
        AcordionA(tipo="a" clase-tarjeta="tarjeta color-secundario")
          .row(titulo="Orientación de filas y columnas")
            .col-md-12.mb-4.mb-md-0
              p A diferencia de un gráfico estándar, no se puede cambiar la orientación de las filas y columnas de un gráfico dinámico, mediante el cuadro de diálogo <i>Seleccionar</i> origen de datos. En su lugar, puede dinamizar las etiquetas de fila y columna, asociadas a una tabla dinámica para lograr el mismo efecto.
        
          .row(titulo="Tipos de gráficos")
            .col-md-12.mb-4.mb-md-0
              p Puede cambiar un gráfico dinámico a cualquier tipo de gráfico, salvo un gráfico “xy” (dispersión), el de cotizaciones o el de burbujas.

          .row(titulo="Datos de origen")
            .col-md-12.mb-4.mb-md-0
              p Los gráficos estándar están vinculados directamente con las celdas de las hojas de cálculo, mientras que los gráficos dinámicos se basan en el origen de datos de la tabla dinámica asociada. A diferencia de un gráfico estándar, no se puede cambiar el rango de datos de un gráfico en el cuadro de diálogo <b>Seleccionar</b> origen de datos, de un gráfico dinámico.

          .row(titulo="Formato")
            .col-md-12.mb-4.mb-md-0
              p La mayor parte del formato, incluso los elementos del gráfico que agrega el diseño y el estilo, se conserva cuando actualiza un gráfico dinámico. Sin embargo, no se conservan las líneas de tendencia, las etiquetas de datos, las barras de error y otros cambios realizados en los conjuntos de datos. Los gráficos estándar no pierden este formato una vez que se aplican.
      .col-md-5
        img(src='@/assets/curso/temas/texto_destacado/img9.png', alt='imagen relacionada')  

    p.mb-4 Actualmente, las tablas dinámicas se presentan como una gran herramienta de trabajo, por su rapidez en el acceso de la información, por su flexibilidad al permitir importar datos de diferentes tipos y arreglos, y por su estructura, facilitando un análisis veraz.
    
    .row.justify-content-center.mb-4
      .col-md-10
        .tarjeta.p-3.mb-5(style="background-color: #CDE5C0")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/texto_destacado/icono1.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5 Características y fuentes de datos para generar tablas dinámicas.
                  p.mb-0 Para ampliar la información, lo invitamos a leer el PDF <i>Características y fuentes de datos para generar tablas dinámicas</i>.  
         
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Características_y_fuentes_de_datos_para_generar_tablas_dinámicas.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

</template>

<script>
export default {
  name: 'Tema2',
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
