<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-up")
      .titulo-principal__numero
        span 3
      h1 Seguridad del paciente
    
    p(data-aos="zoom-in") La política de seguridad del paciente, no solo se refiere al ambiente hospitalario, también se pueden presentar fallas activas o acciones inseguras durante la administración de un medicamento en la residencia de los pacientes, en las droguerías y farmacias-droguerías y en los transportes asistenciales básicos o medicalizados, por lo que se prioriza la búsqueda de barreras de seguridad para minimizar los incidentes y eventos adversos durante la administración de un medicamento.
    p.mt-4(data-aos="zoom-in") A continuación, se definen algunos conceptos necesarios para #[span.p-1(style="background-color:#E8F7FF;") entender la diferencia entre incidentes y eventos adversos (INVIMA, 2015)].
    
    TabsB.color-acento-contenido.mt-5
      .py-4.py-md-5(titulo="Evento adverso")
        .row
          .col-lg-7.mb-4.mb-lg-0
            p Daño no intencionado al paciente o medio ambiente que ocurre como consecuencia de la utilización de un medicamento o dispositivo médico.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema3/1.png')
      .py-4.py-md-5(titulo="Evento adverso serio")
        .row
          .col-lg-7.mb-4.mb-lg-0
            p Acción no intencionada que pudo haber llevado a la muerte o al deterioro serio de la salud del paciente, como consecuencia de la utilización de un medicamento o dispositivo médico.
            p.mt-4 Se considera como deterioro serio de la salud:
            ul.fa-ul.mt-3.mb-0
              li.mb-2
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Enfermedad o daño que amenace la vida.
              li.mb-2
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Daño de una función o estructura corporal. 
              li.mb-2
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Condición que requiera una intervención médica o quirúrgica para prevenir un daño permanente de una estructura o función caporal. 
              li.mb-2
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Evento que lleve a una incapacidad permanente parcial. 
              li.mb-2
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Evento que necesite una hospitalización o una prolongación en la hospitalización. 
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Evento que sea el origen de una malformación congénita.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema3/2.png')
      .py-4.py-md-5(titulo="Incidente adverso")
        .row
          .col-lg-7.mb-4.mb-lg-0
            p Potencial daño no intencionado al paciente, que ocurre como consecuencia de la utilización de un medicamento o dispositivo médico.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema3/3.png')
      .py-4.py-md-5(titulo="Incidente adverso serio")
        .row
          .col-lg-7.mb-4.mb-lg-0
            p Potencial riesgo de daño no intencionado que pudo haber llevado a la muerte o al deterioro serio de la salud del paciente, pero que por causa del azar o la intervención de un profesional de la salud u otra persona, o una barrera de seguridad, no generó un desenlace adverso. 
          .col-lg-5
            figure
              img(src='@/assets/curso/tema3/4.png')
      .py-4.py-md-5(titulo="Incidente adverso no serio")
        .row
          .col-lg-7.mb-4.mb-lg-0
            p Potencial riesgo de daño no intencionado diferente a los que pudieron haber llevado a la muerte o al deterioro serio de la salud del paciente, pero que por causa del azar o la intervención de un profesional de la salud u otra persona, o una barrera de seguridad, no generó un desenlace adverso. 
          .col-lg-5
            figure
              img(src='@/assets/curso/tema3/5.png')
    
    p.mt-5(data-aos="fade-up") Los eventos adversos a medicamentos (EAM) ocurren con frecuencia y aumentan la morbimortalidad de los pacientes, constituyéndose en un nuevo problema de la salud pública. El evento adverso a medicamento (EAM) cubre la reacción adversa a medicamentos (RAM) y el error de medicación (EM), como se muestra en las siguientes imágenes.

    .tarjeta.tarjeta--azul.p-4.p-md-5.mt-5
      SlyderA(tipo="b")
        .row
          h5 Asma
          figure
            img(src='@/assets/curso/tema3/6.png')
        .row
          h5 Fallas respiratorias
          figure
            img(src='@/assets/curso/tema3/7.png')
        .row
          h5 Paro cardiaco
          figure
            img(src='@/assets/curso/tema3/8.png')
        .row
          h5 Reacción alérgica
          figure
            img(src='@/assets/curso/tema3/9.png')
        .row
          h5 Daño dental
          figure
            img(src='@/assets/curso/tema3/10.png')
        .row
          h5 Muerte
          figure
            img(src='@/assets/curso/tema3/11.png')
    
    p.mt-5(data-aos="fade-up") A través de la observación detallada de las anteriores imágenes surgen las siguientes preguntas:

    ul.fa-ul.mt-4.mb-0
      li.mb-2(data-aso="fade-right")
        i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
        | ¿Cuál de estas imágenes puede ser un EAM ocasionado por la administración de un medicamento?
      li.mb-2(data-aso="fade-right")
        i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
        | ¿Qué gravedad pueden tener los EAM por la administración de un medicamento?
      li.mb-2(data-aso="fade-right")
        i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
        | ¿Qué puede suceder si se comete un error en la administración de un medicamento?
      li.mb-2(data-aso="fade-right")
        i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
        | ¿Qué responsabilidad tiene administrar un medicamento?
      li(data-aso="fade-right")
        i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
        | ¿Qué consecuencias puede tener administrar inadecuadamente un medicamento? 
    
    p.mt-5(data-aos="fade-up") El error de medicación es uno de los más frecuentes tipos de Eventos Adversos a Medicamentos y tienen como características el hecho de poder ser evitado, esto ocurre en cualquier etapa del proceso de medicación:

    ul.fa-ul.mt-4.mb-0
      li.mb-2(data-aso="fade-right")
        i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
        | Prescripción.
      li.mb-2(data-aso="fade-right")
        i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
        | Distribución.
      li(data-aso="fade-right")
        i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
        | Administración de medicamentos. 
    
    p.mt-5(data-aos="fade-up") Ocurre con cualquier profesional del equipo multidisciplinar, responsable por acciones dirigidas a la terapia medicamentosa: médicos, farmacéuticos y enfermeros.

    .col-xl-10.col-lg-10.m-auto.mt-5
      .cajon.color-acento-contenido.p-4(style="background-color:#BFEEF4;")
        p.mb-0(data-aos="zoom-in") #[strong El evento adverso medicamentoso] es cualquier signo no intencionado o desfavorable o enfermedad asociada temporalmente con el uso de un producto farmacéutico, provocada como respuesta a cualquier dosis usada” definición que se asemeja a la de reacción adversa al medicamento, con la diferencia que la reacción adversa se puede prever por las descripciones técnicas y no tiene que ver con error en la prescripción, solicitud y administración del mismo. 
    
    p.mt-5(data-aos="fade-up") Los pasos susceptibles de error en el proceso de medicación son:

    .col-xl-8.col-lg-10.m-auto.mt-5
      PasosA.color-acento-contenido(tipo="n")
        .row(data-aos="zoom-in")
          h5 Prescripción
          p Necesidad del medicamento y uso correcto.
        .row(data-aos="zoom-in")
          h5 Revisión de la orden o prescripción médica
          p Procesamiento de la orden, composición y procesamiento del medicamento.
        .row(data-aos="zoom-in")
          h5 Administración
          p Administración del medicamento correcto al paciente correcto; administración en el momento indicado; información al paciente acerca de la administración del medicamento.
        .row(data-aos="zoom-in")
          h5 Seguimiento
          p Seguimiento y documentación de la respuesta del paciente; identificación y reporte de las reacciones adversas a medicamentos; Información al médico tratante para que reevalúe la selección del medicamento, dosis, vía, frecuencia y duración del tratamiento. 
    
    p.mt-5(data-aos="fade-up") Los pasos susceptibles de error en el proceso de medicación son:

    ul.fa-ul.mt-4.mb-0
      li.mb-2(data-aso="fade-right")
        i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
        | La administración de dosis excesivas.
      li.mb-2(data-aso="fade-right")
        i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
        | La ingesta de un fármaco destinado para uso externo.
      li(data-aso="fade-right")
        i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
        | La acumulación del fármaco en la sangre por la alteración del metabolismo o la eliminación (efecto acumulativo).
    
    p.mt-5(data-aos="fade-up") Algunos efectos tóxicos aparecen de inmediato, mientras que otros lo hacen pasadas semanas o meses. Una alergia a un fármaco es una reacción inmunitaria provocada por un medicamento. En la primera exposición del paciente a una sustancia extraña (antígeno) el organismo reacciona produciendo anticuerpos. En las exposiciones siguientes el paciente puede reaccionar frente al fármaco como lo hace frente a un antígeno, y desarrollar síntomas de reacción alérgica. Las reacciones alérgicas pueden ser leves o graves, la reacción leve se caracteriza por distintos síntomas, desde la erupción cutánea hasta la diarrea.

    .col-xl-10.col-lg-10.m-auto.mt-5
      .cajon.color-primario.p-4(style="background-color:#E2EEFE;")
        p.mb-0(data-aos="zoom-in") La administración de cualquier tipo de medicamento requiere de una alta responsabilidad, más aun cuando el procedimiento se realiza fuera del área hospitalaria y no se cuenta con apoyo técnico y tecnológico que se pueda utilizar en el momento oportuno.

    p.mt-5(data-aos="fade-up") Una estrategia para disminuir el error o fallo en la administración de medicamentos es definitivamente la verificación de los 10 correctos y los 4 YO, como se puede ver a continuación: 

    .col-xl-11.m-auto.mt-5
      ImagenInfografica.infografia2.color-acento-botones
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/tema3/12.svg' data-aos="zoom-in-up")
        .tarjeta.color-acento-botones.bg-white.p-3(x="10%" y="11%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
          p.mb-0(style="color:inherit;") Dosis apropiada acorde a medicamento, paciente e indicación. Indicación terapéutica.
        .tarjeta.color-acento-botones.bg-white.p-3(x="96%" y="11%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
          p.mb-0(style="color:inherit;") Chequear si la respuesta (T°, FC, TA…) al medicamento administrado es la esperada o no.
        .tarjeta.color-acento-botones.bg-white.p-3(x="10%" y="31%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
          p.mb-0(style="color:inherit;") Es muy importante documentar la administración de la medicación (lo que no se registra, ¡no existe!)
        .tarjeta.color-acento-botones.bg-white.p-3(x="96%" y="31%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
          p.mb-0(style="color:inherit;")  Leer las etiquetas y envases para asegurar que es el medicamento prescrito.
        .tarjeta.color-acento-botones.bg-white.p-3(x="4%" y="51%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
          p.mb-0(style="color:inherit;") Usar varios identificadores (nombre y apellidos, fecha de nacimiento, pulsera, etc.).
        .tarjeta.color-acento-botones.bg-white.p-3(x="96%" y="51%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
          p.mb-0(style="color:inherit;") Tener en cuenta el horario de administración (antibióticos sobre todo).
        .tarjeta.color-acento-botones.bg-white.p-3(x="24%" y="71%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
          p.mb-0(style="color:inherit;") Los pacientes deben ser informados sobre toda la medicación que se les administra.
        .tarjeta.color-acento-botones.bg-white.p-3(x="76%" y="71%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
          p.mb-0(style="color:inherit;") Estabilidad. Conservación. fecha de caducidad (medicamento y sueros) tipo/volumen de diluyente y suero.
        .tarjeta.color-acento-botones.bg-white.p-3(x="8%" y="91%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
          p.mb-0(style="color:inherit;") Comprobar siempre que la vía de administración sea la correcta.
        .tarjeta.color-acento-botones.bg-white.p-3(x="95%" y="91%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
          p.mb-0(style="color:inherit;") Velocidad Gotas-mL/tiempo.
    
    figure.mt-5
      img(src="@/assets/curso/tema3/13.png" data-aos="zoom-in-up")
    
    p.mt-5(data-aos="zoom-in") Algunos efectos tóxicos aparecen de inmediato, mientras que otros lo hacen pasadas semanas o meses. Una alergia a un fármaco es una reacción inmunitaria provocada por un medicamento. En la primera exposición del paciente a una sustancia extraña (antígeno) el organismo reacciona produciendo anticuerpos. En las exposiciones siguientes el paciente puede reaccionar frente al fármaco como lo hace frente a un antígeno, y desarrollar síntomas de reacción alérgica. Las reacciones alérgicas pueden ser leves o graves, la reacción leve se caracteriza por distintos síntomas, desde la erupción cutánea hasta la diarrea.

    .titulo-sexto.color-acento-contenido.mt-5
      h5.d-block Tabla 2
      span Estrategia para disminuir errores en la administración de medicamentos

    .mt-4
      .tabla-a.color-acento-contenido(data-aos="zoom-in-up")
        table
          thead
            tr(style="background-color:#E8E8E8;")
              th.p-4(style="border:0;") Caracterización del proceso
              th.p-4(style="border:0;") Posibles fallas activas o acciones inseguras
              th.p-4(style="border:0;") Barreras de seguridad
              th.p-4(style="border:0;") Justificación de la intervención
          tbody
            tr
              td.p-4 Lavado de manos.
              td.p-4 Infección en el área de inserción.
              td.p-4 Lavarse las manos con agua y solución desinfectante.
              td.p-4 Previene la transmisión de infecciones.
            tr
              td.p-4 Se alistan los equipos.
              td.p-4 
              td.p-4 Acuda al lado del paciente con la bandeja con el equipo completo.
              td.p-4 Ofrece seguridad y oportunidad en la atención.
            tr
              td.p-4 Identificación de los 10 correctos y los 4 YO.
              td.p-4 Paciente alérgico a las penicilinas.
              td.p-4 Identifique el paciente y verifique los diez correctos: paciente, orden médica, medicamento, dosis vía de administración.
              td.p-4 Es un principio básico y el practicarlo evita cometer errores.
            tr
              td.p-4 Informar al paciente del procedimiento.
              td.p-4 Infección en el área de inserción.
              td.p-4 Explique el procedimiento al paciente.
              td.p-4 Disminuye la ansiedad y favorece la colaboración.
            tr
              td.p-4 Preparación del medicamento según orden médica.
              td.p-4 
              td.p-4 Prepare el medicamento prescrito según orden médica.
              td.p-4 Garantiza un tratamiento estricto y específico para el paciente.
            tr
              td.p-4 Posición y ubicación de la zona a puncionar.
              td.p-4 Paciente alérgico a las penicilinas.
              td.p-4 Coloque al paciente en la posición correcta según la zona de punción: dorso glúteo.
              td.p-4 Evita cometer errores y provoca menos dolor en el paciente.
            tr
              td.p-4 Desinfección de la zona de punción.
              td.p-4 Infección en el área de inserción.
              td.p-4 Desinfecte con torundas impregnadas de solución desinfectante en un área de 5 cm de diámetro. Espere que se seque antes de puncionar.
              td.p-4 Utilice un movimiento circular de adentro hacia afuera.
            tr
              td.p-4 Puncionar.
              td.p-4 
              td.p-4 Puncione con la jeringa perpendicularmente a la piel, en forma rápida y firme en el ángulo interno del cuadrante superior externo.
              td.p-4 La incisión rápida disminuye en dolor al introducir la aguja.
            tr
              td.p-4 Aspiración en verificación de la zona del procedimiento.
              td.p-4 Paciente alérgico a las penicilinas.
              td.p-4 Aspire, si sale sangre retire un milímetro la aguja y vuelva a aspirar.
              td.p-4 Garantiza que la aplicación sea intramuscular verdadera.
            tr
              td.p-4 Administrar el medicamento.
              td.p-4 Infección en el área de inserción.
              td.p-4 Inyecte el líquido lentamente.
              td.p-4 La inyección lenta, permite una buena difusión tisular del medicamento y disminuye el dolor.
            tr
              td.p-4 Retirar la aguja.
              td.p-4 
              td.p-4 Retire la aguja con movimiento rápido, haga presión con algodón en el sitio de punción.
              td.p-4 Hacer hemostasia en el caso de sangrado.
            tr
              td.p-4 Observar reacciones adversas si las hay.
              td.p-4 Paciente alérgico a las penicilinas.
              td.p-4 Observe si el paciente presenta alguna reacción adversa.
              td.p-4 Algunos medicamentos pueden producir reacciones de hipersensibilidad que requieren ser tratadas de inmediato.
            tr
              td.p-4 Organizar el equipo.
              td.p-4 Infección en el área de inserción.
              td.p-4 Retire el equipo y organícelo en el sitio correspondiente.
              td.p-4 Garantiza que se mantendrá disponibles los elementos necesarios.
            tr
              td.p-4 Lavado de manos.
              td.p-4 
              td.p-4 Lávese las manos.
              td.p-4 El lavado de manos disminuye los microorganismos patógenos de la piel y evita la diseminación de estos hacía unos mismos o hacia los otros pacientes.
            tr
              td.p-4 Informar al personal de salud.
              td.p-4 Paciente alérgico a las penicilinas.
              td.p-4 De información al paciente sobre la fecha, hora, de la próxima aplicación de medicamento. 
              td.p-4 Garantiza la adherencia y continuidad del paciente al tratamiento.
            tr
              td.p-4 Registrar medicamentos utilizados y sus respectivos insumos.
              td.p-4 Infección en el área de inserción.
              td.p-4 Registre los medicamentos e insumos utilizados.
              td.p-4 Hacer los registros pertinentes en la historia clínica inmediatamente concluya el proceso de administración de medicamentos. Utilizar la hora militar para evitar confusiones. #[br] Firmar la hora de administración de medicamentos con la inicial del nombre apellido completo, con letra legible. No deben registrar medicamentos que hayan sido administrados por otras personas. 







 

      
</template>

<script>
export default {
  name: 'Tema3',
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
.infografia2 .img-infografica__item__dot
  padding: 1.8rem
  left: -16px
</style>
