<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Generalidades de microbiología
    
    .row.justify-content-center
      .col-xl-5.col-lg-6.px-0.mb-lg-0.mb-4
        figure
          img(src="@/assets/curso/tema4/1.png" data-aos="zoom-in-right" alt="Imagen decorativa")
      .col-xl-5.col-lg-6.px-0
        .h-100.p-4.text-white.d-flex.flex-wrap.align-content-center(style="background-color:#7E5EE3;" data-aos="zoom-in-left")
          p La microbiología es la ciencia que estudia los microorganismos como los virus, las bacterias, los hongos y los parásitos; todos son organismos microscópicos que hacen parte de la biología de los seres vivos. A este grupo de microorganismos también se les denomina Microbios o Gérmenes.
          p.mt-4.mb-0 Los microorganismos son células capaces de existir de forma libre o independiente, son los seres vivos más diminutos que solo pueden ser observados a través de un microscopio; la mayoría son unicelulares, son de diferentes tamaños y formas, cada uno posee diversas características por lo que pueden ser patógenos, o sea, causantes de infecciones y enfermedad. 
    
    .col-xl-8.col-lg-10.m-auto.mt-5
      .cajon.color-acento-contenido.p-4(style="background-color:#BFEEF4;")
        p.mb-0(data-aos="zoom-in") El microorganismo patógeno o infeccioso, es cualquier germen capaz de producir en el ser humano (huésped) infección o enfermedad. Tal capacidad es dada por la concentración microbiana, la resistencia microbiana, el tamaño del inóculo y el ciclo en que se encuentre. 
    
    p.mt-5(data-aos="fade-right") La vía de transmisión es el mecanismo mediante el cual el germen ingresa al huésped susceptible (aquel que no ha desarrollado inmunidad activa o pasiva frente al germen infectante). Esta puede ser por:

    ul.fa-ul.mt-4.mb-0
      li.mb-2(data-aos="fade-right")
        i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
        | Contacto.
      li.mb-2(data-aos="fade-right")
        i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
        | Gotas.
      li.mb-2(data-aos="fade-right")
        i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
        | Aerosoles.
      li.mb-2(data-aos="fade-right")
        i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
        | Un vehículo común.
      li(data-aos="fade-right")
        i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
        | Vectores.
    
    Separador
    #t_4_1.titulo-segundo(data-aos="fade-right")
      h2 4.1 Bacterias, virus, hongos, protozoos
    
    p(data-aos="fade-right") A continuación, se describen las características de los diferentes microorganismos mencionados anteriormente.

    h5.mt-5(data-aos="fade-left") Bacterias
    p(data-aos="fade-right") Organismos unicelulares procariotas, se reproducen sin invadir la célula (tuberculosis, cólera, etc.) se caracterizan por:
    
    .tarjeta.tarjeta--azul.p-4.p-md-5.mt-4
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-lg-5.order-lg-1.order-2
            p Las bacterias son organismos unicelulares, sin núcleo, diminutos que se alimentan del ambiente en que viven. En algunos casos, ese ambiente será el cuerpo de otro ser vivo.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema4/2.png' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-5.order-lg-1.order-2
            p En el cuerpo humano, algunas bacterias ayudan a que el sistema digestivo funcione correctamente e impiden que entren bacterias nocivas en su interior; por el contrario, las bacterias también pueden causar problemas, como las caries dentales, las infecciones de las vías urinarias, las infecciones de oído o la faringitis.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema4/3.png' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-5.order-lg-1.order-2
            p Otras bacterias se utilizan para elaborar medicamentos y vacunas. Para combatir una infección producida por bacterias, es necesario tomar o inyectar un antibiótico, éste debe ser específico para la clase de bacteria que eta produciendo la infección, lo que significa que cualquier antibiótico no sirve para una infección en el pulmón como en la piel.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema4/4.png' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-5.order-lg-1.order-2
            p Las bacterias aeróbicas obtienen energía por respiración. Las anaeróbicas por fermentación (degradación de glúcidos en anaerobiosis). Otras utilizan el proceso de putrefacción para su supervivencia. 
            p.mt-4 Ejemplos de bacterias: Escherichia coli y Salmonella, Helicobacter pylori, Neisseria gonorrhoeae, Staphylococcus aureus, Streptococcus, Pseudomonas, ente otras.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema4/5.png' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-5.order-lg-1.order-2
            p Según su forma, hay cuatro formas básicas muy comunes en las bacterias: 
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span.text-bold 1
                | Esférica.
              li 
                .lista-ol--cuadro__vineta
                  span.text-bold 2
                | Alargada o cilíndrica es un bacilo.
              li 
                .lista-ol--cuadro__vineta
                  span.text-bold 3
                |  Cuando aparecen uno o más dobleces en la longitud de la célula que le dan forma espiral es un espirilo.
              li 
                .lista-ol--cuadro__vineta
                  span.text-bold 4
                | Si tiene forma de coma: vibrios.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema4/6.svg' alt="Imagen decorativa")
    
    h5.mt-5(data-aos="fade-left") Virus
    p(data-aos="fade-right") Parásitos celulares que se introducen en la célula para reproducirse (gripe, sida, dengue, etc.) algunas generalidades sobre los virus son:
    
    .tarjeta.tarjeta--azul.p-4.p-md-5.mt-4(data-aos="fade-right")
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-lg-5.order-lg-1.order-2
            p Los virus no se consideran células completas, más pequeños que las bacterias; solo son material genético (DNA o RNA) empaquetado dentro de una cubierta proteica, por lo que necesitan usar las estructuras de otras células para poderse reproducir. 
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema4/7.png' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-5.order-lg-1.order-2
            p Los virus no sobreviven sin estar dentro de un organismo vivo, como, por ejemplo:
            ol.lista-ol
              li 
                span.text-bold 
                | Una persona.
              li 
                span.text-bold  
                | Un animal.
              li 
                span.text-bold  
                | Una planta.
            p.mt-3 Fuera de células vivas, los virus pueden vivir por muy poco tiempo, por esta razón, los virus que se encuentran en fluidos corporales como saliva, moco, esputo, sudor, al quedar en las superficies, como la chapa o manija de una puerta o el asiento de un inodoro, solo pueden vivir durante un período breve de tiempo; morirán rápidamente a menos que entren en contacto con las mucosas de un nuevo organismo vivo. Vale la pena aclarar, que la capacidad que tienen algunos virus de mutar o cambiar rápidamente, ha hecho que se vuelvan más fuertes fuera del huésped y por lo tanto mucho mas agresivos o peligrosos, especialmente para el ser humano.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema4/8.svg' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-5.order-lg-1.order-2
            p Cuando un virus se introduce en el cuerpo de una persona, se multiplican rápidamente hasta hacerla enfermar. Hay virus que originan enfermedades de poca importancia, como la gripe o el resfriado común; también pueden originar enfermedades muy graves, como el SIDA, SARS-CoV 2 y el Ébola, entre otros. Para combatir los virus se utilizan:
            ol.lista-ol
              li 
                span.text-bold 
                | Los medicamentos antivirales.
              li 
                span.text-bold  
                | Los medicamentos retrovirales.
            p.mt-3 Algunas vacunas sirven para prevenir o mejorar la respuesta inmunológica del organismo.
            p.mt-4 Por lo anterior es importante resaltar que los antibióticos no son eficaces contra los virus.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema4/9.svg' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-5.order-lg-1.order-2
            p El sistema inmunológico del ser humano utiliza diversas formas para atacar los agentes infecciosos; los virus tratan de evitarlo, haciendo más copias de sí mismo, para de esta forma propagarse a otros huéspedes. Las características o adaptaciones nuevas que hacen evadir las defensas del organismo, es lo que se llama mutación, lo cual se mantiene de una generación a otra del virus, mientras que las defensas de los huéspedes tienden a perderse.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema4/10.png' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-5.order-lg-1.order-2
            p El modo en que los huéspedes se defienden de un virus es desarrollando anticuerpos, los cuales se fijan a las proteínas de la superficie exterior del virus, con lo que le impiden entrar a las células del huésped. 
            p.mt-4 Un virus que simula ser diferente a otros que han infectado al huésped tiene una ventaja, ya que el huésped no tiene una inmunidad precedente contra ese virus en forma de anticuerpos. 
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema4/11.png' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-5.order-lg-1.order-2
            p Muchas adaptaciones virales involucran cambios en la superficie exterior del virus. Un ejemplo típico es el virus que origina la influenza; cuando se inician los síntomas el organismo inicia un proceso de defensas contra ese virus específico, la infección se desarrolla y termina, creando en ese individuo una memoria inmunológica para defenderse posteriormente; sin embargo esa misma persona  con el tiempo se expone o tiene contacto nuevamente con otra persona con el virus de la influenza puede volver a enfermar ya que es una nueva cepa del mismo virus , para lo cual su organismo no está preparado y no se defiende. 
            p.mt-4 Por lo anterior es que para los adultos mayores y los niños es muy importante vacunarse cada año contra la influenza, la cual contiene la información de varias familias de virus y el sistema inmunológico se prepara para defenderse.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema4/12.png' alt="Imagen decorativa")
    
    h5.mt-5(data-aos="fade-left") Se invita al aprendiz a ver el vídeo explicativo Cómo mutan los virus y cómo podría evolucionar el coronavirus, ubicado en el material complementario.
    
    h5.mt-5(data-aos="fade-left") Hongos
    p(data-aos="fade-right") Organismos unicelulares microscópicos o multicelulares macroscópicos; aerobios y heterótrofos, parecidos a las plantas, se caracterizan por:
    
    .tarjeta.tarjeta--azul.p-4.p-md-5.mt-4(data-aos="fade-right")
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-lg-5.order-lg-1.order-2
            p Consiguen el alimento de las plantas, de los alimentos y de los animales en ambientes húmedos y cálidos. Son organismos eucariotas, incapaces de sintetizar sus nutrientes y por lo tanto se consideran saprófitos o parásitos, descomponen la materia orgánica, y son capaces de contaminar los cuerpos de otros seres vivos. Poseen pared celular como las plantas, pero de quitina en lugar de celulosa, y se reproducen mediante esporas, tanto sexual o asexualmente. 
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema4/13.png' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-5.order-lg-1.order-2
            p Las infecciones por hongos, como el pie de atleta (Tinea pedis), que se aloja en la piel, por la humedad, producto de la sudoración, no representan ningún peligro para una persona sana. Sin embargo, las personas inmunodeprimidas, por enfermedades como el SIDA o el cáncer, pueden desarrollar infecciones por hongos mucho más graves.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema4/14.png' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-5.order-lg-1.order-2
            p Las infecciones por levaduras, que se originan cuando se pierde el equilibro de los microorganismos que habitualmente conviven en el cuerpo no suelen ser peligrosas, sin embargo, al ingresar al torrente sanguíneo se pueden propagar a otras partes del cuerpo; este tipo de infecciones son muy comunes en recién nacidos de bajo peso, personas diabéticas, o pacientes en tratamiento oncológico.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema4/15.svg' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-5.order-lg-1.order-2
            p Las infecciones por hongos son llamadas micóticas y son tratables en su gran mayoría por medicamentos conocidos como fungicidas o antimicóticos; pueden ser transmisibles, como por ejemplo la Candida albicans (origen de la candidiasis de transmisión sexual). 
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema4/16.png' alt="Imagen decorativa")
    
    h5.mt-5(data-aos="fade-left") Protozoos
    p(data-aos="fade-right") Organismos unicelulares, como las bacterias, se hallan en ambientes húmedos o acuáticos, y se pueden considerar animales microscópicos. 
    
    .tarjeta.tarjeta--azul.p-4.p-md-5.mt-4(data-aos="zoom-in")
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-lg-5.order-lg-1.order-2
            p Se les llama de 2 maneras, protozoos o protozoarios, sin embargo, hacen parte de un reino propio llamado protozoa; y forman parte del Reino protista, puesto que se consideran el primer eslabón evolutivo de las células eucariotas, es decir antes de los animales, plantas, hongos y algas. Ostentan movilidad propia, se transportan por medio de flagelos, cilios o del alargamiento de su citoplasma como falsos pies.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema4/17.svg' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-5.order-lg-1.order-2
            p A los protozoarios, les encanta la humedad, por lo cual, las infecciones intestinales y otras enfermedades gastrointestinales, como las amebas y las giardias, fácilmente se transmiten a través del agua contaminada. Algunos protozoos son parásitos lo que significa que para vivir necesitan estar dentro de otro ser vivo. Por ejemplo, el protozoo que causa la malaria crece dentro de los eritrocitos, los cuales destruye cada vez que se reproducen. Otro ejemplo es la ameba, la cual se encapsula formando quistes, para poder vivir fuera del cuerpo humano y en ambientes extremos durante mucho tiempo; sin que esto sea un problema para su supervivencia.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema4/18.svg' alt="Imagen decorativa")
        .row.justify-content-center
          p Los protozoos se clasifican en:
          .ps-3.pe-2.mt-2
            .p-1(style="max-width:200px;background-color:#FF9D00;border:3px white solid;border-radius:4px;")
              h5.mb-0.ps-2.text-center Rizópodos
            p.mt-2 Desplazamiento mediante pseudópodos (falsos pies), que al mismo tiempo les sirven para atrapar el alimento solido e introducirlo al citoplasma lo que se llama: fagocitosis.
            .p-1.mt-4(style="max-width:200px;background-color:#00BCD4;border:3px white solid;border-radius:4px;")
              h5.mb-0.ps-2.text-center Flagelados
            p.mt-2 Células dotadas de uno o más flagelos, llamadas “colas” con las cuales se impulsan hacia adelante en el medio ambiente en que se encuentren.
            .p-1.mt-4(style="max-width:200px;background-color:#8CBCFA;border:3px white solid;border-radius:4px;")
              h5.mb-0.ps-2.text-center Ciliados
            p.mt-2 La membrana plasmática se encuentra rodeada de cilios, especie de filamentos más pequeños y numerosos que los flagelos, que también sirven para movilizarse.
            .p-1.mt-4(style="max-width:200px;background-color:#5B33DB;border:3px white solid;border-radius:4px;")
              h5.mb-0.ps-2.text-white.text-center Esporozoos
            p.mt-2 Son los famosos parásitos, con poca movilidad, pero poseen un tipo de reproducción asexual que consiste en producir esporas, que generan un nuevo individuo idéntico, los cuales son muy resistentes. Esta forma de división múltiple es conocida como esporulación.
          p.mt-1 Ejemplos de protozoos: Paramecio, Giardia. Amoeba. Tricomona; también son protozoos el origen de infecciones como la Malaria, Amebiasis y toxoplasmosis. 

    h5.mt-5(data-aos="fade-left") Priones
    p(data-aos="fade-right") Prion de la encefalopatía espongiforme (“enfermedad de la vaca loca”).

    .col-xl-8.m-auto.mt-4.col-lg-10
      figure
        img(src="@/assets/curso/tema4/19.png" data-aos="zoom-in-up" alt="Imagen decorativa")
    
    Separador
    #t_4_2.titulo-segundo(data-aos="fade-right")
      h2 4.2 Flora humana
    
    p(data-aos="fade-right") La piel y las mucosas del cuerpo humano representa una gran superficie de contacto con el medio ambiente; en ella residen microorganismos con características distintas de humedad, temperatura, pH y disponibilidad de nutrientes.
    p.mt-4(data-aos="fade-right") Los microorganismos que viven con el huésped en su estado normal, sin causarle enfermedad, es lo que se llama la flora humana; sin embargo, si aumentan en cantidad o llegan nuevas especies pueden dar origen a infecciones o enfermedades; es ahí donde representa un importante mecanismo de defensa del huésped. Contribuye al desarrollo de la respuesta inmunológica, además ayuda a evitar la colonización de la piel o las mucosas por bacterias que pueden ser patógenas.
    
    .col-xl-7.col-lg-10.m-auto.mt-5(data-aos="fade-right")
      .cajon.color-acento-contenido.p-4(style="background-color:#BFEEF4;")
        p.mb-0 La flora normal son microorganismos (bacterias y levaduras) que colonizan las mucosas y la piel, sin embargo, en el cuerpo humano existen partes que son estériles en condiciones normales. 
    
    h5.mt-5(data-aos="fade-left") Flora basal o residente
    p(data-aos="fade-right") Está constituida por gérmenes que siempre están presentes, sin mayor potencial de enfermar. Por ejemplo: Staphylococcus epidermidis en la piel o E. coli en el intestino.

    .col-xl-10.m-auto.mt-5
      .row
        .col-lg-6.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/tema4/20.png" data-aos="zoom-in-right" alt="Imagen que representa la flora residente y transitoria de la piel, la cual contiene los siguientes textos con cada germen: Mi nombre es Bacillus SP soy un contaminante normal. Me llamo Streptococcus beta grupo a me gusta la garganta. Causo diarreas mi nombre es Shigella. Yo me llamo Influenza “A” y amo la neumonía. Yo soy Klebsiella puendo infectar heridas. Yo soy Clostridium difficile y causo colitis. ¡Hola! Soy Starhylococcus puedo causarte infecciones graves. Llámame Bacteroide ¿te gustaría una infección de oído o una vaginitis? Me llamo Haemophilus soy altamente contagioso en conjuntivitis. ¡Amo a la gente! Causo infecciones urinarias. Me llamo Proteus. Soy un arma llamada Pseudomona aeruginosa yo infecto heridas con pus azul-verdoso. ¡Bu! Yo soy Escherichia coli. Causo diarreas e infecciones del tracto urinario.")
        .col-lg-6
          figure
            img(src="@/assets/curso/tema4/21.png" data-aos="zoom-in-left" alt="Imagen que representa la flora residente y transitoria de la piel, la cual contiene los siguientes textos con cada germen: Mi nombre es Bacillus SP soy un contaminante normal. Me llamo Streptococcus beta grupo a me gusta la garganta. Causo diarreas mi nombre es Shigella. Yo me llamo Influenza “A” y amo la neumonía. Yo soy Klebsiella puendo infectar heridas. Yo soy Clostridium difficile y causo colitis. ¡Hola! Soy Starhylococcus puedo causarte infecciones graves. Llámame Bacteroide ¿te gustaría una infección de oído o una vaginitis? Me llamo Haemophilus soy altamente contagioso en conjuntivitis. ¡Amo a la gente! Causo infecciones urinarias. Me llamo Proteus. Soy un arma llamada Pseudomona aeruginosa yo infecto heridas con pus azul-verdoso. ¡Bu! Yo soy Escherichia coli. Causo diarreas e infecciones del tracto urinario.")
      figcaption.fw-normal.mt-3 https://www.passeidireto.com/arquivo/50712409/higienizacao-das-maos

    p.mt-5(data-aos="fade-up") Algunas generalidades de la flora humana son: 

    TabsC.color-acento-contenido.mt-4(data-aos="fade-right")
      .py-3.py-md-4(titulo="Importancia de la flora normal")
        .row.justify-content-center.px-2
          .col-lg-7.order-lg-1.order-2
            ul.fa-ul.mb-0
              li.mb-3
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                p.mb-0 #[strong Efectos directos:] #[br] Producción de bacteriocinas. #[br] Producción de metabolitos tóxicos. #[br] Reducción del potencial redox. #[br] Consumo de nutrientes esenciales. #[br] Competencia por receptores.
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                p.mb-0 #[strong Efectos indirectos:] #[br] Aumento de la producción de anticuerpos. #[br] Estímulo de la fagocitosis. #[br] Aumento de la producción de interferón. #[br] De conjugación de ácidos biliares. 
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema4/22.svg' alt="Imagen decorativa")
      .py-3.py-md-4(titulo="Sitios estériles y colonizados")
        .row.justify-content-center.px-2
          .col-lg-7.order-lg-1.order-2
            p.fw-bold Sitios colonizados:
            ul.fa-ul.mb-0
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Piel y mucosas.
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Intestino delgado.
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Intestino grueso.
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Vagina.
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Tracto urinario interior.
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Estómago.
            p.fw-bold.mt-4 Sitios estériles:
            ul.fa-ul.mb-0
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Pleura.
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Meninges.
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Pericardio.
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Peritoneo.
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Útero.
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | Sistema circulatorio.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema4/23.png' alt="Imagen decorativa")
      .py-3.py-md-4(titulo="La flora transitoria")
        .row.justify-content-center.px-2
          .col-lg-7.order-lg-1.order-2
            p Varia de un ser humano a otro y está compuesta por microorganismos que colonizan en forma intermitente una determinada área, puede incluir bacterias potencialmente patógenas para el propio individuo u otras personas que entran en contacto con él.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema4/24.svg' alt="Imagen decorativa")
      .py-3.py-md-4(titulo="Equilibrio normal entre la flora <br> residente y transitoria")
        .row.justify-content-center.px-2
          .col-lg-7.order-lg-1.order-2
            p Cuando se pierde el equilibrio normal entre la flora residente y la flora transitoria, haciendo que aumente en cantidad la transitoria, es donde se presentan algunos signos como diarrea, fiebre, vómito, etc., que indican un mecanismo de defensa del organismo, por lo tanto, no se debe tratar de eliminar de inmediato el signo si no buscar el origen o causa, para iniciar el tratamiento adecuado. El abuso indiscriminado de los antibióticos hace que esa flora basal, reducida o débil, cree resistencia a los tratamientos. La bacteria resistente continúa creciendo y multiplicándose, haciendo a las infecciones más difíciles de tratar.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema4/25.svg' alt="Imagen decorativa")
    
    p.mt-5(data-aos="fade-right") A continuación, se describe la flora normal en distintas partes del cuerpo humano.

    .titulo-sexto.color-acento-contenido.mt-5(data-aos="fade-right")
      h5 Tabla 3.
      span Flora normal del cuerpo humano

    .mt-4
      .tabla-a.color-acento-contenido(data-aos="zoom-in-up")
        table
          tbody
            tr(style="background-color:#F6F6F6;" data-aos="fade-right")
              td.p-4.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;width: 30%" ) Cavidad oral
              td.p-4(style="border:0;") La flora oral es de tipo mixto, gérmenes aerobios y anaerobios. Las bacterias que se adhieren a la superficie dental, al aumentar por falta de higiene, producen enfermedades como caries y periodontitis.
            tr(style="background-color:#FFF;" data-aos="fade-right")
              td.p-4.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;width: 30%" ) Refrigeración
              td.p-4(style="border:0;") El tubo digestivo alberga muchas bacterias responsables de la síntesis de Vit K y Vit del complejo B. Además, compite con los microorganismos patógenos por nutrientes y receptores y elabora bacteriocinas.
            tr(style="background-color:#F6F6F6;" data-aos="fade-right")
              td.p-4.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;width: 30%" ) Vaginal
              td.p-4(style="border:0;") 
                p Depende de la cantidad de estrógenos, ya que estos determinan el número de células epiteliales, aumentando el glucógeno y disminuyendo el pH. La acidez inhibe las bacterias. Funciones: protege de la infección vaginal, en especial durante el embarazo.
                ul.fa-ul.mb-0
                  li.mb-1
                    i.fas.fa-atom.fa-li(style="color:#FF9D00;")
                    p.mb-0 #[b Pubertad:] dominan las enterobacterias y algunos bacilos Gram negativos anaerobios.
                  li.mb-1
                    i.fas.fa-atom.fa-li(style="color:#FF9D00;")
                    p.mb-0 #[b Edad genital activa:] predominan los Lactobacillus.
                  li.mb-1
                    i.fas.fa-atom.fa-li(style="color:#FF9D00;")
                    p.mb-0 #[b Gestación:] aumentan lactobacillus y levaduras que en ocasiones pueden causar síntomas.
                  li.mb-1
                    i.fas.fa-atom.fa-li(style="color:#FF9D00;")
                    p.mb-0 #[b Postmenopausia:] al final del estímulo hormonal, la flora retorna al patrón de la infancia.
            tr(style="background-color:#FFF;" data-aos="fade-right")
              td.p-4.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;width: 30%" ) Aparato respiratorio
              td.p-4(style="border:0;") El aparato respiratorio está dividido en dos: alto y bajo. En el sujeto normal solamente el árbol respiratorio alto (fosas nasales y faringe) presenta flora normal: los senos paranasales, oído medio, tráquea, bronquios pulmonares y pleura son estériles.
            tr(style="background-color:#F6F6F6;" data-aos="fade-right")
              td.p-4.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;width: 30%" ) Aparato urinario
              td.p-4(style="border:0;") Salvo la uretra anterior, el aparato urinario es estéril. La orina contribuye a mantener la vía urinaria libre de gérmenes, debido al arrastre, al pH ácido y a su elevada osmolaridad. 
    
    Separador
    #t_4_3.titulo-segundo(data-aos="fade-right")
      h2 4.3 Cadena de transmisión
    
    p(data-aos="fade-right") La ruta o serie de eslabones del agente infeccioso desde la fuente y los elementos que se articulan en la transmisión del germen hasta ocasionar una infección en el huésped vulnerable, es lo que se llama cadena de transmisión o epidemiológica.

    .col-xl-7.col-lg-10.m-auto.mt-5
      .cajon.color-acento-contenido.p-4(style="background-color:#BFEEF4;")
        p.mb-0(data-aos="zoom-in") Una infección es un estado de enfermedad resultante de la invasión y el crecimiento de microbios en el cuerpo. El equipo de salud debe seguir ciertos prácticos que previenen la propagación de la infección. El objetivo es proteger de las infecciones a pacientes, visitantes y al propio personal.
    
    p.mt-5(data-aos="fade-right") Los actores que participan en la cadena de transmisión son:

    ImagenInfografica.color-acento-botones.mt-5(data-aos="zoom-in")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema4/26.svg' alt="Imagen decorativa")
      .tarjeta.color-acento-botones.bg-white.p-3(x="5%" y="33%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
        p.mb-0(style="color:inherit;") Microorganismo (virus, bacteria, hongo, rickettsia, protozoario o parásitos) que invaden el cuerpo de un ser vivo ocasionando daños en sus tejidos (síntomas). Germen capaz de producir una infección o enfermedad infecciosa. 
        p.mt-3(style="color:inherit;") Propiedades: transmisibilidad, patogenicidad e inmunogenicidad.  
      .tarjeta.color-acento-botones.bg-white.p-3(x="17%" y="33%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
        p.mb-0(style="color:inherit;") Camino que toma el agente para salir de la fuente: Aparato respiratorio, Aparato digestivo, Piel, Placenta, Tracto genitourinario, etc.
      .tarjeta.color-acento-botones.bg-white.p-3(x="29%" y="33%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
        p.mb-0(style="color:inherit;") Forma en que el agente infeccioso se transmite del reservorio al huésped; se propaga de una fuente o reservorio a una persona. Puede ser transmisión directa e indirecta.
      .tarjeta.color-acento-botones.bg-white.p-3(x="23.5%" y="50%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
        p.mb-0(style="color:inherit;")  Transferencia directa del agente infeccioso a una puerta de entrada para que se pueda llevar a cabo la infección. Transmisión de persona a persona, a través de rociado de gotillas por en las conjuntivas o membranas mucosas de la nariz o boca al estornudar, toser, escupir, hablar o cantar, y por contacto directo como al tocar, besar, al tener relaciones sexuales.
      .tarjeta.color-acento-botones.bg-white.p-3(x="26%" y="66%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
        p.mb-0(style="color:inherit;") Objetos o materiales contaminados como juguetes, pañuelos, instrumentos quirúrgicos, agua, alimentos, leche, productos biológicos, incluyendo suero y plasma. El agente puede o no haberse multiplicado o desarrollado en el vehículo antes de ser transmitido.
      .tarjeta.color-acento-botones.bg-white.p-3(x="35.5%" y="66%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
        p.mb-0(style="color:inherit;") Insecto o cualquier portador vivo que transporta un agente infeccioso desde un individuo o sus desechos, hasta un individuo susceptible, su comida o su ambiente inmediato. El agente puede o no desarrollarse, propagarse o multiplicarse dentro del vector.
      .tarjeta.color-acento-botones.bg-white.p-3(x="45%" y="66%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
        p.mb-0(style="color:inherit;") Diseminación de aerosoles microbianos transportados hacia una puerta de entrada apropiada, generalmente el tracto.
      .tarjeta.color-acento-botones.bg-white.p-3(x="38%" y="78%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
        p.mb-0(style="color:inherit;") El agente necesariamente debe propagarse (multiplicarse), desarrollarse cíclicamente o ambos (ciclo propagación) en el artrópodo vector antes que pueda transmitir la forma infectante al ser humano.
      .tarjeta.color-acento-botones.bg-white.p-3(x="38%" y="89%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
        p.mb-0(style="color:inherit;") Es el simple traslado mecánico del agente infeccioso por medio de un insecto terrestre o volador, ya sea por contaminación de sus patas o trompa o por el pase a través de su tracto gastrointestinal, sin multiplicación o desarrollo cíclico del microorganismo.
      .tarjeta.color-acento-botones.bg-white.p-3(x="58%" y="33%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
        p.mb-0(style="color:inherit;") Individuo (o animal) infectado, que alberga un agente infeccioso específico de una enfermedad, sin presentar síntomas o signos clínicos, constituye fuente potencial de infección para el ser humano. Para que se origine una infección específica; el individuo debe cumplir con una serie de aspectos estructurales y funcionales.
      .tarjeta.color-acento-botones.bg-white.p-3(x="55%" y="45%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
        p.mb-0(style="color:inherit;") Es el intervalo de tiempo que transcurre entre la exposición a un agente infeccioso y la aparición del primer signo o síntoma de la enfermedad.
      .tarjeta.color-acento-botones.bg-white.p-3(x="55%" y="57.5%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
        p.mb-0(style="color:inherit;") Es el intervalo de tiempo que transcurre desde que se produce la infección hasta que la persona se vuelve infecciosa.
      .tarjeta.color-acento-botones.bg-white.p-3(x="55%" y="67%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
        p.mb-0(style="color:inherit;") Es el intervalo de tiempo durante el cual el agente infeccioso puede ser transferido directa o indirectamente de una persona infectada a otra persona, de un animal infectado al ser humano o de un ser humano infectado a un animal, inclusive artrópodos. Como regla general la mayoría de las enfermedades no son transmisibles durante la fase inicial del periodo de incubación ni después del completo restablecimiento del enfermo.
      .tarjeta.color-acento-botones.bg-white.p-3(x="74%" y="33%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
        p.mb-0(style="color:inherit;") Camino por el cual un agente infeccioso sale de su huésped o puerta de salida. 
      .tarjeta.color-acento-botones.bg-white.p-3(x="74%" y="49%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
        p.mb-0(style="color:inherit;") Las enfermedades que utilizan esta puerta de salida son las de mayor difusión y las más difíciles de controlar (tuberculosis, influenza, sarampión, etc.) 
      .tarjeta.color-acento-botones.bg-white.p-3(x="74%" y="62%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
        p.mb-0(style="color:inherit;") Propias de la sífilis, SIDA, gonorrea otras enfermedades de transmisión sexual, leptospirosis. 
      .tarjeta.color-acento-botones.bg-white.p-3(x="74%" y="74%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
        p.mb-0(style="color:inherit;") Propias de la tifoidea, hepatitis A y E, cólera, amebiasis. 
      .tarjeta.color-acento-botones.bg-white.p-3(x="74.2%" y="86.5%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
        p.mb-0(style="color:inherit;") A través de contacto directo con lesiones superficiales, como en la varicela, herpes zoster y sífilis. Por picaduras, mordeduras, perforación por aguja u otro mecanismo que conlleve contacto con sangre infectada, como en la sífilis, enfermedad de Chagas, malaria, leishmaniasis, fiebre amarilla, hepatitis B, etc. 
      .tarjeta.color-acento-botones.bg-white.p-3(x="74.2%" y="99%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
        p.mb-0(style="color:inherit;") En general la placenta es una barrera efectiva de protección del feto contra infecciones de la madre; sin embargo, no es totalmente efectiva para algunos agentes infecciosos como los de la sífilis, rubéola, toxoplasmosis, SIDA y enfermedad de Chagas.
      .tarjeta.color-acento-botones.bg-white.p-3(x="90.5%" y="33%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
        p.mb-0(style="color:inherit;") Organismo (animal, vegetal o humano) donde vive y se multiplica un agente infeccioso. 
      .tarjeta.color-acento-botones.bg-white.p-3(x="86%" y="49%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
        p.mb-0(style="color:inherit;") El hábitat normal en que vive se multiplica y/o crece un agente infeccioso.
      .tarjeta.color-acento-botones.bg-white.p-3(x="96%" y="49%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
        p.mb-0(style="color:inherit;")  Constituye una fuente, pero no un reservorio porque en él no puede multiplicarse el agente.
      .tarjeta.color-acento-botones.bg-white.p-3(x="85%" y="55.8%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
        p.mb-0(style="color:inherit;") Es cualquier ser humano, animal, artrópodo, planta, suelo o materia inanimada, donde normalmente vive y se multiplica un agente infeccioso y del cual depende para su supervivencia, reproduciéndose de manera que pueda ser transmitido a un huésped susceptible.
      .tarjeta.color-acento-botones.bg-white.p-3(x="94%" y="64.5%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
        p.mb-0(style="color:inherit;")  El hecho de que una enfermedad o grupo de enfermedades tenga al ser humano como reservorio es de gran importancia práctica, ya que las medidas de control que se adoptan pueden circunscribirse al mismo ser humano. Por ejemplo, si una enfermedad se puede tratar con un antibiótico adecuado, la acción directa se ejerce sobre el sujeto como paciente y como reservorio. 
        p.mt-3(style="color:inherit;") El reservorio principal de enfermedades como las de transmisión sexual, lepra, tos ferina, sarampión y fiebre tifoidea es el ser humano.
      .tarjeta.color-acento-botones.bg-white.p-3(x="97%" y="73.5%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
        p.mb-0(style="color:inherit;") Los animales pueden ser infectados y a la vez servir como reservorio para varias enfermedades del ser humano. Son ejemplos de ello la brucelosis, la leptospirosis, la peste, la psitacosis, la rabia y el tétanos.
    
    p.mt-5(data-aos="fade-right") Y los métodos de transmisión son:

    .titulo-sexto.color-acento-contenido.mt-5(data-aos="fade-right")
      h5 Figura 2.
      span Métodos de transmisión de microbios
    
    .col-xl-7.m-auto.mt-5(data-aos="zoom-in")
      ImagenInfografica.infografia3.color-secundario
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/tema4/27.svg' alt="Figura que muestra los métodos de transmisión de microbios, los cuales son: 1. Sangre, fluidos corporales, secreciones y excreciones. 2. Animales. 3. Insectos. 4. Vendajes. 5. Contacto directo. 6. Artículos de cuidado personal. 7. Utensilios para beber y comer. 8. Agua. 9. Alimentos. 10. Aire. 11. Toser, estornudar, reírse y cantar.")
        .tarjeta.color-acento-botones.bg-white.p-3(x="42%" y="5%" numero="1" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
          p.mb-0(style="color:inherit;") Sangre, fluidos corporales, secreciones y excreciones.
        .tarjeta.color-acento-botones.bg-white.p-3(x="84%" y="15%" numero="2" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
          p.mb-0(style="color:inherit;") Animales.
        .tarjeta.color-acento-botones.bg-white.p-3(x="84%" y="35%" numero="3" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
          p.mb-0(style="color:inherit;") Insectos.
        .tarjeta.color-acento-botones.bg-white.p-3(x="84%" y="57%" numero="4" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
          p.mb-0(style="color:inherit;") Vendajes.
        .tarjeta.color-acento-botones.bg-white.p-3(x="84%" y="77%" numero="5" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
          p.mb-0(style="color:inherit;") Contacto directo.
        .tarjeta.color-acento-botones.bg-white.p-3(x="74%" y="92%" numero="6" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
          p.mb-0(style="color:inherit;") Artículos de cuidado personal.
        .tarjeta.color-acento-botones.bg-white.p-3(x="24%" y="92%" numero="7" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
          p.mb-0(style="color:inherit;") Utensilios para beber y comer.
        .tarjeta.color-acento-botones.bg-white.p-3(x="14%" y="77%" numero="8" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
          p.mb-0(style="color:inherit;") Agua.
        .tarjeta.color-acento-botones.bg-white.p-3(x="14%" y="55%" numero="9" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
          p.mb-0(style="color:inherit;") Alimentos.
        .tarjeta.color-acento-botones.bg-white.p-3(x="14%" y="30%" numero="10" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
          p.mb-0(style="color:inherit;") Aire.
        .tarjeta.color-acento-botones.bg-white.p-3(x="14%" y="13%" numero="11" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
          p.mb-0(style="color:inherit;")  Toser, estornudar, reírse y cantar.
    
    Separador
    #t_4_4.titulo-segundo(data-aos="fade-right")
      h2 4.4 Bioseguridad
    
    p(data-aos="fade-right") Es el conjunto de principios, normas, protocolos, tecnologías y prácticas que se realizan como medidas preventivas, con el fin de mantener el control de factores de riesgo laborales originarios de agentes biológicos, físicos o químicos, al realizar procedimientos que pueden afectar la salud y la seguridad de los trabajadores de la salud, pacientes, cuidadores, visitantes y del medio ambiente. 
    p.mt-4(data-aos="fade-right") Se debe evitar el contacto y/o exposición de la piel (intacta o lesionada) o mucosas, con los fluidos corporales, teniendo como premisa que todos los pacientes son considerados potencialmente infecciosos, sin importar el diagnóstico o la afinidad con el individuo. Por lo anterior, se debe fomentar el uso correcto de los elementos de protección personal (E.P.P), el lavado de manos antes y después del contacto con áreas, equipos, pacientes, talento humano en salud, cuidadores o familiares, higienización o desinfección de manos.
    p.mt-4(data-aos="fade-right") Los fluidos del cuerpo son:

    ul.fa-ul.mt-4.mb-0
      li.mb-2(data-aos="fade-right")
        i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
        | Sangre.
      li.mb-2(data-aos="fade-right")
        i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
        | Semen.
      li.mb-2(data-aos="fade-right")
        i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
        | Secreción vaginal. 
      li.mb-2(data-aos="fade-right")
        i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
        | Leche materna.
      li.mb-2(data-aos="fade-right")
        i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
        | Líquido cefalorraquídeo. 
      li.mb-2(data-aos="fade-right")
        i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
        | Líquido sinovial. 
      li.mb-2(data-aos="fade-right")
        i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
        | Líquido pleural. 
      li.mb-2(data-aos="fade-right")
        i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
        | Líquido amniótico. 
      li.mb-2(data-aos="fade-right")
        i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
        | Líquido peritoneal. 
      li.mb-2(data-aos="fade-right")
        i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
        | Líquido pericárdico. 
      li(data-aos="fade-right")
        i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
        | Cualquier otro líquido contaminado con sangre.

    p.mt-5(data-aos="fade-right") Las heces, orina, secreción nasal, esputo, vómito y saliva, no se consideran líquidos potencialmente infectantes, excepto si están visiblemente contaminados con sangre.
    p.mt-4(data-aos="fade-right") Es así como los elementos de protección personal que debe usar un regente de farmacia son:

    .tarjeta.tarjeta--azul.p-4.pt-0.p-md-5.mt-4(style="padding-top:0px !important;" data-aos="zoom-in")
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-12.mb-5
            .p-3.text-center.m-auto(style="max-width:400px;background-color:#8CBCFA;border-radius:0px 0px 15px 15px;")
              h3.mb-0 Higiene de manos
          .col-lg-6.mb-4.mb-lg-0
            h4.text-center Regente en farmacia
            figure.mt-4
              img(src='@/assets/curso/tema4/28.png' alt="Imagen decorativa")
          .col-lg-6
            h4.text-center Farmacéutico
            figure.text-center.mt-4
              img(src='@/assets/curso/tema4/29.svg' style="max-width:150px;display:inline;" alt="Imagen decorativa")
        .row.justify-content-center
          .col-12.mb-5
            .p-3.text-center.m-auto(style="max-width:400px;background-color:#8CBCFA;border-radius:0px 0px 15px 15px;")
              h3.mb-0 Gorro quirúrgico
          .col-lg-6.mb-4.mb-lg-0
            h4.text-center Regente en farmacia
            figure.mt-4
              img(src='@/assets/curso/tema4/30.png' alt="Imagen decorativa")
          .col-lg-6
            h4.text-center Farmacéutico
            figure.text-center.mt-4
              img(src='@/assets/curso/tema4/31.svg' style="max-width:150px;display:inline;" alt="Imagen decorativa")
        .row.justify-content-center
          .col-12.mb-5
            .p-3.text-center.m-auto(style="max-width:400px;background-color:#8CBCFA;border-radius:0px 0px 15px 15px;")
              h3.mb-0 Respirador N95
          .col-lg-6.mb-4.mb-lg-0
            h4.text-center Regente en farmacia
            figure.mt-4
              img(src='@/assets/curso/tema4/32.png' alt="Imagen decorativa")
          .col-lg-6
            h4.text-center Farmacéutico
            figure.text-center.mt-4
              img(src='@/assets/curso/tema4/31.svg' style="max-width:150px;display:inline;" alt="Imagen decorativa")
        .row.justify-content-center
          .col-12.mb-5
            .p-3.text-center.m-auto(style="max-width:400px;background-color:#8CBCFA;border-radius:0px 0px 15px 15px;")
              h3.mb-0 Mascarilla quirúrgica
          .col-lg-6.mb-4.mb-lg-0
            h4.text-center Regente en farmacia
            figure.mt-4
              img(src='@/assets/curso/tema4/33.png' alt="Imagen decorativa")
          .col-lg-6
            h4.text-center Farmacéutico
            figure.text-center.mt-4
              img(src='@/assets/curso/tema4/29.svg' style="max-width:150px;display:inline;" alt="Imagen decorativa")
        .row.justify-content-center
          .col-12.mb-5
            .p-3.text-center.m-auto(style="max-width:400px;background-color:#8CBCFA;border-radius:0px 0px 15px 15px;")
              h3.mb-0 Monogafas
          .col-lg-6.mb-4.mb-lg-0
            h4.text-center Regente en farmacia
            figure.mt-4
              img(src='@/assets/curso/tema4/34.png' alt="Imagen decorativa")
          .col-lg-6
            h4.text-center Farmacéutico
            figure.text-center.mt-4
              img(src='@/assets/curso/tema4/31.svg' style="max-width:150px;display:inline;" alt="Imagen decorativa")
        .row.justify-content-center
          .col-12.mb-5
            .p-3.text-center.m-auto(style="max-width:400px;background-color:#8CBCFA;border-radius:0px 0px 15px 15px;")
              h3.mb-0 Careta
          .col-lg-6.mb-4.mb-lg-0
            h4.text-center Regente en farmacia
            figure.mt-4
              img(src='@/assets/curso/tema4/35.png' alt="Imagen decorativa")
          .col-lg-6
            h4.text-center Farmacéutico
            figure.text-center.mt-4
              img(src='@/assets/curso/tema4/31.svg' style="max-width:150px;display:inline;" alt="Imagen decorativa")
        .row.justify-content-center
          .col-12.mb-5
            .p-3.text-center.m-auto(style="max-width:400px;background-color:#8CBCFA;border-radius:0px 0px 15px 15px;")
              h3.mb-0 Vestido quirúrgico
          .col-lg-6.mb-4.mb-lg-0
            h4.text-center Regente en farmacia
            figure.mt-4
              img(src='@/assets/curso/tema4/36.png' alt="Imagen decorativa")
          .col-lg-6
            h4.text-center Farmacéutico
            figure.text-center.mt-4
              img(src='@/assets/curso/tema4/31.svg' style="max-width:150px;display:inline;" alt="Imagen decorativa")
        .row.justify-content-center
          .col-12.mb-5
            .p-3.text-center.m-auto(style="max-width:400px;background-color:#8CBCFA;border-radius:0px 0px 15px 15px;")
              h3.mb-0 Bata antifluido
          .col-lg-6.mb-4.mb-lg-0
            h4.text-center Regente en farmacia
            figure.mt-4
              img(src='@/assets/curso/tema4/37.png' alt="Imagen decorativa")
          .col-lg-6
            h4.text-center Farmacéutico
            figure.text-center.mt-4
              img(src='@/assets/curso/tema4/31.svg' style="max-width:150px;display:inline;" alt="Imagen decorativa")
        .row.justify-content-center
          .col-12.mb-5
            .p-3.text-center.m-auto(style="max-width:400px;background-color:#8CBCFA;border-radius:0px 0px 15px 15px;")
              h3.mb-0 Guantes quirúrgicos
          .col-lg-6.mb-4.mb-lg-0
            h4.text-center Regente en farmacia
            figure.mt-4
              img(src='@/assets/curso/tema4/38.png' alt="Imagen decorativa")
          .col-lg-6
            h4.text-center Farmacéutico
            figure.text-center.mt-4
              img(src='@/assets/curso/tema4/31.svg' style="max-width:150px;display:inline;" alt="Imagen decorativa")
        .row.justify-content-center
          .col-12.mb-5
            .p-3.text-center.m-auto(style="max-width:400px;background-color:#8CBCFA;border-radius:0px 0px 15px 15px;")
              h3.mb-0 Polainas
          .col-lg-6.mb-4.mb-lg-0
            h4.text-center Regente en farmacia
            figure.mt-4
              img(src='@/assets/curso/tema4/39.png' alt="Imagen decorativa")
          .col-lg-6
            h4.text-center Farmacéutico
            figure.text-center.mt-4
              img(src='@/assets/curso/tema4/31.svg' style="max-width:150px;display:inline;" alt="Imagen decorativa")
    
    p.mt-5(data-aos="fade-right") Las heces, orina, secreción nasal, esputo, vómito y saliva, no se consideran líquidos potencialmente infectantes, excepto si están visiblemente contaminados con sangre.
    p.mt-4(data-aos="fade-right") Es así como los elementos de protección personal que debe usar un regente de farmacia son:

    .p-4.mt-5(style="background-color:#EEF5FF;border-radius:10px;" data-aos="zoom-in")
      .col-xl-9.m-auto
        ImagenInfografica.infografia4.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema4/40.svg'  alt="Imagen que contiene 11 pasos sobre cómo lavarse las manos, los cuales son: 0. Mójese las manos. 1. Apliques suficiente jabón para cubrir todas las superficies de las manos. 2. Frótese de las palmas de las manos entre sí. 3. Frótese la palma de la mano derecha contra el dorso de la mano izquierda entrelazando los dedos, y viceversa. 4. Frótese las palmas de las manos entre sí, con los dedos entrelazados. 5. Frótese el dorso de los dedos de una mano contra la palma de la mano opuesta, manteniendo unidos los dedos. 6. Rodeando el pulgar izquierdo con la palma de la mano derecha, frótese con un movimiento de rotación, y viceversa. 7. Frótese la punta de los dedos de la mano derecha contra la palma de la mano izquierda, haciendo un movimiento de rotación, y viceversa. 8. Enjuáguese las manos. 9. Séqueselas con una toalla de un solo uso. 10. Utilice la toalla para cerrar el grifo. 11. Sus manos son seguras.")
          .tarjeta.color-acento-botones.bg-white.p-3(x="4%" y="13%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
            p.mb-0(style="color:inherit;") Mójese las manos.
          .tarjeta.color-acento-botones.bg-white.p-3(x="40%" y="13%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
            p.mb-0(style="color:inherit;") Apliques suficiente jabón para cubrir todas las superficies de las manos.
          .tarjeta.color-acento-botones.bg-white.p-3(x="75%" y="13%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
            p.mb-0(style="color:inherit;")  Frótese de las palmas de las manos entre sí.
          .tarjeta.color-acento-botones.bg-white.p-3(x="4%" y="39%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
            p.mb-0(style="color:inherit;") Frótese la palma de la mano derecha contra el dorso de la mano izquierda entrelazando los dedos, y viceversa.
          .tarjeta.color-acento-botones.bg-white.p-3(x="40%" y="39%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
            p.mb-0(style="color:inherit;") Frótese las palmas de las manos entre sí, con los dedos entrelazados.
          .tarjeta.color-acento-botones.bg-white.p-3(x="75%" y="39%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
            p.mb-0(style="color:inherit;") Frótese el dorso de los dedos de una mano contra la palma de la mano opuesta, manteniendo unidos los dedos.
          .tarjeta.color-acento-botones.bg-white.p-3(x="4%" y="65%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
            p.mb-0(style="color:inherit;") Rodeando el pulgar izquierdo con la palma de la mano derecha, frótese con un movimiento de rotación, y viceversa.
          .tarjeta.color-acento-botones.bg-white.p-3(x="40%" y="65%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
            p.mb-0(style="color:inherit;") Frótese la punta de los dedos de la mano derecha contra la palma de la mano izquierda, haciendo un movimiento de rotación, y viceversa.
          .tarjeta.color-acento-botones.bg-white.p-3(x="75%" y="65%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
            p.mb-0(style="color:inherit;") Enjuáguese las manos.
          .tarjeta.color-acento-botones.bg-white.p-3(x="4%" y="92%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
            p.mb-0(style="color:inherit;") Séqueselas con una toalla de un solo uso.
          .tarjeta.color-acento-botones.bg-white.p-3(x="40%" y="92%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
            p.mb-0(style="color:inherit;") Utilice la toalla para cerrar el grifo.
          .tarjeta.color-acento-botones.bg-white.p-3(x="75%" y="92%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
            p.mb-0(style="color:inherit;") Sus manos son seguras.
    .p-3(style="background-color:#547196;" data-aos="fade-left")
      h5.text-white.mb-0 ¿Cómo lavarse las manos?
    p.mt-4(data-aos="fade-right") ¡LÁVESE LAS MANOS SI ESTÁN VISIBLEMENTE SUCIAS! #[br] De lo contrario, use un poco de desinfectante de manos #[br] Duración del lavado entre 40 y 60 segundos
    p(data-aos="fade-right") Fuente: Organización Mundial de la Salud

    .p-4.mt-5(style="background-color:#EEF5FF;border-radius:10px;" data-aos="zoom-in")
      .col-xl-9.m-auto
        ImagenInfografica.infografia4.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema4/41.svg' data-aos="zoom-in-up" alt="Imagen que contiene 8 pasos sobre cómo desinfectarse las manos, los cuales son: 1a. 1b. Deposite en la palma de la mano una dosis de producto suficiente para cubrir todas las superficies. 2. Frótese de las palmas de las manos entre sí. 3. Frótese la palma de la mano derecha contra el dorso de la mano izquierda entrelazando los dedos, y viceversa. 4. Frótese las palmas de las manos entre sí, con los dedos entrelazados. 5. Frótese el dorso de los dedos de una mano contra la palma de la mano opuesta, manteniendo unidos los dedos. 6. Frótese con el movimiento de rotación el pulgar izquierdo, atrapándolo con la palma de la mano derecha y viceversa. 7. Frótese la punta de los dedos de la mano derecha contra la palma de la mano izquierda, haciendo un movimiento de rotación, y viceversa. 8. Sus manos son seguras.")
          .tarjeta.color-acento-botones.bg-white.p-3(x="30%" y="19%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
            p.mb-0(style="color:inherit;") Deposite en la palma de la mano una dosis de producto suficiente para cubrir todas las superficies.
          .tarjeta.color-acento-botones.bg-white.p-3(x="73%" y="19%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
            p.mb-0(style="color:inherit;") Frótese de las palmas de las manos entre sí.
          .tarjeta.color-acento-botones.bg-white.p-3(x="4%" y="54%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
            p.mb-0(style="color:inherit;") Frótese la palma de la mano derecha contra el dorso de la mano izquierda entrelazando los dedos, y viceversa.
          .tarjeta.color-acento-botones.bg-white.p-3(x="40%" y="54%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
            p.mb-0(style="color:inherit;") Frótese las palmas de las manos entre sí, con los dedos entrelazados.
          .tarjeta.color-acento-botones.bg-white.p-3(x="73%" y="54%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
            p.mb-0(style="color:inherit;") Frótese el dorso de los dedos de una mano contra la palma de la mano opuesta, manteniendo unidos los dedos.
          .tarjeta.color-acento-botones.bg-white.p-3(x="4%" y="84%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
            p.mb-0(style="color:inherit;") Frótese con el movimiento de rotación el pulgar izquierdo, atrapándolo con la palma de la mano derecha y viceversa.
          .tarjeta.color-acento-botones.bg-white.p-3(x="40%" y="84%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
            p.mb-0(style="color:inherit;") Frótese la punta de los dedos de la mano derecha contra la palma de la mano izquierda, haciendo un movimiento de rotación, y viceversa.
          .tarjeta.color-acento-botones.bg-white.p-3(x="73%" y="84%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
            p.mb-0(style="color:inherit;") Sus manos son seguras.
    
    .p-3(style="background-color:#547196;" data-aos="fade-left")
      h5.text-white.mb-0  ¿Cómo desinfectarse las manos?
    p.mt-4(data-aos="fade-right") ¡Desinfectes las manos por higiene! Lávese las manos solo cuando estén visiblemente sucias. #[br] Duración de todo el procedimiento:  20 y 30 segundos.
    p(data-aos="fade-right") Fuente: Organización Mundial de la Salud

    .p-4.mt-5(style="background-color:#EEF5FF;border-radius:10px;" data-aos="zoom-in")
      .col-xl-9.m-auto
        ImagenInfografica.infografia4.color-acento-contenido
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema4/42.svg' alt="Imagen que contiene 5 momentos para la higiene de las manos, los cuales son: 1. Antes de tocar al paciente ¿Cuándo? Lávese las manos antes de tocar al paciente cuando se acerque a él ¿Por qué? Para proteger al paciente de los gérmenes dañinos que tiene usted en las manos. 2. Antes de realizar una tarea limpia aséptica ¿Cuándo? Lávese las manos inmediatamente antes de realizar una limpia/aséptica ¿Por qué? Para proteger al paciente de los gérmenes dañinos que podrían entrar en su cuerpo incluidos los gérmenes del propio paciente. 3. Después del riesgo de exposición a líquidos corporales ¿Cuándo? Lávese las manos inmediatamente después de un riesgo de exposición a líquidos corporales (y tras quitarse los guantes) ¿Por qué? Para protegerse y proteger el entorno de atención de salud de los gérmenes dañinos del paciente. 4. Después de tocar al paciente ¿Cuándo? Lávese las manos después de tocar a un paciente y la zona que lo rodea cuando deje la cabecera del paciente ¿Por qué? Para protegerse y proteger el entorno de atención de salud de los gérmenes dañinos del paciente. 5. Después del contacto con el entorno del paciente ¿Cuándo? Lávese las manos después de tocar cualquier objeto o mueble del entorno inmediato del paciente, cuando lo deje (incluso aunque no haya tocado al paciente) ¿Por qué? Para protegerse y proteger el entorno de atención de salud de los gérmenes dañinos del paciente.")
          .tarjeta.color-acento-botones.bg-white.p-3(x="20%" y="36%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
            p.mb-0(style="color:inherit;") Antes de tocar al paciente ¿Cuándo? Lávese las manos antes de tocar al paciente cuando se acerque a él ¿Por qué? Para proteger al paciente de los gérmenes dañinos que tiene usted en las manos.
          .tarjeta.color-acento-botones.bg-white.p-3(x="38.5%" y="26%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
            p.mb-0(style="color:inherit;") Antes de realizar una tarea limpia aséptica ¿Cuándo? Lávese las manos inmediatamente antes de realizar una limpia/aséptica ¿Por qué? Para proteger al paciente de los gérmenes dañinos que podrían entrar en su cuerpo incluidos los gérmenes del propio paciente.
          .tarjeta.color-acento-botones.bg-white.p-3(x="15%" y="64.5%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
            p.mb-0(style="color:inherit;") Después del riesgo de exposición a líquidos corporales ¿Cuándo? Lávese las manos inmediatamente después de un riesgo de exposición a líquidos corporales (y tras quitarse los guantes) ¿Por qué? Para protegerse y proteger el entorno de atención de salud de los gérmenes dañinos del paciente.
          .tarjeta.color-acento-botones.bg-white.p-3(x="85%" y="35%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
            p.mb-0(style="color:inherit;") Después de tocar al paciente ¿Cuándo? Lávese las manos después de tocar a un paciente y la zona que lo rodea cuando deje la cabecera del paciente ¿Por qué? Para protegerse y proteger el entorno de atención de salud de los gérmenes dañinos del paciente.
          .tarjeta.color-acento-botones.bg-white.p-3(x="98%" y="85%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
            p.mb-0(style="color:inherit;") Después del contacto con el entorno del paciente ¿Cuándo? Lávese las manos después de tocar cualquier objeto o mueble del entorno inmediato del paciente, cuando lo deje (incluso aunque no haya tocado al paciente) ¿Por qué? Para protegerse y proteger el entorno de atención de salud de los gérmenes dañinos del paciente.
    
    .p-3(style="background-color:#547196;" data-aos="fade-left")
      h5.text-white.mb-0 5 momentos para la higiene de las manos
    p.mt-3(data-aos="fade-right") #[b Fuente:] Organización Panamericana de la Salud

    .p-4.mt-5(style="background-color:#EEF5FF;border-radius:10px;" data-aos="zoom-in")
      .col-xl-8.m-auto
        ImagenInfografica.infografia4.color-acento-contenido
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema4/43.svg' alt="Imagen que contiene 4 pasos para la postura del tapabocas, los cuales son: 1. Lávate las manos con agua y jabón antes de ponerse el tapabocas. 2. Revisa que el tapabocas se encuentre en buen estado, asegúrate que no tenga defectos, agujeros ni desgarros. 3 Revisa que el tapaboca se encuentre del lado correcto. El interior de la mayoría de los tapabocas es de color blanco mientras que el exterior es de otros colores. 4. Si el tapaboca tiene borde flexible en uno de sus lados este debe ir en la parte superior, moldea la banda sobre el puente de la nariz.")
          .tarjeta.color-acento-botones.bg-white.p-3(x="4%" y="9%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
            p.mb-0(style="color:inherit;") Lávate las manos con agua y jabón antes de ponerse el tapabocas.
          .tarjeta.color-acento-botones.bg-white.p-3(x="60%" y="9%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
            p.mb-0(style="color:inherit;") Revisa que el tapabocas se encuentre en buen estado, asegúrate que no tenga defectos, agujeros ni desgarros.
          .tarjeta.color-acento-botones.bg-white.p-3(x="4%" y="63%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
            p.mb-0(style="color:inherit;") Revisa que el tapaboca se encuentre del lado correcto. El interior de la mayoría de los tapabocas es de color blanco mientras que el exterior es de otros colores.
          .tarjeta.color-acento-botones.bg-white.p-3(x="60%" y="63%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
            p.mb-0(style="color:inherit;") Si el tapaboca tiene borde flexible en uno de sus lados este debe ir en la parte superior, moldea la banda sobre el puente de la nariz.
    .p-3(style="background-color:#547196;" data-aos="fade-left")
      h5.text-white.mb-0  Postura del tapabocas
    p.mt-4(data-aos="fade-right") Ten en cuenta estos pasos
    p.mt-3(data-aos="fade-right")  Se invita al aprendiz a ver el vídeo de Recomendaciones al momento de usar el tapabocas ubicado en el material complementario
    p.mt-3(data-aos="fade-right") Universidad Piloto de Colombia. (2020, May 27)

    h5.mt-5(data-aos="fade-left") Bioseguridad y seguridad del paciente

    ul.fa-ul.mt-4.mb-0
      li.mb-2(data-aos="fade-right")
        i.fas.fa-circle.fa-li(style="font-size:6px;")
        | Se lava las manos con la técnica de la OMS antes y después del procedimiento.
      li.mb-2(data-aos="fade-right")
        i.fas.fa-circle.fa-li(style="font-size:6px;")
        | Higienizar las manos antes y después de la preparación del medicamento.
      li.mb-2(data-aos="fade-right")
        i.fas.fa-circle.fa-li(style="font-size:6px;")
        | Utiliza los elementos de protección personal (gafas de seguridad, guantes, gorro, tapabocas y bata) según corresponda.
      li.mb-2(data-aos="fade-right")
        i.fas.fa-circle.fa-li(style="font-size:6px;")
        | Mantiene los dispositivos médicos y el ambiente limpio y organizado.
      li(data-aos="fade-right")
        i.fas.fa-circle.fa-li(style="font-size:6px;")
        | Mantiene la técnica aséptica: Desinfecta los equipos que entran en contacto con la piel del paciente o del profesional.

    h5.mt-5(data-aos="fade-left") Guantes desechables

    .col-xl-10.m-auto.mt-5
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema4/44.png')})`}" data-aos="fade-right"
        )
        .bloque-texto-g__texto.p-4(data-aos="fade-left")
          p.mb-0  Los guantes desechables, de látex o nitrilo, son para un solo uso, para evitar cualquier tipo de contaminación cruzada. Primero que todo, debe seleccionar la talla que corresponde a la mano. Es conveniente que el guante quede ajustado para evitar arrugas y aumentar la sensibilidad y el tacto.
          br
          br
          | Antes de su colocación es necesario observar el par de guantes para asegurarse de imperfecciones o mal estado de conservación, de tal manera que se puedan descartar con tiempo.
          br
          | A continuación, se muestra cómo debe ser la postura y el retiro de los guantes desechables.
    
    .col-xl-9.m-auto.mt-5
      ImagenInfografica.infografia4.color-acento-botones(data-aos="zoom-in")
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/tema4/45.svg' alt="Imagen que contiene 6 pasos para la colocación de los guantes sanitarios, los cuales son: 1. Extraer un guante de la caja. 2. Identifique el dedo pulgar y enfundarlo en una mano. 3. Hasta obtener una perfecta adaptación a la mano (ausencia de arrugas) estirando desde el extremo abierto. 4. Extraer un segundo guante. 5. Realizar el mismo procedimiento. 6. Guantes listos para el uso.")
        .tarjeta.color-acento-botones.bg-white.p-3(x="9%" y="20%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
          p.mb-0(style="color:inherit;") Extraer un guante de la caja.
        .tarjeta.color-acento-botones.bg-white.p-3(x="42%" y="20%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
          p.mb-0(style="color:inherit;") Identifique el dedo pulgar y enfundarlo en una mano.
        .tarjeta.color-acento-botones.bg-white.p-3(x="74%" y="20%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
          p.mb-0(style="color:inherit;") Hasta obtener una perfecta adaptación a la mano (ausencia de arrugas) estirando desde el extremo abierto.
        .tarjeta.color-acento-botones.bg-white.p-3(x="9%" y="61%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
          p.mb-0(style="color:inherit;") Extraer un segundo guante.
        .tarjeta.color-acento-botones.bg-white.p-3(x="42%" y="61%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
          p.mb-0(style="color:inherit;") Realizar el mismo procedimiento.
        .tarjeta.color-acento-botones.bg-white.p-3(x="74%" y="61%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
          p.mb-0(style="color:inherit;") Guantes listos para el uso.

    .p-3(style="background-color:#E8E8E8;" data-aos="zoom-in-up")
      h5 Postura de guantes limpios
      p.mb-0 (Evite el contacto de los guantes con superficies o con el paciente, durante la postura.)
    
    .col-xl-9.m-auto.mt-5
      ImagenInfografica.infografia4.color-acento-botones(data-aos="zoom-in")
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/tema4/46.svg' alt="Imagen que contiene 6 pasos para la retirada de los guantes sanitarios, los cuales son: 1. Pellizcar por el exterior del primer guante. 2. Retirar sin tocar la parte inferior del guante. 3. Retirar el guante en su totalidad. 4. Recoger el primer guante con la otra mano. 5. Retirar el segundo guante introduciendo los dedos por el interior. 6. Guantes listos para el uso.")
        .tarjeta.color-acento-botones.bg-white.p-3(x="9%" y="20%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
          p.mb-0(style="color:inherit;") Pellizcar por el exterior del primer guante.
        .tarjeta.color-acento-botones.bg-white.p-3(x="42%" y="20%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
          p.mb-0(style="color:inherit;") Retirar sin tocar la parte inferior del guante.
        .tarjeta.color-acento-botones.bg-white.p-3(x="74%" y="20%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
          p.mb-0(style="color:inherit;") Retirar el guante en su totalidad.
        .tarjeta.color-acento-botones.bg-white.p-3(x="9%" y="61%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
          p.mb-0(style="color:inherit;") Recoger el primer guante con la otra mano.
        .tarjeta.color-acento-botones.bg-white.p-3(x="42%" y="61%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
          p.mb-0(style="color:inherit;") Retirar el segundo guante introduciendo los dedos por el interior.
        .tarjeta.color-acento-botones.bg-white.p-3(x="74%" y="61%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
          p.mb-0(style="color:inherit;") Retirar el guante sin tocar la parte externa del mismo.

    .p-3(style="background-color:#E8E8E8;" data-aos="zoom-in-up")
      h5.mb-0 Retiro de guantes

    Separador
    #t_4_5.titulo-segundo(data-aos="fade-right")
      h2 4.5 Técnica aséptica
    
    p(data-aos="fade-right") Es la técnica que se utiliza para eliminar la presencia de microorganismos patógenos en un área u objeto determinado, siendo los siguientes, los términos importantes para entender la técnica:

    .col-xl-11.m-auto.mt-5
      ImagenInfografica.infografia5.color-acento-contenido(data-aos="zoom-in")
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/tema4/47.svg' alt="Imagen decorativa")
        .tarjeta.color-acento-botones.bg-white.p-3(x="12%" y="20%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
          p.mb-0(style="color:inherit;") Libre de microorganismos.
        .tarjeta.color-acento-botones.bg-white.p-3(x="37%" y="20%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
          p.mb-0(style="color:inherit;") Remover con agua y jabón la mugre o suciedad de un objeto o superficie.
        .tarjeta.color-acento-botones.bg-white.p-3(x="63%" y="20%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
          p.mb-0(style="color:inherit;") Son las medidas empleadas para prevenir o combatir la infección destruyéndola o inhibiendo las bacterias por medio de agentes físicos o químicos. No destruye esporas.
        .tarjeta.color-acento-botones.bg-white.p-3(x="88%" y="20%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
          p.mb-0(style="color:inherit;") Aplicación de sustancias químicas para inhibir o reducir el número de microorganismos de la piel viva, mucosas o heridas, de tal forma que no se inicien procesos infecciosos. 
        .tarjeta.color-acento-botones.bg-white.p-3(x="12%" y="46%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
          p.mb-0(style="color:inherit;") Sustancia química de aplicación tópica sobre tejidos vivos (piel intacta, mucosas, heridas, entre otros), que destruye o inhibe los microorganismos sin afectar sensiblemente a los tejidos donde se aplica.
        .tarjeta.color-acento-botones.bg-white.p-3(x="37%" y="46%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
          p.mb-0(style="color:inherit;") Objeto o elemento libre de todo microorganismo (patógeno y no patógeno) incluyendo esporas.
        .tarjeta.color-acento-botones.bg-white.p-3(x="63%" y="46%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
          p.mb-0(style="color:inherit;") Cuando un objeto estéril se pone en contacto con otro sucio o infectado por microorganismos.
        .tarjeta.color-acento-botones.bg-white.p-3(x="88%" y="46%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
          p.mb-0(style="color:inherit;") Superficies o área donde se trabaja con elementos limpios o estériles. 
        .tarjeta.color-acento-botones.bg-white.p-3(x="12%" y="72%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
          p.mb-0(style="color:inherit;") Superficies o área donde se desechan fluidos corporales, depósito y lugar para lavar y descontaminar elementos utilizados con los pacientes, sitio donde se almacena los compreseros con la ropa sucia de los pacientes.
        .tarjeta.color-acento-botones.bg-white.p-3(x="37%" y="72%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
          p.mb-0(style="color:inherit;") Agente químico que impide la reproducción de bacterias. 
        .tarjeta.color-acento-botones.bg-white.p-3(x="63%" y="72%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
          p.mb-0(style="color:inherit;") Sustancia que destruye bacterias.
        .tarjeta.color-acento-botones.bg-white.p-3(x="88%" y="72%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
          p.mb-0(style="color:inherit;") Sustancia tenso activo diseñada para remover y eliminar la contaminación indeseada de alguna superficie. Los detergentes de uso doméstico, no usar en instrumental médico. 
        .tarjeta.color-acento-botones.bg-white.p-3(x="38%" y="98%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
          p.mb-0(style="color:inherit;") Sustancia en la que se combina un detergente y un desinfectante químico. No todos los detergentes y desinfectantes son compatibles. 
        .tarjeta.color-acento-botones.bg-white.p-3(x="63%" y="98%" numero="+" style="box-shadow:0px 0px 20px rgba(0,0,0,0.15);")
          p.mb-0(style="color:inherit;") Son detergentes que contienen enzimas proteolíticas que disuelven la materia orgánica y están especialmente diseñados para el lavado de instrumental y equipo médico.
    
    h5.mt-5(data-aos="fade-left") Compuestos utilizados en limpieza, desinfección y antisepsia
    p.mt-4(data-aos="fade-right") En el entorno hospitalario y donde se atiende pacientes, como consultorios, droguerías, farmacias, la desinfección se realiza utilizando diferentes agentes químicos; la desinfección se clasifica de acuerdo con el nivel o al espectro de actividad del agente:

    br
    .row.mt-5
      .col-lg.mb-5
        .p-4.h-100(style="border:5px #8CBCFA solid;border-radius:20px;position:relative;box-shadow:0px 0px 20px rgba(0,0,0,.12);")
          .text-center(style="position:absolute;width:100%;top:-30px;left:0;") 
            span.text-white.fw-bold(data-aos="zoom-in-down" style="background-color:#8CBCFA;border:9px #fff solid;border-radius:100%;font-size:40px;padding:.4rem 1.2rem;box-shadow:0px 0px 20px rgba(0,0,0,.1);") 1
          h5.mb-0.text-center.mt-5.mb-5(data-aos="zoom-in") Desinfección de alto nivel
          p.mt-4.text-center(data-aos="zoom-in")  Eliminan todos los microorganismos, excepto gran cantidad de esporas. Los liberadores de cloro en concentraciones muy altas pueden ser considerados de alto nivel, pero debido a sus efectos corrosivos, no son recomendados para inmersión de equipos médicos. 
      .col-lg.mb-5
        .p-4.h-100(style="border:5px #00BCD4 solid;border-radius:20px;position:relative;box-shadow:0px 0px 20px rgba(0,0,0,.12);")
          .text-center(style="position:absolute;width:100%;top:-30px;left:0;") 
            span.text-white.fw-bold(data-aos="zoom-in-down" style="background-color:#00BCD4;border:9px #fff solid;border-radius:100%;font-size:40px;padding:.4rem 1.2rem;box-shadow:0px 0px 20px rgba(0,0,0,.1);") 2
          h5.mb-0.text-center.mt-5(data-aos="zoom-in") Desinfección de nivel intermedio
          p.mt-4.text-center(data-aos="zoom-in") Elimina mycobacterium, bacterias en estado vegetativo, mayoría de virus y hongos, pero no necesariamente elimina esporas. 
      .col-lg.mb-5
        .p-4.h-100(style="border:5px #FF9D00 solid;border-radius:20px;position:relative;box-shadow:0px 0px 20px rgba(0,0,0,.12);")
          .text-center(style="position:absolute;width:100%;top:-30px;left:0;") 
            span.text-white.fw-bold(data-aos="zoom-in-down" style="background-color:#FF9D00;border:9px #fff solid;border-radius:100%;font-size:40px;padding:.4rem 1.2rem;box-shadow:0px 0px 20px rgba(0,0,0,.1);") 3
          h5.mb-0.text-center.mt-5(data-aos="zoom-in") Desinfección de bajo nivel
          p.mt-4.text-center(data-aos="zoom-in") Puede matar algunos hongos y algunos virus; no elimina esporas ni mycobacterium tuberculoso.
    
    p.mt-5(data-aos="fade-up") En la siguiente tabla se describen los niveles de desinfección:
    
    .titulo-sexto.color-acento-contenido.mt-5(data-aos="fade-right")
      h5 Tabla 4.
      span Nivel de desinfección de acuerdo con el tipo de microorganismos

    .mt-4
      .tabla-a.color-acento-contenido(data-aos="zoom-in-up")
        table
          thead
            tr(style="background-color:#F6F6F6;" data-aos="fade-right")
              th.p-2.text-center(style="border-color:#E1E1E1;" rowspan="2") Nivel
              th.p-2.text-center(style="border-color:#E1E1E1;" rowspan="2") Desinfectantes
              th.p-2.text-center(style="border-color:#E1E1E1;" colspan="3") Bacterias
              th.p-2.text-center(style="border-color:#E1E1E1;" rowspan="2") Hongos
              th.p-2.text-center(style="border-color:#E1E1E1;" colspan="2") Virus
            tr(style="background-color:#F6F6F6;" data-aos="fade-right")
              th.p-2.text-center(style="border-color:#E1E1E1;") Vegetativas
              th.p-2.text-center(style="border-color:#E1E1E1;") Bacilos #[br] tuberculosos
              th.p-2.text-center(style="border-color:#E1E1E1;") Esporas
              th.p-2.text-center(style="border-color:#E1E1E1;") Lípido y #[br] tamaño medio
              th.p-2.text-center(style="border-color:#E1E1E1;") Lípido y #[br] tamaño pequeño
          tbody
            tr(data-aos="fade-right")
              td.p-3.fw-bold(style="border-color:#E1E1E1;") Alto
              td.p-3(style="border-color:#E1E1E1;") Glutaraldehído amonio cuaternario de quinta generación, formaldehído, ácido peracético al 1%, peróxido de hidrógeno al 6%, ortoftalaldehído al 0 55%, ácido peracético con peróxido de hidrógeno.
              td.p-3.text-center(style="border-color:#E1E1E1;") +
              td.p-3.text-center(style="border-color:#E1E1E1;") +
              td.p-3.text-center(style="border-color:#E1E1E1;") +
              td.p-3.text-center(style="border-color:#E1E1E1;") +
              td.p-3.text-center(style="border-color:#E1E1E1;") +
              td.p-3.text-center(style="border-color:#E1E1E1;") +
            tr(data-aos="fade-right")
              td.p-3.fw-bold(style="border-color:#E1E1E1;") Intermedio
              td.p-3(style="border-color:#E1E1E1;") Alcoholes, cloro y compuestos clorados, amonio cuaternario de tercera y cuarta generación.
              td.p-3.text-center(style="border-color:#E1E1E1;") +
              td.p-3.text-center(style="border-color:#E1E1E1;") +
              td.p-3.text-center(style="border-color:#E1E1E1;") -
              td.p-3.text-center(style="border-color:#E1E1E1;") +
              td.p-3.text-center(style="border-color:#E1E1E1;") +
              td.p-3.text-center(style="border-color:#E1E1E1;") +
            tr(data-aos="fade-right")
              td.p-3.fw-bold(style="border-color:#E1E1E1;") Bajo
              td.p-3(style="border-color:#E1E1E1;") Amonio cuaternario de primera y segunda generación.
              td.p-3.text-center(style="border-color:#E1E1E1;") +
              td.p-3.text-center(style="border-color:#E1E1E1;") -
              td.p-3.text-center(style="border-color:#E1E1E1;") -
              td.p-3.text-center(style="border-color:#E1E1E1;") -/+
              td.p-3.text-center(style="border-color:#E1E1E1;") -
              td.p-3.text-center(style="border-color:#E1E1E1;") -/+
    
    p.mt-5(data-aos="fade-right") El protocolo de limpieza de limpieza y desinfección de las superficies y áreas, está dictado por el siguiente procedimiento: 

    .tarjeta.tarjeta--gris.p-4.mt-5(data-aos="zoom-in")
      PasosB.color-secundario
        .row.col-lg-11.m-auto(titulo="Cronograma")
          .col-md-6.col-lg-4.mb-4.mb-md-0(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema4/48.svg' alt="Imagen decorativa")
          .col-md-6.col-lg-8(style="place-self:center;")
            p Realizar un cronograma de limpieza para las distintas áreas.
        .row.col-lg-11.m-auto(titulo="Equipos")
          .col-md-6.col-lg-4.mb-4.mb-md-0(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema4/49.svg' alt="Imagen decorativa")
          .col-md-6.col-lg-8(style="place-self:center;")
            p Alistar equipos y materiales requeridos para el proceso de limpieza y desinfección.
        .row.col-lg-11.m-auto(titulo="EPP")
          .col-md-6.col-lg-4.mb-4.mb-md-0(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema4/50.svg' alt="Imagen decorativa")
          .col-md-6.col-lg-8(style="place-self:center;")
            p Emplear Elementos de Protección Personal (EPP)durante todo el procedimiento.
        .row.col-lg-11.m-auto(titulo="Artículos de limpieza")
          .col-md-6.col-lg-4.mb-4.mb-md-0(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema4/51.png' alt="Imagen decorativa")
          .col-md-6.col-lg-8(style="place-self:center;")
            p Preparar la cantidad necesaria de solución de limpieza para el aseo diario, (según cantidad de superficies y duración o estabilidad de la preparación). 
        .row.col-lg-11.m-auto(titulo="Limpieza en húmedo")
          .col-md-6.col-lg-4.mb-4.mb-md-0(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema4/52.png' alt="Imagen decorativa")
          .col-md-6.col-lg-8(style="place-self:center;")
            p Emplear un paño húmedo para limpiar las paredes, los suelos y las otras superficies en vez de barrer con escoba o quitar el polvo en seco, para reducir que se propaguen los microorganismos y el polvo.
        .row.col-lg-11.m-auto(titulo="Direccionamiento limpieza")
          .col-md-6.col-lg-4.mb-4.mb-md-0(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema4/53.svg' alt="Imagen decorativa")
          .col-md-6.col-lg-8(style="place-self:center;")
            p Lavar las superficies de arriba hacia abajo para que la suciedad caiga al suelo y sea lo último de recoger.
        .row.col-lg-11.m-auto(titulo="Jerarquía limpieza")
          .col-md-6.col-lg-4.mb-4.mb-md-0(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema4/54.svg' alt="Imagen decorativa")
          .col-md-6.col-lg-8(style="place-self:center;")
            p Limpiar primero las áreas más altas y de ahí, siga limpiando hacia abajo - por ejemplo, se debe limpiar primero las lámparas del techo, después las mesas, luego los estantes, y como último, el piso. Utilice un paño de limpieza diferente para las superficies frecuentemente tocadas y por ende con mayor probabilidad de estar contaminadas.
        .row.col-lg-11.m-auto(titulo="Remoción mecánica")
          .col-md-6.col-lg-4.mb-4.mb-md-0(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema4/55.png' alt="Imagen decorativa")
          .col-md-6.col-lg-8(style="place-self:center;")
            p Hacer la remoción mecánica entregando y friccionando las superficies.
        .row.col-lg-11.m-auto(titulo="Proceso limpieza")
          .col-md-6.col-lg-4.mb-4.mb-md-0(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema4/56.svg' alt="Imagen decorativa")
          .col-md-6.col-lg-8(style="place-self:center;")
            p Emplear trapeadores y paños limpios/desinfectados cada vez que se inicie un proceso de limpieza en cada ambiente de las diferentes áreas.
        .row.col-lg-11.m-auto(titulo="Exclusividad materiales")
          .col-md-6.col-lg-4.mb-4.mb-md-0(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema4/57.png' alt="Imagen decorativa")
          .col-md-6.col-lg-8(style="place-self:center;")
            p Los traperos deben ser exclusivos para cada área y se deben desinfectar entre un ambiente y otro (Ej. entre habitaciones) y al finalizar la totalidad del área respectiva.
        .row.col-lg-11.m-auto(titulo="Desinfección materiales")
          .col-md-6.col-lg-4.mb-4.mb-md-0(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema4/58.svg' alt="Imagen decorativa")
          .col-md-6.col-lg-8(style="place-self:center;")
            p Lavar, desinfectar y secar el contenedor utilizado para preparar la solución de limpieza con detergente líquido, enjuagar con agua y desinfectar con el desinfectante de nivel intermedio/bajo en uso para minimizar el grado de contaminación bacteriana.
      
</template>

<script>
export default {
  name: 'Tema4',
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
.tabs-c__tab--active span
  font-weight: bold
.infografia3 .img-infografica__item__dot
  padding: 1.2rem
  left: -10px
.infografia3.img-infografica.color-secundario .img-infografica__item__numero, .img-infografica-b.color-secundario .img-infografica__item__numero
  color: #fff
  font-weight: bold
  font-size: 23px
.infografia4 .img-infografica__item__dot
  padding: 1.2rem
  left: -10px
.infografia5 .img-infografica__item__dot
  padding: 1.2rem
  left: -10px
.infografia5.img-infografica.color-acento-contenido .img-infografica__item__dot:before, .img-infografica.color-acento-contenido .img-infografica__item__dot:after, .img-infografica.color-acento-contenido .img-infografica-b__item__dot:before, .img-infografica.color-acento-contenido .img-infografica-b__item__dot:after, .img-infografica-b.color-acento-contenido .img-infografica__item__dot:before, .img-infografica-b.color-acento-contenido .img-infografica__item__dot:after, .img-infografica-b.color-acento-contenido .img-infografica-b__item__dot:before, .img-infografica-b.color-acento-contenido .img-infografica-b__item__dot:after
  background-color: #000000 !important
</style>
