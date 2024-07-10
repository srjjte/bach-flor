const flowers = [
    {
        name: "Rock rose  (no puedo, me da pánico hacer...)",
        emotions: [
            "Pánico paralizante",
            "estados de inconciencia y coma",
            "síndrome de abstinencia en algunas drogas",
            "pesadillas",
            "pánico escénico",
            "ansiedad",
            "ataques de pánico",
            "fobias",
            "miedo en animales y niños"
        ],
        description: "Pánico ante cosas rutinarias que evita que hagamos algo que normalmente haríamos, ( manejar, volar, cruzar la calle, un animal no peligroso etc.)"
    },
    {
        name: "Mimulus  (tengo miedo a… )",
        emotions: [
            "Enuresis",
            "miedo a ser avergonzados o juzgados por los demás",
            "niños distraídos",
            "sentimiento de inferioridad, inutilidad, idiotez al escucharse y observarse ellos mismos",
            "delirio de persecución",
            "preocupación permanente",
            "temor al hablar en publico",
            "temor a animales",
            "miedo al rechazo"
        ],
        description: "Miedo no paralizante que nos acompaña mientras realizamos cosas que comúnmente haríamos tranquilamente (manejar, volar, cruzar la calle etc.) Miedo del cual se conoce a que se le teme y la razón de por qué se le teme."
    },
    {
        name: "Cherry plum (me estoy volviendo loco)",
        emotions: [
            "Miedo a volverse loco",
            "a hacer algo indebido ",
            "intentos de suicidio",
            "impulsos de hacer daño o hacerse daño a si mismo (aventarse del carro, matar a alguien, etc.)",
            "agresividad",
            "intentos de suicidio",
            "bulimia",
            "anorexia",
            "actitudes compulsivas (comprar, robar, comer, tomar, etc.)",
            "psicosis",
            "esquizofrenia"
        ],
        description: "Miedo a perder el control o pérdida de control en cualquier manifestación (física, mental, emocional o conductual)"
    },
    {
        name: "aspen (tengo temor a no sé qué)",
        emotions: [
            "Miedos sin causa ni efecto",
            "miedo a lo sobrenatural",
            "angustia inexplicable",
            "ansiedad inexplicable"
        ],
        description: "Miedo a lo desconocido, o miedo sin saber por qué se le teme a algo. Es un protector del campo astral."
    },
    {
        name: "Red chestnut (y si le pasa algo a…)",
        emotions: [
            "Temor de que a un ser querido le ocurra la misma desgracia que a otro",
            "personas posesivas por miedo a despegarse del ser querido y que le ocurra algo malo",
            "padres sobreprotectores por miedo a dejar en peligro a sus hijos",
            "salvadores del mundo",
            "personas que se contagian de los sentimientos ajenos"
        ],
        description: "Miedo a lo que le pueda ocurrir a los seres queridos, preocupación en exceso por los demás."
    },
    {
        name: "cerato (tú qué opinas)",
        emotions: [
            "Inseguridad para emprender o decidir algoduda en sí mismo",
            "inseguridad de si son buenos en algo",
            "gente influenciable a caer en vicios o conductas destructivas",
            "demasiada importancia por lo que los demás piensen"
        ],
        description: "Falta de confianza en sí mismos para tomar decisiones, necesitan el consejo o aprobación de alguien más para convencerse de que están bien. Gente que siempre pide el consejo de los demás antes de hacer algo."
    },
    {
        name: "Scleranthus ( voy o no voy)",
        emotions: [
            "Gente indecisa",
            "bipolaridad",
            "pasar de diarrea a estreñimiento",
            "gente extremista todo lo ve negro o blanco",
            "menopausia",
            "adolescencia",
            "síndrome premenstrual",
            "descoordinación (niños, ancianos)",
            "infidelidad",
            "emociones encontradas (si mejor no, te quiero, ya no. Voy , no voy etc.)",
            "confusión"
        ],
        description: "Dificultad para decidir entre 2 opciones, sin buscar consejo de los demás, ayuda a que todas las funciones se produzcan adecuadamente."
    },
    {
        name: "Gentian (no puedo, no resultará bien)",
        emotions: [
            "Niños que se desaniman fácilmente",
            "gente que se da por vencida ante una situación o enfermedad",
            "gente que todo lo ve gris alta de fe después de un contratiempo",
            "no creen que tengan solución",
            "depresión",
            "desanimo",
            "gente que siempre espera lo peor",
            "evitan hacer cosas por temor a que resulten mal"
        ],
        description: "Pesimistas Para los que se desaniman fácilmente, pesimistas escépticos, negativos. Creen que todo lo que hagan le saldrá mal se desanima antes de hacerlo. Es bueno al final de un tratamiento."
    },
    {
        name: "Gorse (ya nada puede mejorar)",
        emotions: [
            "Para gente que se resigna a vivir mal",
            "creen que es lo que dios y el destino les preparo",
            "gente que piensa que ya no puede hacer nada ante su situación",
            "se preparan para sufrir",
            "creen que ningún tratamiento medico resultara",
            "falta de fé",
            "enfermos de muerte resignados a morir Cansados de luchar"
        ],
        description: "Sin fe Falta de interés en el presente, para una enorme desesperanza, resignación."
    },
    {
        name: "Hornbeam (me da flojera mejor mañana)",
        emotions: [
            "Gente floja",
            "deprimidos",
            "cansancio antes de hacer cualquier cosa que no cause placer (bañarse, trabajar, etc.)",
            "gente que no disfruta de sus labores",
            "cansados de la rutina"
        ],
        description: "Para los desganados, gente que se siente sin ánimos de levantarse o de vivir"
    },
    {
        name: "Wild oat  (como que algo me falta)",
        emotions: [
            "Vacío existencial",
            "crisis de los 30,40,50 ",
            "ancianos",
            "gente que siempre esta en cursos de algo",
            "nada los llena",
            "sentimiento de estancado",
            "gente que no trabaja en lo que quiere"
        ],
        description: "Incapacidad para decidir la vocación, no encuentran sentido a su vida.  Es buen en un diagnostico de demasiadas flores mejor dar este remedio."
    },
    {
        name: "Clematis (ando como en la luna)",
        emotions: [
            "Gente que se evade del sufrimiento",
            "cruda",
            "desvelo",
            "desmayos",
            "estados de coma",
            "desconexión o muerte de alguna parte del cuerpo extremidades u órganos",
            "diabetes",
            "esclerosis múltiple",
            "parálisis facial o cerebral",
            "autismo"
        ],
        description: "Para los que viven el la luna, desconectados del presente, viven en el futuro esperando tiempos mejores."
    },
    {
        name: "Honey suckle (me acuerdo cuando... El pasado se hace presente)",
        emotions: [
            "Gente que no acepta que el tiempo paso, gente que se estanca en su tiempo de juventud",
            "cuando el pasado se hace presente atormentando",
            "traumas del pasado",
            "rupturas afectivas para dejarlas en el pasado",
            "desapego",
            "gente que extraña a sus muertos",
            "gente que se siente culpable por los errores del pasado (junto a pine)"
        ],
        description: "Gente que vive en el pasado, añorando, siempre hablan del pasado. Evita regresar al pasado o a acciones y relaciones del pasado. Recaidas, codependencia, cambios de rutina, cambios en general. "
    },
    {
        name: "Wild rose  (ya me da lo mismo)",
        emotions: [
            "No expresan sentimientos buenos ni malos",
            "resignado a sufrir",
            "depresión severa",
            "bloqueos emocionales (protección contra sufrimiento)",
            "evadir el presente para no afrontarlo",
            "gente aparentemente fría "
        ],
        description: "Resignados a no luchar, no se quejan. Apáticos indiferentes todo les da igual."
    },
    {
        name: "Olive (estoy agotado ya no puedo mas)",
        emotions: [
            "Después de: Exceso de esfuerzo físico o mental",
            "exceso de sufrimiento",
            "estrés",
            "Adictos al trabajo (para que acepten que necesitan descanso)"
        ],
        description: "Agotamiento crónico, como sin pilas, agotamiento físico y mental."
    },
    {
        name: "White chestnut (no puedo dejar de pensar)",
        emotions: [
            "Angustia mental",
            "ansiedad",
            "culpas (junto con pine)",
            "remordimientos (junto con pine)",
            "sonidos agudos en los oídos",
            "ataque de hipo",
            "no poder dejar de pensar"
        ],
        description: "Pensamientos recurrentes siempre negativos o angustiantes."
    },
    {
        name: "Mustard (me siento tan triste)",
        emotions: [
            "Tristeza explicable y no explicable",
            "Tristeza que va y viene"
        ],
        description: "Mustard es para la depresión y la tristeza profunda que aparece sin una causa aparente. Ayuda a disipar la oscuridad emocional y a recuperar la alegría."
    },
    {
        name: "Chestnut Bud (tropecé de nuevo con la misma piedra)",
        emotions: [
            "Enfermedades crónicas",
            "problemas de vista",
            "problemas de digestión",
            "enfermedades que regresan",
            "adictos que recaen con honey suckle",
            "niños con problemas de aprendizaje",
            "entienden mal las cosas",
            "regresar con la misma pareja después de ser maltratado",
            "para los que demoran en aprender la lección",
            "tics nerviosos (repetición de conducta negativa o dañina)"
        ],
        description: "Para los que siempre repiten los mismos errores en su trabajo, pareja o vida en general: cualquier sentimiento o actitud que se repita. "
    },
    {
        name: "Wáter violet (yo puedo solo)",
        emotions: [
            "Se creen superiores que los demás",
            "no compasivo nunca se pone en el lugar de los demás",
            "no pide ayuda o favores",
            "indiferentes",
            "antisociales",
            "autismo (junto con clematis y agrimoni)"
        ],
        description: "Orgullosos, indiferentes no siguen ordenes, no aceptan sus errores."
    },
    {
        name: "Impatiens (como me desespera que)",
        emotions: [
            "Viven de prisa",
            "quieren todo a su tiempo y manera",
            "prefiere hacer todo solo para que sea como lo quiere exactamente",
            "impaciente en todos los aspectos",
            "todo le desespera",
            "taquicardias",
            "expresiones de estrés"
        ],
        description: "Impatiens es para la impaciencia y la irritabilidad, para aquellos que se frustran con la lentitud de los demás. Ayuda a desarrollar la paciencia y la comprensión."
    },
    {
        name: "Heather (yo, yo, yo)",
        emotions: [
            "Necesidad de llamar la atención y sobresalir",
            "interrumpen para hablar de ellos mismos",
            "personas estrafalarias",
            "egoístas"
        ],
        description: "Muy parecida a chicory con la diferencia de que heather es egocéntrico de si mismo victima aislado y chicory es egocéntrico  posesivo de los demás, metiche y chantajista; les gusta llamar la atención, solo hablan de ellos mismos"
    },
    {
        name: "Agrimony (noo, si no pasa nada yo estoy bien)",
        emotions: [
            "Parecen siempre felices",
            "no expresa sus problemas los niega",
            "se mantiene ocupado en eventos o fiestas",
            "evaden el dolor",
            "propensos a las adicciones",
            "fiesteros descontrolados",
            "excesivos en sexo, fiestas alcohol, riesgos",
            "indiferentes",
            "fríos",
            "emociones reprimidas"
        ],
        description: "Agrimony es para aquellos que ocultan su ansiedad y preocupación detrás de una fachada alegre y despreocupada. Ayuda a enfrentar y expresar las emociones reales."
    },
    {
        name: "Centaury (codependencia, dejar malos habitos, te ayudo, te compre, te traigo? Etc.)",
        emotions: [
            "debilidad de carácter",
            "sumisión",
            "dificultad para decir no"
        ],
        description: "Para los que siempre quieren servir  los demás para ser aceptados, ayuda contra la codependencia."
    },
    {
        name: "Walnut (si tu dices que si …. Pues si)",
        emotions: [
            "Personas que cambian de opinión ante comentarios ajenos (dejar un trabajo, no comprar algo etc.)",
            "les preocupa demasiado lo que opinen los demás",
            "adaptación a algún cambio",
            "pubertad",
            "embarazo",
            "menopausia",
            "adaptación en cualquier cambio",
            "hemorragias reglas abundantes",
            "protección contra influencias extremas",
            "influenciables",
            "chantajeables"
        ],
        description: "Personas que dudan de si mismos y sus decisiones ante los comentarios y opiniones de los demás."
    },
    {
        name: "Holly (lo odioo)",
        emotions: [
            "odio",
            "envidia",
            "celos",
            "ira",
            "venganza",
            "rencor",
            "coraje",
            "niños y animales agresivos",
            "empleo de violencia física",
            "gente golpeadora"
        ],
        description: "Perdida de control con acción agresiva activa."
    },
    {
        name: "Larch (no soy útil, no se si puedo)",
        emotions: [
            "Sentimiento de inferioridad",
            "baja autoestima",
            "se sienten incapaz",
            "se aferran a las cosas negativas que ya les pasaron",
            "creen no estar listos o preparados"
        ],
        description: "Larch es para la falta de confianza en uno mismo y el miedo al fracaso. Ayuda a desarrollar la autoestima y la creencia en las propias capacidades."
    },
    {
        name: "Pine (es mi culpa, fui malo, me lo merezco)",
        emotions: [
            "Niños muy regañados por sus errores y no valorados sus logros",
            "niños nerviosos se  culpables por equivocarse tanto",
            "creen que deben castigarse",
            "creen que no merecen ser felices",
            "creen que deben hacerse responsables de demasiado",
            "creen que merecen ser maltratados",
            "buscan ser perfectos",
            "se flagelan por los errores cometidos",
            "sentimiento de culpabilidad sin razón",
            "culpas oculta de otras vidas"
        ],
        description: "Sentimiento de culpa, debe ser acompañada de chestnut bud."
    },
    {
        name: "Elm (no puedo con todo)",
        emotions: [
            "Demasiado responsables",
            "perfeccionistas",
            "controladores prefieren hacer todo ellos para asegurarse  que salga bien",
            "se consideran imprescindibles",
            "muy profesionales",
            "se sienten culpables si descansan",
            "se exigen demasiado",
            "siempre están demasiado ocupados",
            "obsesivos",
            "ansiedad por que las cosas no salgan como quiere",
            "no se adaptan a los cambios",
            "siempre siguen las reglas al pie de la letra",
            "tratan de demostrar a los demás lo buenos que son",
            "no se permite equivocarse",
            "dolores fuertes",
            "esquizofrenia y psicosis (reorganiza la mente)"
        ],
        description: "Para aquellos que hacen lo que deben pero se sienten muy atareados, no se organizan en el trabajo toman muchas responsabilidades a la ves, creen que su trabajo es muy difícil, es bueno combinarlo con pine y walnut."
    },
    {
        name: "Sweet chestnut (ya no puedo mas)",
        emotions: [
            "Duelo de muertos (Junto con rescate)",
            "sufrimiento y angustia insoportable",
            "cuando ya no hay fuerzas ni para llorar ni sufrir",
            "muerte de familiares"
        ],
        description: "Angustia y desesperación profunda."
    },
    {
        name: "Star of bethlehmen (no por dios)",
        emotions: [
            "Malas noticias",
            "muertes de seres queridos",
            "sustos fuertes",
            "situaciones traumáticas (violaciones, muertes, accidentes, maltratos, etc.)",
            "mala situación económica angustiante",
            "relaciones tormentosas de pareja",
            "desempleo prolongado",
            "golpes, heridas , torceduras, fracturas",
            "traumas emocionales, psíquicos, metales",
            "enfermedades que se resisten al tratamiento",
            "cólicos de riñón o menstruales",
            "rigidez muscular",
            "antes y después  de una operación",
            "antes de un examen prueba o entrevista que causa angustia",
            "ayuda Reaparición de un talento olvidado"
        ],
        description: "Trauma post shock secuelas traumáticas consientes o inconscientes."
    },
    {
        name: " Willow (por que a mi si no me lo merezco. Si yo estoy mal, ¿por qué los demás están bien?)",
        emotions: [
            "Irritabilidad",
            "mal humor",
            "resentidos se quejan de su mala suerte",
            "siente que la vida es injusta con el",
            "no acepta su responsabilidad en lo que le ocurre u ocurrió",
            "cree que la vida y todos le deben algo",
            "huraño",
            "depresivo",
            "amargado",
            "negativo",
            "mezquino",
            "desconfiado",
            "desagradecido cree que todo lo merece como pago de la vida por lo mal que le va",
            "mártir",
            "envidioso de la felicidad de los demás",
            "malvado",
            "enojado con la vida",
            "hipocondriaco",
            "gastritis",
            "problemas hepáticos y de la piel",
            "enojados con dios",
            "fuegos labiales",
            "les gusta apagar la alegría de los demás ya que les produce envidia"
        ],
        description: "Para otorgar el perdón, para quienes no aceptan lo que han vivido sin quejarse sienten resentimiento amargados, victimas, culpan a los demás de lo que les ocurre."
    },
    {
        name: "Oak (aunque este cansado)",
        emotions: [
            "Perfeccionista medio",
            "no descansa",
            "teme mostrarse vulnerable o débil",
            "no obedece las señales de su cuerpo de estar agotado",
            "se exige demasiado",
            "detestan reconocer sus errores",
            "demasiado organizados",
            "rutina perfecta",
            "quiere ser el papa o mama amigo o trabajador perfecta la persona perfecta",
            "su trabajo es su vida",
            "estrictos",
            "propensos a infartos embolias o depresiones contracturas musculares",
            "cree que cualquier tipo de descanso diversión o placer carece de importancia"
        ],
        description: "Para aquellos que se esfuerzan y luchan aunque estén cansados o ya no pueda mas. Se siente demasiado responsable."
    },
    {
        name: "Crab Apple (limpiezas profundas)",
        emotions: [
            "Culpa mezclada con vergüenza",
            "violaciones",
            "sensación de suciedad interna",
            "represión sexual",
            "bilimia",
            "sentimiento de culpa por creer que se hizo algo indebido o sucio",
            "sentimiento de inferioridad por ser diferente",
            "ayuda a aceptar la imagen física propia",
            "obesidad",
            "malformación",
            "acné",
            "Sida (enfermedades venéreas)",
            "extremistas en la limpieza física y del hogar",
            "temor al cáncer",
            "enfermedades infecciosas",
            "eliminar un medicamento o droga del cuerpo",
            "limpia la mente",
            "limpiarse de algún vicio"
        ],
        description: "Sentimiento de estar sucio mentalmente, tener asco o vergüenza de si mismo. Sentimiento provocado por una acción des honrosa ayuda a limpiar a nivel físico mental espiritual y emocional "
    },
    {
        name: "Chicory (si yo soy tan bueno y nadie me valora lo que hago por ellos)",
        emotions: [
            "Egoísmo",
            "reclaman atención",
            "chantajistas",
            "victimas",
            "metiches",
            "codependientes",
            "niños caprichosos",
            "miedo a la soledad",
            "autocompasión",
            "culpan a los demás",
            "manipuladores",
            "emocional y explosivo",
            "quiere todo a su manera",
            "negación de sentimientos negativos",
            "criticón quejumbroso de los demás",
            "controlador",
            "la suegra metiche y perfecta",
            "don perfecto",
            "dan para reclamar y echar en cara",
            "amenazas de suicidio",
            "hipocondriacos",
            "posesivos",
            "novio/a psicópata",
            "esposos controladores económica o emocionalmente",
            "varices sinusitis resfriados celulitis estreñimiento",
            "desapego afectivo"
        ],
        description: "Metiches en la vida de los demás, demasiado serviciales esperando algo a cambio, posesivos chantajistas."
    },
    {
        name: "Vervain (yo encontré el camino síganme)", 
        emotions: [
            "Se creen en el camino correcto",
            "antisocial",
            "viven al limite",
            "juzgan",
            "intolerancia a la frustración",
            "intolerantes a reglas o limites",
            "extremistas",
            "quiere cambiar a los demás",
            "desconfiado",
            "escépticos",
            "inflamación aguda",
            "fiebre",
            "erupciones",
            "sofocos",
            "comezón",
            "contracturas agudas",
            "vine (tiranos autoritarios)",
            "frustración por que los demás no son como ellos"
        ],
        description: "Manifestación máxima y exagerada de algo. Fanáticos religiosos, tratan de convencer a los demás arrastran a los demás a sus creencias, se creen dueños de la única verdad."
    },
    {
        name: "Vine (por que nadie es tan bueno como yo)",
        emotions: [
            "Ególatras",
            "necios",
            "no aceptan tus errores",
            "aprovechados del débil",
            "prepotentes",
            "orgullosos",
            "burlescos",
            "les gusta humillar",
            "niños que práctican bullying",
            "controladores",
            "celosos",
            "golpeadores",
            "rígidos",
            "abscesos",
            "quistes inflamatorios",
            "relajante muscular",
            "disfunción eréctil",
            "hipertensión arterial"
        ],
        description: "Creen que son perfectos que los demás deberían hacer lo mismo que ellos. No tienen conciencia emocional"
    },
    {
        name: "Beech (todos me tienen envidia)",
        emotions: [
            "Incomprensivos",
            "duros",
            "racistas",
            "elitistas",
            "humillantes",
            "egocéntricos",
            "criticón",
            "se cree más que los demás",
            "jefes explotadores",
            "insensibles",
            "sabelotodo",
            "falta de humildad",
            "no acepta sus errores",
            "rechazan todo aquello a lo que no se adaptan",
            "trasplantes (para evitar el rechazo al nuevo órgano)",
            "tos",
            "rinitis",
            "irritación en la piel",
            "quimioterapias"
        ],
        description: "(Rechazo a lo distinto a el) creídos perfeccionistas intolerantes."
    },
    {
        name: "Rock Water (tengo que hacerlo mejor)",
        emotions: [
            "Incapacidad para disfrutar la vida",
            "se sienten culpables",
            "autocríticos",
            "se exigen de más",
            "creen que podrían ser siempre mejores",
            "creen que lo que hacen no fue suficiente"
        ],
        description: "Para los que son demasiado exigentes consigo mismos"
    },
    {
        name:"Rescate",
        emotions: [
            "Estados de shock",
            "emergencia",
            "trauma"
        ],
        description:"n/a"
    },
    {
        name:"Hexa remei",
        emotions: [
            "Rescate con walnut"
        ],
        description:"Emergencias de adaptación para disminuir el sufrimiento y sus secuelas"
    },
    {
        name:"Hepta remei",
        emotions: [
            "Rescate-walnut-sweet chestnut"
        ],
        description:"Angustia mas profunda."
    },
    {
        name:"Tetra remei",
        emotions: [
            "Res-wal-sweet ch- elm"
        ],
        description:"Ataques de pánico."
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
        flowerEmotions.textContent = `Características: ${flower.emotions.join(', ')}`;

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
