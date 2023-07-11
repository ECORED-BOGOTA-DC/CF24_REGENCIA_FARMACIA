<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/intro1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las acciones de detección, prevención y tratamiento oportuno de los eventos adversos relacionados con la administración de medicamentos son frecuentes tanto en los entornos hospitalarios como en los ambulatorios, se reflejan en un aumento de la morbimortalidadmorbi mortalidad y por lo tanto se considera un problema de salud pública con alto costo económico. De acuerdo con la política de seguridad del paciente, a nivel nacional como internacional, se ha encontrado que el uso seguro de medicamentos es una de las medidas efectivas para la prevención de situaciones de riesgo para la salud humana.

    .col-xl-8.col-lg-10.m-auto.mt-5
      .cajon.color-acento-contenido.p-4(style="background-color:#BFEEF4;")
        p.mb-0(data-aos="zoom-in") La Legislación colombiana mediante el decreto 2330 de 2006 autoriza a las droguerías para prestar el servicio de inyectología, por esta razón es indispensable capacitar al personal de estos establecimientos para lograr eficiencia y calidad dentro de unas condiciones seguras tanto para el usuario/paciente/cliente, como para la Farmacia-Droguería. 
    
    p.mt-5(data-aos="fade-up") El Regente de Farmacia, no solo debe ser hábil en la administración de los medicamentos por vía intramuscular sino también conocer, operar y aplicar los principios de seguridad y salud en el trabajo, bioseguridad, manejo de residuos derivados de la atención en salud y seguridad del paciente.
    p.mt-4(data-aos="fade-up") La administración segura de medicamentos es una necesidad actual y permanente en los servicios de salud de todo el mundo. Colombia en los últimos años se ha unido a la iniciativa de farmacovigilancia fomentando una cultura institucional orientada a la seguridad en la administración de medicamentos. 

    .col-xl-6.col-lg-8.m-auto.mt-5
      .cajon.color-primario.p-4(style="background-color:#E2EEFE;")
        p.mb-0(data-aos="zoom-in") “Es de vital importancia, actualizar los conocimientos y habilidades específicas para promover y ejecutar un proceso de administración de medicamentos seguro y ético que apunte a la reducción de eventos adversos de esta naturaleza.” #[br] #[strong (Ministerio de la Protección Social, 2009)]
    
    p.mt-5(data-aos="fade-up") Como conocimientos previos para dar inicio al estudio de este componente, es importante que el aprendiz conozca en profundidad las temáticas que se trataron con anterioridad en el componente formativo 12 (Farmacología) de este programa de formación: #[strong Fisiología por sistemas del cuerpo, sistema tegumentario], para comprender las generalidades de anatomía y fisiología de la piel.
    p.mt-4(data-aos="fade-up") También es necesario revisar de manera detenida en el componente formativo 16, de este programa de formación el último tema: #[strong código de colores, manejo de bolsas de residuos y calibre, transporte de residuos], para entender el manejo de residuos peligrosos.

    br
    br
    p.mt-5.text-center.fw-bold(data-aos="fade-up") ¡Muchos éxitos en este proceso de aprendizaje!

    
 



    
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
