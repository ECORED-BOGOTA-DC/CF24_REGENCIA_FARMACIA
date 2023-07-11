<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-up")
      .titulo-principal__numero
        span 4
      h1 Generalidades de microbiología
    
    .col-xl-10.m-auto
      .row
        .col-lg.mb-4.pe-lg-0.mb-lg-0
          figure
            img(src="@/assets/curso/tema4/1.png" data-aos="zoom-in-right")
        .col-lg.ps-lg-0
          .h-100.p-4.text-white.d-flex.flex-wrap.align-content-center(style="background-color:#7E5EE3;" data-aos="zoom-in-left")
            p La microbiología es la ciencia que estudia los microorganismos como los virus, las bacterias, los hongos y los parásitos; todos son organismos microscópicos que hacen parte de la biología de los seres vivos. A este grupo de microorganismos también se les denomina Microbios o Gérmenes.
            p.mt-4.mb-0 Los microorganismos son células capaces de existir de forma libre o independiente, son los seres vivos más diminutos que solo pueden ser observados a través de un microscopio; la mayoría son unicelulares, son de diferentes tamaños y formas, cada uno posee diversas características por lo que pueden ser patógenos, o sea, causantes de infecciones y enfermedad. 
    
    .col-xl-8.col-lg-10.m-auto.mt-5
      .cajon.color-acento-contenido.p-4(style="background-color:#BFEEF4;")
        p.mb-0(data-aos="zoom-in") El microorganismo patógeno o infeccioso, es cualquier germen capaz de producir en el ser humano (huésped) infección o enfermedad. Tal capacidad es dada por la concentración microbiana, la resistencia microbiana, el tamaño del inóculo y el ciclo en que se encuentre. 
    
    p.mt-5(data-aos="zoom-in") La vía de transmisión es el mecanismo mediante el cual el germen ingresa al huésped susceptible (aquel que no ha desarrollado inmunidad activa o pasiva frente al germen infectante). Esta puede ser por:

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
    
    Separador.mt-5

    .titulo-segundo
      h2#t_4_1 4.1  Bacterias, virus, hongos, protozoos
    
    p(data-aos="zoom-in") A continuación, se describen las características de los diferentes microorganismos mencionados anteriormente.

    h5.mt-5(data-aos="fade-up") Bacterias
    p(data-aos="fade-up") Organismos unicelulares procariotas, se reproducen sin invadir la célula (tuberculosis, cólera, etc.) se caracterizan por:
    
    .tarjeta.tarjeta--azul.p-4.p-md-5.mt-4
      SlyderA(tipo="b")
        .row
          .col-lg-5.mb-4.mb-lg-0
            p Las bacterias son organismos unicelulares, sin núcleo, diminutos que se alimentan del ambiente en que viven. En algunos casos, ese ambiente será el cuerpo de otro ser vivo.
          .col-lg-7
            figure
              img(src='@/assets/curso/tema4/2.png')
        .row
          .col-lg-5.mb-4.mb-lg-0
            p En el cuerpo humano, algunas bacterias ayudan a que el sistema digestivo funcione correctamente e impiden que entren bacterias nocivas en su interior; por el contrario, las bacterias también pueden causar problemas, como las caries dentales, las infecciones de las vías urinarias, las infecciones de oído o la faringitis.
          .col-lg-7
            figure
              img(src='@/assets/curso/tema4/3.png')
        .row
          .col-lg-5.mb-4.mb-lg-0
            p Otras bacterias se utilizan para elaborar medicamentos y vacunas. Para combatir una infección producida por bacterias, es necesario tomar o inyectar un antibiótico, éste debe ser específico para la clase de bacteria que eta produciendo la infección, lo que significa que cualquier antibiótico no sirve para una infección en el pulmón como en la piel.
          .col-lg-7
            figure
              img(src='@/assets/curso/tema4/4.png')
        .row
          .col-lg-5.mb-4.mb-lg-0
            p Las bacterias aeróbicas obtienen energía por respiración. Las anaeróbicas por fermentación (degradación de glúcidos en anaerobiosis). Otras utilizan el proceso de putrefacción para su supervivencia. 
            p.mt-4 Ejemplos de bacterias: Escherichia coli y Salmonella, Helicobacter pylori, Neisseria gonorrhoeae, Staphylococcus aureus, Streptococcus, Pseudomonas, ente otras.
          .col-lg-7
            figure
              img(src='@/assets/curso/tema4/5.png')
        .row
          .col-lg-5.mb-4.mb-lg-0
            p Según su forma, hay cuatro formas básicas muy comunes en las bacterias: 
            ol.lista-ol
              li 
                span.text-bold 1. 
                | Esférica.
              li 
                span.text-bold 2. 
                | Alargada o cilíndrica es un bacilo.
              li 
                span.text-bold 3. 
                |  Cuando aparecen uno o más dobleces en la longitud de la célula que le dan forma espiral es un espirilo.
              li 
                span.text-bold 4. 
                | Si tiene forma de coma: vibrios.
          .col-lg-7
            figure
              img(src='@/assets/curso/tema4/6.svg')
    
    h5.mt-5(data-aos="fade-up") Virus
    p(data-aos="fade-up") Parásitos celulares que se introducen en la célula para reproducirse (gripe, sida, dengue, etc.) algunas generalidades sobre los virus son:
    
    .tarjeta.tarjeta--azul.p-4.p-md-5.mt-4
      SlyderA(tipo="b")
        .row
          .col-lg-5.mb-4.mb-lg-0
            p Los virus no se consideran células completas, más pequeños que las bacterias; solo son material genético (DNA o RNA) empaquetado dentro de una cubierta proteica, por lo que necesitan usar las estructuras de otras células para poderse reproducir. 
          .col-lg-7
            figure
              img(src='@/assets/curso/tema4/7.png')
        .row
          .col-lg-5.mb-4.mb-lg-0
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
          .col-lg-7
            figure
              img(src='@/assets/curso/tema4/8.svg')
        .row
          .col-lg-5.mb-4.mb-lg-0
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
          .col-lg-7
            figure
              img(src='@/assets/curso/tema4/9.svg')
        .row
          .col-lg-5.mb-4.mb-lg-0
            p El sistema inmunológico del ser humano utiliza diversas formas para atacar los agentes infecciosos; los virus tratan de evitarlo, haciendo más copias de sí mismo, para de esta forma propagarse a otros huéspedes. Las características o adaptaciones nuevas que hacen evadir las defensas del organismo, es lo que se llama mutación, lo cual se mantiene de una generación a otra del virus, mientras que las defensas de los huéspedes tienden a perderse.
          .col-lg-7
            figure
              img(src='@/assets/curso/tema4/10.png')
        .row
          .col-lg-5.mb-4.mb-lg-0
            p El modo en que los huéspedes se defienden de un virus es desarrollando anticuerpos, los cuales se fijan a las proteínas de la superficie exterior del virus, con lo que le impiden entrar a las células del huésped. 
            p.mt-4 Un virus que simula ser diferente a otros que han infectado al huésped tiene una ventaja, ya que el huésped no tiene una inmunidad precedente contra ese virus en forma de anticuerpos. 
          .col-lg-7
            figure
              img(src='@/assets/curso/tema4/11.png')
        .row
          .col-lg-5.mb-4.mb-lg-0
            p Muchas adaptaciones virales involucran cambios en la superficie exterior del virus. Un ejemplo típico es el virus que origina la influenza; cuando se inician los síntomas el organismo inicia un proceso de defensas contra ese virus específico, la infección se desarrolla y termina, creando en ese individuo una memoria inmunológica para defenderse posteriormente; sin embargo esa misma persona  con el tiempo se expone o tiene contacto nuevamente con otra persona con el virus de la influenza puede volver a enfermar ya que es una nueva cepa del mismo virus , para lo cual su organismo no está preparado y no se defiende. 
            p.mt-4 Por lo anterior es que para los adultos mayores y los niños es muy importante vacunarse cada año contra la influenza, la cual contiene la información de varias familias de virus y el sistema inmunológico se prepara para defenderse.
          .col-lg-7
            figure
              img(src='@/assets/curso/tema4/12.png')
    
    h5.mt-5(data-aos="zoom-in") Se invita al aprendiz a ver el vídeo explicativo Cómo mutan los virus y cómo podría evolucionar el coronavirus, ubicado en el material complementario.
    
    h5.mt-5(data-aos="fade-up") Hongos
    p(data-aos="fade-up") Organismos unicelulares microscópicos o multicelulares macroscópicos; aerobios y heterótrofos, parecidos a las plantas, se caracterizan por:
    
    .tarjeta.tarjeta--azul.p-4.p-md-5.mt-4
      SlyderA(tipo="b")
        .row
          .col-lg-5.mb-4.mb-lg-0
            p Consiguen el alimento de las plantas, de los alimentos y de los animales en ambientes húmedos y cálidos. Son organismos eucariotas, incapaces de sintetizar sus nutrientes y por lo tanto se consideran saprófitos o parásitos, descomponen la materia orgánica, y son capaces de contaminar los cuerpos de otros seres vivos. Poseen pared celular como las plantas, pero de quitina en lugar de celulosa, y se reproducen mediante esporas, tanto sexual o asexualmente. 
          .col-lg-7
            figure
              img(src='@/assets/curso/tema4/13.png')
        .row
          .col-lg-5.mb-4.mb-lg-0
            p Las infecciones por hongos, como el pie de atleta (Tinea pedis), que se aloja en la piel, por la humedad, producto de la sudoración, no representan ningún peligro para una persona sana. Sin embargo, las personas inmunodeprimidas, por enfermedades como el SIDA o el cáncer, pueden desarrollar infecciones por hongos mucho más graves.
          .col-lg-7
            figure
              img(src='@/assets/curso/tema4/14.png')
        .row
          .col-lg-5.mb-4.mb-lg-0
            p Las infecciones por levaduras, que se originan cuando se pierde el equilibro de los microorganismos que habitualmente conviven en el cuerpo no suelen ser peligrosas, sin embargo, al ingresar al torrente sanguíneo se pueden propagar a otras partes del cuerpo; este tipo de infecciones son muy comunes en recién nacidos de bajo peso, personas diabéticas, o pacientes en tratamiento oncológico.
          .col-lg-7
            figure
              img(src='@/assets/curso/tema4/15.svg')
        .row
          .col-lg-5.mb-4.mb-lg-0
            p Las infecciones por hongos son llamadas micóticas y son tratables en su gran mayoría por medicamentos conocidos como fungicidas o antimicóticos; pueden ser transmisibles, como por ejemplo la Candida albicans (origen de la candidiasis de transmisión sexual). 
          .col-lg-7
            figure
              img(src='@/assets/curso/tema4/16.png')
    
    h5.mt-5(data-aos="fade-up") Protozoos
    p(data-aos="fade-up") Organismos unicelulares, como las bacterias, se hallan en ambientes húmedos o acuáticos, y se pueden considerar animales microscópicos. 
    
    .tarjeta.tarjeta--azul.p-4.p-md-5.mt-4
      SlyderA(tipo="b")
        .row
          .col-lg-5.mb-4.mb-lg-0
            p Se les llama de 2 maneras, protozoos o protozoarios, sin embargo, hacen parte de un reino propio llamado protozoa; y forman parte del Reino protista, puesto que se consideran el primer eslabón evolutivo de las células eucariotas, es decir antes de los animales, plantas, hongos y algas. Ostentan movilidad propia, se transportan por medio de flagelos, cilios o del alargamiento de su citoplasma como falsos pies.
          .col-lg-7
            figure
              img(src='@/assets/curso/tema4/17.svg')
        .row
          .col-lg-5.mb-4.mb-lg-0
            p A los protozoarios, les encanta la humedad, por lo cual, las infecciones intestinales y otras enfermedades gastrointestinales, como las amebas y las giardias, fácilmente se transmiten a través del agua contaminada. Algunos protozoos son parásitos lo que significa que para vivir necesitan estar dentro de otro ser vivo. Por ejemplo, el protozoo que causa la malaria crece dentro de los eritrocitos, los cuales destruye cada vez que se reproducen. Otro ejemplo es la ameba, la cual se encapsula formando quistes, para poder vivir fuera del cuerpo humano y en ambientes extremos durante mucho tiempo; sin que esto sea un problema para su supervivencia.
          .col-lg-7
            figure
              img(src='@/assets/curso/tema4/18.svg')
        .row
          p Los protozoos se clasifican en:
          .ps-3.pe-2.mt-2
            .p-1(style="max-width:200px;background-color:#FF9D00;border:3px white solid;border-radius:4px;")
              h5.mb-0.ps-2 Rizópodos
            p.mt-2 Desplazamiento mediante pseudópodos (falsos pies), que al mismo tiempo les sirven para atrapar el alimento solido e introducirlo al citoplasma lo que se llama: fagocitosis.
            .p-1.mt-4(style="max-width:200px;background-color:#00BCD4;border:3px white solid;border-radius:4px;")
              h5.mb-0.ps-2 Flagelados
            p.mt-2 Células dotadas de uno o más flagelos, llamadas “colas” con las cuales se impulsan hacia adelante en el medio ambiente en que se encuentren.
            .p-1.mt-4(style="max-width:200px;background-color:#8CBCFA;border:3px white solid;border-radius:4px;")
              h5.mb-0.ps-2 Ciliados
            p.mt-2 La membrana plasmática se encuentra rodeada de cilios, especie de filamentos más pequeños y numerosos que los flagelos, que también sirven para movilizarse.
            .p-1.mt-4(style="max-width:200px;background-color:#5B33DB;border:3px white solid;border-radius:4px;")
              h5.mb-0.ps-2.text-white Esporozoos
            p.mt-2 Son los famosos parásitos, con poca movilidad, pero poseen un tipo de reproducción asexual que consiste en producir esporas, que generan un nuevo individuo idéntico, los cuales son muy resistentes. Esta forma de división múltiple es conocida como esporulación.
          p.mt-1 Ejemplos de protozoos: Paramecio, Giardia. Amoeba. Tricomona; también son protozoos el origen de infecciones como la Malaria, Amebiasis y toxoplasmosis. 

    h5.mt-5(data-aos="fade-up") Priones
    p(data-aos="fade-up") Prion de la encefalopatía espongiforme (“enfermedad de la vaca loca”).

    .col-xl-8.m-auto.mt-4.col-lg-10
      figure
        img(src="@/assets/curso/tema4/19.png" data-aos="zoom-in-up")
    
    Separador.mt-5

    .titulo-segundo
      h2#t_4_2 4.2  Flora humana
    
    p(data-aos="zoom-in") La piel y las mucosas del cuerpo humano representa una gran superficie de contacto con el medio ambiente; en ella residen microorganismos con características distintas de humedad, temperatura, pH y disponibilidad de nutrientes.
    p.mt-4(data-aos="zoom-in") Los microorganismos que viven con el huésped en su estado normal, sin causarle enfermedad, es lo que se llama la flora humana; sin embargo, si aumentan en cantidad o llegan nuevas especies pueden dar origen a infecciones o enfermedades; es ahí donde representa un importante mecanismo de defensa del huésped. Contribuye al desarrollo de la respuesta inmunológica, además ayuda a evitar la colonización de la piel o las mucosas por bacterias que pueden ser patógenas.
    
    .col-xl-7.col-lg-10.m-auto.mt-5
      .cajon.color-acento-contenido.p-4(style="background-color:#BFEEF4;")
        p.mb-0(data-aos="zoom-in") La flora normal son microorganismos (bacterias y levaduras) que colonizan las mucosas y la piel, sin embargo, en el cuerpo humano existen partes que son estériles en condiciones normales. 
    
    h5.mt-5(data-aos="fade-up") Flora basal o residente
    p(data-aos="fade-up") Está constituida por gérmenes que siempre están presentes, sin mayor potencial de enfermar. Por ejemplo: Staphylococcus epidermidis en la piel o E. coli en el intestino.

    .col-xl-10.m-auto.mt-5
      .row
        .col-lg-6.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/tema4/20.png" data-aos="zoom-in-right")
        .col-lg-6
          figure
            img(src="@/assets/curso/tema4/21.png" data-aos="zoom-in-left")
      figcaption.fw-normal.mt-3 https://www.passeidireto.com/arquivo/50712409/higienizacao-das-maos

    p.mt-5(data-aos="fade-up") Algunas generalidades de la flora humana son: 

    TabsC.color-acento-contenido.mt-4
      .py-3.py-md-4(titulo="Importancia de la flora normal")
        .row.col-lg-11.m-auto
          .col-lg-7.mb-4.mb-lg-0
            ul.fa-ul.mb-0
              li.mb-3
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | #[strong Efectos directos:] #[br] Producción de bacteriocinas. #[br] Producción de metabolitos tóxicos. #[br] Reducción del potencial redox. #[br] Consumo de nutrientes esenciales. #[br] Competencia por receptores.
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
                | #[strong Efectos indirectos:] #[br] Aumento de la producción de anticuerpos. #[br] Estímulo de la fagocitosis. #[br] Aumento de la producción de interferón. #[br] De conjugación de ácidos biliares. 
          .col-lg-5
            figure
              img(src='@/assets/curso/tema4/22.svg')
      .py-3.py-md-4(titulo="Sitios estériles y colonizados")
        .row.col-lg-11.m-auto
          .col-lg-7.mb-4.mb-lg-0
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
          .col-lg-5
            figure
              img(src='@/assets/curso/tema4/23.png')
      .py-3.py-md-4(titulo="La flora transitoria")
        .row.col-lg-11.m-auto
          .col-lg-7.mb-4.mb-lg-0
            p Varia de un ser humano a otro y está compuesta por microorganismos que colonizan en forma intermitente una determinada área, puede incluir bacterias potencialmente patógenas para el propio individuo u otras personas que entran en contacto con él.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema4/24.svg')
      .py-3.py-md-4(titulo="Equilibrio normal entre la flora <br> residente y transitoria")
        .row.col-lg-11.m-auto
          .col-lg-7.mb-4.mb-lg-0
            p Cuando se pierde el equilibrio normal entre la flora residente y la flora transitoria, haciendo que aumente en cantidad la transitoria, es donde se presentan algunos signos como diarrea, fiebre, vómito, etc., que indican un mecanismo de defensa del organismo, por lo tanto, no se debe tratar de eliminar de inmediato el signo si no buscar el origen o causa, para iniciar el tratamiento adecuado. El abuso indiscriminado de los antibióticos hace que esa flora basal, reducida o débil, cree resistencia a los tratamientos. La bacteria resistente continúa creciendo y multiplicándose, haciendo a las infecciones más difíciles de tratar.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema4/25.svg')
    
    p.mt-5(data-aos="zoom-in") A continuación, se describe la flora normal en distintas partes del cuerpo humano.

    .titulo-sexto.color-acento-contenido.mt-5
      h5.d-block Tabla 3
      span Flora normal del cuerpo humano

    .mt-4
      .tabla-a.color-acento-contenido(data-aos="zoom-in-up")
        table
          tbody
            tr(style="background-color:#F6F6F6;")
              td.p-4.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;width: 30%" ) Cavidad oral
              td.p-4(style="border:0;") La flora oral es de tipo mixto, gérmenes aerobios y anaerobios. Las bacterias que se adhieren a la superficie dental, al aumentar por falta de higiene. producen enfermedades como caries y periodontitis.
            tr(style="background-color:#FFF;")
              td.p-4.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;width: 30%" ) Refrigeración
              td.p-4(style="border:0;") El tubo digestivo alberga muchas bacterias responsables de la síntesis de Vit K y Vit del complejo B. Además, compite con los microorganismos patógenos por nutrientes y receptores y elabora bacteriocinas.
            tr(style="background-color:#F6F6F6;")
              td.p-4.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;width: 30%" ) Vaginal
              td.p-4(style="border:0;") 
                p Depende de la cantidad de estrógenos, ya que estos determinan el número de células epiteliales, aumentando el glucógeno y disminuyendo el pH. La acidez inhibe las bacterias. Funciones: protege de la infección vaginal, en especial durante el embarazo.
                ul.fa-ul.mb-0
                  li.mb-1
                    i.fas.fa-atom.fa-li(style="color:#FF9D00;")
                    | Pubertad: dominan las enterobacterias y algunos bacilos Gram negativos anaerobios.
                  li.mb-1
                    i.fas.fa-atom.fa-li(style="color:#FF9D00;")
                    | Edad genital activa: predominan los Lactobacillus.
                  li.mb-1
                    i.fas.fa-atom.fa-li(style="color:#FF9D00;")
                    | Gestación: aumentan lactobacillus y levaduras que en ocasiones pueden causar síntomas.
                  li.mb-1
                    i.fas.fa-atom.fa-li(style="color:#FF9D00;")
                    | Postmenopausia: al final del estímulo hormonal, la flora retorna al patrón de la infancia.
            tr(style="background-color:#FFF;")
              td.p-4.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;width: 30%" ) Aparato respiratorio
              td.p-4(style="border:0;") El aparato respiratorio está dividido en dos: alto y bajo. En el sujeto normal solamente el árbol respiratorio alto (fosas nasales y faringe) presenta flora normal: los senos paranasales, oído medio, tráquea, bronquios pulmonares y pleura son estériles.
            tr(style="background-color:#F6F6F6;")
              td.p-4.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;width: 30%" ) Aparato urinario
              td.p-4(style="border:0;") Salvo la uretra anterior, el aparato urinario es estéril. La orina contribuye a mantener la vía urinaria libre de gérmenes, debido al arrastre, al pH ácido y a su elevada osmolaridad. 
    
    Separador.mt-5

    .titulo-segundo
      h2#t_4_3 4.3  Cadena de transmisión
    
    p(data-aos="zoom-in") La ruta o serie de eslabones del agente infeccioso desde la fuente y los elementos que se articulan en la transmisión del germen hasta ocasionar una infección en el huésped vulnerable, es lo que se llama cadena de transmisión o epidemiológica.

    .col-xl-7.col-lg-10.m-auto.mt-5
      .cajon.color-acento-contenido.p-4(style="background-color:#BFEEF4;")
        p.mb-0(data-aos="zoom-in") Una infección es un estado de enfermedad resultante de la invasión y el crecimiento de microbios en el cuerpo. El equipo de salud debe seguir ciertos prácticos que previenen la propagación de la infección. El objetivo es proteger de las infecciones a pacientes, visitantes y al propio personal.
    
    p.mt-5(data-aos="zoom-in") Los actores que participan en la cadena de transmisión son:


 

      
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
</style>
