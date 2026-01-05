// Datos de las 3 páginas con saltos de línea en los versos
const pagesData = [
  {
    round: "Round I",
    number: 1,
    verse: `
Hola, hola, hola, hola, hermanito
Hoy haré, haremos, hipotéticamente hip-hop
Hip-hop, hipo, hip-hop, hip-hop
¡Hostia, helicóptero hip-hop!`,
    start: 483,
    end: 498.5,
    img: "img/1.png"
  },
  {
    round: "Round I",
    number: 2,
    verse: `
¿Haremos historia?, hallaremos horizontes holísticos
Hermanaremos hemisferios
Habilitaremos haces halógenos hasta honrar hidrógeno, helio
¡Haremos hip-hop!

Hombres hablando hieráticos, histéricos, histriónicos
Haciendo hincapié, halagándose habilidades horrendas habitualmente hacia hembras
Hinchando hechos haciéndolos heroicos, heredando hábitos históricamente hegemónicos
¡huy, huy! ¿Hueles homofobia?
¡Hedor! ¡Hedor!`,
    start: 498.8,   // actualizado a 8:18
    end: 525,     // actualizado a 8:45
    img: "img/2.png"
  },
  {
    round: "Round I",
    number: 3,
    verse: `
Hedonista humanidad hiperactiva, hiperventila
Hermosas hectáreas hundidas, hendidas
Herbicida homicida, herencia homínida herida
Homo habilis, haciéndose harakiris
Hiriendo hábitats, hollando hiedras, hierbas, hojas... hándicaps

Humus, hongos, huertas huérfanas, hileras humanas
Hormiguitas hacinadas huyendo hacia hormigón, ¡hala!
Hurones, hienas, hurracas husmeando hierro, hojalata, hashtag: hamaca
¡Hipocresía hipocondríaca!`,
    start: 525.7,
    end: 560.5,
    img: "img/3.png"
  },
  {
    round: "Round I",
    number: 4,
    verse: `
Hamburguesas, harinas hiperprocesadas
¿Huesos hidratan?, ¿hay hemoglobina?, hay horchata, ¡Horror!
Hebras helicoidales, H2O, hologramas hollywoodenses hechizándonos, ¡Horror!

Himnos, hipnosis
Herméticos hermenéuticos hilvanando hipótesis
Humano hipnotizado ha homenajeado Harvard
Han hackeado hortalizas haciéndolas hardware, ¡Horror!`,
    start: 564.7,
    end: 593,
    img: "img/4.png"
  },
  {
    round: "Round I",
    number: 5,
    verse: `
Hocicos hurgando honorarios
Hámsters hurtándote horarios
Huevos hinchados, henchidos hígados hostigados, hastiados, hartazgo

Hubo hallazgos, hubo hallazgos
Hemos heredado herramientas, hay hospitales homologados, habitaciones hipermodernas
Hermanas hispanohablantes hambrientas, hijas haitianas harapientas`,
    start: 603.7,
    end: 625,
    img: "img/5.png"
  },
  {
    round: "Round I",
    number: 6,
    verse: `
Humano, humano, huésped hostil, hazmerreír
Hicimos hoces, hondas, hachas, hoy HDMI
Historiales hediondos habitando hondo, hoyos, hordas hitlerianas, holocausto, ¡Horror!
Hebreos horadando hogares, holgazanes huecos haciéndoles honores, ¡hale!
Hecatombe, humo, Hiroshima
Herejes, heroínas, hechiceras humilladas
Horcas, hogueras
Hemorragia huracanada, hipotrofia, hambre, hipoxia`,
    start: 625.3,
    end: 650.5,
    img: "img/6.png"
  },
  {
    round: "Round I",
    number: 7,
    verse: `
Hacemos hip-hop
Hippies hateando hipsters, hipsters hateando hippies, heavy
Hip-hopers hateando Herbie Hancock
Hevillas holgadas y Hoodies Helly Hansen, ¡Horror!

Herman Hess, Heidegger, Heisenberg, Hume
Horóscopo hindú, hacemos haikus, ¡Horror!

Hondureñas, holandeses, hongkoneses, hermafroditas, homosexuales, heterosexuales
Honestamente hilemos huellas híbridas, humildemente hablemos hechos
Hagamos hip-hop

¡Round 1!
¡Hurra!`,
    start: 650.9,
    end: 698,
    img: "img/7.png"
  },




  {
    round: "Round II",
    number: 1,
    index: 1,
    verse: `
Bueno, hoy vengo con la máscara ajustable de las conveniencias
Porque parece que me conviene
La verdad, no sé qué la sostiene ni qué lazos tiene
Pero creo que está hecha por hilos invisibles que todo lo conectan

Y hablando de hilos, vamos a hilar, a hilar, Maillard, hilar`,
    start: 1102,
    end: 1119.9,
    img: "img/2_1.png"
  },
  {
    round: "Round II",
    number: 2,
    verse: `
Porque, ¿Qué es el arte?
¿Deberíamos de saber responder, no?
Porque yo creo que la gente que hace sillas nunca se pregunta, ¿Qué es una silla?
¿Debería de haber un puto consenso, no?
¿Pero, qué es el arte? ¿Y qué son las batallas?
Y, mejor dicho, ¿Qué queremos obtener de ellas?
¿Cuál es su función? ¿Cuál es el origen de estos enfrentamientos?
¿Es algo que nos sale verdaderamente a nosotros de dentro?
Porque a ver, a ver
No vaya a ser que sea solo ya otra cosa mercantil, como de tantas otras
Que viene a formar parte de los productos
Y que las organizaciones, los Estados y las marcas necesitan para hacer cultura
Porque eso de hacer cultura mantiene la individualidad de un Estado y ese Estado consigna sus límites como tal
Y podemos saber quién va contra quién y, entonces: guerra`,
    start: 1120,
    end: 1161,
    img: "img/2_2.png"
  },
  {
    round: "Round II",
    number: 3,
    verse: `
La verdad creo que esta violencia es innecesaria
Pues no responde a un hambre real, más bien solo ansia
Tampoco un juego previo de entrenamiento para cazar a una futura presa ahora imaginaria

Naces y te silencian
Creces mientras dejan tus ideas en evidencia
Trabajas para pagar tu propia residencia
Ganas pasta y te la gastas en tatuarte la palabra "resiliencia"
Cuando te haces mayor vuelves a una residencia
Mientras esperas a la muerte y te resilencian`,
    start: 1166.5,
    end: 1193,
    img: "img/2_3.png"
  },
  {
    round: "Round II",
    number: 4,
    verse: `
Quería decir que todo es un ciclo, un cúmulo de círculos viciosos
Yo vengo con mi cuerpo, la verdad, no es un vehículo ambicioso
Mi cuerpo va desnudo, salvo el cuero cabelludo
Y, a menudo, el suelo sabe judo

Solo somos envidiosos proyectando carencias
Es la pescadilla que se muerde la cola o el rapero que se come su propia polla y se autofolla
Como es arriba, es abajo, por eso aún bajo al parque
Podría presentarte un parque en Alicante están repicantes, amigo
Y, en verdad, en verdad, ya no se llevan las estructuras`,
    start: 1205.7,
    end: 1243.7,
    img: "img/2_4.png"
  },
  {
    round: "Round II",
    number: 5,
    verse: `
Yo vengo de la docencia, del lado que es ciencia
Pero podría ver a Krishnamurti con las mismas multis que en mi adolescencia
Tan lejos de la luz, viendo tantas luces
Nos quieren débiles, dóciles, a cuatro pitis' de ser estériles
Mi yo del futuro dice: "Envidio lo que se reproduce"
Y mi yo del pasado: "Flashback"
Me encuentro solo en mi dormitorio, voy para el escritorio, reviso mi repertorio
Tengo que darle donde duela
Tengo un ángel y un demonio
El ángel dice: "Deja el odio"
Y el demonio: "Qué va coño, quema el folio, dale un trato vejatorio"
`,
    start: 1245.3,
    end: 1278,
    img: "img/2_5.png"
  },
  {
    round: "Round II",
    number: 6,
    verse: `
Es como si me hablase el podio y me dijera que me espera
Y yo haciéndome el otro, como si conmigo no fuera
El insomnio me desvela
Hinco los codos en un rincón incómodo y ¡pum!
Rompo las paredes de pladur

Cuando la base es el odio, lo mejor: tirarse un a capela`,
    start: 1278,
    end: 1295,
    img: "img/2_6.png"
  },
  {
    round: "Round II",
    number: 7,
    verse: `
Voy a dejar que la escena me moldee y que se eleve mi carrera
No sé qué hago aquí si cualquier idea revolucionaria por más que sea buena, al final se blanquea siendo absorbida por el poder
Sea como sea, mientras el talento y la acción real se desperdician en esta pelea

Si levanto un muro entre nosotros será para que lo pintemos, no para rascarlo y venderte farlopa
Tampoco para separarnos, y mucho menos para ganar una copa
Es un muro virtual, pero en el mundo real se toca
Así que si vienes contra mí, vas contra él, chocas`,
    start: 1326,
    end: 1356,
    img: "img/2_7.png"
  },
  {
    round: "Round II",
    number: 8,
    verse: `
La verdad, no sé si sentir orgullo o vergüenza
Pero sé que no me sentiré feliz cuando cometas un desliz y lo tuyo se tuerza
Cooperar o competir, ¿por qué no unir fuerzas?
Me hablan de formato y no pregunto cuál
Ya sé que es punto .wav
Te giro el beat y pásame el feat cuando lo tengas`,
    start: 1356.8,
    end: 1375,
    img: "img/2_8.png"
  },
  {
    round: "Round II",
    number: 9,
    verse: `
Lo fácil sería decir: es el Replik
Pero el réplica de Adidas falsas
Porque se cree original
Y le queda fatal la cuarta barra

¿Qué onda con la cuarta barra?
¿Qué onda con la pared?
¿Qué onda con que se vuelva a romper, ahora otra vez, la cuarta pared?
¿Cuánto aguantaré esta farsa?
¿Cuándo aguantaré?

He cruzado el charco y por eso me mojo, antes de que mi seco arte se coarte por enojo
Vengo que el avión casi ni lo cojo, desorientado, flojo, cansado por el puto jet lag
Y aunque llegue de-morado, me gusta vestir de rojo para camuflarme con mis propias red flags`,
    start: 1383,
    end: 1427.3,
    img: "img/2_9.png"
  },
  {
    round: "Round II",
    number: 10,
    verse: `
Replik, Piensa bien si esto es algo real
Porque el saber solo es saborear, el paladar no puede apreciar la abstracción ni el concepto
A veces ser un loco recto es lo correcto
Mueve tu foco y vuélvete loco
Bóveda arbórea saboreando el paladar de lo ignoto

Y noto, que me cuesta conciliar
Esta extraña dualidad, soberbia y humildad
¿En serio me tengo que preocupar por el hilo argumental, analizar a mi rival y tratar de ser frontal?
Para mí, el Hip Hop es incomodar, protestar, pintar graffiti ilegal, pero podemos seguir bebiendo Red Bull, diciendo: "¿Quién es mejor, Replik o Jal?`,
    start: 1431.2,
    end: 1460,
    img: "img/2_10.png"
  },
  {
    round: "Round II",
    number: 11,
    verse: `
Bueno, obviamente, obviamente, mi situación personal tampoco se puede extrapolar a cualquier persona de otra zona o lugar
Si para alguno está bien insultar descalificar o humillar para desmejorar su situación laboral, me parece fenomenal
Pero aparte de eso, no olvidemos que los niños están oyendo
Porque "Wu-Tang is for the children", solo para lo que queremos

No sé por qué me meto en este berenjenal cuando podría hacer la metriquita esa que criticas y que digan: "¡Ese es el Jal!"`,
    start: 1513.8,
    end: 1542.5,
    img: "img/2_11.png"
  },
  {
    round: "Round II",
    number: 12,
    verse: `
Yo no compito contigo, amigo, yo solo sigo los hilos
Si nos olvidamos un momento del contexto y los estímulos externos
Quizá puedas olerlo, porque el vínculo es etéreo

Moriremos, y creo que da igual porque es inmenso
Una diversión que nos encuentra y nos abarca en el silencio
No sé, todo lo que entiendo es que vengo de un proceso, el que confieso que no entiendo
Y es que si te encuentro en ese limbo, te involucro con mis versos
Y te cuento mis secretos mas- ¡Anuncio!
    `,
    start: 1543,
    end: 1567,
    img: "img/2_12.png"
  },
  {
    round: "Round II",
    number: 13,
    verse: `
¡Anuncio!
¿Cansado de pareados?
¿Quieres un nuevo recurso para introducir en tus batallas escritas?
¿O en tus batallas improvisadas, pero muy camuflado para que parezca que se te ocurrió al momento?

Te presento el anasílabo
Es muy sencillo:
Si tomamos tequila, la bebida no, la palabra "tequila"
Quítale la primera sílaba y ponla al final
Tendrás "quilate", tequila, quilate
¿Quién no quiere quilates?

Espera, espera, no la quites
¿El qué?, ¿la sílaba o la tele?
No, no, la tele, la tele. Déjala, déjala, déjala
El anasílabo se puede complicar, deformar, distorsionar para que los videoreaccionadores de batallas generen un contenido súperinteres-
Anuncio!
Nacerás nocente, cenarás centeno, buscando cereal que te realce
Querrás esmaltar tu malestar, pero no te alteres cuando no resalte

Apágala, apágala, quita la tele
Que movida, un anuncio dentro del anuncio 
¿El anasílabo? ¿Qué coño es eso?
Entonces, tequila, quilate, esmaltar, malestar
Entonces, esponja, japonés, epicentro, tropiecen`,
    start: null,
    end: null,
    img: "img/7.png"
  },
  {
    round: "Round II",
    number: 14,
    verse: `
¡Pero un momento!
¡Eso no rima!, ¡eso no rima!
Que vuelvan las estructuras
¡Los muros maestros, Replik!

Metidas de versos empiezan a ver sometidas
El texto me tira, el resto es to' mentira
Todo gira inmerso en esto, respira
¡Vidas entrometidas!
¡Rimas dentro metidas!
¡Vomito métricas!

¡Qué vergüenza!`,
    start: 1566.3,
    end: 1680,
    img: "img/2_14.png"
  },
  {
    round: "Round II",
    number: 15,
    verse: `
¡Qué vergüenza!, ¡qué ignominia!
¡Calma!, si esto no funciona aún puedo ir a la vendimia a trabajar la viña
Pero quizá ya vendí mi alma en estas líneas

Tengo que hacer alquimia
Me desapego de mi yo y le agrego un millón de bots de la India
Me dedico a contemplar arquitectónica corintia

Replik, hagamos que la realidad supere la fricción
Yo ya he tirado los muros y las estructuras
Ahora, si quieres mi ayuda, vamos a tumbar la columna
¡Pero vámonos antes de que nos caiga encima el Luna si se derrumba!
Round 2`,
    start: 1690,
    end: 1723,
    img: "img/2_15.png"
  },
  {
    round: "Round II",
    number: 2,
    verse: `
    
    `,
    start: 650.9,
    end: 698,
    img: "img/7.png"
  }
];

