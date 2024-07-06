const flowers = [
    {
        name: "Rock Rose",
        emotions: [
            "pánico",
            "ansiedad",
            "ataques de pánico",
            "fobias",
            "miedo en animales y niños"
        ],
        group: "Miedo"
    },
    {
        name: "Mimulus",
        emotions: [
            "miedo",
            "temor al hablar en público",
            "temor a animales",
            "miedo al rechazo"
        ],
        group: "Miedo"
    },
    {
        name: "Cherry Plum",
        emotions: [
            "miedo a perder el control",
            "impulsos agresivos",
            "intentos de suicidio",
            "bulimia",
            "anorexia"
        ],
        group: "Miedo"
    },
    {
        name: "Aspen",
        emotions: [
            "miedo a lo desconocido",
            "angustia inexplicable",
            "ansiedad inexplicable"
        ],
        group: "Miedo"
    },
    {
        name: "Red Chestnut",
        emotions: [
            "miedo por seres queridos",
            "preocupación en exceso",
            "personas posesivas"
        ],
        group: "Miedo"
    },
    {
        name: "Cerato",
        emotions: [
            "duda en sí mismo",
            "falta de confianza en su juicio",
            "dependencia en la opinión de otros"
        ],
        group: "Inseguridad"
    },
    {
        name: "Scleranthus",
        emotions: [
            "indecisión",
            "dificultad para elegir entre opciones",
            "inestabilidad emocional"
        ],
        group: "Inseguridad"
    },
    {
        name: "Gentian",
        emotions: [
            "desaliento",
            "desánimo",
            "falta de fe después de un contratiempo"
        ],
        group: "Inseguridad"
    },
    {
        name: "Gorse",
        emotions: [
            "desesperanza",
            "rendirse",
            "sensación de no tener solución"
        ],
        group: "Desesperación y abatimiento"
    },
    {
        name: "Hornbeam",
        emotions: [
            "fatiga mental",
            "cansancio ante la rutina",
            "falta de motivación"
        ],
        group: "Falta de interés en el presente"
    },
    {
        name: "Wild Oat",
        emotions: [
            "incertidumbre sobre la dirección de la vida",
            "sensación de desperdiciar su potencial",
            "insatisfacción profesional"
        ],
        group: "Inseguridad"
    },
    {
        name: "Clematis",
        emotions: [
            "soñar despierto",
            "falta de atención",
            "desconexión de la realidad"
        ],
        group: "Falta de interés en el presente"
    },
    {
        name: "Honeysuckle",
        emotions: [
            "nostalgia",
            "vivir en el pasado",
            "dificultad para adaptarse al presente"
        ],
        group: "Falta de interés en el presente"
    },
    {
        name: "Wild Rose",
        emotions: [
            "apatía",
            "resignación",
            "falta de interés por la vida"
        ],
        group: "Falta de interés en el presente"
    },
    {
        name: "Olive",
        emotions: [
            "agotamiento físico y mental",
            "falta de energía",
            "cansancio extremo"
        ],
        group: "Falta de interés en el presente"
    },
    {
        name: "White Chestnut",
        emotions: [
            "pensamientos no deseados",
            "preocupación constante",
            "insomnio por la actividad mental"
        ],
        group: "Hipersensibilidad a influencias y opiniones"
    },
    {
        name: "Mustard",
        emotions: [
            "depresión sin causa conocida",
            "tristeza profunda",
            "oscuridad emocional"
        ],
        group: "Desesperación y abatimiento"
    },
    {
        name: "Chestnut Bud",
        emotions: [
            "no aprender de los errores",
            "repetir patrones negativos",
            "falta de observación"
        ],
        group: "Falta de interés en el presente"
    },
    {
        name: "Water Violet",
        emotions: [
            "soledad",
            "aislamiento",
            "orgullo que lleva a la distancia"
        ],
        group: "Soledad"
    },
    {
        name: "Impatiens",
        emotions: [
            "impaciencia",
            "irritabilidad",
            "tensión por la rapidez"
        ],
        group: "Soledad"
    },
    {
        name: "Heather",
        emotions: [
            "autocompasión",
            "necesidad de atención",
            "hablar de sí mismo en exceso"
        ],
        group: "Soledad"
    },
    {
        name: "Agrimony",
        emotions: [
            "ansiedad oculta",
            "preocupación detrás de una fachada alegre",
            "dificultad para enfrentar conflictos"
        ],
        group: "Hipersensibilidad a influencias y opiniones"
    },
    {
        name: "Centaury",
        emotions: [
            "debilidad de carácter",
            "sumisión",
            "dificultad para decir no"
        ],
        group: "Hipersensibilidad a influencias y opiniones"
    },
    {
        name: "Walnut",
        emotions: [
            "dificultad para adaptarse a cambios",
            "influencia de otras personas",
            "protección durante transiciones"
        ],
        group: "Hipersensibilidad a influencias y opiniones"
    },
    {
        name: "Holly",
        emotions: [
            "odio",
            "envidia",
            "celos"
        ],
        group: "Hipersensibilidad a influencias y opiniones"
    },
    {
        name: "Larch",
        emotions: [
            "falta de confianza en sí mismo",
            "expectativa de fracaso",
            "sensación de inferioridad"
        ],
        group: "Inseguridad"
    },
    {
        name: "Pine",
        emotions: [
            "culpa",
            "autorreproche",
            "responsabilidad excesiva por los errores"
        ],
        group: "Desesperación y abatimiento"
    },
    {
        name: "Elm",
        emotions: [
            "abrumado por la responsabilidad",
            "temor a no poder cumplir",
            "perfeccionismo"
        ],
        group: "Desesperación y abatimiento"
    },
    {
        name: "Sweet Chestnut",
        emotions: [
            "angustia extrema",
            "desesperación total",
            "sensación de estar al límite"
        ],
        group: "Desesperación y abatimiento"
    },
    {
        name: "Star of Bethlehem",
        emotions: [
            "shock",
            "trauma",
            "dolor no resuelto"
        ],
        group: "Desesperación y abatimiento"
    },
    {
        name: "Willow",
        emotions: [
            "resentimiento",
            "amargura",
            "autocompasión"
        ],
        group: "Desesperación y abatimiento"
    },
    {
        name: "Oak",
        emotions: [
            "agotamiento por exceso de trabajo",
            "sentido del deber inquebrantable",
            "dificultad para delegar"
        ],
        group: "Desesperación y abatimiento"
    },
    {
        name: "Crab Apple",
        emotions: [
            "sensación de impureza",
            "vergüenza",
            "obsesión con los detalles"
        ],
        group: "Desesperación y abatimiento"
    },
    {
        name: "Chicory",
        emotions: [
            "posesividad",
            "manipulación emocional",
            "amor egoísta"
        ],
        group: "Hipersensibilidad a influencias y opiniones"
    },
    {
        name: "Vervain",
        emotions: [
            "exceso de entusiasmo",
            "fanatismo",
            "tensión por la pasión"
        ],
        group: "Hipersensibilidad a influencias y opiniones"
    },
    {
        name: "Vine",
        emotions: [
            "dominancia",
            "autoritarismo",
            "ambición excesiva"
        ],
        group: "Hipersensibilidad a influencias y opiniones"
    },
    {
        name: "Beech",
        emotions: [
            "intolerancia",
            "crítica constante",
            "falta de comprensión"
        ],
        group: "Hipersensibilidad a influencias y opiniones"
    },
    {
        name: "Rock Water",
        emotions: [
            "rigidez",
            "autodisciplina extrema",
            "perfeccionismo"
        ],
        group: "Hipersensibilidad a influencias y opiniones"
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

        const flowerGroup = document.createElement('p');
        flowerGroup.textContent = `Grupo: ${flower.group}`;

        flowerDiv.appendChild(flowerName);
        flowerDiv.appendChild(flowerEmotions);
        flowerDiv.appendChild(flowerGroup);

        flowerList.appendChild(flowerDiv);
    });
}

document.getElementById('search').addEventListener('input', function(event) {
    const searchTerm = removeAccents(event.target.value.toLowerCase());
    const filteredFlowers = flowers.filter(flower => 
        flower.emotions.some(emotion => removeAccents(emotion.toLowerCase()).includes(searchTerm)) ||
        removeAccents(flower.group.toLowerCase()).includes(searchTerm)
    );
    renderFlowers(filteredFlowers);
});

// Inicializar con todas las flores
renderFlowers(flowers);
