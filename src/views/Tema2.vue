<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Proceso de dispensación
    
    p(data-aos="zoom-in") Para garantizar una adecuada vida útil de los medicamentos y dispositivos médicos, desde su fabricación hasta el almacenamiento y dispensación o administración directa al usuario/paciente final, se deben tener en cuenta las siguientes recomendaciones:

    .col-xl-5.col-lg-7.m-auto.mt-4
      .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
        h5 Tabla 1.
        span Recomendaciones para el almacenamiento de medicamentos y dispositivos médicos
      .tabla-a.color-acento-botones(style="max-width:100%;width:100%;min-width:100%;")
        table(style="max-width:100%;width:100%;min-width:100%;")
          thead(style="border:0;")
            tr(style="background-color:#00BCD4;" data-aos="fade-right")
              th.p-4(style="border:0;") Variable
              th.p-4(style="border:0;") Rango recomendado
          tbody
            tr(style="background-color:#F6F6F6;" data-aos="fade-right")
              td.p-4.text-center.fw-bold(style="border:0;border-right:1px #AFAFAF solid;") Temperatura
              td.p-4.text-center(style="border:0;") 15 °C a 25 °C 
            tr(style="background-color:#fff;" data-aos="fade-right")
              td.p-4.text-center.fw-bold(style="border:0;border-right:1px #AFAFAF solid;")  Refrigeración
              td.p-4.text-center(style="border:0;") 2 °C a 8 °C 
            tr(style="background-color:#F6F6F6;" data-aos="fade-right")
              td.p-4.text-center.fw-bold(style="border:0;border-right:1px #AFAFAF solid;") Congelación
              td.p-4.text-center(style="border:0;") -20 °C a 0 °C 
            tr(style="background-color:#fff;" data-aos="fade-right")
              td.p-4.text-center.fw-bold(style="border:0;border-right:1px #AFAFAF solid;")  Humedad relativa
              td.p-4.text-center(style="border:0;") 60 % Hr a 70 % Hr
    
    p.mt-5(data-aos="zoom-in") Las condiciones higiénicas que se deben tener en cuenta son:

    ul.fa-ul.mt-4.mb-0
      li.mb-2(data-aos="fade-right")
        i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
        | Limpieza y desinfección de las áreas para evitar la proliferación de hongos y bacterias. 
      li.mb-2(data-aos="fade-right")
        i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
        | Medicamentos y dispositivos médicos libres de polvo y partículas adheridas a las cajas y envases. 
      li.mb-2(data-aos="fade-right")
        i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
        | Nevera limpia y exclusiva para almacenar medicamentos. 
      li(data-aos="fade-right")
        i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
        | La limpieza y desinfección deben obedecer a un cronograma de aseo periódico.
  
    p.mt-5(data-aos="fade-right") Adicionalmente, se deben tener en cuenta algunas condiciones ambientales como:

    TabsB.color-acento-contenido.mt-5(data-aos="fade-right")
      .py-4.py-md-5(titulo="Luz")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            p Los medicamentos deben conservarse siempre en sus empaques y envases originales.
            p.mt-4 Recomendaciones de seguimiento y control:
            ul.fa-ul.mt-3.mb-0
              li.mb-2(data-aos="fade-right")
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Es deber de los fabricantes de los medicamentos y dispositivos médicos indicar las condiciones de luz adecuadas de almacenamiento.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema2/1.svg' alt="Imagen decorativa")
      .py-4.py-md-5(titulo="Temperatura")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            p Es un factor crítico que se debe controlar para evitar el deterioro en la estructura molecular de los productos.
            p.mt-4 Recomendaciones de seguimiento y control:
            ul.fa-ul.mt-3.mb-0
              li.mb-2(data-aos="fade-right")
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Para un seguimiento adecuado, los termómetros calibrados se deben colocar en los lugares más críticos del área de almacenamiento y llevar los respectivos registros diarios de estas temperaturas.
              li(data-aos="fade-right")
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Para disminuir la temperatura ambiental del área se recomienda: fortalecer la ventilación con ventiladores, aire acondicionado y adecuación de aislantes térmicos, además dejar espacios libres para circulación del aire.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema2/2.svg' alt="Imagen decorativa")
      .py-4.py-md-5(titulo="Humedad relativa")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            p Afecta considerablemente la estabilidad de los medicamentos, además de ser un medio propicio para el crecimiento de bacterias y hongos, generando reacciones de oxidación de los componentes de los medicamentos.
            p.mt-4 Recomendaciones de seguimiento y control:
            ul.fa-ul.mt-3.mb-0
              li.mb-2(data-aos="fade-right")
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | El higrómetro se debe ubicar, al igual que el termómetro, en sitios críticos del almacén y llevar registros diarios varias veces al día.
              li(data-aos="fade-right")
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Para disminuir la humedad se recomienda: aire acondicionado con extractor de humedad, conservar los medicamentos y dispositivos médicos en las cajas primarias; los productos higroscópicos deben llevar en su empaque original una bolsita de silica gel y garantizar la rotación de estos, buscando un menor tiempo de almacenamiento.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema2/3.png' alt="Imagen decorativa")
      .py-4.py-md-5(titulo="Refrigeración (cadena de frío)")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            p Los medicamentos que requieran refrigeración deben ser almacenados en cuartos fríos, refrigeradores o congeladores. Se debe contar con un plan de emergencia que garantice el mantenimiento de la cadena de frío en caso de interrupciones de la energía eléctrica.
            p.mt-4 Recomendaciones de seguimiento y control:
            ul.fa-ul.mt-3.mb-0
              li.mb-2(data-aos="fade-right")
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Para el control de la cadena de frío, durante su mantenimiento los refrigeradores deben estar a la sombra y alejados de fuentes de calor, separados de techos y paredes mínimo 15 cm. Adicionalmente, deben disponer de mecanismos que registren la temperatura.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema2/4.svg' alt="Imagen decorativa")
    
    .col-xl-8.col-lg-10.m-auto.mt-5(data-aos="zoom-in")
      .cajon.color-acento-contenido.p-4(style="background-color:#BFEEF4;")
        p.mb-0 Según la Resolución 1403 de 2007 del Ministerio de la Protección Social, los servicios farmacéuticos deben contar con mecanismos que garanticen las condiciones de temperatura y humedad relativa recomendadas por el fabricante del medicamento o dispositivo médico. 
    
    p.mt-5(data-aos="zoom-in") La siguiente imagen muestra algunos de estos mecanismos:
  
    .titulo-sexto.color-acento-contenido.mt-5(data-aos="fade-right")
      h5 Figura 1.
      span Mecanismos que garanticen las condiciones de almacenamiento
    figure
      img(src="@/assets/curso/tema2/5.svg" data-aos="zoom-in-up" alt="Imagen que indica los mecanismos que deben estar para garantizar las condiciones de almacenamiento, los cuales son: Revisar: registro INVIMA y fecha de vencimiento Verificar y controlar: temperatura de congelación, refrigeración, ambiente. Conservar: lugar seco NO exposición directa a la luz solar y/o artificial. • Registrar la lectura de temperatura en los formatos correspondientes en caso de temperatura ambiente y humedad relativa  • Registrar la lectura de temperatura de refrigerador  • Colocar rotulo al mobiliario y contenedores, asegurando la correcta identificación de las divisiones dentro del crea de almacenamiento.  • Mantener cada medicamento y demás insumo para la salud en la división, anaquel y contenedor asignado, corroborar que el rotulo de identificación corresponda a lo contenido")   
  

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
