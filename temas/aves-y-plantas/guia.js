// Guía de identificación de plantas: especies que se confunden a simple vista.
// Cada grupo compara sus especies con los mismos rasgos (filas) y termina con una "pista decisiva".
// Las columnas de "especies" usan el campo sci de speciesList (data.js).
const identificationGuide = {
  intro: "Antes de nombrar una planta, mira en este orden: forma de la hoja, cómo se colocan las hojas, el fruto, las espinas y la corteza. Con eso separas casi cualquier especie de su grupo sin adivinar.",

  parametros: [
    { titulo: "1. ¿Aguja o plana?", texto: "Las coníferas tienen agujas o escamas. Si la hoja es plana y ancha, es un árbol o arbusto de hoja caduca." },
    { titulo: "2. ¿Simple o compuesta?", texto: "Compuesta = una hoja formada por varias hojitas (folíolos) unidas a un mismo rabo central, como una pluma. Ejemplos: Esche, Vogelbeere, Roter Holunder, Hundsrose." },
    { titulo: "3. ¿Opuestas o alternas?", texto: "Opuestas: dos hojas enfrentadas en el mismo nudo (Liguster, Roter Hartriegel, Gemeine Heckenkirsche, Esche). Alternas: una hoja por nudo, en zigzag." },
    { titulo: "4. ¿Cómo es el borde?", texto: "Liso y sin dientes (Faulbaum), con dientes finos o gruesos, doblemente aserrado (Hainbuche, Haselnuss) u ondulado (Rotbuche)." },
    { titulo: "5. ¿Qué forma tiene el fruto?", texto: "Color (negro, rojo, azul con polvo blanco), forma (redonda, alargada, sámara con alas) y cómo cuelga: en racimo, de dos en dos o suelto." },
    { titulo: "6. ¿Espinas o pinchos?", texto: "Rectos y rígidos (Schlehe). Curvos y fuertes (Brombeere, Hundsrose). La mayoría de árboles no tienen espinas." },
    { titulo: "7. ¿Qué pasa al tocarla o romperla?", texto: "Savia lechosa al romper el rabo (Spitz-Ahorn), hoja áspera como lija (Feld-Ulme), agujas que pinchan y giran entre los dedos (Fichte), corteza blanca que se despega en papel (Weiß-Birke)." }
  ],

  grupos: [
    {
      titulo: "Frutos negros o azul oscuro",
      porQue: "Son arbustos que de lejos se parecen: todos tienen bayas oscuras. Se separan por la hoja, la forma del racimo y las espinas.",
      especies: ["Ligustrum vulgare", "Cornus sanguinea", "Prunus padus", "Rubus fruticosus", "Frangula alnus", "Prunus spinosa"],
      filas: [
        { rasgo: "Hojas", valores: [
          "Opuestas (de dos en dos), estrechas, enteras y lisas.",
          "Opuestas, ovaladas, con los nervios muy curvados hacia la punta.",
          "Alternas, ovaladas, con dientes finos.",
          "Compuestas: 3 a 5 folíolos con dientes gruesos.",
          "Alternas, ovaladas, sin dientes y con nervios paralelos.",
          "Alternas, pequeñas y ovaladas, con dientes finos."
        ] },
        { rasgo: "Frutos", valores: [
          "Negros y brillantes en racimo piramidal corto.",
          "Negro azulado en ramillete plano.",
          "Negros y redondos en racimos largos y colgantes, como uvas.",
          "Negros, formados por muchas gotitas agrupadas.",
          "Primero rojos y luego negros; rojos y negros a la vez en la misma rama.",
          "Azul oscuro con polvo blanco, sin racimo y muy ácidos."
        ] },
        { rasgo: "Tallo o espinas", valores: [
          "Ramas lisas, sin espinas.",
          "Ramas rojas en invierno, sin espinas.",
          "Corteza oscura con lenticelas; sin espinas.",
          "Tallos arqueados con aguijones curvos.",
          "Sin espinas; corteza oscura con lenticelas claras.",
          "Espinas rígidas, rectas y muy afiladas."
        ] },
        { rasgo: "Pista decisiva", clave: true, valores: [
          "Racimo piramidal de bayas negras y hojas opuestas.",
          "Tallos rojos en invierno y nervios de la hoja que se curvan.",
          "Racimos colgantes muy largos. En primavera, flores blancas en racimo.",
          "Tallo arqueado con pinchos; el fruto parece una mora.",
          "Hojas sin dientes y frutos rojos que se vuelven negros.",
          "Espinas rectas. Las flores blancas salen antes que las hojas."
        ] }
      ]
    },

    {
      titulo: "Frutos rojos",
      porQue: "Muchas plantas de frutos rojos se parecen de lejos. Lo que las separa es cómo se agrupan las bayas y cómo son las hojas.",
      especies: ["Lonicera xylosteum", "Sambucus racemosa", "Sorbus aucuparia", "Rosa canina", "Prunus avium", "Viburnum lantana"],
      filas: [
        { rasgo: "Hojas", valores: [
          "Opuestas, simples, ovaladas y con pelillos finos.",
          "Compuestas en pluma, con 5 a 7 folíolos con dientes.",
          "Compuestas en pluma, con 9 o más folíolos dentados.",
          "Compuestas en pluma, con 5 a 7 folíolos de dientes finos.",
          "Simples, grandes, ovaladas y con dientes.",
          "Simples, muy arrugadas y con el envés cubierto de lana."
        ] },
        { rasgo: "Frutos", valores: [
          "Rojos y translúcidos, siempre de dos en dos soldados por la base.",
          "Rojos, en racimo cónico muy apretado.",
          "Rojo-naranja, en racimo plano y denso.",
          "Escaramujos rojos, alargados y carnosos.",
          "Cerezas rojas sueltas o de dos en dos, en rabos largos.",
          "Rojos al principio y negros después, en ramillete plano."
        ] },
        { rasgo: "Tallo o espinas", valores: [
          "Ramas finas, sin espinas.",
          "Médula blanca grande dentro de la rama; sin espinas.",
          "Yemas negras aterciopeladas; corteza lisa y gris.",
          "Aguijones curvos y fuertes.",
          "Corteza brillante con lenticelas horizontales.",
          "Ramas y hojas recubiertas de lana."
        ] },
        { rasgo: "Pista decisiva", clave: true, valores: [
          "Dos bayas soldadas en la base.",
          "Racimo cónico muy compacto con médula grande.",
          "Muchos folíolos en pluma y racimo plano.",
          "Espinas curvas y flores rosas.",
          "Cereza suelta sobre rabo largo, no en racimo.",
          "Hojas lanudas y frutos rojos que luego se vuelven negros."
        ] }
      ]
    },

    {
      titulo: "Ahorn (arces)",
      porQue: "Los tres tienen hojas con lóbulos y se confunden de lejos. Las pistas están en los lóbulos, el envés y la savia.",
      especies: ["Acer pseudoplatanus", "Acer platanoides", "Acer campestre"],
      filas: [
        { rasgo: "Hojas", valores: [
          "5 lóbulos grandes con dientes gruesos, sin puntas largas. Envés blanquecino o gris azulado.",
          "5 lóbulos con puntas largas y afiladas. Verde oscuro por las dos caras.",
          "3 a 5 lóbulos pequeños, redondeados y sin puntas."
        ] },
        { rasgo: "Savia o rabo", valores: [
          "Savia transparente al romper el rabo.",
          "Savia lechosa (blanca) al romper el rabo.",
          "Savia transparente. Hojas más pequeñas que las anteriores."
        ] },
        { rasgo: "Frutos o ramas", valores: [
          "Sámaras con alas en ángulo de unos 90°.",
          "Sámaras con alas casi horizontales (unos 180°).",
          "Ramas con bandas de corcho; sámaras con alas."
        ] },
        { rasgo: "Pista decisiva", clave: true, valores: [
          "Envés blanquecino y dientes gruesos, sin puntas.",
          "Puntas largas en los lóbulos y savia lechosa.",
          "Hojas pequeñas, lóbulos redondos y corcho en las ramas."
        ] }
      ]
    },

    {
      titulo: "Tilos y olmos",
      porQue: "Los tilos y el olmo tienen hojas parecidas, con forma de corazón o con dientes. El tamaño de la hoja y el envés son la clave.",
      especies: ["Tilia cordata", "Tilia platyphyllos", "Ulmus minor"],
      filas: [
        { rasgo: "Hojas", valores: [
          "Pequeñas (3 a 8 cm), en forma de corazón con la base simétrica.",
          "Grandes (8 a 12 cm), en forma de corazón con la base asimétrica.",
          "Ovaladas, base muy torcida, borde doblemente aserrado y superficie áspera."
        ] },
        { rasgo: "Envés", valores: [
          "Mechones de pelo rojizo en los ángulos de las nervaduras.",
          "Pelusa blanquecina, sin mechones rojizos.",
          "Verde mate y áspero al tacto, como lija."
        ] },
        { rasgo: "Frutos", valores: [
          "Frutos redondos, normalmente con 1 semilla.",
          "Frutos con 2 o 3 semillas y costillas marcadas.",
          "Sámaras pequeñas, con el fruto en el centro de un ala redonda."
        ] },
        { rasgo: "Pista decisiva", clave: true, valores: [
          "Mechones rojizos en el envés.",
          "Hojas grandes y base asimétrica.",
          "Hoja áspera y base torcida."
        ] }
      ]
    },

    {
      titulo: "Hojas redondas y dentadas (avellano, aliso, carpe, abedul)",
      porQue: "Son hojas ovaladas o redondas con dientes. Se distinguen por la forma de la punta, los nervios, el fruto y la corteza.",
      especies: ["Corylus avellana", "Alnus glutinosa", "Carpinus betulus", "Betula pendula"],
      filas: [
        { rasgo: "Hojas", valores: [
          "Casi redondas, con base en forma de corazón, peludas y con dientes dobles.",
          "Redondas, con la punta cortada o hundida en forma de V.",
          "Ovaladas, con nervios paralelos muy marcados y plegadas como un acordeón.",
          "Triangulares, con punta larga y afilada."
        ] },
        { rasgo: "Frutos", valores: [
          "Avellanas dentro de una envoltura con flecos, en racimos.",
          "Piñitas leñosas negras que se quedan en la rama todo el año.",
          "Frutos colgantes con brácteas de tres lóbulos parecidas al papel.",
          "Conitos pequeños de escamas que se deshacen al madurar."
        ] },
        { rasgo: "Corteza", valores: [
          "Lisa, marrón grisácea, con lenticelas.",
          "Grisácea oscura, lisa al principio.",
          "Gris lisa con estrías, como músculos.",
          "Blanca, se despega en tiras de papel."
        ] },
        { rasgo: "Pista decisiva", clave: true, valores: [
          "Avellanas con flecos y hojas casi redondas y peludas.",
          "Piñitas negras leñosas y punta de la hoja entallada.",
          "Nervios paralelos marcados y hojas plegadas.",
          "Corteza blanca de papel."
        ] }
      ]
    },

    {
      titulo: "Sauces y álamos",
      porQue: "Los sauces tienen hojas alargadas u ovaladas, y el álamo temblón tiene hojas casi redondas. La clave está en la forma de la hoja, el rabo y el tacto.",
      especies: ["Salix alba", "Salix caprea", "Populus tremula"],
      filas: [
        { rasgo: "Hojas", valores: [
          "Largas y estrechas (lanceoladas), con pelusa plateada por las dos caras.",
          "Anchas y ovaladas, arrugadas, con el envés gris y peludo.",
          "Casi redondas, con dientes ondulados."
        ] },
        { rasgo: "Rabo", valores: [
          "Corto.",
          "Corto y grueso.",
          "Largo y aplanado lateralmente: la hoja tiembla con el viento."
        ] },
        { rasgo: "Ramas o tronco", valores: [
          "Ramas finas y largas que cuelgan.",
          "Ramas gruesas y rígidas, con amentos plateados y peludos en primavera.",
          "Corteza lisa, verdosa o grisácea al principio."
        ] },
        { rasgo: "Pista decisiva", clave: true, valores: [
          "Hoja larga y estrecha, plateada por las dos caras.",
          "Hoja ancha y arrugada, con pelusa gris por debajo.",
          "Hoja redonda con rabo aplanado que tiembla."
        ] }
      ]
    },

    {
      titulo: "Robles y hayas",
      porQue: "Ambos son árboles grandes que se confunden de lejos. Se separan por la forma de la hoja, el rabo y el fruto.",
      especies: ["Quercus robur", "Fagus sylvatica"],
      filas: [
        { rasgo: "Hojas", valores: [
          "Con lóbulos redondeados, rabo muy corto y orejuelas en la base.",
          "Ovaladas, con borde ondulado y 5 a 9 pares de nervios paralelos."
        ] },
        { rasgo: "Frutos", valores: [
          "Bellotas colgando de un rabo largo.",
          "Hayucos dentro de cápsulas erizadas con pinchos."
        ] },
        { rasgo: "Corteza", valores: [
          "Gris, con grietas profundas.",
          "Gris clara, lisa, como una piel."
        ] },
        { rasgo: "Pista decisiva", clave: true, valores: [
          "Hojas con lóbulos y bellotas en rabo largo.",
          "Borde ondulado y corteza lisa."
        ] }
      ]
    },

    {
      titulo: "Coníferas (agujas)",
      porQue: "Las coníferas se parecen mucho de lejos. Se separan por la aguja (cómo es y cómo sale), la piña y la corteza.",
      especies: ["Picea abies", "Abies alba", "Larix decidua", "Pinus sylvestris"],
      filas: [
        { rasgo: "Agujas", valores: [
          "Cortas, de cuatro caras; pinchan y giran al rodarlas entre los dedos.",
          "Planas, con punta despuntada y dos rayas blancas por debajo.",
          "Blandas, en manojitos de 20 a 40; caen en otoño.",
          "Largas, en parejas, retorcidas y de color verde azulado."
        ] },
        { rasgo: "Piñas", valores: [
          "Largas y colgando de las ramas.",
          "Erguidas sobre las ramas; se deshacen al madurar.",
          "Pequeñas, ovaladas y casi erguidas.",
          "Ovaladas, con escamas leñosas."
        ] },
        { rasgo: "Corteza", valores: [
          "Escamosa, rojiza.",
          "Lisa y grisácea, con ampollas de resina.",
          "Gris rojiza con grietas.",
          "Naranja-rojiza en la parte alta del tronco."
        ] },
        { rasgo: "Pista decisiva", clave: true, valores: [
          "Agujas que pinchan y piñas colgantes.",
          "Dos rayas blancas bajo la aguja y piñas erguidas.",
          "Pierde las agujas en invierno (es caduca).",
          "Agujas en parejas y tronco rojizo arriba."
        ] }
      ]
    },

    {
      titulo: "Hojas compuestas (en pluma)",
      porQue: "Estas tres tienen hojas en pluma y frutos que se parecen. Se distinguen por las yemas, el número de folíolos y el tipo de fruto.",
      especies: ["Fraxinus excelsior", "Sorbus aucuparia", "Sambucus racemosa"],
      filas: [
        { rasgo: "Hojas", valores: [
          "Compuestas, con 9 a 13 folíolos (uno al final) y dientes finos.",
          "Compuestas, con muchos folíolos dentados.",
          "Compuestas, con 5 a 7 folíolos."
        ] },
        { rasgo: "Yemas o ramas", valores: [
          "Yemas negras, grandes y opuestas en la rama.",
          "Yemas negras aterciopeladas y alternas.",
          "Médula blanca grande dentro de la rama."
        ] },
        { rasgo: "Frutos", valores: [
          "Sámaras (con alas) que cuelgan en racimo.",
          "Bayas rojo-naranja en racimo plano.",
          "Bayas rojas en racimo cónico."
        ] },
        { rasgo: "Pista decisiva", clave: true, valores: [
          "Sámaras colgantes y yemas negras.",
          "Racimo plano de bayas naranjas.",
          "Racimo cónico rojo y médula grande."
        ] }
      ]
    }
  ],

  sinParecidos: [
    { sci: "Viscum album", nota: "Una bola de ramas que vive sobre otros árboles, con bayas blancas. No se confunde con ninguna otra planta de la lista." }
  ]
};
