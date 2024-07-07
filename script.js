const flowers = [
    {
        name: "Rock Rose (Helianthemum)",
        emotions: [
            "pánico",
            "ansiedad",
            "ataques de pánico",
            "fobias",
            "miedo en animales y niños"
        ],
        description: "Rock Rose es útil para aquellos que experimentan pánico extremo, ataques de pánico, ansiedad, fobias o miedo intenso en animales y niños. Es especialmente beneficioso en situaciones de emergencia."
    },
    {
        name: "Mimulus (Mímulo)",
        emotions: [
            "miedo",
            "temor al hablar en público",
            "temor a animales",
            "miedo al rechazo"
        ],
        description: "Mimulus es para personas que sufren de miedos conocidos, como el miedo a hablar en público, a los animales o al rechazo. Ayuda a enfrentar los temores cotidianos con coraje."
    },
    {
        name: "Cherry Plum (Cerasifera)",
        emotions: [
            "miedo a perder el control",
            "impulsos agresivos",
            "intentos de suicidio",
            "bulimia",
            "anorexia"
        ],
        description: "Cherry Plum está indicado para aquellos que temen perder el control mental o emocional, teniendo impulsos agresivos o tendencias suicidas. También se utiliza en casos de bulimia y anorexia."
    },
    {
        name: "Aspen (Álamo temblón)",
        emotions: [
            "miedo a lo desconocido",
            "angustia inexplicable",
            "ansiedad inexplicable"
        ],
        description: "Aspen es para miedos y ansiedades vagos y desconocidos. Es útil para aquellos que sienten angustia o ansiedad sin una causa aparente."
    },
    {
        name: "Red Chestnut (Castaño Rojo)",
        emotions: [
            "miedo por seres queridos",
            "preocupación en exceso",
            "personas posesivas"
        ],
        description: "Red Chestnut es para aquellos que se preocupan excesivamente por el bienestar de sus seres queridos, temiendo constantemente por su seguridad. Es útil para personas posesivas."
    },
    {
        name: "Cerato (Ceratostigma)",
        emotions: [
            "duda en sí mismo",
            "falta de confianza en su juicio",
            "dependencia en la opinión de otros"
        ],
        description: "Cerato es para personas que dudan de sí mismas y de su propio juicio, que buscan constantemente la confirmación de otros. Ayuda a confiar en su intuición y juicio."
    },
    {
        name: "Scleranthus (Scleranthus annuus)",
        emotions: [
            "indecisión",
            "dificultad para elegir entre opciones",
            "inestabilidad emocional"
        ],
        description: "Scleranthus es útil para aquellos que sufren de indecisión y dificultad para elegir entre dos opciones. También ayuda a estabilizar las emociones."
    },
    {
        name: "Gentian (Genciana)",
        emotions: [
            "desaliento",
            "desánimo",
            "falta de fe después de un contratiempo"
        ],
        description: "Gentian es para personas que se desaniman fácilmente después de un contratiempo o dificultad. Ayuda a recuperar la fe y la perseverancia."
    },
    {
        name: "Gorse (Aulaga)",
        emotions: [
            "desesperanza",
            "rendirse",
            "sensación de no tener solución"
        ],
        description: "Gorse es para aquellos que han perdido la esperanza y se sienten desesperados, que han dejado de luchar porque creen que no hay solución. Ayuda a renovar la esperanza y la fuerza."
    },
    {
        name: "Hornbeam (Carpe)",
        emotions: [
            "fatiga mental",
            "cansancio ante la rutina",
            "falta de motivación"
        ],
        description: "Hornbeam es para la fatiga mental y la sensación de no tener energía suficiente para enfrentar el día. Es útil para aquellos que sienten que necesitan más fuerza para cumplir con sus deberes."
    },
    {
        name: "Wild Oat (Avena silvestre)",
        emotions: [
            "incertidumbre sobre la dirección de la vida",
            "sensación de desperdiciar su potencial",
            "insatisfacción profesional"
        ],
        description: "Wild Oat es para aquellos que no están seguros de la dirección que quieren tomar en la vida, que se sienten insatisfechos con su trabajo o que sienten que están desperdiciando su potencial."
    },
    {
        name: "Clematis (Clemátide)",
        emotions: [
            "soñar despierto",
            "falta de atención",
            "desconexión de la realidad"
        ],
        description: "Clematis es para aquellos que están soñando despiertos, que no están completamente presentes en la realidad. Es útil para aumentar la atención y la conexión con el presente."
    },
    {
        name: "Honeysuckle (Madreselva)",
        emotions: [
            "nostalgia",
            "vivir en el pasado",
            "dificultad para adaptarse al presente"
        ],
        description: "Honeysuckle es para aquellos que viven en el pasado, que sienten nostalgia y tienen dificultad para adaptarse al presente. Ayuda a aceptar el presente y mirar hacia el futuro."
    },
    {
        name: "Wild Rose (Rosa Silvestre)",
        emotions: [
            "apatía",
            "resignación",
            "falta de interés por la vida"
        ],
        description: "Wild Rose es para la apatía y la resignación, cuando una persona ha perdido interés por la vida y no hace esfuerzos para mejorar su situación. Ayuda a recuperar el interés y la motivación."
    },
    {
        name: "Olive (Olivo)",
        emotions: [
            "agotamiento físico y mental",
            "falta de energía",
            "cansancio extremo"
        ],
        description: "Olive es para aquellos que están completamente agotados, tanto física como mentalmente, que han gastado toda su energía. Ayuda a restaurar la vitalidad y la fuerza."
    },
    {
        name: "White Chestnut (Castaño de Indias)",
        emotions: [
            "pensamientos no deseados",
            "preocupación constante",
            "insomnio por la actividad mental"
        ],
        description: "White Chestnut es para aquellos que no pueden dejar de pensar en ciertas cosas, que tienen pensamientos no deseados y preocupaciones constantes. Ayuda a calmar la mente y a dormir mejor."
    },
    {
        name: "Mustard (Mostaza)",
        emotions: [
            "depresión sin causa conocida",
            "tristeza profunda",
            "oscuridad emocional"
        ],
        description: "Mustard es para la depresión y la tristeza profunda que aparece sin una causa aparente. Ayuda a disipar la oscuridad emocional y a recuperar la alegría."
    },
    {
        name: "Chestnut Bud (Brote de Castaño)",
        emotions: [
            "no aprender de los errores",
            "repetir patrones negativos",
            "falta de observación"
        ],
        description: "Chestnut Bud es para aquellos que no aprenden de sus errores y continúan repitiendo los mismos patrones negativos. Ayuda a tomar conciencia de los errores y a aprender de ellos."
    },
    {
        name: "Water Violet (Violeta de Agua)",
        emotions: [
            "soledad",
            "aislamiento",
            "orgullo que lleva a la distancia"
        ],
        description: "Water Violet es para aquellos que se aíslan debido a su orgullo o sentido de superioridad, que prefieren estar solos. Ayuda a abrirse y conectarse con los demás."
    },
    {
        name: "Impatiens (Impaciencia)",
        emotions: [
            "impaciencia",
            "irritabilidad",
            "tensión por la rapidez"
        ],
        description: "Impatiens es para la impaciencia y la irritabilidad, para aquellos que se frustran con la lentitud de los demás. Ayuda a desarrollar la paciencia y la comprensión."
    },
    {
        name: "Heather (Brezo)",
        emotions: [
            "autocompasión",
            "necesidad de atención",
            "hablar de sí mismo en exceso"
        ],
        description: "Heather es para aquellos que se sienten solos y buscan atención constante, que hablan mucho de sí mismos. Ayuda a desarrollar la empatía y la capacidad de escuchar a los demás."
    },
    {
        name: "Agrimony (Agrimonia)",
        emotions: [
            "ansiedad oculta",
            "preocupación detrás de una fachada alegre",
            "dificultad para enfrentar conflictos"
        ],
        description: "Agrimony es para aquellos que ocultan su ansiedad y preocupación detrás de una fachada alegre y despreocupada. Ayuda a enfrentar y expresar las emociones reales."
    },
    {
        name: "Centaury (Centaurea)",
        emotions: [
            "debilidad de carácter",
            "sumisión",
            "dificultad para decir no"
        ],
        description: "Centaury es para aquellos que son demasiado serviciales y no pueden decir no, que tienen una debilidad de carácter y son fácilmente influenciados por los demás. Ayuda a desarrollar la fuerza de voluntad y la independencia."
    },
    {
        name: "Walnut (Nogal)",
        emotions: [
            "protección contra influencias externas",
            "adaptación a cambios",
            "transiciones"
        ],
        description: "Walnut es para protegerse de influencias externas y para adaptarse a cambios y transiciones. Es útil en momentos de grandes cambios en la vida."
    },
    {
        name: "Holly (Acebo)",
        emotions: [
            "odio",
            "envidia",
            "celos",
            "ira"
        ],
        description: "Holly es para aquellos que experimentan emociones negativas intensas como odio, envidia, celos y ira. Ayuda a transformar estas emociones en amor y comprensión."
    },
    {
        name: "Larch (Alerce)",
        emotions: [
            "falta de confianza en uno mismo",
            "miedo al fracaso",
            "sentimiento de inferioridad"
        ],
        description: "Larch es para la falta de confianza en uno mismo y el miedo al fracaso. Ayuda a desarrollar la autoestima y la creencia en las propias capacidades."
    },
    {
        name: "Pine (Pino)",
        emotions: [
            "culpa",
            "autorreproche",
            "sentimientos de responsabilidad excesiva"
        ],
        description: "Pine es para la culpa y el autorreproche, para aquellos que se sienten responsables de los errores y problemas de los demás. Ayuda a liberar la culpa y a aceptar los propios errores."
    },
    {
        name: "Elm (Olmo)",
        emotions: [
            "abrumado por la responsabilidad",
            "duda temporal de capacidad",
            "sensación de incapacidad"
        ],
        description: "Elm es para aquellos que se sienten abrumados por sus responsabilidades y dudan temporalmente de su capacidad para cumplirlas. Ayuda a restaurar la confianza y la fortaleza."
    },
    {
        name: "Sweet Chestnut (Castaño Dulce)",
        emotions: [
            "angustia extrema",
            "desesperación profunda",
            "sensación de haber llegado al límite"
        ],
        description: "Sweet Chestnut es para la angustia extrema y la desesperación profunda, para aquellos que sienten que han llegado al límite de su resistencia. Ayuda a encontrar luz en la oscuridad."
    },
    {
        name: "Star of Bethlehem (Estrella de Belén)",
        emotions: [
            "shock",
            "trauma",
            "dolor"
        ],
        description: "Star of Bethlehem es para el shock y el trauma, tanto recientes como antiguos. Ayuda a consolar y aliviar el dolor emocional y físico."
    },
    {
        name: "Willow (Sauce)",
        emotions: [
            "resentimiento",
            "amargura",
            "autocompasión"
        ],
        description: "Willow es para aquellos que sienten resentimiento y amargura, que creen que la vida ha sido injusta con ellos. Ayuda a superar la autocompasión y a recuperar una actitud positiva."
    },
    {
        name: "Oak (Roble)",
        emotions: [
            "esfuerzo constante sin descanso",
            "fatiga por sobreesfuerzo",
            "falta de relajación"
        ],
        description: "Oak es para aquellos que trabajan incansablemente sin descanso, que continúan esforzándose a pesar de la fatiga. Ayuda a reconocer la necesidad de descanso y a encontrar un equilibrio."
    },
    {
        name: "Crab Apple (Manzano Silvestre)",
        emotions: [
            "sensación de impureza",
            "obsesión por detalles",
            "aversiones físicas"
        ],
        description: "Crab Apple es para aquellos que sienten una sensación de impureza o que están obsesionados con detalles y aversiones físicas. Ayuda a aceptar y purificar el cuerpo y la mente."
    },
    {
        name: "Chicory (Achicoria)",
        emotions: [
            "posesividad",
            "manipulación emocional",
            "amor egoísta"
        ],
        description: "Chicory es para aquellos que son posesivos y manipuladores emocionalmente, que muestran un amor egoísta. Ayuda a desarrollar el amor incondicional y el desinterés."
    },
    {
        name: "Vervain (Verbena)",
        emotions: [
            "exceso de entusiasmo",
            "fanatismo",
            "tensión por la pasión"
        ],
        description: "Vervain es para aquellos que tienen un exceso de entusiasmo y que pueden ser fanáticos o tensos por su pasión. Ayuda a moderar el entusiasmo y a encontrar la calma."
    },
    {
        name: "Vine (Vid)",
        emotions: [
            "dominancia",
            "autoritarismo",
            "ambición excesiva"
        ],
        description: "Vine es para aquellos que son dominantes y autoritarios, que tienen una ambición excesiva. Ayuda a desarrollar el liderazgo positivo y la compasión."
    },
    {
        name: "Beech (Haya)",
        emotions: [
            "intolerancia",
            "crítica constante",
            "falta de comprensión"
        ],
        description: "Beech es para aquellos que son intolerantes y críticos, que tienen dificultad para comprender a los demás. Ayuda a desarrollar la tolerancia y la empatía."
    },
    {
        name: "Rock Water (Agua de Roca)",
        emotions: [
            "rigidez",
            "autodisciplina extrema",
            "perfeccionismo"
        ],
        description: "Rock Water es para aquellos que son muy rígidos y que tienen una autodisciplina extrema, que buscan la perfección. Ayuda a ser más flexibles y a aceptar la imperfección."
    }
];

