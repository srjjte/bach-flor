const flowers = [
    {
        name: "Rock Rose",
        emotions: [
            "pánico",
            "ansiedad",
            "ataques de pánico",
            "fobias",
            "miedo en animales y niños"
        ]
    },
    {
        name: "Mimulus",
        emotions: [
            "miedo",
            "temor al hablar en público",
            "temor a animales",
            "miedo al rechazo"
        ]
    },
    {
        name: "Cherry Plum",
        emotions: [
            "miedo a perder el control",
            "impulsos agresivos",
            "intentos de suicidio",
            "bulimia",
            "anorexia"
        ]
    },
    {
        name: "Aspen",
        emotions: [
            "miedo a lo desconocido",
            "angustia inexplicable",
            "ansiedad inexplicable"
        ]
    },
    {
        name: "Red Chestnut",
        emotions: [
            "miedo por seres queridos",
            "preocupación en exceso",
            "personas posesivas"
        ]
    },
    {
        name: "Cerato",
        emotions: [
            "duda en sí mismo",
            "falta de confianza en su juicio",
            "dependencia en la opinión de otros"
        ]
    },
    {
        name: "Scleranthus",
        emotions: [
            "indecisión",
            "dificultad para elegir entre opciones",
            "inestabilidad emocional"
        ]
    },
    {
        name: "Gentian",
        emotions: [
            "desaliento",
            "desánimo",
            "falta de fe después de un contratiempo"
        ]
    },
    {
        name: "Gorse",
        emotions: [
            "desesperanza",
            "rendirse",
            "sensación de no tener solución"
        ]
    },
    {
        name: "Hornbeam",
        emotions: [
            "fatiga mental",
            "cansancio ante la rutina",
            "falta de motivación"
        ]
    },
    {
        name: "Wild Oat",
        emotions: [
            "incertidumbre sobre la dirección de la vida",
            "sensación de desperdiciar su potencial",
            "insatisfacción profesional"
        ]
    },
    {
        name: "Clematis",
        emotions: [
            "soñar despierto",
            "falta de atención",
            "desconexión de la realidad"
        ]
    },
    {
        name: "Honeysuckle",
        emotions: [
            "nostalgia",
            "vivir en el pasado",
            "dificultad para adaptarse al presente"
        ]
    },
    {
        name: "Wild Rose",
        emotions: [
            "apatía",
            "resignación",
            "falta de interés por la vida"
        ]
    },
    {
        name: "Olive",
        emotions: [
            "agotamiento físico y mental",
            "falta de energía",
            "cansancio extremo"
        ]
    },
    {
        name: "White Chestnut",
        emotions: [
            "pensamientos no deseados",
            "preocupación constante",
            "insomnio por la actividad mental"
        ]
    },
    {
        name: "Mustard",
        emotions: [
            "depresión sin causa conocida",
            "tristeza profunda",
            "oscuridad emocional"
        ]
    },
    {
        name: "Chestnut Bud",
        emotions: [
            "no aprender de los errores",
            "repetir patrones negativos",
            "falta de observación"
        ]
    },
    {
        name: "Water Violet",
        emotions: [
            "soledad",
            "aislamiento",
            "orgullo que lleva a la distancia"
        ]
    },
    {
        name: "Impatiens",
        emotions: [
            "impaciencia",
            "irritabilidad",
            "tensión por la rapidez"
        ]
    },
    {
        name: "Heather",
        emotions: [
            "autocompasión",
            "necesidad de atención",
            "hablar de sí mismo en exceso"
        ]
    },
    {
        name: "Agrimony",
        emotions: [
            "ansiedad oculta",
            "preocupación detrás de una fachada alegre",
            "dificultad para enfrentar conflictos"
        ]
    },
    {
        name: "Centaury",
        emotions: [
            "debilidad de carácter",
            "sumisión",
            "dificultad para decir no"
        ]
    },
    {
        name: "Walnut",
        emotions: [
            "dificultad para adaptarse a cambios",
            "influencia de otras personas",
            "protección durante transiciones"
        ]
    },
    {
        name: "Holly",
        emotions: [
            "odio",
            "envidia",
            "celos"
        ]
    },
    {
        name: "Larch",
        emotions: [
            "falta de confianza en sí mismo",
            "expectativa de fracaso",
            "sensación de inferioridad"
        ]
    },
    {
        name: "Pine",
        emotions: [
            "culpa",
            "autorreproche",
            "responsabilidad excesiva por los errores"
        ]
    },
    {
        name: "Elm",
        emotions: [
            "abrumado por la responsabilidad",
            "temor a no poder cumplir",
            "perfeccionismo"
        ]
    },
    {
        name: "Sweet Chestnut",
        emotions: [
            "angustia extrema",
            "desesperación total",
            "sensación de estar al límite"
        ]
    },
    {
        name: "Star of Bethlehem",
        emotions: [
            "shock",
            "trauma",
            "dolor no resuelto"
        ]
    },
    {
        name: "Willow",
        emotions: [
            "resentimiento",
            "amargura",
            "autocompasión"
        ]
    },
    {
        name: "Oak",
        emotions: [
            "agotamiento por exceso de trabajo",
            "sentido del deber inquebrantable",
            "dificultad para delegar"
        ]
    },
    {
        name: "Crab Apple",
        emotions: [
            "sensación de impureza",
            "vergüenza",
            "obsesión con los detalles"
        ]
    },
    {
        name: "Chicory",
        emotions: [
            "posesividad",
            "manipulación emocional",
            "amor egoísta"
        ]
    },
    {
        name: "Vervain",
        emotions: [
            "exceso de entusiasmo",
            "fanatismo",
            "tensión por la pasión"
        ]
    },
    {
        name: "Vine",
        emotions: [
            "dominancia",
            "autoritarismo",
            "ambición excesiva"
        ]
    },
    {
        name: "Beech",
        emotions: [
            "intolerancia",
            "crítica constante",
            "falta de comprensión"
        ]
    },
    {
        name: "Rock Water",
        emotions: [
            "rigidez",
            "autodisciplina extrema",
            "perfeccionismo"
        ]
    }
];

// Función para eliminar acentos de una cadena
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

        flowerDiv.appendChild(flowerName);
        flowerDiv.appendChild(flowerEmotions);

        flowerList.appendChild(flowerDiv);
    });
}

document.getElementById('search').addEventListener('input', function(event) {
    const searchTerm = removeAccents(event.target.value.toLowerCase());
    const filteredFlowers = flowers.filter(flower => 
        flower.emotions.some(emotion => removeAccents(emotion.toLowerCase()).includes(searchTerm))
    );
    renderFlowers(filteredFlowers);
});

// Inicializar con todas las flores
renderFlowers(flowers);
