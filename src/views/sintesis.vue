<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5(data-aos="fade-right") La administración segura de medicamentos no solo involucra los pacientes que reciben el producto, sino que también incluye a los cuidadores, a todo el personal de salud al igual que las entidades prestadoras de este servicio, ya que comprende diferentes actividades relacionadas con la administración de medicamentos, como actividades de prevención, detección, tratamientos oportunos, al igual que todo lo que concierne a su almacenamiento, preparación y envasado, protocolos de administración y normativa; s por esto que este componente formativo profundiza en estos temas que son relevantes y que se pueden observar a través del siguiente esquema:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