function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function renderFlowers(flowers) {
    const flowerList = document.getElementById('flower-list');
    flowerList.innerHTML = '';

    flowers.forEach(flower => {
        const flowerDiv = document.createElement('div');
        flowerDiv.classList.add('flower');
        
        const flowerName = document.createElement('h2');
        flowerName.textContent = flower.name;

        const flowerEmotions = document.createElement('p');
        flowerEmotions.textContent = `Emociones: ${flower.emotions.join(', ')}`;

        const flowerDescription = document.createElement('p');
        flowerDescription.textContent = `Descripción: ${flower.description}`;

        flowerDiv.appendChild(flowerName);
        flowerDiv.appendChild(flowerEmotions);
        flowerDiv.appendChild(flowerDescription);

        flowerList.appendChild(flowerDiv);
    });
}

document.getElementById('search').addEventListener('input', function(event) {
    const searchTerm = removeAccents(event.target.value.toLowerCase());
    const filteredFlowers = flowers.filter(flower => 
        removeAccents(flower.name.toLowerCase()).includes(searchTerm) ||
        flower.emotions.some(emotion => removeAccents(emotion.toLowerCase()).includes(searchTerm)) ||
        removeAccents(flower.description.toLowerCase()).includes(searchTerm)
    );
    renderFlowers(filteredFlowers);
});

// Inicializar con todas las flores
renderFlowers(flowers);