// Generar las páginas en el HTML
pagesData.forEach((page, index) => {
  const pageDiv = document.createElement("div");
  pageDiv.className = "page";

  // Generar HTML del video solo si la página tiene start y end definidos
let videoHTML = "";
if (page.start !== null && page.end !== null) {
  videoHTML = `
    <figure class="illustration">
      <img id="thumbnail${index}" src="${page.img}" alt="Ilustración de la batalla" onclick="playVideoSegmentDynamic(${index})">
      <video id="battleVideo${index}">
        <source src="vid/Video.mp4" type="video/mp4">
      </video>
      <button id="closeBtn${index}" onclick="closeVideoDynamic(${index})">X</button>
    </figure>`;
}


  pageDiv.innerHTML = `
  <header class="page-header">
    <span>${page.round}</span>
    <span class="page-number">${page.number}</span>
  </header>

  <article class="content">
    ${(index === 0 || index === 7) ? `
  <h1 class="book-title">
    Jaloner - Replik
    <span class="book-round">${page.round}</span>
  </h1>
` : ""}


    <p class="verse">
      ${page.verse}
    </p>

    ${videoHTML}
  </article>

  <footer class="page-footer">
    ${page.start !== null ? "Pulsa la ilustración para escuchar el verso" : ""}
  </footer>
`;


  document.body.appendChild(pageDiv);

  // Click sobre video para pausar/reanudar
  if (page.start !== null && page.end !== null) {
  const video = document.getElementById(`battleVideo${index}`);
  video.addEventListener("click", () => {
    if (!video.paused) video.pause();
    else video.play();
  });
}

});

// Funciones dinámicas para cada página
function playVideoSegmentDynamic(i) {
  const video = document.getElementById(`battleVideo${i}`);
  const thumbnail = document.getElementById(`thumbnail${i}`);
  const closeBtn = document.getElementById(`closeBtn${i}`);
  const page = pagesData[i];

  thumbnail.style.display = "none";
  video.style.display = "block";
  closeBtn.style.display = "block";

  video.currentTime = page.start;
  video.play();

  const stopHandler = () => {
    if (video.currentTime >= page.end) {
      video.pause();
      closeVideoDynamic(i);
      video.removeEventListener('timeupdate', stopHandler);
    }
  };
  video.addEventListener('timeupdate', stopHandler);
}

function closeVideoDynamic(i) {
  const video = document.getElementById(`battleVideo${i}`);
  const thumbnail = document.getElementById(`thumbnail${i}`);
  const closeBtn = document.getElementById(`closeBtn${i}`);

  video.pause();
  video.style.display = "none";
  closeBtn.style.display = "none";
  thumbnail.style.display = "block";
}
