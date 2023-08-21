<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-up")
      .titulo-principal__numero
        span 1
      h1 Normativa para la administración de medicamentos en farmacias y droguerías
    
    p(data-aos="zoom-in") El procedimiento de inyectología en droguerías no contaba con ningún tipo de normativa, por lo que aún es una actividad considerada como un problema de salud pública, porque, a pesar de las normas vigentes, culturalmente en nuestro territorio encontramos personas que, sin ningún tipo de formación, administran medicamentos dentro y fuera de farmacias y/o droguerías.
    p.mt-4(data-aos="zoom-in") En droguerías y farmacias–droguerías está prohibido administrar medicamentos por vías diferentes a la intramuscular (intravenosa, subcutánea, etc) y realizar pruebas de sensibilidad a los medicamentos (PPS). La prescripción o fórmula médica es exigencia para la administración de los medicamentos por vía intramuscular (IM); así lo determina el #[strong Decreto 2330 de 2006], que establece las condiciones que deben cumplir las droguerías y farmacias-droguerías para poder ofrecer a sus clientes el servicio de inyectología.
 
    .col-xl-8.col-lg-10.m-auto.mt-5
      .cajon.color-acento-contenido.p-4(style="background-color:#BFEEF4;")
        p.mb-0(data-aos="zoom-in") El #[strong Decreto 780 de 2016] se tomará como referencia ya que en este se encuentra compilada toda la información del Decreto 2200 de 2005, Decreto 2330 del 2006 y la Resolución 1403 de 2007, el cual podrá consultar en la sección de material complementario.
    
    p.mt-5(data-aos="zoom-in") Las normas generales son:

    .tarjeta.tarjeta--gris.p-4.mt-4
      PasosB.color-secundario
        .row(titulo="Recurso humano")
          .col-lg-6.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/1.png')
          .col-lg-6
            p La persona responsable de administrar el medicamento inyectable debe contar con formación certificada y entrenamiento que lo califique para la administración de medicamentos por vía intramuscular. Es importante resaltar que quien realiza el procedimiento debe estar afiliado a la ARL riesgo 3 y debe estar debidamente vacunado con los inmunobiológicos exigidos de acuerdo con la labor realizada. 
            p.mt-4 La persona que realiza los domicilios NO podrá realizar el procedimiento en la residencia del paciente; para poder brindar el servicio de administración de medicamento por vía intramuscular en el lugar de ubicación del paciente, previa presentación de la prescripción médica, la persona calificada y responsable debe trasladarse para realizar el procedimiento en la residencia del paciente que solicita el servicio y contar con los insumos y dispositivos médicos que se requieran.
        .row(titulo="Procedimiento")
          .col-lg-6.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/2.png')
          .col-lg-6
            p El establecimiento farmacéutico habilitado para el servicio de inyectología, debe contar y aplicar: antes, durante y después del procedimiento, los protocolos de limpieza y desinfección de áreas, bioseguridad, manejo de residuos derivados de la atención en salud; al igual que todo lo relacionado con la salud y seguridad en el entorno laboral. Al mismo tiempo es de imperiosa necesidad contar con el Plan de Gestión de Residuos derivados de la atención en salud PGIRHS.
        .row(titulo="Contravenciones")
          .col-lg-6.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/3.png')
          .col-lg-6
            p No administrar ningún medicamento por #[strong(style="color:#FF0000;") vía intravenosa] ni practicar #[strong(style="color:#FF0000;") pruebas de sensibilidad]. El dependiente no está autorizado para cambiar o cuestionar la orden médica, hacer un diagnóstico personal, formular o recomendar medicamentos diferentes a los prescritos. Adulterar o modificar de cualquier forma la prescripción médica constituye un delito sancionado penalmente. Es importante recordar que la persona responsable de realizar el procedimiento de inyectología NO podrá violar el principio de confidencialidad de la información del paciente, de acuerdo con su rol como profesional de la salud.
        .row(titulo="Administración del medicamento")
          .col-lg-6.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/4.png')
          .col-lg-6
            p La administración del medicamento por vía intramuscular solo se podrá realizar con la exigencia de la prescripción médica, la cual debe cumplir con los criterios o requisitos exigidos en el decreto 780 del 2016.
        .row(titulo="Infraestructura y dotación")
          .col-lg-6.mb-4.mb-lg-0
            ImagenInfografica.infografia1.color-acento-contenido
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema1/5.svg')
              .tarjeta.color-acento-botones.bg-white.p-3(x="14%" y="21%" numero="+")
                p.mb-0(style="color:inherit;") Área especial e independiente. Que brinde privacidad y comodidad al paciente. Iluminación y ventilación natural; temperatura de entre 15 y 25 grados centígrados.
              .tarjeta.color-acento-botones.bg-white.p-3(x="38%" y="21%" numero="+")
                p.mb-0(style="color:inherit;") Disponer de un lavamanos. En el mismo sitio o muy cerca para realizar el respectivo lavado de manos antes y después del procedimiento.
              .tarjeta.color-acento-botones.bg-white.p-3(x="62%" y="21%" numero="+")
                p.mb-0(style="color:inherit;") Tener toallas desechables.  Para manos con dispensador de pared.
              .tarjeta.color-acento-botones.bg-white.p-3(x="86%" y="21%" numero="+")
                p.mb-0(style="color:inherit;") Dispensador de jabón.  Líquido antibacterial.
              .tarjeta.color-acento-botones.bg-white.p-3(x="14%" y="47%" numero="+")
                p.mb-0(style="color:inherit;") Alcohol glicerinado / Gel antimaterial.  Para la higienización de las manos.
              .tarjeta.color-acento-botones.bg-white.p-3(x="38%" y="47%" numero="+")
                p.mb-0(style="color:inherit;") Alcohol antiséptico 70°.  Con dispensador espray o isopañines para la asepsia de la piel.
              .tarjeta.color-acento-botones.bg-white.p-3(x="62%" y="47%" numero="+")
                p.mb-0(style="color:inherit;") Camilla, escalerilla y mesa auxiliar.
              .tarjeta.color-acento-botones.bg-white.p-3(x="86%" y="47%" numero="+")
                p.mb-0(style="color:inherit;") Dispositivos médicos con registro INVIMA.  Fechas de vencimiento vigentes y almacenados de acuerdo a la recomendación del fabricante, como: jeringas y agujas desechables, recipiente con torundas de algodón y cubetas.
              .tarjeta.color-acento-botones.bg-white.p-3(x="14%" y="72%" numero="+")
                p.mb-0(style="color:inherit;") Elementos de protección personal.  guantes, tapabocas.
              .tarjeta.color-acento-botones.bg-white.p-3(x="38%" y="72%" numero="+")
                p.mb-0(style="color:inherit;") Contenedor de paredes rígidas.  Para desecho de cortopunzantes.
              .tarjeta.color-acento-botones.bg-white.p-3(x="62%" y="72%" numero="+")
                p.mb-0(style="color:inherit;") Caneca y bolsa plástica roja. Para desechos biosanitarios.
              .tarjeta.color-acento-botones.bg-white.p-3(x="86%" y="72%" numero="+")
                p.mb-0(style="color:inherit;") Caneca y bolsa plástica color verde. Para desechos ordinarios.
              .tarjeta.color-acento-botones.bg-white.p-3(x="50%" y="95%" numero="+")
                p.mb-0(style="color:inherit;") Caneca y bolsa color gris. Para plástico, papel y cartón limpio y seco.

          .col-lg-6
            p El establecimiento farmacéutico que ofrezca el servicio de inyectología debe estar habilitado por el ente territorial de salud correspondiente; igualmente debe llevar un registro de las visitas de inspección, vigilancia y control. Tanto el certificado de habilitación y los permisos de IVC deben estar en lugares visibles, donde los usuarios puedan corroborar la información que deseen.
        .row(titulo="Registro")
          .col-lg-12.mb-3
            p Formato debidamente diligenciado y firmado por la persona que administra el medicamento. Es importante mantener los registros en archivo, durante el tiempo contemplado en la normatividad vigente. Se presenta un Ejemplo de formato Consentimiento informado para el registro diario del procedimiento.
          .col-lg-12
            figure
              img(src='@/assets/curso/tema1/6.svg')
        .row(titulo="Posterior a la administración")
          .col-lg-6.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/7.png')
          .col-lg-6
            p La vigilancia y control sobre los procedimientos de inyectología corresponden a las entidades territoriales de salud que hayan autorizado a dichos establecimientos la práctica de estas actividades y la oferta del servicio a la comunidad circundante.
        .row(titulo="Vigilancia y control")
          .col-lg-6.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/8.png')
          .col-lg-6
            p La vigilancia y control sobre los procedimientos de inyectología corresponden a las entidades territoriales de salud que hayan autorizado a dichos establecimientos la práctica de estas actividades y la oferta del servicio a la comunidad circundante.




 

      
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
<style lang="sass">
.infografia1 .img-infografica__item__dot
  padding: 1.8rem
  left: -25px
.infografia1 .img-infografica__item__dot:before
  background-color: transparent !important
</style>
