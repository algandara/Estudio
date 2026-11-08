// Guía de identificación de aves: especies que se confunden a simple vista.
// Cada grupo compara sus especies con los mismos rasgos (filas) y termina con una "pista decisiva".
// Las columnas de "especies" usan el campo sci de speciesList (data.js).
const birdIdentificationGuide = {
  intro: "Antes de nombrar un pájaro, mira en este orden: tamaño, colores de cabeza y pecho, forma del pico, cola y comportamiento. Con eso separas casi cualquier especie de su grupo sin adivinar.",

  parametros: [
    { titulo: "1. ¿Qué tamaño tiene?", texto: "Compáralo con referencias conocidas: gorrión (pequeño), mirlo (mediano), paloma (grande) o cuervo (muy grande)." },
    { titulo: "2. ¿Qué colores tiene la cabeza?", texto: "Gorro, antifaz, ceja clara, copete o cresta, y si tiene un parche de color en la nuca o en la garganta." },
    { titulo: "3. ¿Qué color tiene el pecho?", texto: "Amarillo, rojo, naranja, blanco, con babero negro o con manchas. Es uno de los rasgos más fiables." },
    { titulo: "4. ¿Cómo es el pico?", texto: "Corto y grueso (semillas), fino y puntiagudo (insectos), largo y recto, o largo y curvado (busca alimento en el barro)." },
    { titulo: "5. ¿Cómo es la cola?", texto: "Larga y ahorquillada (golondrina), corta y en abanico (busardo), larga y erguida (chochín) o larga con bordes blancos." },
    { titulo: "6. ¿Cómo se mueve?", texto: "Se queda quieto en el aire (cernido), planea en círculos, se mueve dando saltitos, camina por el suelo o sube por los troncos." },
    { titulo: "7. ¿Dónde está?", texto: "Junto al agua, en tejados y ciudades, en campo abierto, en el bosque o en el suelo. El lugar ayuda a descartar especies." }
  ],

  grupos: [
    {
      titulo: "Páridos de pecho amarillo",
      porQue: "Son dos carboneros de tamaño parecido y colores llamativos. Se separan por la cabeza y la raya del pecho.",
      especies: ["Parus major", "Cyanistes caeruleus"],
      filas: [
        { rasgo: "Cabeza", valores: [
          "Negra brillante con mejillas blancas.",
          "Gorro azul brillante y antifaz oscuro que cruza el ojo."
        ] },
        { rasgo: "Pecho", valores: [
          "Amarillo intenso con una raya negra central (corbata), más ancha en el macho.",
          "Amarillo claro, sin raya negra."
        ] },
        { rasgo: "Alas y espalda", valores: [
          "Verde oliva con alas grisáceas y una franja blanca.",
          "Verde amarillento con alas azules."
        ] },
        { rasgo: "Pista decisiva", clave: true, valores: [
          "Cabeza negra y corbata negra en el pecho.",
          "Gorrito azul y antifaz oscuro."
        ] }
      ]
    },

    {
      titulo: "Lavanderas",
      porQue: "Las dos mueven la cola sin parar y se parecen de lejos. El color del pecho y el hábitat las separan.",
      especies: ["Motacilla alba", "Motacilla cinerea"],
      filas: [
        { rasgo: "Colores", valores: [
          "Blanca y negra, con espalda gris y babero negro.",
          "Dorso gris y vientre amarillo limón brillante."
        ] },
        { rasgo: "Cola", valores: [
          "Larga, que menea sin parar.",
          "Muy larga, que menea sin parar."
        ] },
        { rasgo: "Hábitat", valores: [
          "Campos, calles y aparcamientos, cerca de casas.",
          "Ríos y arroyos rápidos, posada en piedras."
        ] },
        { rasgo: "Pista decisiva", clave: true, valores: [
          "Babero negro y sin amarillo.",
          "Amarillo limón en el vientre y vive junto al agua."
        ] }
      ]
    },

    {
      titulo: "Rapaces diurnas",
      porQue: "Varias rapaces de color marrón o rojizo se confunden en la distancia. La forma de la cola y el modo de volar son las claves.",
      especies: ["Falco tinnunculus", "Buteo buteo", "Milvus milvus", "Aquila chrysaetos"],
      filas: [
        { rasgo: "Tamaño y color", valores: [
          "Pequeño, pardo rojizo con motas negras en la espalda.",
          "Mediano, marrón con el pecho claro y babero blanco.",
          "Rojo teja, con cola larga y cabeza más clara.",
          "Enorme, marrón casi negro con nuca dorada."
        ] },
        { rasgo: "Cola", valores: [
          "Larga, redondeada, con borde negro.",
          "Corta, en abanico, con bandas oscuras.",
          "Muy larga y ahorquillada (en forma de V).",
          "Larga, con bandas oscuras."
        ] },
        { rasgo: "Forma de volar", valores: [
          "Se queda suspendido en el aire aleteando (cernido).",
          "Planea en círculos con las alas planas, a menudo posado en postes.",
          "Vuela lento con alas en forma de V y cola bifurcada.",
          "Planea en grandes círculos con las alas planas y muy largas."
        ] },
        { rasgo: "Pista decisiva", clave: true, valores: [
          "Se mantiene quieto en el aire, sin moverse.",
          "Posado en postes, con babero claro y cola en abanico.",
          "Cola ahorquillada muy profunda, en forma de V.",
          "Enorme, con nuca dorada."
        ] }
      ]
    },

    {
      titulo: "Búhos y lechuzas",
      porQue: "Son aves nocturnas con cara muy distinta. El cárabo y el mochuelo se confunden por el color marrón, así que la cara y el tamaño son decisivos.",
      especies: ["Bubo bubo", "Strix aluco", "Athene noctua", "Tyto alba"],
      filas: [
        { rasgo: "Tamaño", valores: [
          "Gigante, mucho más grande que los demás.",
          "Mediano, de tamaño de paloma.",
          "Pequeño, del tamaño de un mirlo.",
          "Mediano y esbelto."
        ] },
        { rasgo: "Cara", valores: [
          "Con penachos o orejas en forma de U, y ojos naranja.",
          "Redonda, sin penachos, con ojos negros.",
          "Plana, con cejas blancas y ojos amarillos.",
          "Blanca en forma de corazón, sin penachos."
        ] },
        { rasgo: "Plumaje", valores: [
          "Pardo moteado con penachos.",
          "Pardo-gris moteado, como corteza de árbol.",
          "Pardo con manchas blancas en la espalda.",
          "Blanco por debajo y dorado por encima."
        ] },
        { rasgo: "Pista decisiva", clave: true, valores: [
          "Ojos naranja y penachos grandes.",
          "Cara redonda, sin penachos y ojos negros.",
          "Pequeño, con ojos amarillos y cejas blancas.",
          "Cara blanca en forma de corazón."
        ] }
      ]
    },

    {
      titulo: "Golondrinas y vencejos",
      porQue: "Las golondrinas y el vencejo vuelan igual de rápido y se confunden en el cielo. El color de la garganta y la rabadilla son las claves.",
      especies: ["Hirundo rustica", "Delichon urbicum", "Apus apus"],
      filas: [
        { rasgo: "Garganta y partes", valores: [
          "Garganta y frente rojas.",
          "Blanco puro por debajo y en la rabadilla.",
          "Marrón oscuro, sin rojo ni blanco."
        ] },
        { rasgo: "Cola y alas", valores: [
          "Cola larga con horquilla profunda; alas largas y estrechas.",
          "Cola corta con horquilla poco profunda.",
          "Alas en forma de hoz, muy largas y estrechas; cola corta."
        ] },
        { rasgo: "Vuelo y lugar", valores: [
          "Vuelo ágil y con giros, cerca del suelo; en granjas y establos.",
          "Vuelo más alto y pausado; en fachadas y bajo los aleros.",
          "Vuela sin parar sobre las ciudades; anida en huecos de edificios."
        ] },
        { rasgo: "Pista decisiva", clave: true, valores: [
          "Garganta roja y cola muy larga.",
          "Obispillo blanco.",
          "Silueta de media luna y casi nunca se posa."
        ] }
      ]
    },

    {
      titulo: "Palomas",
      porQue: "La torcaz y la tórtola turca son palomas grises que se confunden. El collar y el tamaño son lo que las distingue.",
      especies: ["Columba palumbus", "Streptopelia decaocto"],
      filas: [
        { rasgo: "Tamaño y cuerpo", valores: [
          "Grande y robusta, con pecho vinoso.",
          "Algo más pequeña y estilizada, de gris beis."
        ] },
        { rasgo: "Collar", valores: [
          "Mancha blanca grande en el cuello (como un anillo).",
          "Fino collar negro en la nuca."
        ] },
        { rasgo: "Hábitat", valores: [
          "Bosques, campos y parques.",
          "Pueblos y ciudades, cerca de las personas."
        ] },
        { rasgo: "Pista decisiva", clave: true, valores: [
          "Mancha blanca grande en el cuello.",
          "Collar negro fino en la nuca."
        ] }
      ]
    },

    {
      titulo: "Limícolas de orilla",
      porQue: "Son aves de agua y barro con patas largas. El tamaño y, sobre todo, la forma del pico las separan.",
      especies: ["Numenius arquata", "Gallinago gallinago", "Charadrius dubius"],
      filas: [
        { rasgo: "Pico", valores: [
          "Muy largo y curvado hacia abajo.",
          "Muy largo y recto, como una aguja.",
          "Corto y oscuro."
        ] },
        { rasgo: "Tamaño y color", valores: [
          "Grande, marrón moteado con dibujo claro.",
          "Pequeña y rechoncha, con rayas rubias y marrones en la cabeza.",
          "Pequeño, pardo arena por encima y con banda negra en el pecho."
        ] },
        { rasgo: "Hábitat", valores: [
          "Prados húmedos y campos.",
          "Zonas húmedas con juncos y barro.",
          "Orillas de ríos, gravas y arena."
        ] },
        { rasgo: "Pista decisiva", clave: true, valores: [
          "Pico curvado hacia abajo, muy largo.",
          "Pico recto y largo, con rayas en la cabeza.",
          "Anillo amarillo alrededor del ojo y pico corto."
        ] }
      ]
    },

    {
      titulo: "Negros y oscuros",
      porQue: "De lejos, el cuervo, el mirlo y el estornino parecen todos negros. Se separan por la cara, el pico y el plumaje de cerca.",
      especies: ["Corvus frugilegus", "Turdus merula", "Sturnus vulgaris"],
      filas: [
        { rasgo: "Tamaño", valores: [
          "Mediano-grande, como un cuervo pequeño.",
          "Mediano, del tamaño de un mirlo.",
          "Pequeño y robusto."
        ] },
        { rasgo: "Cara y pico", valores: [
          "Base del pico y cara peladas, de color gris blanquecino.",
          "Pico naranja brillante (macho) y anillo ocular amarillo.",
          "Pico afilado, oscuro en invierno y amarillo en primavera."
        ] },
        { rasgo: "Plumaje", valores: [
          "Negro con reflejos morados.",
          "Negro uniforme en el macho; la hembra es marrón oscura.",
          "Negro con motas blancas y reflejos verdes y morados."
        ] },
        { rasgo: "Comportamiento", valores: [
          "Anda por los campos en bandadas.",
          "Salta por el suelo con la cola levantada.",
          "Forma nubes enormes de bandadas que suben y bajan."
        ] },
        { rasgo: "Pista decisiva", clave: true, valores: [
          "Cara gris sin plumas.",
          "Macho todo negro con pico naranja.",
          "Motas blancas por todo el plumaje."
        ] }
      ]
    },

    {
      titulo: "Pardos pequeños",
      porQue: "Son pájaros pequeños de color pardo que se ven muy parecidos a primera vista. Se separan por la cola, la cabeza y el lugar donde viven.",
      especies: ["Passer domesticus", "Troglodytes troglodytes", "Alauda arvensis", "Sylvia atricapilla"],
      filas: [
        { rasgo: "Tamaño", valores: [
          "Pequeño y rechoncho.",
          "Muy pequeño y redondo.",
          "Mediano, un poco mayor que un gorrión.",
          "Pequeño y esbelto."
        ] },
        { rasgo: "Cola", valores: [
          "Corta.",
          "Muy corta y siempre erguida hacia arriba.",
          "Corta, con bordes blancos al volar.",
          "Media y gris."
        ] },
        { rasgo: "Cabeza", valores: [
          "El macho tiene gorro gris, nuca castaña y babero negro.",
          "Ceja clara y pico fino.",
          "Puede erguir un penacho o cresta.",
          "Gorrito negro en el macho y marrón en la hembra."
        ] },
        { rasgo: "Hábitat", valores: [
          "Ciudades y pueblos, pegado a las casas.",
          "Setos, bosques con maleza y jardines.",
          "Campos abiertos y cultivos; canta volando.",
          "Arbustos y bosques; come bayas en otoño."
        ] },
        { rasgo: "Pista decisiva", clave: true, valores: [
          "Vive pegado a casas y calles, con babero negro en el macho.",
          "Cola siempre erguida hacia arriba.",
          "Canta subiendo en el aire en vertical.",
          "Gorrito negro (macho) o marrón (hembra)."
        ] }
      ]
    },

    {
      titulo: "Tordos y mirlos",
      porQue: "El mirlo y el zorzal real son grandes tordos que se confunden en el suelo. El pecho y la cabeza son lo que los separa.",
      especies: ["Turdus pilaris", "Turdus merula"],
      filas: [
        { rasgo: "Tamaño", valores: [
          "Grande, más grande que el mirlo.",
          "Mediano."
        ] },
        { rasgo: "Cabeza y pecho", valores: [
          "Cabeza gris ceniza y pecho amarillo-ocre con manchas negras.",
          "Totalmente negro (macho), con anillo ocular amarillo."
        ] },
        { rasgo: "Hábitat", valores: [
          "Campos y bandadas en invierno.",
          "Jardines y setos, siempre en el suelo."
        ] },
        { rasgo: "Pista decisiva", clave: true, valores: [
          "Pecho amarillo-ocre con manchas y cabeza gris.",
          "Todo negro con pico naranja."
        ] }
      ]
    },

    {
      titulo: "Pechos rojos y naranjas",
      porQue: "Estas cinco aves tienen color rojo o naranja en el pecho o la cola. La cola roja y la mancha del pecho son las claves.",
      especies: ["Erithacus rubecula", "Pyrrhula pyrrhula", "Phoenicurus phoenicurus", "Phoenicurus ochruros", "Fringilla coelebs"],
      filas: [
        { rasgo: "Pecho", valores: [
          "Naranja-rojizo por la cara y el pecho, rodeado de gris.",
          "Rojo intenso en el macho; la hembra es gris rosada.",
          "Naranja en el pecho y cara negra (macho).",
          "Gris oscuro, como hollín, sin rojo en el pecho.",
          "Rosado-anaranjado en el pecho (macho)."
        ] },
        { rasgo: "Cola", valores: [
          "Parda, sin rojo.",
          "Negra y corta.",
          "Roja, que vibra sin parar.",
          "Roja, que vibra sin parar.",
          "Negra con bordes blancos al volar."
        ] },
        { rasgo: "Cabeza", valores: [
          "Cara y pecho naranja, sin gorro.",
          "Gorro negro y espalda gris.",
          "Frente blanca y cara negra.",
          "Negra o gris.",
          "Cabeza gris azulada y nuca verdosa."
        ] },
        { rasgo: "Hábitat", valores: [
          "Bosques con sotobosque y jardines; canta en invierno.",
          "Arbustos y bosques.",
          "Huertos y claros de bosque.",
          "Tejados, edificios y ruinas.",
          "Bosques y parques."
        ] },
        { rasgo: "Pista decisiva", clave: true, valores: [
          "Cara y pecho naranja, sin rojo en la cola.",
          "Pecho rojo intenso y gorra negra.",
          "Cola roja y frente blanca.",
          "Cola roja y cuerpo oscuro; vive en tejados.",
          "Dos franjas blancas en el ala."
        ] }
      ]
    },

    {
      titulo: "Pinzones y escribanos amarillos",
      porQue: "Son aves pequeñas con colores amarillos o verdes en las alas. Se distinguen por el pico y la cara.",
      especies: ["Chloris chloris", "Emberiza citrinella", "Carduelis carduelis"],
      filas: [
        { rasgo: "Colores", valores: [
          "Verde amarillento con parches amarillos en las alas y la cola.",
          "Amarillo limón en la cabeza y el pecho.",
          "Cara roja, cabeza negra y alas negras con franja amarilla."
        ] },
        { rasgo: "Pico", valores: [
          "Grueso y claro.",
          "Corto y cónico.",
          "Fino y puntiagudo."
        ] },
        { rasgo: "Cola y hábitat", valores: [
          "Con un parche amarillo en la base. Jardines, parques y comederos.",
          "Castaña con bordes blancos al volar. Campos con setos y matorrales.",
          "Negra con marcas blancas. Jardines y prados con cardos."
        ] },
        { rasgo: "Pista decisiva", clave: true, valores: [
          "Verde con parches amarillos en las alas.",
          "Cabeza y pecho amarillo limón.",
          "Cara roja y franja amarilla en las alas negras."
        ] }
      ]
    },

    {
      titulo: "Grises grandes junto al agua",
      porQue: "La oca gris y la garza gris son grandes aves grises de agua. Se separan por el pico, las patas y la forma de volar.",
      especies: ["Anser anser", "Ardea cinerea"],
      filas: [
        { rasgo: "Pico y patas", valores: [
          "Pico naranja, grueso y triangular; patas rosadas.",
          "Pico largo, afilado y amarillo-naranja; patas largas y grises."
        ] },
        { rasgo: "Forma de volar", valores: [
          "Vuela en bandas en V con aleteo rápido.",
          "Vuela con el cuello recogido en forma de S."
        ] },
        { rasgo: "Hábitat", valores: [
          "Lagos, ríos y prados; pasta en la hierba.",
          "Orillas de ríos, lagos y estanques; camina despacio."
        ] },
        { rasgo: "Pista decisiva", clave: true, valores: [
          "Pico naranja grueso y patas rosadas.",
          "Cuello en S al volar y pico largo y afilado."
        ] }
      ]
    },

    {
      titulo: "Patos y aves de agua",
      porQue: "Los patos oscuros y el serreta se confunden de lejos. La cabeza, el pico y el copete son las claves.",
      especies: ["Anas platyrhynchos", "Aythya fuligula", "Mergus merganser"],
      filas: [
        { rasgo: "Cabeza", valores: [
          "Macho con cabeza verde metalizada y collar blanco.",
          "Negra con copete colgante en la nuca.",
          "Macho con cabeza verde oscura; hembra con cabeza castaña y cresta."
        ] },
        { rasgo: "Cuerpo", valores: [
          "Pecho castaño (macho) y mancha azul en el ala.",
          "Negro con flancos blancos (macho) y ojos amarillos.",
          "Cuerpo blanco y espalda negra en el macho."
        ] },
        { rasgo: "Pico", valores: [
          "Ancho y amarillo-naranja.",
          "Gris azulado con punta negra.",
          "Largo, fino y rojo, con dientes en el borde."
        ] },
        { rasgo: "Pista decisiva", clave: true, valores: [
          "Cabeza verde y collar blanco en el macho.",
          "Copete colgante en la nuca y ojo amarillo.",
          "Pico rojo, fino y con dientes."
        ] }
      ]
    }
  ],

  sinParecidos: [
    { sci: "Podiceps cristatus", nota: "Cuello blanco y penachos negros en la cabeza en época de celo. Nada tan bajo que solo asoma el cuello." },
    { sci: "Sitta europaea", nota: "Espalda azul grisácea, antifaz negro y vientre naranja. Sube y baja por los troncos, incluso boca abajo." },
    { sci: "Dendrocopos major", nota: "Carpintero blanco y negro con mancha roja bajo la cola y, en el macho, parche rojo en la nuca." },
    { sci: "Garrulus glandarius", nota: "Cuerpo canela, bigote negro y parche azul en el ala. Esconde bellotas." },
    { sci: "Lanius collurio", nota: "Antifaz negro, cabeza gris, dorso castaño y pico con gancho." }
  ]
};
